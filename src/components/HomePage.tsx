import { products } from '../data/products';
import ProductCard from './ProductCard';

interface HomePageProps {
  onMenuClick: () => void;
}

export default function HomePage({ onMenuClick }: HomePageProps) {
  const popularProducts = products.filter(p => p.popular);

  return (
    <>
      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">🔥 Популярные блюда</h2>
            <p className="text-gray-500 mt-1">Самые заказываемые позиции</p>
          </div>
          <button
            onClick={onMenuClick}
            className="hidden sm:block text-red-600 hover:text-red-700 font-medium transition"
          >
            Все меню →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8 sm:hidden">
          <button
            onClick={onMenuClick}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:from-red-600 hover:to-orange-600 transition"
          >
            Смотреть всё меню
          </button>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 rounded-l-full" />
          <div className="relative z-10">
            <span className="text-4xl mb-4 block">🎁</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Скидка 20% на первый заказ!</h3>
            <p className="text-purple-200 mb-6 max-w-lg">
              Используйте промокод <span className="bg-white/20 px-2 py-1 rounded font-mono">WELCOME20</span> при оформлении заказа
            </p>
            <button
              onClick={onMenuClick}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-50 transition-all hover:scale-105"
            >
              Заказать сейчас
            </button>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">Наши категории</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div
            onClick={onMenuClick}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 cursor-pointer hover:shadow-lg transition-all group"
          >
            <span className="text-6xl group-hover:scale-110 transition-transform inline-block">🍣</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Роллы</h3>
            <p className="text-gray-600 mt-2">
              Более 20 видов роллов: от классической Филадельфии до авторских сетов
            </p>
            <span className="text-red-500 font-medium mt-4 inline-block group-hover:translate-x-2 transition-transform">
              Смотреть →
            </span>
          </div>
          <div
            onClick={onMenuClick}
            className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 cursor-pointer hover:shadow-lg transition-all group"
          >
            <span className="text-6xl group-hover:scale-110 transition-transform inline-block">🍕</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Пицца</h3>
            <p className="text-gray-600 mt-2">
              Итальянская пицца на тонком тесте с разнообразными начинками
            </p>
            <span className="text-red-500 font-medium mt-4 inline-block group-hover:translate-x-2 transition-transform">
              Смотреть →
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
