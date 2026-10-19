"""
URLs для HTML-страниц (шаблоны).
"""
from django.urls import path
from . import views_pages

urlpatterns = [
    path('', views_pages.home, name='home'),
    path('menu/', views_pages.menu, name='menu'),
    path('menu/<slug:category_slug>/', views_pages.menu_category, name='menu_category'),
    path('product/<slug:slug>/', views_pages.product_detail, name='product_detail'),
    path('cart/', views_pages.cart, name='cart'),
    path('checkout/', views_pages.checkout, name='checkout'),
    path('about/', views_pages.about, name='about'),
    path('delivery/', views_pages.delivery, name='delivery'),
    path('order/<int:order_id>/', views_pages.order_detail, name='order_detail'),
]
