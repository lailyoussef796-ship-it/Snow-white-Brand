import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = savedUsers.find(
      (item) => item.email === cleanEmail && item.password === password,
    );

    if (!foundUser) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      return;
    }

    const currentUser = {
      id: foundUser.id,
      name: foundUser.name,
      phone1: foundUser.phone1,
      phone2: foundUser.phone2,
      email: foundUser.email,
      role: foundUser.role,
    };

    localStorage.setItem("user", JSON.stringify(currentUser));
    setUser(currentUser);

    navigate("/");
  }

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-[#faf8fa] flex items-center justify-center px-5 py-16"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">تسجيل الدخول</h1>

          <p className="text-gray-500 mt-3">أهلاً بيك تاني في SHOW WHITE</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-medium mb-2">البريد الإلكتروني</label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d]"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">كلمة المرور</label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="اكتب كلمة المرور"
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d]"
            />
          </div>

          {error && (
            <p className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#ca397d] text-white py-3 rounded-lg hover:bg-[#ad2868] transition"
          >
            تسجيل الدخول
          </button>
        </form>

        <p className="text-center text-gray-500 mt-7">
          معندكش حساب؟{" "}
          <Link to="/register" className="text-[#ca397d] font-bold">
            أنشئ حساب جديد
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
