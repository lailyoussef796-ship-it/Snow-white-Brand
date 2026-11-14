import { Link } from "react-router-dom";

const categories = [
  {
    name: "ملابس رجالي",
    description: "إطلالات عصرية تناسب كل يوم",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800",
  },
  {
    name: "ملابس حريمي",
    description: "أناقة وتفاصيل تناسب ذوقك",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  },
  {
    name: "ملابس أطفال",
    description: "راحة وأناقة للصغار",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
  },
];

const products = [
  {
    id: 1,
    name: "تيشيرت كلاسيك",
    price: 450,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 2,
    name: "تيشيرت كاجوال",
    price: 550,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
  },
  {
    id: 3,
    name: "جاكيت رياضي",
    price: 650,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
  },
];

function Home() {
  return (
    <div dir="rtl" className="bg-[#faf8fa]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              width: "max(100vw, 177.78vh)",
              height: "max(56.25vw, 100vh)",
              transform: "translate(-50%, -50%) scale(1.12)",
            }}
            src="https://www.youtube.com/embed/zI_sjJY5aro?autoplay=1&mute=1&controls=0&loop=1&playlist=zI_sjJY5aro&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3"
            title="SNOW WHITE Fashion Background"
            allow="autoplay; encrypted-media"
            tabIndex="-1"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl text-white">
            <span className="text-[#e879ad] tracking-widest text-sm font-semibold">
              أهلاً بيك في SNOW WHITE
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
              أناقتك تبدأ
              <br />
              من <span className="text-[#ca397d]">اختيارك</span>
            </h1>

            <p className="text-gray-200 text-lg leading-9 mt-6 max-w-xl">
              اكتشف أحدث الموديلات واختار إطلالتك المفضلة من مجموعة متنوعة من
              الملابس.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/models"
                className="bg-[#ca397d] text-white px-8 py-3 rounded-lg hover:bg-[#ad2868] transition"
              >
                اكتشف الموديلات
              </Link>

              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                اعرف أكتر عننا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-[#ca397d] tracking-widest font-semibold">
            SHOP BY CATEGORY
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
            تسوق حسب القسم
          </h2>

          <p className="text-gray-500 mt-4">
            اختار القسم المناسب ليك واكتشف موديلاتنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {categories.map((category) => (
            <Link
              to="/models"
              key={category.name}
              className="relative h-[350px] rounded-2xl overflow-hidden group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 right-0 p-7 text-white">
                <h3 className="text-2xl font-bold">{category.name}</h3>

                <p className="mt-2 text-gray-200">{category.description}</p>

                <span className="inline-block mt-4 text-[#f28ab9]">
                  اكتشف الآن ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#ca397d] tracking-widest font-semibold">
              OUR COLLECTION
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              أحدث الموديلات
            </h2>

            <p className="text-gray-500 mt-4">شوف مجموعة من أحدث اختياراتنا.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                to="/models"
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold">{product.name}</h3>

                  <p className="text-[#ca397d] font-semibold mt-3">
                    {product.price} جنيه / الثرية (6 قطع)
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/models"
              className="inline-block bg-[#ca397d] text-white px-9 py-3 rounded-lg hover:bg-[#ad2868] transition"
            >
              عرض جميع الموديلات
            </Link>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#171717] rounded-2xl overflow-hidden">
          <div className="p-8 md:p-14 flex flex-col justify-center text-white">
            <span className="text-[#e879ad] tracking-widest font-semibold">
              SNOW WHITE OFFERS
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mt-5">
              إطلالتك المفضلة
              <br />
              تبدأ من هنا
            </h2>

            <p className="text-gray-300 leading-8 mt-5">
              تابع أحدث الموديلات والعروض المتاحة واختار اللي يناسب ذوقك.
            </p>

            <Link
              to="/models"
              className="mt-7 bg-[#ca397d] text-white px-8 py-3 rounded-lg w-fit hover:bg-[#ad2868] transition"
            >
              تسوق الآن
            </Link>
          </div>

          <div className="h-[350px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=900"
              alt="SNOW WHITE Fashion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
