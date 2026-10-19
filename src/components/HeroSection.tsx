interface HeroSectionProps {
  onMenuClick: () => void;
}

export default function HeroSection({ onMenuClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🍣</div>
        <div className="absolute top-20 right-20 text-7xl">🍕</div>
        <div className="absolute bottom-10 left-1/4 text-6xl">🍣</div>
        <div className="absolute bottom-20 right-1/3 text-8xl">🍕</div>
        <div className="absolute top-1/2 left-1/2 text-9xl">🍣</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
              🔥 Бесплатная доставка от 1000 ₽
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Свежие роллы
              <br />
              <span className="text-yellow-300">и вкусная пицца</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-lg">
              Готовим из свежих продуктов с любовью. Доставка за 60 минут или пицца бесплатно!
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onMenuClick}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                🍽️ Смотреть меню
              </button>
              <a
                href="tel:+79991234567"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                📞 Позвонить
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-[120px]">🍣</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-800 rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm text-center animate-bounce">
                -20%
                <br />
                <span className="text-xs">на первый</span>
              </div>
              <div className="absolute -bottom-2 -left-4 bg-white text-red-600 rounded-full px-4 py-2 font-bold text-sm shadow-lg">
                ⭐ 4.9 рейтинг
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: '1000+', label: 'Довольных клиентов' },
            { value: '60 мин', label: 'Среднее время доставки' },
            { value: '50+', label: 'Позиций в меню' },
            { value: '4.9', label: 'Средний рейтинг' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
