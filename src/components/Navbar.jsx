import { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";

function Navbar({ user, setUser, favorites = [], cart = [], setCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const links = [
    { title: "الرئيسية", path: "/" },
    { title: "عن المتجر", path: "/about" },
    { title: "الموديلات", path: "/models" },
    { title: "المفضلة ❤️", path: "/favorites" },
    { title: "تواصل معنا", path: "/contact" },
  ];

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <nav dir="rtl" className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-wrap items-center justify-between gap-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/project.png"
              alt="SHOW WHITE"
              className="w-16 h-16 object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-[#ca397d] font-medium transition duration-300"
                >
                  {link.title}

                  {link.path === "/favorites" && (
                    <span className="mr-1 text-[#ca397d]">
                      ({favorites.length})
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart and Account */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Cart */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg border border-[#ca397d] text-[#ca397d] hover:bg-[#ca397d] hover:text-white transition duration-300"
              aria-label="فتح سلة الحجز"
            >
              <span className="text-xl">🛒</span>
              <span className="font-medium">السلة</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -left-2 min-w-5 h-5 px-1 rounded-full bg-[#171717] text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account */}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-[#ca397d] text-[#ca397d] hover:bg-[#ca397d] hover:text-white transition duration-300"
                >
                  تسجيل الدخول
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-[#ca397d] text-white hover:bg-[#ad2868] transition duration-300"
                >
                  إنشاء حساب
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="px-4 py-2 rounded-lg border border-[#ca397d] text-[#ca397d] hover:bg-[#ca397d] hover:text-white transition duration-300"
                >
                  حسابي
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition duration-300"
                >
                  تسجيل الخروج
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default Navbar;
