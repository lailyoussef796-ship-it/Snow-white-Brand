import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone1: "",
    phone2: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    setError("");

    const { name, phone1, phone2, email, password, confirmPassword } = formData;

    const cleanEmail = email.trim().toLowerCase();

    if (password.length < 6) {
      setError("كلمة المرور لازم تكون 6 أحرف على الأقل.");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين.");
      return;
    }

    const phoneRegex = /^[0-9+]{10,15}$/;

    if (!phoneRegex.test(phone1) || !phoneRegex.test(phone2)) {
      setError("من فضلك اكتب أرقام هاتف صحيحة.");
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = savedUsers.some((item) => item.email === cleanEmail);

    if (exists) {
      setError("البريد الإلكتروني مسجل بالفعل.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      phone1: phone1.trim(),
      phone2: phone2.trim(),
      email: cleanEmail,
      password,
      role: "customer",
    };

    localStorage.setItem("users", JSON.stringify([...savedUsers, newUser]));

    const currentUser = {
      id: newUser.id,
      name: newUser.name,
      phone1: newUser.phone1,
      phone2: newUser.phone2,
      email: newUser.email,
      role: newUser.role,
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
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">إنشاء حساب جديد</h1>

          <p className="text-gray-500 mt-3">انضم لينا واكتشف أحدث الموديلات</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {[
            {
              label: "الاسم بالكامل",
              name: "name",
              type: "text",
              placeholder: "اكتب اسمك بالكامل",
            },
            {
              label: "رقم الهاتف الأول",
              name: "phone1",
              type: "tel",
              placeholder: "رقم الهاتف الأول",
            },
            {
              label: "رقم الهاتف الثاني",
              name: "phone2",
              type: "tel",
              placeholder: "رقم الهاتف الثاني",
            },
            {
              label: "البريد الإلكتروني",
              name: "email",
              type: "email",
              placeholder: "example@email.com",
            },
            {
              label: "كلمة المرور",
              name: "password",
              type: "password",
              placeholder: "6 أحرف على الأقل",
            },
            {
              label: "تأكيد كلمة المرور",
              name: "confirmPassword",
              type: "password",
              placeholder: "أعد كتابة كلمة المرور",
            },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium mb-2">{field.label}</label>

              <input
                required
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d]"
              />
            </div>
          ))}

          {error && (
            <p className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#ca397d] text-white py-3 rounded-lg hover:bg-[#ad2868] transition"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="text-center text-gray-500 mt-7">
          عندك حساب بالفعل؟{" "}
          <Link to="/login" className="text-[#ca397d] font-bold">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
