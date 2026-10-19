export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">О нашем кафе</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Мы — команда профессиональных поваров, которые любят своё дело и готовят с душой
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center">
          <span className="text-8xl">👨‍🍳</span>
          <h3 className="text-2xl font-bold mt-4 text-gray-800">Наша команда</h3>
          <p className="text-gray-600 mt-2">
            15 профессиональных поваров с опытом работы в лучших ресторанах
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Наша история</h3>
          <p className="text-gray-600 mb-4">
            Кафе «Роллы & Пицца» было основано в 2020 году с простой миссией — 
            доставлять вкусную и свежую еду прямо к вашему порогу.
          </p>
          <p className="text-gray-600 mb-4">
            Мы используем только свежие ингредиенты от проверенных поставщиков. 
            Наши суши-мастера прошли обучение в Японии, а повара пиццы — в Италии.
          </p>
          <p className="text-gray-600">
            За 5 лет работы мы обслужили более 50 000 довольных клиентов и получили 
            множество положительных отзывов.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: '🥬', title: 'Свежие продукты', desc: 'Ежедневные поставки ингредиентов' },
          { icon: '⚡', title: 'Быстрая доставка', desc: 'Доставим за 60 минут или быстрее' },
          { icon: '💰', title: 'Честные цены', desc: 'Лучшее соотношение цены и качества' },
          { icon: '❤️', title: 'С любовью', desc: 'Каждое блюдо готовим как для себя' },
        ].map((feature, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <span className="text-4xl">{feature.icon}</span>
            <h4 className="font-bold text-gray-800 mt-3 mb-1">{feature.title}</h4>
            <p className="text-gray-500 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Отзывы клиентов</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Анна К.', text: 'Лучшие роллы в городе! Филадельфия просто тает во рту. Доставили за 40 минут.', rating: 5 },
            { name: 'Дмитрий П.', text: 'Заказываю пиццу каждую пятницу. Всегда горячая, свежая и очень вкусная!', rating: 5 },
            { name: 'Мария С.', text: 'Отличный сервис и приятные курьеры. Еда всегда на высоте. Рекомендую!', rating: 4 },
          ].map((review, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-3">"{review.text}"</p>
              <p className="font-medium text-gray-800">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
