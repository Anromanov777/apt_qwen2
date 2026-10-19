"""
API Views для интернет-магазина.
"""
from rest_framework import viewsets, status, filters
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from django.db.models import Q
from django.utils import timezone

from .models import Product, Category, Order, PromoCode
from .serializers import (
    ProductSerializer, ProductListSerializer,
    CategorySerializer, OrderSerializer, OrderCreateSerializer,
    PromoCodeSerializer
)


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet для товаров (только чтение)"""
    queryset = Product.objects.filter(is_available=True)
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'name', 'created_at']
    ordering = ['-is_popular', 'name']

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        return ProductSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__slug=category)

        popular = self.request.query_params.get('popular')
        if popular == 'true':
            queryset = queryset.filter(is_popular=True)

        min_price = self.request.query_params.get('min_price')
        if min_price:
            queryset = queryset.filter(price__gte=min_price)

        max_price = self.request.query_params.get('max_price')
        if max_price:
            queryset = queryset.filter(price__lte=max_price)

        return queryset

    @action(detail=False, methods=['get'])
    def popular(self, request):
        """Получить популярные товары"""
        products = self.queryset.filter(is_popular=True)[:8]
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet для категорий (только чтение)"""
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    """ViewSet для заказов"""
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return OrderCreateSerializer
        return OrderSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()

        # Применяем промокод если есть
        promo_code = request.data.get('promo_code')
        if promo_code:
            try:
                promo = PromoCode.objects.get(code=promo_code, is_active=True)
                if promo.is_valid:
                    discount = order.total_price * promo.discount_percent / 100
                    order.total_price -= discount
                    order.save()
                    promo.used_count += 1
                    promo.save()
            except PromoCode.DoesNotExist:
                pass

        output_serializer = OrderSerializer(order)
        return Response(output_serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        """Обновить статус заказа"""
        order = self.get_object()
        new_status = request.data.get('status')
        if new_status in dict(Order.STATUS_CHOICES):
            order.status = new_status
            order.save()
            return Response(OrderSerializer(order).data)
        return Response(
            {'error': 'Неверный статус'},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['POST'])
def validate_promo_code(request):
    """Проверка промокода"""
    code = request.data.get('code', '').strip().upper()
    try:
        promo = PromoCode.objects.get(code__iexact=code)
        if promo.is_valid:
            return Response({
                'valid': True,
                'discount_percent': promo.discount_percent,
                'code': promo.code,
            })
        else:
            return Response({
                'valid': False,
                'error': 'Промокод недействителен или истёк',
            })
    except PromoCode.DoesNotExist:
        return Response({
            'valid': False,
            'error': 'Промокод не найден',
        })


@api_view(['GET'])
def cart_summary(request):
    """Получить сводку корзины (для AJAX)"""
    # В реальном приложении данные корзины хранятся в сессии
    cart = request.session.get('cart', {})
    total = 0
    items = []

    for product_id, quantity in cart.items():
        try:
            product = Product.objects.get(id=product_id, is_available=True)
            item_total = float(product.price) * quantity
            total += item_total
            items.append({
                'product_id': product.id,
                'name': product.name,
                'price': float(product.price),
                'quantity': quantity,
                'total': item_total,
            })
        except Product.DoesNotExist:
            continue

    delivery_cost = 0 if total >= 1000 else 200

    return Response({
        'items': items,
        'subtotal': total,
        'delivery_cost': delivery_cost,
        'total': total + delivery_cost,
        'items_count': sum(item['quantity'] for item in items),
    })
