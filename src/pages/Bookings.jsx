import { Link } from "react-router-dom";

function Bookings({ user }) {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  const userBookings = user
    ? bookings.filter((booking) => booking.userId === user.id)
    : [];

  return (
    <section dir="rtl" className="min-h-screen bg-[#faf8fa] px-5 py-14">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">حجوزاتي</h1>

        <p className="text-gray-500 mb-10">تابع حجوزاتك وحالة كل حجز.</p>

        {!user ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <h2 className="text-xl font-bold mb-4">
              سجل الدخول لمشاهدة حجوزاتك
            </h2>

            <Link
              to="/login"
              className="inline-block bg-[#ca397d] text-white px-7 py-3 rounded-xl"
            >
              تسجيل الدخول
            </Link>
          </div>
        ) : userBookings.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="text-6xl mb-5">📦</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              لا توجد حجوزات حتى الآن
            </h2>

            <p className="text-gray-500 mb-6">
              عندما تقوم بحجز موديلات، ستظهر تفاصيلها هنا.
            </p>

            <Link
              to="/models"
              className="inline-block bg-[#ca397d] text-white px-7 py-3 rounded-xl hover:bg-[#ad2868] transition"
            >
              استكشف الموديلات
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {userBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="flex flex-wrap justify-between gap-4 mb-5">
                  <h2 className="font-bold text-lg">حجز رقم #{booking.id}</h2>

                  <span className="text-[#ca397d] font-semibold">
                    {booking.status || "قيد المراجعة"}
                  </span>
                </div>

                <p className="text-gray-500 mb-2">
                  تاريخ الحجز: {booking.date || "غير محدد"}
                </p>

                <p className="text-gray-500">
                  إجمالي الحجز: {booking.total || 0} جنيه
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Bookings;
