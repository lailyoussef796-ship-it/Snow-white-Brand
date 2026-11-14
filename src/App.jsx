import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Bookings from "./pages/Bookings";

function App() {
  // User
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  // Cart
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // Save Favorites
  const updateFavorites = (value) => {
    setFavorites((current) => {
      const updated = typeof value === "function" ? value(current) : value;

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  // Save Cart
  const updateCart = (value) => {
    setCart((current) => {
      const updated = typeof value === "function" ? value(current) : value;

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8fa]">
      {/* Navbar */}
      <Navbar
        user={user}
        setUser={setUser}
        favorites={favorites}
        cart={cart}
        setCart={updateCart}
      />

      {/* Pages */}
      <main className="flex-1">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Home favorites={favorites} setFavorites={updateFavorites} />
            }
          />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Models */}
          <Route
            path="/models"
            element={
              <Models
                favorites={favorites}
                setFavorites={updateFavorites}
                cart={cart}
                setCart={updateCart}
              />
            }
          />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Favorites */}
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} setFavorites={updateFavorites} />
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login setUser={setUser} />} />

          {/* Register */}
          <Route path="/register" element={<Register setUser={setUser} />} />

          {/* Cart */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute user={user}>
                <Cart cart={cart} setCart={updateCart} />
              </ProtectedRoute>
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} />
              </ProtectedRoute>
            }
          />

          {/* Bookings */}
          <Route
            path="/bookings"
            element={
              <ProtectedRoute user={user}>
                <Bookings user={user} />
              </ProtectedRoute>
            }
          />

          {/* Not Found */}
          <Route
            path="*"
            element={
              <div className="min-h-[50vh] flex items-center justify-center text-2xl font-bold text-gray-700">
                الصفحة غير موجودة
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
