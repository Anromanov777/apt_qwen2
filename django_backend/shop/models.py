"""
Модели для интернет-магазина кафе.
"""
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Category(models.Model):
    """Категория товаров"""
    name = models.CharField('Название', max_length=100)
    slug = models.SlugField('Слаг', unique=True)
    icon = models.CharField('Иконка (emoji)', max_length=10, default='🍽️')
    order = models.IntegerField('Порядок сортировки', default=0)
    is_active = models.BooleanField('Активна', default=True)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class Product(models.Model):
    """Товар (блюдо)"""
    CATEGORY_CHOICES = [
        ('rolls', 'Роллы'),
        ('pizza', 'Пицца'),
        ('drinks', 'Напитки'),
        ('sauces', 'Соусы'),
    ]

    name = models.CharField('Название', max_length=200)
    slug = models.SlugField('Слаг', unique=True)
    description = models.TextField('Описание')
    price = models.DecimalField(
        'Цена',
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )
    old_price = models.DecimalField(
        'Старая цена',
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='products',
        verbose_name='Категория'
    )
    image = models.ImageField('Изображение', upload_to='products/', blank=True)
    weight = models.CharField('Вес/Размер', max_length=50, blank=True)
    is_popular = models.BooleanField('Популярное', default=False)
    is_available = models.BooleanField('Доступно', default=True)
    created_at = models.DateTimeField('Создано', auto_now_add=True)
    updated_at = models.DateTimeField('Обновлено', auto_now=True)

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
        ordering = ['-is_popular', 'name']

    def __str__(self):
        return self.name

    @property
    def discount_percent(self):
        if self.old_price and self.old_price > self.price:
            return int((1 - self.price / self.old_price) * 100)
        return 0


class Order(models.Model):
    """Заказ"""
    STATUS_CHOICES = [
        ('new', 'Новый'),
        ('processing', 'В обработке'),
        ('cooking', 'Готовится'),
        ('delivering', 'Доставляется'),
        ('completed', 'Выполнен'),
        ('cancelled', 'Отменён'),
    ]

    PAYMENT_CHOICES = [
        ('cash', 'Наличные'),
        ('card', 'Карта'),
        ('online', 'Онлайн'),
    ]

    name = models.CharField('Имя клиента', max_length=200)
    phone = models.CharField('Телефон', max_length=20)
    address = models.TextField('Адрес доставки')
    email = models.EmailField('Email', blank=True)
    payment_method = models.CharField(
        'Способ оплаты',
        max_length=20,
        choices=PAYMENT_CHOICES,
        default='cash'
    )
    status = models.CharField(
        'Статус',
        max_length=20,
        choices=STATUS_CHOICES,
        default='new'
    )
    comment = models.TextField('Комментарий', blank=True)
    total_price = models.DecimalField('Сумма заказа', max_digits=10, decimal_places=2, default=0)
    delivery_cost = models.DecimalField('Стоимость доставки', max_digits=10, decimal_places=2, default=0)
    promo_code = models.CharField('Промокод', max_length=50, blank=True)
    created_at = models.DateTimeField('Создан', auto_now_add=True)
    updated_at = models.DateTimeField('Обновлён', auto_now=True)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
        ordering = ['-created_at']

    def __str__(self):
        return f"Заказ #{self.id} - {self.name}"

    def calculate_total(self):
        total = sum(item.total_price for item in self.items.all())
        if total < 1000:
            self.delivery_cost = 200
        else:
            self.delivery_cost = 0
        self.total_price = total + self.delivery_cost
        self.save()
        return self.total_price


class OrderItem(models.Model):
    """Позиция заказа"""
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='items',
        verbose_name='Заказ'
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name='Товар'
    )
    product_name = models.CharField('Название (на момент заказа)', max_length=200)
    price = models.DecimalField('Цена', max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField('Количество', default=1)

    class Meta:
        verbose_name = 'Позиция заказа'
        verbose_name_plural = 'Позиции заказа'

    def __str__(self):
        return f"{self.product_name} x{self.quantity}"

    @property
    def total_price(self):
        return self.price * self.quantity


class PromoCode(models.Model):
    """Промокод"""
    code = models.CharField('Код', max_length=50, unique=True)
    discount_percent = models.IntegerField(
        'Скидка %',
        validators=[MinValueValidator(1), MaxValueValidator(100)]
    )
    is_active = models.BooleanField('Активен', default=True)
    max_uses = models.IntegerField('Макс. использований', default=100)
    used_count = models.IntegerField('Использовано', default=0)
    valid_from = models.DateTimeField('Действует с')
    valid_until = models.DateTimeField('Действует до')
    created_at = models.DateTimeField('Создан', auto_now_add=True)

    class Meta:
        verbose_name = 'Промокод'
        verbose_name_plural = 'Промокоды'

    def __str__(self):
        return f"{self.code} (-{self.discount_percent}%)"

    @property
    def is_valid(self):
        from django.utils import timezone
        now = timezone.now()
        return (
            self.is_active and
            self.valid_from <= now <= self.valid_until and
            self.used_count < self.max_uses
        )
