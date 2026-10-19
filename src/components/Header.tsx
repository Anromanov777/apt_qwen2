import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartOpen: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ onCartOpen, currentPage, setCurrentPage }: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <span className="text-3xl">🍣</span>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">Роллы & Пицца</h1>
              <p className="text-xs text-orange-200 hidden sm:block">Доставка за 60 минут</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`font-medium transition ${currentPage === 'home' ? 'text-yellow-300' : 'hover:text-orange-200'}`}
            >
              Главная
            </button>
            <button
              onClick={() => setCurrentPage('menu')}
              className={`font-medium transition ${currentPage === 'menu' ? 'text-yellow-300' : 'hover:text-orange-200'}`}
            >
              Меню
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`font-medium transition ${currentPage === 'about' ? 'text-yellow-300' : 'hover:text-orange-200'}`}
            >
              О нас
            </button>
            <button
              onClick={() => setCurrentPage('delivery')}
              className={`font-medium transition ${currentPage === 'delivery' ? 'text-yellow-300' : 'hover:text-orange-200'}`}
            >
              Доставка
            </button>
          </nav>

          {/* Cart Button */}
          <button
            onClick={onCartOpen}
            className="relative bg-white/20 hover:bg-white/30 rounded-full p-3 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-4 mt-3 overflow-x-auto pb-1">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-sm font-medium whitespace-nowrap transition ${currentPage === 'home' ? 'text-yellow-300' : 'text-white/80'}`}
          >
            Главная
          </button>
          <button
            onClick={() => setCurrentPage('menu')}
            className={`text-sm font-medium whitespace-nowrap transition ${currentPage === 'menu' ? 'text-yellow-300' : 'text-white/80'}`}
          >
            Меню
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`text-sm font-medium whitespace-nowrap transition ${currentPage === 'about' ? 'text-yellow-300' : 'text-white/80'}`}
          >
            О нас
          </button>
          <button
            onClick={() => setCurrentPage('delivery')}
            className={`text-sm font-medium whitespace-nowrap transition ${currentPage === 'delivery' ? 'text-yellow-300' : 'text-white/80'}`}
          >
            Доставка
          </button>
        </nav>
      </div>
    </header>
  );
}
