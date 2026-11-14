import { Link } from "react-router-dom";

function CartDrawer({ cart = [], setCart, isOpen, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalPieces = cart.reduce((sum, item) => sum + item.quantity * 6, 0);

  // Increase Quantity
  const increaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartId !== cartId) return item;

        if (item.quantity >= 2) return item;

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }),
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartId !== cartId) return item;

        if (item.quantity <= 1) return item;

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }),
    );
  };

  // Remove Product
  const removeProduct = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId),
    );
  };

  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-[90]" />
      )}

      {/* Drawer */}
      <aside
        dir="rtl"
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[100] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold text-gray-900">سلة الحجز 🛒</h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-[#ca397d]"
          >
            ×
          </button>
        </div>

        {/* Products */}
        <div className="p-5 overflow-y-auto h-[calc(100%-220px)]">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-4">🛍️</p>

              <p className="text-gray-500">السلة فارغة حاليًا</p>

              <Link
                to="/models"
                onClick={onClose}
                className="inline-block mt-5 text-[#ca397d] font-semibold"
              >
                تصفح الموديلات
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4 border-b pb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{item.name}</h3>

                    <p className="text-[#ca397d] font-bold mt-2">
                      {item.price} جنيه / الثرية
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.quantity * 6} قطعة
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQuantity(item.cartId)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 rounded-lg border border-gray-300 disabled:opacity-40"
                      >
                        −
                      </button>

                      <span className="font-bold">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.cartId)}
                        disabled={item.quantity >= 2}
                        className="w-8 h-8 rounded-lg border border-[#ca397d] text-[#ca397d] disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-bold mt-3">
                      الإجمالي: {item.price * item.quantity} جنيه
                    </p>

                    <button
                      onClick={() => removeProduct(item.cartId)}
                      className="text-red-500 text-sm mt-2"
                    >
                      حذف الموديل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 right-0 w-full bg-white border-t p-5">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">إجمالي القطع</span>
            <span className="font-bold">{totalPieces} قطعة</span>
          </div>

          <div className="flex justify-between mb-4 font-bold">
            <span>الإجمالي</span>

            <span className="text-[#ca397d]">{total} جنيه</span>
          </div>

          <Link
            to="/cart"
            onClick={onClose}
            className="block text-center bg-[#ca397d] text-white py-3 rounded-xl hover:bg-[#ad2868] transition"
          >
            متابعة الحجز
          </Link>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
