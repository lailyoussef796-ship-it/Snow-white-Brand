import { useState } from "react";

const products = [
  {
    id: 1,
    name: "تيشيرت كلاسيك",
    price: 450,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    colors: ["أبيض", "أسود", "أحمر"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "تيشيرت كاجوال",
    price: 550,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
    colors: ["أسود", "أزرق", "رمادي"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "جاكيت رياضي",
    price: 650,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    colors: ["أسود", "أبيض"],
    sizes: ["M", "L", "XL", "XXL"],
  },
];

function Models({ favorites = [], setFavorites, cart = [], setCart }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [quantities, setQuantities] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });

  // Add / Remove Favorite
  function toggleFavorite(product) {
    const isFavorite = favorites.some((item) => item.id === product.id);

    if (isFavorite) {
      setFavorites((current) =>
        current.filter((item) => item.id !== product.id),
      );
    } else {
      setFavorites((current) => [...current, product]);
    }
  }

  // Change Quantity: Maximum 2
  function changeQuantity(productId, value) {
    const quantity = Number(value);

    if (quantity > 2) {
      setMessage("الحد الأقصى للحجز من الموديل ثريتين فقط.");
      setMessageType("error");
      return;
    }

    setQuantities((current) => ({
      ...current,
      [productId]: Math.max(1, Math.min(2, quantity || 1)),
    }));

    setMessage("");
  }

  // Add Product To Cart
  function addToCart(product) {
    if (!setCart) return;

    const quantity = quantities[product.id] || 1;

    const existingProduct = cart.find((item) => item.id === product.id);

    // Check maximum quantity
    if (existingProduct && existingProduct.quantity + quantity > 2) {
      setMessage("عذرًا، لا يمكن حجز أكثر من ثريتين من نفس الموديل.");
      setMessageType("error");
      return;
    }

    if (!existingProduct && quantity > 2) {
      setMessage("الحد الأقصى للحجز من الموديل ثريتين فقط.");
      setMessageType("error");
      return;
    }

    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          cartId: `${product.id}-${Date.now()}`,
          quantity,
        },
      ];
    });

    setMessage(`تمت إضافة ${product.name} إلى السلة بنجاح 🛒`);
    setMessageType("success");
  }

  return (
    <section dir="rtl" className="min-h-screen bg-[#faf8fa] py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-[#ca397d] font-semibold tracking-widest">
          OUR COLLECTION
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
          اكتشف موديلاتنا
        </h1>

        <p className="text-gray-500 mt-4">
          اختار الموديل المناسب ليك من مجموعتنا.
        </p>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`max-w-xl mx-auto mb-8 text-center py-4 px-5 rounded-xl ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Search */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن موديل..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-4 pr-5 pl-12 outline-none focus:border-[#ca397d] transition"
          />

          <span className="absolute left-5 top-1/2 -translate-y-1/2">🔎</span>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isFavorite = favorites.some((item) => item.id === product.id);

            const currentCartProduct = cart.find(
              (item) => item.id === product.id,
            );

            const currentQuantity = currentCartProduct
              ? currentCartProduct.quantity
              : 0;

            const remainingQuantity = 2 - currentQuantity;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative h-[320px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Favorite */}
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`absolute top-4 left-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-2xl transition ${
                      isFavorite ? "text-[#ca397d]" : "text-gray-500"
                    }`}
                    aria-label="إضافة للمفضلة"
                  >
                    {isFavorite ? "♥" : "♡"}
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="text-[#ca397d] font-bold mt-3">
                    {product.price} جنيه / الثرية
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    الثرية الواحدة تحتوي على 6 قطع
                  </p>

                  {/* Colors */}
                  <div className="mt-5">
                    <p className="text-sm font-semibold mb-2">
                      الألوان المتاحة
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold mb-2">
                      المقاسات المتاحة
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="border border-gray-200 px-3 py-1 rounded-lg text-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mt-5">
                    <label className="block text-sm font-semibold mb-2">
                      عدد الثريات (الحد الأقصى ثريتين)
                    </label>

                    <input
                      type="number"
                      min="1"
                      max={remainingQuantity > 0 ? remainingQuantity : 2}
                      value={quantities[product.id] || 1}
                      disabled={remainingQuantity === 0}
                      onChange={(e) =>
                        changeQuantity(product.id, e.target.value)
                      }
                      className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d] disabled:bg-gray-100"
                    />

                    <p className="text-xs text-gray-500 mt-2">
                      إجمالي القطع: {(quantities[product.id] || 1) * 6} قطعة
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      المتبقي لك من هذا الموديل: {remainingQuantity} ثرية
                    </p>
                  </div>

                  {/* Add To Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    disabled={remainingQuantity === 0}
                    className="w-full mt-5 bg-[#ca397d] text-white py-3 rounded-lg hover:bg-[#ad2868] transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    🛒
                    {remainingQuantity === 0
                      ? "وصلت للحد الأقصى"
                      : "إضافة للسلة"}
                  </button>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product)}
                    className="w-full mt-3 border border-[#ca397d] text-[#ca397d] py-3 rounded-lg hover:bg-[#ca397d] hover:text-white transition"
                  >
                    {isFavorite ? "إزالة من المفضلة ♥" : "إضافة للمفضلة ♡"}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-16">
            <h3 className="text-xl font-bold text-gray-700">
              ملقيناش الموديل ده 😕
            </h3>

            <p className="text-gray-500 mt-3">جرب تكتب اسم موديل تاني.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Models;
