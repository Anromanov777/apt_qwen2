# 🍣 Роллы & Пицца — Интернет-магазин доставки еды

Полноценный интернет-магазин кафе по продаже роллов и пицц с фронтендом на React и бэкендом на Django.

---

## 📁 Структура проекта

```
├── src/                          # React фронтенд (основная демо-версия)
│   ├── App.tsx                   # Главный компонент
│   ├── components/               # React компоненты
│   │   ├── Header.tsx            # Шапка с навигацией
│   │   ├── HeroSection.tsx       # Главный баннер
│   │   ├── HomePage.tsx          # Главная страница
│   │   ├── MenuPage.tsx          # Страница меню
│   │   ├── AboutPage.tsx         # О нас
│   │   ├── DeliveryPage.tsx      # Доставка и оплата
│   │   ├── ProductCard.tsx       # Карточка товара
│   │   ├── CartSidebar.tsx       # Боковая панель корзины
│   │   ├── CheckoutModal.tsx     # Модальное окно оформления
│   │   └── Footer.tsx            # Подвал
│   ├── context/
│   │   └── CartContext.tsx       # Контекст корзины
│   └── data/
│       └── products.ts           # Данные товаров
│
├── django_backend/               # Django бэкенд (для production)
│   ├── rolls_pizza/              # Настройки проекта
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── shop/                     # Приложение магазина
│   │   ├── models.py             # Модели БД
│   │   ├── views.py              # API Views
│   │   ├── views_pages.py        # Views для шаблонов
│   │   ├── serializers.py        # DRF Serializers
│   │   ├── urls.py               # API URLs
│   │   ├── urls_pages.py         # URLs для шаблонов
│   │   └── admin.py              # Админ-панель
│   ├── templates/                # HTML шаблоны (Bootstrap)
│   │   ├── base.html
│   │   ├── home.html
│   │   ├── menu.html
│   │   ├── cart.html
│   │   └── checkout.html
│   └── populate_db.py            # Скрипт заполнения БД
│
└── README.md
```

---

## 🚀 Запуск React фронтенда (демо-версия)

Эта версия работает полностью в браузере без сервера.

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка production-версии
npm run build
```

---

## 🖥️ Запуск Django бэкенда (production)

### Требования
- Python 3.8+
- pip

### Шаг 1: Создание виртуального окружения

```bash
cd django_backend
python -m venv venv

# Linux/Mac:
source venv/bin/activate

# Windows:
venv\Scripts\activate
```

### Шаг 2: Установка зависимостей

```bash
pip install django djangorestframework django-cors-headers Pillow
```

### Шаг 3: Создание файлов проекта

Создайте Django проект и приложение:

```bash
# Создайте проект
django-admin startproject rolls_pizza .

# Создайте приложение
python manage.py startapp shop
```

Затем скопируйте файлы из папки `django_backend/` в соответствующие места.

### Шаг 4: Создание файла `__init__.py`

```bash
touch rolls_pizza/__init__.py
touch shop/__init__.py
```

### Шаг 5: Применение миграций

```bash
python manage.py makemigrations shop
python manage.py migrate
```

### Шаг 6: Заполнение базы данных

```bash
python manage.py shell < populate_db.py
```

Или в интерактивном режиме:

```bash
python manage.py shell
>>> exec(open('populate_db.py').read())
>>> exit()
```

### Шаг 7: Создание суперпользователя

```bash
python manage.py createsuperuser
# Введите имя, email и пароль
```

### Шаг 8: Запуск сервера

```bash
python manage.py runserver 8000
```

Сервер будет доступен по адресу: http://localhost:8000

- Главная страница: http://localhost:8000/
- Меню: http://localhost:8000/menu/
- API: http://localhost:8000/api/
- Админ-панель: http://localhost:8000/admin/

---

## 📡 API Endpoints

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/products/` | Список всех товаров |
| GET | `/api/products/{id}/` | Детали товара |
| GET | `/api/products/popular/` | Популярные товары |
| GET | `/api/products/?category=rolls` | Товары по категории |
| GET | `/api/products/?search=филадельфия` | Поиск товаров |
| GET | `/api/categories/` | Список категорий |
| POST | `/api/orders/` | Создание заказа |
| GET | `/api/orders/{id}/` | Детали заказа |
| PATCH | `/api/orders/{id}/update_status/` | Обновить статус |
| POST | `/api/promo/validate/` | Проверить промокод |
| GET | `/api/cart/summary/` | Сводка корзины |

### Пример запроса создания заказа (AJAX):

```javascript
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
.then(data => console.log('Заказ создан:', data));
```

---

## 🗄️ Модели базы данных

### Category (Категория)
- name — Название
- slug — URL-слаг
- icon — Иконка (emoji)
- order — Порядок сортировки

### Product (Товар)
- name — Название
- slug — URL-слаг
- description — Описание
- price — Цена
- old_price — Старая цена (для скидки)
- category — Категория (FK)
- image — Изображение
- weight — Вес/Размер
- is_popular — Популярное
- is_available — Доступно

### Order (Заказ)
- name — Имя клиента
- phone — Телефон
- address — Адрес
- payment_method — Способ оплаты
- status — Статус
- total_price — Сумма
- delivery_cost — Стоимость доставки

### PromoCode (Промокод)
- code — Код
- discount_percent — Процент скидки
- max_uses — Макс. использований
- valid_from / valid_until — Период действия

---

## 🎨 Технологии

### Фронтенд (React версия)
- React 18 + TypeScript
- Tailwind CSS
- Context API (состояние корзины)

### Фронтенд (Django шаблоны)
- HTML5 + Bootstrap 5
- Ванильный JavaScript
- AJAX (Fetch API)
- localStorage для корзины

### Бэкенд
- Django 4.x
- Django REST Framework
- SQLite (по умолчанию)
- CORS для API

---

## 🔧 Настройка для production

1. Замените `SECRET_KEY` в `settings.py`
2. Установите `DEBUG = False`
3. Настройте `ALLOWED_HOSTS`
4. Настройте PostgreSQL вместо SQLite
5. Настройте Nginx + Gunicorn
6. Настройте SSL сертификат

```bash
# Пример с PostgreSQL
pip install psycopg2-binary

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

---

## 📱 Функциональность

- ✅ Каталог товаров с фильтрацией по категориям
- ✅ Поиск по названию и описанию
- ✅ Корзина с изменением количества
- ✅ Оформление заказа с формой
- ✅ Применение промокодов
- ✅ Расчёт стоимости доставки
- ✅ Адаптивный дизайн (mobile-first)
- ✅ Анимации и переходы
- ✅ REST API для интеграции
- ✅ Админ-панель Django
- ✅ Скрипт заполнения БД
