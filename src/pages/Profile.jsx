import { Link } from "react-router-dom";

function Profile({ user }) {
  if (!user) {
    return (
      <div
        dir="rtl"
        className="min-h-screen flex flex-col items-center justify-center px-5"
      >
        <h2 className="text-2xl font-bold mb-4">يجب تسجيل الدخول أولًا</h2>

        <Link
          to="/login"
          className="bg-[#ca397d] text-white px-7 py-3 rounded-xl"
        >
          تسجيل الدخول
        </Link>
      </div>
    );
  }

  const details = [
    { label: "الاسم", value: user.name },
    { label: "البريد الإلكتروني", value: user.email },
    { label: "رقم الهاتف الأول", value: user.phone1 },
    { label: "رقم الهاتف الثاني", value: user.phone2 || "غير محدد" },
  ];

  return (
    <section dir="rtl" className="min-h-screen bg-[#faf8fa] px-5 py-14">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto rounded-full bg-[#ca397d] text-white flex items-center justify-center text-4xl mb-4">
            👤
          </div>

          <h1 className="text-3xl font-bold text-gray-900">حسابي الشخصي</h1>

          <p className="text-gray-500 mt-2">مرحبًا بك في SHOW WHITE</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-7">
          <h2 className="text-xl font-bold mb-7">البيانات الشخصية</h2>

          <div className="space-y-6">
            {details.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-4">
                <p className="text-sm text-gray-400 mb-2">{item.label}</p>

                <p className="font-semibold text-gray-800">
                  {item.value || "غير محدد"}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/bookings"
              className="bg-[#ca397d] text-white px-6 py-3 rounded-xl hover:bg-[#ad2868] transition"
            >
              حجوزاتي
            </Link>

            <Link
              to="/models"
              className="border border-[#ca397d] text-[#ca397d] px-6 py-3 rounded-xl hover:bg-[#ca397d] hover:text-white transition"
            >
              تصفح الموديلات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
