"""
Views для HTML-страниц (рендеринг шаблонов).
"""
from django.shortcuts import render, get_object_or_404
from .models import Product, Category, Order


def home(request):
    """Главная страница"""
    popular_products = Product.objects.filter(is_popular=True, is_available=True)[:8]
    categories = Category.objects.filter(is_active=True)
    context = {
        'popular_products': popular_products,
        'categories': categories,
    }
    return render(request, 'home.html', context)


def menu(request):
    """Страница меню (все товары)"""
    products = Product.objects.filter(is_available=True)
    categories = Category.objects.filter(is_active=True)
    context = {
        'products': products,
        'categories': categories,
        'current_category': 'all',
    }
    return render(request, 'menu.html', context)


def menu_category(request, category_slug):
    """Страница меню по категории"""
    category = get_object_or_404(Category, slug=category_slug)
    products = Product.objects.filter(category=category, is_available=True)
    categories = Category.objects.filter(is_active=True)
    context = {
        'products': products,
        'categories': categories,
        'current_category': category_slug,
    }
    return render(request, 'menu.html', context)


def product_detail(request, slug):
    """Страница товара"""
    product = get_object_or_404(Product, slug=slug, is_available=True)
    related_products = Product.objects.filter(
        category=product.category,
        is_available=True
    ).exclude(id=product.id)[:4]
    context = {
        'product': product,
        'related_products': related_products,
    }
    return render(request, 'product_detail.html', context)


def cart(request):
    """Страница корзины"""
    return render(request, 'cart.html')


def checkout(request):
    """Страница оформления заказа"""
    return render(request, 'checkout.html')


def about(request):
    """Страница о нас"""
    return render(request, 'about.html')


def delivery(request):
    """Страница доставки"""
    return render(request, 'delivery.html')


def order_detail(request, order_id):
    """Страница заказа"""
    order = get_object_or_404(Order, id=order_id)
    context = {'order': order}
    return render(request, 'order_detail.html', context)
