import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import "./App.css";

// سعر كل موديل هو سعر الثرية الكاملة (6 قطع)
const products = [
  {
    id: 1,
    name: "تيشيرت كلاسيك",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    colors: ["أبيض", "أسود", "أحمر"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "تيشيرت كاجوال",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
    colors: ["أسود", "أزرق", "رمادي"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "جاكيت رياضي",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    colors: ["أسود", "أبيض"],
    sizes: ["M", "L", "XL", "XXL"],
  },
];

function getSavedData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/* =========================
   NAVBAR
========================= */

function Navbar({ user, setUser, favorites }) {
  const links = [
    { title: "الرئيسية", path: "/" },
    { title: "عن المتجر", path: "/about" },
    { title: "الموديلات", path: "/models" },
    { title: `المفضلة ❤️ (${favorites.length})`, path: "/favorites" },
    { title: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/project.png" alt="SNOW WHITE" />
      </Link>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        {!user ? (
          <>
            <Link to="/login">
              <button className="login-btn">تسجيل الدخول</button>
            </Link>

            <Link to="/register">
              <button className="register-btn">إنشاء حساب</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">
              <button className="login-btn">حسابي</button>
            </Link>

            <button className="logout-btn" onClick={() => setUser(null)}>
              تسجيل الخروج
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

/* =========================
   HOME
========================= */

function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const categories = [
    
    {
      name: "ملابس رجالي",
      description: "إطلالات عصرية تناسب كل يوم",
      image:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800",
    },
    {
      name: "ملابس حريمي",
      description: "أناقة وتفاصيل تناسب ذوقك",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    },
    {
      name: "ملابس أطفال",
      description: "راحة وأناقة للصغار",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-video-bg" aria-hidden="true">
  <iframe
    className={videoReady ? "video-ready" : ""}
    src="https://www.youtube.com/embed/zI_sjJY5aro?autoplay=1&mute=1&controls=0&loop=1&playlist=zI_sjJY5aro&playsinline=1&rel=0"
    title="SNOW WHITE fashion background"
    allow="autoplay; encrypted-media; picture-in-picture"
    tabIndex="-1"
    onLoad={() => setVideoReady(true)}
  />
</div>

        <div className="hero-video-overlay" />

        <div className="hero-content">
          <span className="hero-label">أهلاً بيك في SNOW WHITE</span>

          <h1>
            أناقتك تبدأ
            <br />
            من <span>اختيارك</span>
          </h1>

          <p>
            اكتشف أحدث الموديلات واختار إطلالتك المفضلة
            من مجموعة متنوعة من الملابس.
          </p>

          <div className="hero-buttons">
            <Link to="/models">
              <button className="register-btn">اكتشف الموديلات</button>
            </Link>

            <Link to="/about">
              <button className="outline-btn">اعرف أكتر عننا</button>
            </Link>
          </div>
        </div>

        <div className="hero-side-note">
          <span>SNOW WHITE</span>
          <p>Style Your Way</p>
        </div>
      </section>

      

      <section className="categories-section">
        <div className="section-heading">
          <span>SHOP BY CATEGORY</span>
          <h2>تسوق حسب القسم</h2>
          <p>اختار القسم المناسب ليك واكتشف موديلاتنا.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to="/models"
              className="category-card"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />

              <div className="category-overlay">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span>اكتشف الآن ←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>أحدث الموديلات</h2>
          <p>شوف مجموعة من أحدث اختياراتنا.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <Link
              to="/models"
              className="featured-card"
              key={product.id}
            >
              <img src={product.image} alt={product.name} />

              <div className="featured-info">
                <h3>{product.name}</h3>
                <p>{product.price} جنيه / الثرية (6 قطع)</p>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/models">
          <button className="register-btn section-action">
            عرض جميع الموديلات
          </button>
        </Link>
      </section>

      <section className="offers-section">
        <div className="offers-content">
          <span>SNOW WHITE OFFERS</span>

          <h2>
            إطلالتك المفضلة
            <br />
            تبدأ من هنا
          </h2>

          <p>
            تابع أحدث الموديلات والعروض المتاحة واختار اللي يناسب ذوقك.
          </p>

          <Link to="/models">
            <button className="register-btn">تسوق الآن</button>
          </Link>
        </div>

        <div className="offers-image">
          <img
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=900"
            alt="SNOW WHITE Fashion"
          />
        </div>
      </section>
    </div>
  );
}

/* =========================
   ABOUT
========================= */

function About() {
  return (
    <div className="page">
      <div className="section-heading">
        <span>ABOUT US</span>
        <h1>عن SNOW WHITE</h1>
      </div>

      <div className="about-content">
        <p>
          أهلاً بيك في SNOW WHITE. بنقدم مجموعة متنوعة من الموديلات
          علشان تقدر تختار الستايل المناسب ليك.
        </p>
      </div>
    </div>
  );
}


/* =========================
   CONTACT
========================= */

function Contact() {
  return (
    <div className="page">
      <div className="section-heading">
        <span>CONTACT US</span>
        <h1>تواصل معنا</h1>
        <p>يسعدنا استقبال استفساراتك ومساعدتك.</p>
      </div>
    </div>
  );
}

/* =========================
   PRODUCT CARD
========================= */

function ProductCard({
  product,
  user,
  cart,
  setCart,
  favorites,
  setFavorites,
  setCartOpen,
}) {
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const isFavorite = favorites.some((item) => item.id === product.id);

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites((current) =>
        current.filter((item) => item.id !== product.id)
      );
    } else {
      setFavorites((current) => [...current, product]);
    }
  }

  function addToCart() {
    if (!user) {
      alert("سجل الدخول أولًا علشان تقدر تحجز.");
      return;
    }

    const currentQuantity = cart
      .filter((item) => item.id === product.id)
      .reduce((sum, item) => sum + item.quantity, 0);

    if (currentQuantity + quantity > 2) {
      alert("الحد الأقصى لكل موديل هو ثريتين فقط (12 قطعة).");
      return;
    }

    const cartId = `${product.id}-${color}-${size}`;

    const existingProduct = cart.find(
      (item) => item.cartId === cartId
    );

    if (existingProduct) {
      setCart((currentCart) =>
        currentCart.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((currentCart) => [
        ...currentCart,
        {
          ...product,
          color,
          size,
          quantity,
          cartId,
        },
      ]);
    }

    // فتح السلة الجانبية تلقائيًا
    setCartOpen(true);
  }

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
          title="إضافة للمفضلة"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="product-price">{product.price} جنيه / الثرية</p>
        <p>الثرية الواحدة تحتوي على 6 قطع</p>

        <label>اللون:</label>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {product.colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <label>المقاس:</label>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          {product.sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <label>عدد الثريات:</label>

        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          <option value={1}>ثرية واحدة (6 قطع)</option>
          <option value={2}>ثريتين (12 قطعة)</option>
        </select>

        <button className="book-btn" onClick={addToCart}>
          أضف إلى السلة 🛒
        </button>
      </div>
    </div>
  );
}

/* =========================
   MODELS
========================= */

function Models({
  user,
  cart,
  setCart,
  favorites,
  setFavorites,
  setCartOpen,
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="models-page">
      <div className="models-header">
        <span>OUR COLLECTION</span>
        <h1>اكتشف موديلاتنا</h1>
        <p>اختار الموديل المناسب ليك من مجموعتنا.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="ابحث عن موديل..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>🔎</span>
      </div>

      <div className="products-grid">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              user={user}
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
              setCartOpen={setCartOpen}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>ملقيناش الموديل ده 😕</h3>
            <p>جرب تكتب اسم موديل تاني.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================
   FAVORITES
========================= */

function Favorites({
  user,
  cart,
  setCart,
  favorites,
  setFavorites,
  setCartOpen,
}) {
  return (
    <div className="models-page">
      <div className="models-header">
        <span>YOUR FAVORITES</span>
        <h1>الموديلات المفضلة ❤️</h1>
        <p>كل الموديلات اللي عجبتك موجودة هنا.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-cart">
          <h3>لسه مفيش منتجات في المفضلة.</h3>
          <p>اضغط على القلب في أي منتج علشان تحفظه هنا.</p>

          <Link to="/models">
            <button className="register-btn">اكتشف الموديلات</button>
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              user={user}
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
              setCartOpen={setCartOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================
   LOGIN
========================= */

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      setError("من فضلك اكتب البريد الإلكتروني وكلمة المرور.");
      return;
    }

    const savedUsers = getSavedData("users");

    const foundUser = savedUsers.find(
      (user) =>
        user.email === cleanEmail &&
        user.password === password
    );

    if (!foundUser) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      return;
    }

    setUser({
      id: foundUser.id,
      name: foundUser.name,
      phone1: foundUser.phone1,
      phone2: foundUser.phone2,
      email: foundUser.email,
      role: foundUser.role,
    });

    setEmail("");
    setPassword("");
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-heading">
          <span>WELCOME BACK</span>
          <h1>تسجيل الدخول</h1>
          <p>أهلاً بيك تاني في SNOW WHITE</p>
        </div>

        <form onSubmit={handleLogin}>
          <label>البريد الإلكتروني</label>

          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>كلمة المرور</label>

          <input
            type="password"
            placeholder="اكتب كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="register-error">{error}</div>}

          <button type="submit" className="register-submit-btn">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================
   REGISTER
========================= */

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanPhone1 = phone1.trim();
    const cleanPhone2 = phone2.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (
      !cleanName ||
      !cleanPhone1 ||
      !cleanPhone2 ||
      !cleanEmail ||
      !password ||
      !confirmPassword
    ) {
      setError("من فضلك املى كل البيانات.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      setError("البريد الإلكتروني غير صحيح.");
      return;
    }

    const phoneRegex = /^[0-9+]{10,15}$/;

    if (
      !phoneRegex.test(cleanPhone1) ||
      !phoneRegex.test(cleanPhone2)
    ) {
      setError("من فضلك اكتب أرقام هاتف صحيحة.");
      return;
    }

    if (password.length < 6) {
      setError("كلمة المرور لازم تكون 6 أحرف على الأقل.");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين.");
      return;
    }

    const savedUsers = getSavedData("users");

    const existingUser = savedUsers.find(
      (user) => user.email === cleanEmail
    );

    if (existingUser) {
      setError("البريد الإلكتروني مسجل بالفعل.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: cleanName,
      phone1: cleanPhone1,
      phone2: cleanPhone2,
      email: cleanEmail,
      password,
      role: "customer",
    };

    const updatedUsers = [...savedUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser({
      id: newUser.id,
      name: newUser.name,
      phone1: newUser.phone1,
      phone2: newUser.phone2,
      email: newUser.email,
      role: newUser.role,
    });

    setName("");
    setPhone1("");
    setPhone2("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-heading">
          <span>JOIN SNOW WHITE</span>
          <h1>إنشاء حساب جديد</h1>
          <p>انضم لينا واكتشف أحدث الموديلات</p>
        </div>

        <form onSubmit={handleRegister}>
          <label>الاسم بالكامل</label>

          <input
            type="text"
            placeholder="اكتب اسمك بالكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>رقم الهاتف الأول</label>

          <input
            type="tel"
            placeholder="اكتب رقم الهاتف الأول"
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          />

          <label>رقم الهاتف الثاني</label>

          <input
            type="tel"
            placeholder="اكتب رقم الهاتف الثاني"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />

          <label>البريد الإلكتروني</label>

          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>كلمة المرور</label>

          <input
            type="password"
            placeholder="6 أحرف على الأقل"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>تأكيد كلمة المرور</label>

          <input
            type="password"
            placeholder="اكتب كلمة المرور مرة تانية"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <div className="register-error">{error}</div>}

          <button type="submit" className="register-submit-btn">
            إنشاء الحساب
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================
   CART DRAWER
========================= */

function CartDrawer({ cart, setCart, isOpen, onClose }) {
  const totalPieces = cart.reduce(
    (sum, item) => sum + item.quantity * 6,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // حساب عدد الثريات الموجودة لنفس الموديل
  function getModelQuantity(productId) {
    return cart
      .filter((item) => item.id === productId)
      .reduce((sum, item) => sum + item.quantity, 0);
  }

  // زيادة عدد الثريات
  function increaseQuantity(cartId) {
    const selectedItem = cart.find((item) => item.cartId === cartId);

    if (!selectedItem) return;

    const modelQuantity = getModelQuantity(selectedItem.id);

    // الحد الأقصى ثريتين للموديل الواحد
    if (modelQuantity >= 2) {
      alert("الحد الأقصى للموديل الواحد هو ثريتين فقط (12 قطعة).");
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // تقليل عدد الثريات
  function decreaseQuantity(cartId) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  // حذف المنتج من السلة
  function removeProduct(cartId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId)
    );
  }

  if (!isOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-drawer-header">
          <h2>سلة الحجز 🛒</h2>

          <button
            className="cart-drawer-close"
            onClick={onClose}
            aria-label="إغلاق السلة"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-drawer-empty">
            <p>سلة الحجز فارغة حاليًا.</p>

            <button className="register-btn" onClick={onClose}>
              متابعة التسوق
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items">
              {cart.map((item) => (
                <div className="cart-drawer-item" key={item.cartId}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-drawer-item-info">
                    <h3>{item.name}</h3>

                    <p>اللون: {item.color}</p>
                    <p>المقاس: {item.size}</p>

                    <p>
                      سعر الثرية: {item.price} جنيه
                    </p>

                    <div className="cart-quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() => decreaseQuantity(item.cartId)}
                        disabled={item.quantity <= 1}
                        aria-label="تقليل العدد"
                      >
                        −
                      </button>

                      <span className="cart-quantity-number">
                        {item.quantity}
                      </span>

                      <button
                        className="quantity-btn"
                        onClick={() => increaseQuantity(item.cartId)}
                        disabled={getModelQuantity(item.id) >= 2}
                        aria-label="زيادة العدد"
                      >
                        +
                      </button>

                      <span className="quantity-label">
                        {item.quantity === 1 ? "ثرية" : "ثريتين"}
                      </span>
                    </div>

                    <p>عدد القطع: {item.quantity * 6}</p>

                    <strong className="cart-item-price">
                      {item.price * item.quantity} جنيه
                    </strong>

                    <button
                      className="cart-drawer-remove"
                      onClick={() => removeProduct(item.cartId)}
                    >
                      حذف المنتج
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer-footer">
              <p>إجمالي عدد القطع: {totalPieces}</p>

              <h3>إجمالي الحجز: {total} جنيه</h3>

              <p className="cart-drawer-payment">
                طريقة الدفع: الفيزا فقط 💳
              </p>

              <button
                className="book-btn"
                onClick={() =>
                  alert(
                    "تم تجهيز طلبك. الدفع بالفيزا فقط، وسيتم ربط بوابة الدفع الإلكتروني لاحقًا."
                  )
                }
              >
                تأكيد الحجز
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

/* =========================
   CART PAGE
========================= */

function Cart({ cart, setCart }) {
  const totalPieces = cart.reduce(
    (sum, item) => sum + item.quantity * 6,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function removeProduct(cartId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId)
    );
  }

  return (
    <div className="cart-page">
      <div className="section-heading">
        <span>YOUR CART</span>
        <h1>سلة الحجز 🛒</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>سلة الحجز فارغة حاليًا.</p>

          <Link to="/models">
            <button className="register-btn">تصفح الموديلات</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.cartId}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>اللون: {item.color}</p>
                  <p>المقاس: {item.size}</p>
                  <p>عدد الثريات: {item.quantity}</p>
                  <p>عدد القطع: {item.quantity * 6}</p>
                  <p>سعر الثرية (6 قطع): {item.price} جنيه</p>
                  <p>
                    إجمالي الموديل: {item.price * item.quantity} جنيه
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeProduct(item.cartId)}
                >
                  حذف
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>إجمالي عدد القطع: {totalPieces}</h3>
            <h2>إجمالي الحجز: {total} جنيه</h2>

            <div className="payment-method">
              <h3>طريقة الدفع</h3>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="visa"
                  checked
                  readOnly
                />
                الدفع بالفيزا فقط 💳
              </label>
            </div>

            <button
              className="book-btn"
              onClick={() =>
                alert(
                  "تم تجهيز طلبك. الدفع بالفيزا فقط، وسيتم ربط بوابة الدفع الإلكتروني لاحقًا."
                )
              }
            >
              تأكيد الحجز
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* =========================
   BOOKINGS & PROFILE
========================= */

function Bookings() {
  return (
    <div className="page">
      <h1>حجوزاتي</h1>
      <p>هنا هتظهر الحجوزات الخاصة بيك.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="page">
      <h1>حسابي</h1>
      <p>هنا هنعرض بيانات الحساب.</p>
    </div>
  );
}

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" replace />;
}

/* =========================
   APP
========================= */

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(() => getSavedData("cart"));
  const [favorites, setFavorites] = useState(() =>
    getSavedData("favorites")
  );

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>
      <div dir="rtl">
        <Navbar
          user={user}
          setUser={setUser}
          favorites={favorites}
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/models"
              element={
                <Models
                  user={user}
                  cart={cart}
                  setCart={setCart}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  setCartOpen={setIsCartOpen}
                />
              }
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  user={user}
                  cart={cart}
                  setCart={setCart}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  setCartOpen={setIsCartOpen}
                />
              }
            />

            <Route
              path="/login"
              element={<Login setUser={setUser} />}
            />

            <Route
              path="/register"
              element={<Register setUser={setUser} />}
            />

            <Route
              path="/bookings"
              element={
                <ProtectedRoute user={user}>
                  <Bookings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute user={user}>
                  <Cart cart={cart} setCart={setCart} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user}>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={<h1 className="page">الصفحة غير موجودة</h1>}
            />
          </Routes>

          <CartDrawer
            cart={cart}
            setCart={setCart}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </main>

        <footer className="site-footer" dir="rtl">
  <div className="footer-container">

    <div className="footer-brand">
      <h2>SHOW <span>WHITE</span></h2>

      <p>
        عالم من الأناقة والاختيارات المميزة.
        اكتشف موديلاتنا واختار إطلالتك بطريقتك.
      </p>

      <div className="footer-social">
        <a
          href="https://www.facebook.com/share/1EdKDXpq8J/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          f
        </a>

        <a
          href="https://t.me/+qIBMPNcYaCtiM2Zk"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          ➤
        </a>
      </div>
    </div>

    <div className="footer-column">
      <h3>روابط سريعة</h3>

      <Link to="/">الرئيسية</Link>
      <Link to="/about">عن المتجر</Link>
      <Link to="/models">الموديلات</Link>
      <Link to="/models">العروض</Link>
    </div>

    <div className="footer-column">
      <h3>خدمة العملاء</h3>

      <Link to="/contact">تواصل معنا</Link>
      <Link to="/profile">حسابي</Link>
      <Link to="/favorites">المفضلة</Link>
      <Link to="/cart">سلة الحجز</Link>
    </div>

    <div className="footer-column footer-contact">
      <h3>تواصل معنا</h3>

      <a
        href="https://wa.me/201126409933"
        target="_blank"
        rel="noreferrer"
      >
        <span>💬</span>
        <div>
          <small>واتساب</small>
          <p>01126409933</p>
        </div>
      </a>

      <a href="tel:01119273737">
        <span>☎</span>
        <div>
          <small>اتصال</small>
          <p>01119273737</p>
        </div>
      </a>

      <a href="tel:01011806998">
        <span>☎</span>
        <div>
          <small>اتصال</small>
          <p>01011806998</p>
        </div>
      </a>

      <a href="tel:0504356260">
        <span>☎</span>
        <div>
          <small>تليفون أرضي</small>
          <p>0504356260</p>
        </div>
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 SHOW WHITE - All Rights Reserved</p>
    <p>Style Your Way 🤍</p>
  </div>
</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;