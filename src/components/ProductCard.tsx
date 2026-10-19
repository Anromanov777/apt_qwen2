import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      {/* Image Area */}
      <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-6 flex items-center justify-center h-40">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </span>
        {product.popular && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            🔥 Хит
          </span>
        )}
        {(product.weight || product.size) && (
          <span className="absolute bottom-3 left-3 bg-white/90 text-gray-600 text-xs px-2 py-1 rounded-full">
            {product.weight || product.size}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">
            {product.price} ₽
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
