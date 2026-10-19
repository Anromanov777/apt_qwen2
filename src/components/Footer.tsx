export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍣</span>
              <h3 className="text-xl font-bold">Роллы & Пицца</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Свежие роллы и вкусная пицца с доставкой на дом. Готовим с любовью с 2020 года.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold mb-4">Меню</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><span className="hover:text-white cursor-pointer transition">Роллы</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Пицца</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Наборы</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Напитки</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Соусы</span></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><span className="hover:text-white cursor-pointer transition">О нас</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Доставка и оплата</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Акции</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Контакты</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Вакансии</span></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+79991234567" className="hover:text-white transition">+7 (999) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@rolls-pizza.ru" className="hover:text-white transition">info@rolls-pizza.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>ул. Центральная, 42</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Ежедневно 10:00 - 23:00</span>
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <span className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition">
                📱
              </span>
              <span className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition">
                💬
              </span>
              <span className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition">
                📷
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Роллы & Пицца. Все права защищены.</p>
          <p className="mt-1">Сделано с ❤️ для любителей вкусной еды</p>
        </div>
      </div>
    </footer>
  );
}
