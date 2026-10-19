export default function DeliveryPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Доставка и оплата</h2>
        <p className="text-gray-500">Всё, что нужно знать о доставке</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Delivery Info */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            🚗 Доставка
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Бесплатная доставка при заказе от 1000 ₽</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Стоимость доставки до 1000 ₽ — 200 ₽</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Время доставки: 40-60 минут</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Зона доставки: в пределах города</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Минимальная сумма заказа: 500 ₽</span>
            </li>
          </ul>
        </div>

        {/* Payment Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            💳 Оплата
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Наличными курьеру при получении</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Банковской картой курьеру (терминал)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Онлайн-оплата картой на сайте</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Apple Pay / Google Pay</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Безналичный расчёт для юр. лиц</span>
            </li>
          </ul>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Как сделать заказ?</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', icon: '📱', title: 'Выберите блюда', desc: 'Добавьте понравившиеся позиции в корзину' },
            { step: '2', icon: '📝', title: 'Оформите заказ', desc: 'Укажите адрес и контактные данные' },
            { step: '3', icon: '👨‍🍳', title: 'Готовим', desc: 'Наш повар начнёт готовить ваш заказ' },
            { step: '4', icon: '🎉', title: 'Доставляем', desc: 'Курьер привезёт горячую еду к вашей двери' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold shadow-lg">
                {item.step}
              </div>
              <span className="text-3xl block mb-2">{item.icon}</span>
              <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
        <p className="text-gray-400 mb-6">Свяжитесь с нами любым удобным способом</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:+79991234567" className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full hover:bg-white/20 transition">
            <span>📞</span>
            <span>+7 (999) 123-45-67</span>
          </a>
          <a href="mailto:info@rolls-pizza.ru" className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full hover:bg-white/20 transition">
            <span>✉️</span>
            <span>info@rolls-pizza.ru</span>
          </a>
          <span className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full">
            <span>📍</span>
            <span>ул. Центральная, 42</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-4">Работаем ежедневно с 10:00 до 23:00</p>
      </div>
    </section>
  );
}
