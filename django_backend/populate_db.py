"""
Скрипт для заполнения базы данных начальными данными.
Запуск: python manage.py shell < populate_db.py
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rolls_pizza.settings')
django.setup()

from shop.models import Category, Product, PromoCode
from django.utils import timezone
from datetime import timedelta


def populate():
    print("🔄 Начинаем заполнение базы данных...")

    # Удаляем старые данные
    Product.objects.all().delete()
    Category.objects.all().delete()
    PromoCode.objects.all().delete()
    print("🗑️ Старые данные удалены")

    # Создаём категории
    rolls_category = Category.objects.create(
        name='Роллы',
        slug='rolls',
        icon='🍣',
        order=1
    )

    pizza_category = Category.objects.create(
        name='Пицца',
        slug='pizza',
        icon='🍕',
        order=2
    )

    drinks_category = Category.objects.create(
        name='Напитки',
        slug='drinks',
        icon='🥤',
        order=3
    )

    sauces_category = Category.objects.create(
        name='Соусы',
        slug='sauces',
        icon='🫙',
        order=4
    )

    print(f"✅ Создано {Category.objects.count()} категорий")

    # Создаём роллы
    rolls_data = [
        {
            'name': 'Филадельфия',
            'slug': 'filadelfiya',
            'description': 'Нежный лосось, сливочный сыр, огурец, рис, нори',
            'price': 450,
            'weight': '250г (8 шт)',
            'is_popular': True,
        },
        {
            'name': 'Калифорния',
            'slug': 'kaliforniya',
            'description': 'Крабовое мясо, авокадо, огурец, тобико, рис',
            'price': 420,
            'weight': '240г (8 шт)',
            'is_popular': True,
        },
        {
            'name': 'Дракон',
            'slug': 'drakon',
            'description': 'Угорь, авокадо, огурец, унаги соус, кунжут',
            'price': 520,
            'weight': '280г (8 шт)',
            'is_popular': True,
        },
        {
            'name': 'Спайси лосось',
            'slug': 'spaysi-losos',
            'description': 'Острый лосось, сливочный сыр, зелёный лук',
            'price': 380,
            'weight': '230г (8 шт)',
            'is_popular': False,
        },
        {
            'name': 'Темпура ролл',
            'slug': 'tempura-roll',
            'description': 'Креветка в темпуре, авокадо, сливочный сыр',
            'price': 490,
            'weight': '260г (8 шт)',
            'is_popular': False,
        },
        {
            'name': 'Вулкан',
            'slug': 'vulkan',
            'description': 'Запечённый ролл с лососем, сливочным сыром и соусом спайси',
            'price': 470,
            'weight': '270г (8 шт)',
            'is_popular': True,
        },
        {
            'name': 'Радуга',
            'slug': 'raduga',
            'description': 'Лосось, тунец, угорь, авокадо, огурец, тобико',
            'price': 550,
            'weight': '290г (8 шт)',
            'is_popular': False,
        },
        {
            'name': 'Цезарь ролл',
            'slug': 'tsezar-roll',
            'description': 'Курица гриль, салат романо, пармезан, соус цезарь',
            'price': 410,
            'weight': '250г (8 шт)',
            'is_popular': False,
        },
    ]

    for data in rolls_data:
        Product.objects.create(category=rolls_category, **data)

    print(f"✅ Создано {len(rolls_data)} роллов")

    # Создаём пиццы
    pizza_data = [
        {
            'name': 'Маргарита',
            'slug': 'margarita',
            'description': 'Томатный соус, моцарелла, свежий базилик, оливковое масло',
            'price': 490,
            'weight': '30 см',
            'is_popular': True,
        },
        {
            'name': 'Пепперони',
            'slug': 'pepperoni',
            'description': 'Томатный соус, моцарелла, пикантная пепперони',
            'price': 550,
            'weight': '30 см',
            'is_popular': True,
        },
        {
            'name': 'Четыре сыра',
            'slug': 'chetyre-syra',
            'description': 'Моцарелла, горгонзола, пармезан, чеддер',
            'price': 590,
            'weight': '30 см',
            'is_popular': True,
        },
        {
            'name': 'Гавайская',
            'slug': 'gavayskaya',
            'description': 'Томатный соус, моцарелла, ветчина, ананасы',
            'price': 520,
            'weight': '30 см',
            'is_popular': False,
        },
        {
            'name': 'Мясная',
            'slug': 'myasnaya',
            'description': 'Томатный соус, моцарелла, бекон, ветчина, пепперони, говядина',
            'price': 650,
            'weight': '30 см',
            'is_popular': True,
        },
        {
            'name': 'Карбонара',
            'slug': 'karbonara',
            'description': 'Сливочный соус, моцарелла, бекон, шампиньоны, пармезан',
            'price': 580,
            'weight': '30 см',
            'is_popular': False,
        },
        {
            'name': 'Морская',
            'slug': 'morskaya',
            'description': 'Томатный соус, моцарелла, креветки, мидии, кальмары',
            'price': 690,
            'weight': '30 см',
            'is_popular': False,
        },
        {
            'name': 'Острая',
            'slug': 'ostraya',
            'description': 'Томатный соус, моцарелла, халапеньо, пепперони, красный лук',
            'price': 540,
            'weight': '30 см',
            'is_popular': False,
        },
    ]

    for data in pizza_data:
        Product.objects.create(category=pizza_category, **data)

    print(f"✅ Создано {len(pizza_data)} пицц")

    # Создаём напитки
    drinks_data = [
        {
            'name': 'Кока-Кола 0.5л',
            'slug': 'coca-cola',
            'description': 'Классическая газировка',
            'price': 120,
            'weight': '500 мл',
            'is_popular': True,
        },
        {
            'name': 'Морс клюквенный',
            'slug': 'mors',
            'description': 'Натуральный клюквенный морс',
            'price': 180,
            'weight': '400 мл',
            'is_popular': False,
        },
        {
            'name': 'Зелёный чай',
            'slug': 'zelenyy-chay',
            'description': 'Зелёный чай с жасмином',
            'price': 150,
            'weight': '300 мл',
            'is_popular': False,
        },
        {
            'name': 'Лимонад',
            'slug': 'limonad',
            'description': 'Домашний лимонад с мятой',
            'price': 200,
            'weight': '400 мл',
            'is_popular': True,
        },
    ]

    for data in drinks_data:
        Product.objects.create(category=drinks_category, **data)

    print(f"✅ Создано {len(drinks_data)} напитков")

    # Создаём соусы
    sauces_data = [
        {
            'name': 'Соевый соус',
            'slug': 'soevyy-sous',
            'description': 'Классический соевый соус',
            'price': 30,
            'weight': '50 мл',
            'is_popular': True,
        },
        {
            'name': 'Спайси',
            'slug': 'spaysi',
            'description': 'Острый соус спайси',
            'price': 40,
            'weight': '50 мл',
            'is_popular': False,
        },
        {
            'name': 'Унаги',
            'slug': 'unagi',
            'description': 'Сладкий соус унаги',
            'price': 50,
            'weight': '50 мл',
            'is_popular': True,
        },
        {
            'name': 'Васаби',
            'slug': 'vasabi',
            'description': 'Острый японский васаби',
            'price': 40,
            'weight': '30 г',
            'is_popular': False,
        },
    ]

    for data in sauces_data:
        Product.objects.create(category=sauces_category, **data)

    print(f"✅ Создано {len(sauces_data)} соусов")

    # Создаём промокоды
    now = timezone.now()
    PromoCode.objects.create(
        code='WELCOME20',
        discount_percent=20,
        is_active=True,
        max_uses=1000,
        valid_from=now,
        valid_until=now + timedelta(days=365),
    )

    PromoCode.objects.create(
        code='SUMMER30',
        discount_percent=30,
        is_active=True,
        max_uses=500,
        valid_from=now,
        valid_until=now + timedelta(days=90),
    )

    PromoCode.objects.create(
        code='FREEDelivery',
        discount_percent=10,
        is_active=True,
        max_uses=2000,
        valid_from=now,
        valid_until=now + timedelta(days=180),
    )

    print(f"✅ Создано {PromoCode.objects.count()} промокодов")

    # Итог
    print("\n" + "=" * 50)
    print("🎉 База данных успешно заполнена!")
    print(f"📊 Итого:")
    print(f"   - Категорий: {Category.objects.count()}")
    print(f"   - Товаров: {Product.objects.count()}")
    print(f"   - Промокодов: {PromoCode.objects.count()}")
    print("=" * 50)


if __name__ == '__main__':
    populate()
