"""
Serializers для REST API.
"""
from rest_framework import serializers
from .models import Product, Category, Order, OrderItem, PromoCode


class CategorySerializer(serializers.ModelSerializer):
    products_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'icon', 'order', 'products_count']

    def get_products_count(self, obj):
        return obj.products.filter(is_available=True).count()


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    discount_percent = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'description', 'price', 'old_price',
            'category', 'category_name', 'image', 'weight',
            'is_popular', 'is_available', 'discount_percent',
            'created_at', 'updated_at'
        ]


class ProductListSerializer(serializers.ModelSerializer):
    """Лёгкий сериализатор для списка"""
    category_name = serializers.CharField(source='category.name', read_only=True)
    discount_percent = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'price', 'old_price',
            'image', 'weight', 'is_popular', 'category_name', 'discount_percent'
        ]


class OrderItemSerializer(serializers.ModelSerializer):
    product_detail = ProductListSerializer(source='product', read_only=True)
    total_price = serializers.ReadOnlyField()

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_detail', 'product_name', 'price', 'quantity', 'total_price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    total_price = serializers.ReadOnlyField()

    class Meta:
        model = Order
        fields = [
            'id', 'name', 'phone', 'address', 'email',
            'payment_method', 'status', 'comment',
            'total_price', 'delivery_cost', 'promo_code',
            'items', 'created_at', 'updated_at'
        ]
        read_only_fields = ['status', 'total_price', 'delivery_cost', 'created_at', 'updated_at']


class OrderCreateSerializer(serializers.ModelSerializer):
    """Сериализатор для создания заказа"""
    items = serializers.ListField(child=serializers.DictField(), write_only=True)

    class Meta:
        model = Order
        fields = ['name', 'phone', 'address', 'email', 'payment_method', 'comment', 'promo_code', 'items']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)

        for item_data in items_data:
            product = Product.objects.get(id=item_data['product_id'])
            OrderItem.objects.create(
                order=order,
                product=product,
                product_name=product.name,
                price=product.price,
                quantity=item_data['quantity']
            )

        order.calculate_total()
        return order


class PromoCodeSerializer(serializers.ModelSerializer):
    is_valid = serializers.ReadOnlyField()

    class Meta:
        model = PromoCode
        fields = ['id', 'code', 'discount_percent', 'is_active', 'is_valid']
