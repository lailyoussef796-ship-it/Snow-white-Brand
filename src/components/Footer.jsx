import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer dir="rtl" className="bg-[#171717] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="text-right">
            <h2 className="text-3xl font-bold mb-5">
              SHOW <span className="text-[#ca397d]">WHITE</span>
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              عالم من الأناقة والاختيارات المميزة. اكتشف موديلاتنا واختار
              إطلالتك بطريقتك.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1EdKDXpq8J/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#ca397d] flex items-center justify-center hover:bg-white hover:text-[#ca397d] transition"
              >
                f
              </a>

              <a
                href="https://t.me/+qIBMPNcYaCtiM2Zk"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#ca397d] flex items-center justify-center hover:bg-white hover:text-[#ca397d] transition"
              >
                ➤
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-[#ca397d] mb-6">
              روابط سريعة
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#ca397d] transition">
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#ca397d] transition">
                  عن المتجر
                </Link>
              </li>

              <li>
                <Link to="/models" className="hover:text-[#ca397d] transition">
                  الموديلات
                </Link>
              </li>

              <li>
                <Link to="/models" className="hover:text-[#ca397d] transition">
                  العروض
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-[#ca397d] mb-6">
              خدمة العملاء
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/contact" className="hover:text-[#ca397d] transition">
                  تواصل معنا
                </Link>
              </li>

              <li>
                <Link to="/profile" className="hover:text-[#ca397d] transition">
                  حسابي
                </Link>
              </li>

              <li>
                <Link
                  to="/favorites"
                  className="hover:text-[#ca397d] transition"
                >
                  المفضلة
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-[#ca397d] transition">
                  سلة الحجز
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-[#ca397d] mb-6">
              تواصل معنا
            </h3>

            <div className="space-y-5 text-gray-400">
              <div>
                <p className="mb-2">واتساب 💬</p>
                <a
                  href="https://wa.me/201126409933"
                  className="text-white hover:text-[#ca397d] transition"
                  dir="ltr"
                >
                  01126409933
                </a>
              </div>

              <div>
                <p className="mb-2">اتصال ☎️</p>
                <a
                  href="tel:01119273737"
                  className="text-white hover:text-[#ca397d] transition"
                  dir="ltr"
                >
                  01119273737
                </a>
              </div>

              <div>
                <p className="mb-2">اتصال ☎️</p>
                <a
                  href="tel:01011806998"
                  className="text-white hover:text-[#ca397d] transition"
                  dir="ltr"
                >
                  01011806998
                </a>
              </div>

              <div>
                <p className="mb-2">تليفون أرضي ☎️</p>
                <a
                  href="tel:0504356260"
                  className="text-white hover:text-[#ca397d] transition"
                  dir="ltr"
                >
                  0504356260
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>SHOW WHITE - All Rights Reserved 2026 ©</p>

          <p>🤍 Style Your Way</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
