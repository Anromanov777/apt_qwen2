import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cash',
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки заказа на сервер (AJAX)
    console.log('Order submitted:', { items, total: totalPrice, ...formData });
    setStep('success');
    clearCart();
  };

  const handleClose = () => {
    setStep('form');
    setFormData({ name: '', phone: '', address: '', payment: 'cash', comment: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {step === 'form' ? (
          <>
            <div className="p-6 border-b bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-t-2xl">
              <h2 className="text-2xl font-bold">Оформление заказа</h2>
              <p className="text-orange-200 text-sm mt-1">
                {items.length} позиций на сумму {totalPrice} ₽
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Адрес доставки *
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  rows={2}
                  placeholder="ул. Примерная, д. 1, кв. 1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Способ оплаты
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer transition ${formData.payment === 'cash' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.payment === 'cash'}
                      onChange={e => setFormData({ ...formData, payment: e.target.value })}
                      className="text-red-500"
                    />
                    <span className="text-sm">💵 Наличные</span>
                  </label>
                  <label className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer transition ${formData.payment === 'card' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === 'card'}
                      onChange={e => setFormData({ ...formData, payment: e.target.value })}
                      className="text-red-500"
                    />
                    <span className="text-sm">💳 Карта</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Комментарий
                </label>
                <textarea
                  value={formData.comment}
                  onChange={e => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  rows={2}
                  placeholder="Пожелания к заказу..."
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Подтвердить
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Заказ оформлен!</h2>
            <p className="text-gray-600 mb-2">
              Спасибо за ваш заказ, {formData.name}!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Мы свяжемся с вами по номеру {formData.phone} для подтверждения.
              <br />Ожидайте доставку в течение 60 минут.
            </p>
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:from-red-600 hover:to-orange-600 transition-all"
            >
              Отлично!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
