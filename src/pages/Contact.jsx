function Contact() {
  return (
    <section dir="rtl" className="min-h-screen bg-[#faf8fa] py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#ca397d] font-semibold tracking-widest">
            CONTACT US
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">تواصل معنا</h1>
          <p className="text-gray-500 mt-4">
            يسعدنا استقبال استفساراتك ومساعدتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-bold mb-6">بيانات التواصل</h2>

            <div className="space-y-6">
              <a
                href="https://wa.me/201126409933"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-xl">
                  💬
                </span>
                <div>
                  <p className="font-semibold">واتساب</p>
                  <p className="text-gray-500" dir="ltr">
                    01126409933
                  </p>
                </div>
              </a>

              <a href="tel:01119273737" className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-xl">
                  ☎
                </span>
                <div>
                  <p className="font-semibold">اتصال</p>
                  <p className="text-gray-500" dir="ltr">
                    01119273737
                  </p>
                </div>
              </a>

              <a href="tel:01011806998" className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-xl">
                  ☎
                </span>
                <div>
                  <p className="font-semibold">اتصال</p>
                  <p className="text-gray-500" dir="ltr">
                    01011806998
                  </p>
                </div>
              </a>

              <a href="tel:0504356260" className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-xl">
                  ☎
                </span>
                <div>
                  <p className="font-semibold">تليفون أرضي</p>
                  <p className="text-gray-500" dir="ltr">
                    0504356260
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-bold mb-6">ابعتلنا رسالة</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "تم تجهيز رسالتك. سيتم ربط نموذج التواصل بالباك إند لاحقًا.",
                );
              }}
              className="space-y-5"
            >
              <div>
                <label className="block mb-2 font-medium">الاسم</label>
                <input
                  required
                  type="text"
                  placeholder="اكتب اسمك"
                  className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  البريد الإلكتروني
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">الرسالة</label>
                <textarea
                  required
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[#ca397d] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ca397d] text-white py-3 rounded-lg hover:bg-[#ad2868] transition"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
