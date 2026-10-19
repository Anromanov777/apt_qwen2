# 🍣 Роллы & Пицца — Интернет-магазин доставки еды

Полноценный интернет-магазин кафе по продаже роллов и пицц на **Django + Bootstrap 5 + ванильный JavaScript**.

**Без React, без Tailwind, без фронтенд-фреймворков!**

---

## 📁 Структура проекта

```
django_backend/
├── manage.py                 # Django management script
├── requirements.txt          # Python зависимости
├── populate_db.py            # Скрипт заполнения БД
│
├── rolls_pizza/              # Настройки Django проекта
│   ├── __init__.py
│   ├── settings.py           # Настройки проекта
│   ├── urls.py               # Корневые URL
│   └── wsgi.py               # WSGI конфигурация
│
├── shop/                     # Приложение магазина
│   ├── __init__.py
│   ├── models.py             # Модели БД (Category, Product, Order, etc.)
│   ├── views.py              # API Views (Django REST Framework)
│   ├── views_pages.py        # Views для HTML-шаблонов
│   ├── serializers.py        # DRF Serializers
│   ├── urls.py               # API URLs
│   ├── urls_pages.py         # URLs для шаблонов
│   └── admin.py              # Настройки админ-панели
│
└── templates/                # HTML шаблоны (Bootstrap 5)
    ├── base.html             # Базовый шаблон
    ├── home.html             # Главная страница
    ├── menu.html             # Меню с фильтрацией
    ├── cart.html             # Корзина
    ├── checkout.html         # Оформление заказа
    ├── about.html            # О нас
    ├── delivery.html         # Доставка и оплата
    ├── product_detail.html   # Страница товара
    └── order_detail.html     # Страница заказа
```

---

## 🚀 Инструкция по запуску

### Требования
- Python 3.8 или выше
- pip (менеджер пакетов Python)

### Шаг 1: Клонируйте или скачайте проект

```bash
# Перейдите в папку с Django проектом
cd django_backend
```

### Шаг 2: Создайте виртуальное окружение

```bash
# Создание виртуального окружения
python -m venv venv

# Активация (Linux/Mac):
source venv/bin/activate

# Активация (Windows):
venv\Scripts\activate
```

### Шаг 3: Установите зависимости

```bash
pip install -r requirements.txt
```

Или установите вручную:

```bash
pip install django>=4.2,<5.0
pip install djangorestframework>=3.14
pip install django-cors-headers>=4.0
pip install Pillow>=10.0
```

### Шаг 4: Создайте Django проект и приложение

```bash
# Создайте проект (точка в конце важна!)
django-admin startproject rolls_pizza .

# Создайте приложение shop
python manage.py startapp shop
```

### Шаг 5: Создайте файлы __init__.py

```bash
# Linux/Mac:
touch rolls_pizza/__init__.py
touch shop/__init__.py

# Windows (PowerShell):
New-Item -Path "rolls_pizza/__init__.py" -ItemType File
New-Item -Path "shop/__init__.py" -ItemType File

# Windows (CMD):
type nul > rolls_pizza\__init__.py
type nul > shop\__init__.py
```

### Шаг 6: Скопируйте файлы проекта

Скопируйте все файлы из папки `django_backend/` в корень проекта, заменив существующие:

- `rolls_pizza/settings.py`
- `rolls_pizza/urls.py`
- `rolls_pizza/wsgi.py`
- `shop/models.py`
- `shop/views.py`
- `shop/views_pages.py`
- `shop/serializers.py`
- `shop/urls.py`
- `shop/urls_pages.py`
- `shop/admin.py`
- `templates/` (вся папка)
- `populate_db.py`

### Шаг 7: Примените миграции

```bash
python manage.py makemigrations shop
python manage.py migrate
```

### Шаг 8: Заполните базу данных

```bash
python manage.py shell < populate_db.py
```

Или в интерактивном режиме:

```bash
python manage.py shell
```

Затем в Python консоли:

```python
exec(open('populate_db.py').read())
exit()
```

### Шаг 9: Создайте суперпользователя (опционально)

```bash
python manage.py createsuperuser
```

Следуйте инструкциям для создания администратора.

### Шаг 10: Запустите сервер разработки

```bash
python manage.py runserver 8000
```

Или для доступа с других устройств:

```bash
python manage.py runserver 0.0.0.0:8000
```

### ✅ Готово!

Откройте браузер и перейдите по адресу: **http://localhost:8000**

---

## 🌐 URLs проекта

| Страница | URL |
|----------|-----|
| Главная | http://localhost:8000/ |
| Меню | http://localhost:8000/menu/ |
| Корзина | http://localhost:8000/cart/ |
| Оформление заказа | http://localhost:8000/checkout/ |
| О нас | http://localhost:8000/about/ |
| Доставка | http://localhost:8000/delivery/ |
| API | http://localhost:8000/api/ |
| Админ-панель | http://localhost:8000/admin/ |

---

## 📡 REST API Endpoints

### Товары

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/products/` | Список всех товаров |
| GET | `/api/products/{id}/` | Детали товара |
| GET | `/api/products/popular/` | Популярные товары |
| GET | `/api/products/?category=rolls` | Товары по категории |
| GET | `/api/products/?search=филадельфия` | Поиск товаров |

### Категории

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/categories/` | Список категорий |

### Заказы

| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/api/orders/` | Создание заказа |
| GET | `/api/orders/{id}/` | Детали заказа |
| PATCH | `/api/orders/{id}/update_status/` | Обновить статус |

### Промокоды

| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/api/promo/validate/` | Проверить промокод |

### Корзина

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/cart/summary/` | Сводка корзины |

### Пример AJAX запроса (vanilla JavaScript):

```javascript
// Создание заказа
fetch('/api/orders/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify({
        name: 'Иван Иванов',
        phone: '+7 (999) 123-45-67',
        address: 'ул. Примерная, д. 1',
        payment_method: 'cash',
        items: [
            { product_id: 1, quantity: 2 },
            { product_id: 5, quantity: 1 }
        ]
    })
})
.then(response => response.json())
.then(data => console.log('Заказ создан:', data))
.catch(error => console.error('Ошибка:', error));

// Проверка промокода
fetch('/api/promo/validate/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify({
        code: 'WELCOME20'
    })
})
.then(response => response.json())
.then(data => {
    if (data.valid) {
        console.log('Скидка:', data.discount_percent, '%');
    }
});
```

---

## 🗄️ Модели базы данных

### Category (Категория)
- `name` — Название
- `slug` — URL-слаг
- `icon` — Иконка (emoji)
- `order` — Порядок сортировки
- `is_active` — Активна

### Product (Товар)
- `name` — Название
- `slug` — URL-слаг
- `description` — Описание
- `price` — Цена
- `old_price` — Старая цена (для скидки)
- `category` — Категория (ForeignKey)
- `image` — Изображение
- `weight` — Вес/Размер
- `is_popular` — Популярное
- `is_available` — Доступно

### Order (Заказ)
- `name` — Имя клиента
- `phone` — Телефон
- `address` — Адрес
- `email` — Email
- `payment_method` — Способ оплаты
- `status` — Статус (new, processing, cooking, delivering, completed, cancelled)
- `total_price` — Сумма заказа
- `delivery_cost` — Стоимость доставки
- `promo_code` — Промокод
- `comment` — Комментарий

### OrderItem (Позиция заказа)
- `order` — Заказ (ForeignKey)
- `product` — Товар (ForeignKey)
- `product_name` — Название (на момент заказа)
- `price` — Цена
- `quantity` — Количество

### PromoCode (Промокод)
- `code` — Код
- `discount_percent` — Процент скидки
- `is_active` — Активен
- `max_uses` — Макс. использований
- `used_count` — Использовано
- `valid_from` — Действует с
- `valid_until` — Действует до

---

## 🎨 Технологии

### Backend
- **Django 4.x** — веб-фреймворк
- **Django REST Framework** — REST API
- **SQLite** — база данных (по умолчанию)
- **django-cors-headers** — CORS для API

### Frontend
- **HTML5** — разметка
- **Bootstrap 5** — CSS фреймворк
- **Vanilla JavaScript** — интерактивность
- **Fetch API** — AJAX запросы
- **localStorage** — хранение корзины

---

## 🔧 Настройка для production

### 1. Настройки безопасности

Откройте `rolls_pizza/settings.py` и измените:

```python
# Замените SECRET_KEY на случайную строку
SECRET_KEY = 'your-secret-key-here-change-this'

# Отключите режим отладки
DEBUG = False

# Укажите разрешённые хосты
ALLOWED_HOSTS = ['your-domain.com', 'www.your-domain.com']
```

### 2. Используйте PostgreSQL вместо SQLite

```bash
pip install psycopg2-binary
```

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'rolls_pizza_db',
        'USER': 'postgres',
        'PASSWORD': 'your_password',
        'SECRET_KEY = 'your-secret-key-here-change-this'

# Отключите режим отладки
DEBUG = False

# Укажите разрешённые хосты
ALLOWED_HOSTS = ['your-domain.com', 'www.your-domain.com']
```

### 2. Используйте PostgreSQL вместо SQLite

```bash
pip install psycopg2-binary
```

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'rolls_pizza_db',
        'USER': 'postgres',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### 3. Соберите статические файлы

```bash
python manage.py collectstatic
```

### 4. Используйте Gunicorn + Nginx

```bash
pip install gunicorn
gunicorn rolls_pizza.wsgi:application --bind 0.0.0.0:8000
```

Пример конфигурации Nginx:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location /static/ {
        alias /path/to/your/project/staticfiles/;
    }

    location /media/ {
        alias /path/to/your/project/media/;
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 5. Настройте SSL сертификат

Используйте Let's Encrypt для бесплатного SSL:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 📱 Функциональность

### Фронтенд
- ✅ Каталог товаров с фильтрацией по категориям
- ✅ Поиск по названию и описанию
- ✅ Корзина с изменением количества (localStorage)
- ✅ Оформление заказа с формой
- ✅ Применение промокодов (AJAX)
- ✅ Расчёт стоимости доставки
- ✅ Адаптивный дизайн (mobile-first)
- ✅ Анимации и переходы
- ✅ Toast уведомления

### Бэкенд
- ✅ REST API для всех операций
- ✅ Админ-панель Django
- ✅ Скрипт заполнения БД
- ✅ Валидация данных
- ✅ Обработка промокодов
- ✅ Статусы заказов

---

## 🐛 Решение проблем

### Ошибка: "No module named 'django'"

```bash
pip install django djangorestframework django-cors-headers Pillow
```

### Ошибка: "Table doesn't exist"

```bash
python manage.py makemigrations shop
python manage.py migrate
```

### Ошибка: "Permission denied" (Linux/Mac)

```bash
chmod +x manage.py
```

### База данных пуста

```bash
python manage.py shell < populate_db.py
```

---

## 📄 Лицензия

Этот проект создан в образовательных целях. Используйте свободно!

---

## 👨‍💻 Автор

Создано с ❤️ для изучения Django и веб-разработки.

**Версия:** 1.0  
**Дата:** 2024
