import { Link } from "react-router-dom";

function About() {
  return (
    <section dir="rtl" className="min-h-screen bg-[#faf8fa]">
      {/* Hero Section */}
      <div className="bg-[#171717] text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          عن <span className="text-[#ca397d]">SHOW WHITE</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-9">
          عالم من الأناقة والجودة، نقدم لكِ موديلات مميزة تجمع بين التصميم
          العصري والخامات المختارة بعناية.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>

            <p className="text-gray-600 leading-9 mb-5">
              في SHOW WHITE نؤمن أن الأناقة تبدأ من التفاصيل، ولذلك نهتم بتقديم
              موديلات متنوعة تناسب احتياجات عملائنا وتواكب أحدث الاتجاهات.
            </p>

            <p className="text-gray-600 leading-9">
              نسعى إلى توفير تجربة سهلة ومنظمة لتصفح الموديلات واختيار المنتجات
              وإتمام الحجوزات بكل سهولة.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              alt="SHOW WHITE Fashion"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: "✨",
              title: "تصميمات عصرية",
              desc: "موديلات متنوعة تواكب أحدث صيحات الموضة.",
            },
            {
              icon: "🧵",
              title: "اهتمام بالجودة",
              desc: "نحرص على اختيار الخامات والاهتمام بالتفاصيل.",
            },
            {
              icon: "🤝",
              title: "ثقة واهتمام",
              desc: "نسعى لتقديم تجربة مميزة وسهلة لعملائنا.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-8">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            اكتشف موديلاتنا
          </h2>

          <p className="text-gray-500 mb-7">
            تصفح مجموعتنا واختر الموديلات المناسبة لك.
          </p>

          <Link
            to="/models"
            className="inline-block bg-[#ca397d] text-white px-9 py-3 rounded-xl font-bold hover:bg-[#ad2868] transition"
          >
            تصفح الموديلات
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
