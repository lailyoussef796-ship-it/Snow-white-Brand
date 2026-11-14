import { Link } from "react-router-dom";

function Favorites({ favorites = [], setFavorites }) {
  function removeFavorite(id) {
    setFavorites((current) => current.filter((item) => item.id !== id));
  }

  return (
    <section dir="rtl" className="min-h-screen bg-[#faf8fa] py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#ca397d] font-semibold tracking-widest">
            YOUR FAVORITES
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mt-3">
            الموديلات المفضلة ❤️
          </h1>

          <p className="text-gray-500 mt-4">
            كل الموديلات اللي عجبتك موجودة هنا.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-5">♡</div>

            <h2 className="text-xl font-bold">لسه مفيش منتجات في المفضلة</h2>

            <p className="text-gray-500 mt-3">
              اكتشف الموديلات واضغط على القلب علشان تحفظها هنا.
            </p>

            <Link
              to="/models"
              className="inline-block mt-7 bg-[#ca397d] text-white px-8 py-3 rounded-lg hover:bg-[#ad2868] transition"
            >
              اكتشف الموديلات
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div className="h-[300px] relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={() => removeFavorite(product.id)}
                    className="absolute top-4 left-4 bg-white text-[#ca397d] w-11 h-11 rounded-full shadow text-xl"
                    aria-label="إزالة من المفضلة"
                  >
                    ♥
                  </button>
                </div>

                <div className="p-5">
                  <h2 className="font-bold text-xl">{product.name}</h2>

                  <p className="text-[#ca397d] font-semibold mt-3">
                    {product.price} جنيه
                  </p>

                  <Link
                    to="/models"
                    className="block text-center mt-5 border border-[#ca397d] text-[#ca397d] py-3 rounded-lg hover:bg-[#ca397d] hover:text-white transition"
                  >
                    عرض الموديلات
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;
