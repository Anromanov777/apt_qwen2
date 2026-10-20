export default function App() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      lineHeight: '1.6'
    }}>
      <h1 style={{ color: '#dc3545', fontSize: '2.5rem', marginBottom: '10px' }}>
        🍣 Роллы & Пицца
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
        Интернет-магазин кафе на Django + Bootstrap + ванильный JavaScript
      </p>

      <div style={{
        background: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#333', marginTop: 0 }}>📁 Структура проекта</h2>
        <pre style={{
          background: '#fff',
          padding: '15px',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '0.9rem'
        }}>
{`django_backend/
├── rolls_pizza/              # Настройки Django проекта
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── shop/                     # Приложение магазина
│   ├── models.py             # Модели БД
│   ├── views.py              # API Views (DRF)
│   ├── views_pages.py        # Views для шаблонов
│   ├── serializers.py        # DRF Serializers
│   ├── urls.py               # API URLs
│   ├── urls_pages.py         # URLs для шаблонов
│   └── admin.py              # Админ-панель
├── templates/                # HTML шаблоны (Bootstrap 5)
│   ├── base.html
│   ├── home.html
│   ├── menu.html
│   ├── cart.html
│   ├── checkout.html
│   ├── about.html
│   ├── delivery.html
│   ├── product_detail.html
│   └── order_detail.html
├── populate_db.py            # Скрипт заполнения БД
├── requirements.txt
└── manage.py`}
        </pre>
      </div>

      <div style={{
        background: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#856404', marginTop: 0 }}>🚀 Инструкция по запуску</h2>
        
        <h3 style={{ color: '#333' }}>1. Перейдите в папку Django проекта</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`cd django_backend`}
        </pre>

        <h3 style={{ color: '#333' }}>2. Создайте виртуальное окружение</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`python -m venv venv

# Linux/Mac:
source venv/bin/activate

# Windows:
venv\\Scripts\\activate`}
        </pre>

        <h3 style={{ color: '#333' }}>3. Установите зависимости</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`pip install -r requirements.txt`}
        </pre>

        <h3 style={{ color: '#333' }}>4. Создайте Django проект и приложение</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`django-admin startproject rolls_pizza .
python manage.py startapp shop`}
        </pre>

        <h3 style={{ color: '#333' }}>5. Создайте файлы __init__.py</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`touch rolls_pizza/__init__.py
touch shop/__init__.py`}
        </pre>

        <h3 style={{ color: '#333' }}>6. Скопируйте файлы из django_backend/ в проект</h3>
        <p>Скопируйте все файлы из папки <code>django_backend/</code> в корень проекта, заменив существующие.</p>

        <h3 style={{ color: '#333' }}>7. Примените миграции</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`python manage.py makemigrations shop
python manage.py migrate`}
        </pre>

        <h3 style={{ color: '#333' }}>8. Заполните базу данных</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`python manage.py shell < populate_db.py`}
        </pre>

        <h3 style={{ color: '#333' }}>9. Создайте суперпользователя (опционально)</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`python manage.py createsuperuser`}
        </pre>

        <h3 style={{ color: '#333' }}>10. Запустите сервер</h3>
        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px' }}>
{`python manage.py runserver 8000`}
        </pre>

        <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#28a745' }}>
          ✅ Сервер будет доступен по адресу: http://localhost:8000
        </p>
      </div>

      <div style={{
        background: '#d1ecf1',
        border: '1px solid #bee5eb',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#0c5460', marginTop: 0 }}>🌐 URLs проекта</h2>
        <ul style={{ margin: 0 }}>
          <li><strong>Главная:</strong> http://localhost:8000/</li>
          <li><strong>Меню:</strong> http://localhost:8000/menu/</li>
          <li><strong>Корзина:</strong> http://localhost:8000/cart/</li>
          <li><strong>Оформление заказа:</strong> http://localhost:8000/checkout/</li>
          <li><strong>О нас:</strong> http://localhost:8000/about/</li>
          <li><strong>Доставка:</strong> http://localhost:8000/delivery/</li>
          <li><strong>API:</strong> http://localhost:8000/api/</li>
          <li><strong>Админ-панель:</strong> http://localhost:8000/admin/</li>
        </ul>
      </div>

      <div style={{
        background: '#e2e3e5',
        border: '1px solid #d6d8db',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#383d41', marginTop: 0 }}>📡 API Endpoints</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ background: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Метод</th>
              <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>URL</th>
              <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>GET</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}><code>/api/products/</code></td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Список товаров</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>GET</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}><code>/api/products/popular/</code></td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Популярные товары</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>POST</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}><code>/api/orders/</code></td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Создание заказа</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>POST</td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}><code>/api/promo/validate/</code></td>
              <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Проверка промокода</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        background: '#d4edda',
        border: '1px solid #c3e6cb',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#155724', marginTop: 0 }}>✨ Функциональность</h2>
        <ul style={{ margin: 0 }}>
          <li>✅ Каталог товаров с фильтрацией по категориям</li>
          <li>✅ Поиск по названию и описанию</li>
          <li>✅ Корзина с изменением количества (localStorage)</li>
          <li>✅ Оформление заказа с формой</li>
          <li>✅ Применение промокодов</li>
          <li>✅ Расчёт стоимости доставки</li>
          <li>✅ Адаптивный дизайн (Bootstrap 5)</li>
          <li>✅ AJAX запросы (vanilla JavaScript)</li>
          <li>✅ REST API (Django REST Framework)</li>
          <li>✅ Админ-панель Django</li>
          <li>✅ Скрипт заполнения БД</li>
        </ul>
      </div>

      <div style={{
        background: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <h2 style={{ color: '#333', marginTop: 0 }}>🛠️ Технологии</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div>
            <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>Backend</h4>
            <ul style={{ margin: 0, fontSize: '0.9rem' }}>
              <li>Django 4.x</li>
              <li>Django REST Framework</li>
              <li>SQLite (по умолчанию)</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#007bff', marginBottom: '10px' }}>Frontend</h4>
            <ul style={{ margin: 0, fontSize: '0.9rem' }}>
              <li>HTML5</li>
              <li>Bootstrap 5</li>
              <li>Vanilla JavaScript</li>
              <li>AJAX (Fetch API)</li>
            </ul>
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '40px', color: '#666', fontSize: '0.9rem' }}>
        © 2024 Роллы & Пицца. Все файлы проекта находятся в папке <code>django_backend/</code>
      </p>
    </div>
  );
}
