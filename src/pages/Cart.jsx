import { useState } from "react";

// قيمة العربون الثابت بالجنيه
// غيّري الرقم حسب المبلغ الذي تحدده الإدارة
const DEPOSIT_AMOUNT = 0;

function Cart({ cart = [], setCart }) {
  const [paymentChoice, setPaymentChoice] = useState("full");

  // إجمالي الطلب
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0,
  );

  // إجمالي القطع
  const totalPieces = cart.reduce((sum, item) => sum + item.quantity * 6, 0);

  // إجمالي الثريات
  const totalThurayas = cart.reduce((sum, item) => sum + item.quantity, 0);

  // التحقق من إمكانية دفع العربون
  const canPayDeposit = DEPOSIT_AMOUNT > 0 && DEPOSIT_AMOUNT <= total;

  // المبلغ المطلوب دفعه
  const paymentAmount = paymentChoice === "deposit" ? DEPOSIT_AMOUNT : total;

  // المبلغ المتبقي بعد دفع العربون
  const remainingAmount = total - DEPOSIT_AMOUNT;

  // زيادة الكمية
  const increaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartId !== cartId) return item;
        if (item.quantity >= 2) return item;

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }),
    );
  };

  // تقليل الكمية
  const decreaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartId !== cartId) return item;
        if (item.quantity <= 1) return item;

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }),
    );
  };

  // حذف موديل
  const removeProduct = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId),
    );
  };

  // الدفع
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("السلة فارغة، أضف موديل أولاً.");
      return;
    }

    if (paymentChoice === "deposit" && !canPayDeposit) {
      alert("قيمة العربون غير محددة من الإدارة حتى الآن.");
      return;
    }

    alert(
      `المبلغ المطلوب دفعه: ${paymentAmount} جنيه\nسيتم ربط بوابة الدفع بالفيزا في المرحلة القادمة.`,
    );
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-[#faf8fa] py-10 md:py-16 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[#ca397d] font-semibold tracking-widest">
            YOUR CART
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
            سلة الحجز والدفع
          </h1>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            راجع طلبك واختر طريقة سداد قيمة الحجز.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
            <p className="text-6xl mb-5">🛍️</p>

            <h2 className="text-xl font-bold text-gray-800">السلة فارغة</h2>

            <p className="text-gray-500 mt-3">
              لم تقم بإضافة أي موديلات حتى الآن.
            </p>

            <a
              href="/models"
              className="inline-block mt-6 bg-[#ca397d] text-white px-8 py-3 rounded-lg hover:bg-[#ad2868] transition"
            >
              تصفح الموديلات
            </a>
          </div>
        ) : (
          <>
            {/* Cart Products */}
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-white rounded-2xl shadow-md p-4 sm:p-5 flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-36 h-52 sm:h-40 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-[#ca397d] font-bold mt-3">
                      {item.price} جنيه / الثرية
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      الثرية الواحدة = 6 قطع
                    </p>

                    {/* Quantity */}
                    <div className="flex flex-wrap items-center gap-3 mt-5">
                      <span className="font-semibold">الكمية:</span>

                      <button
                        onClick={() => decreaseQuantity(item.cartId)}
                        disabled={item.quantity <= 1}
                        className="w-9 h-9 rounded-lg border border-gray-300 disabled:opacity-40"
                      >
                        −
                      </button>

                      <span className="font-bold text-lg">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.cartId)}
                        disabled={item.quantity >= 2}
                        className="w-9 h-9 rounded-lg border border-[#ca397d] text-[#ca397d] disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-3">
                      عدد القطع: {item.quantity * 6} قطعة
                    </p>

                    <p className="font-bold text-gray-900 mt-3">
                      إجمالي الموديل: {item.price * item.quantity} جنيه
                    </p>

                    <button
                      onClick={() => removeProduct(item.cartId)}
                      className="text-red-500 text-sm mt-4 hover:underline"
                    >
                      حذف الموديل من السلة
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-7 mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-6">ملخص الطلب</h2>

              <div className="space-y-4">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">عدد الموديلات</span>
                  <span className="font-bold">{cart.length}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">إجمالي الثريات</span>
                  <span className="font-bold">{totalThurayas}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-600">إجمالي القطع</span>
                  <span className="font-bold">{totalPieces} قطعة</span>
                </div>

                <div className="border-t pt-5 flex justify-between items-center gap-3">
                  <span className="font-bold text-lg">قيمة الطلب</span>

                  <span className="text-xl md:text-2xl font-bold text-[#ca397d]">
                    {total} جنيه
                  </span>
                </div>
              </div>
            </div>

            {/* Deposit Information */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-7 mt-6">
              <h2 className="text-xl font-bold mb-4">
                العربون المحدد من الإدارة
              </h2>

              {DEPOSIT_AMOUNT > 0 ? (
                <>
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-gray-600">قيمة العربون الثابت</span>

                    <span className="text-xl font-bold text-[#ca397d]">
                      {DEPOSIT_AMOUNT} جنيه
                    </span>
                  </div>

                  {DEPOSIT_AMOUNT > total && (
                    <p className="text-sm text-red-500 mt-3">
                      قيمة العربون أكبر من قيمة الطلب، يرجى مراجعة الإدارة.
                    </p>
                  )}
                </>
              ) : (
                <p className="text-amber-600 text-sm">
                  لم تحدد الإدارة قيمة العربون حتى الآن.
                </p>
              )}
            </div>

            {/* Payment Choice */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-7 mt-6">
              <h2 className="text-xl font-bold mb-5">اختر طريقة السداد</h2>

              <div className="space-y-4">
                {/* Deposit Option */}
                <label
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 transition ${
                    paymentChoice === "deposit"
                      ? "border-[#ca397d] bg-[#ca397d]/5"
                      : "border-gray-200"
                  } ${
                    !canPayDeposit
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentChoice"
                    value="deposit"
                    checked={paymentChoice === "deposit"}
                    onChange={() => setPaymentChoice("deposit")}
                    disabled={!canPayDeposit}
                    className="mt-1 accent-[#ca397d]"
                  />

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between gap-2">
                      <span className="font-bold text-gray-900">
                        دفع العربون فقط
                      </span>

                      <span className="font-bold text-[#ca397d]">
                        {DEPOSIT_AMOUNT} جنيه
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      دفع العربون المحدد من الإدارة الآن، واستكمال باقي المبلغ
                      لاحقًا.
                    </p>

                    {canPayDeposit && (
                      <p className="text-sm mt-2 text-gray-600">
                        المبلغ المتبقي: {remainingAmount} جنيه
                      </p>
                    )}
                  </div>
                </label>

                {/* Full Payment Option */}
                <label
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition ${
                    paymentChoice === "full"
                      ? "border-[#ca397d] bg-[#ca397d]/5"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentChoice"
                    value="full"
                    checked={paymentChoice === "full"}
                    onChange={() => setPaymentChoice("full")}
                    className="mt-1 accent-[#ca397d]"
                  />

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between gap-2">
                      <span className="font-bold text-gray-900">
                        دفع كامل المبلغ
                      </span>

                      <span className="font-bold text-[#ca397d]">
                        {total} جنيه
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      سداد قيمة الطلب بالكامل دون وجود مبلغ متبقٍ.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-7 mt-6">
              <h2 className="text-xl font-bold mb-5">وسيلة الدفع</h2>

              <div className="border-2 border-[#ca397d] bg-[#ca397d]/5 rounded-xl p-5 flex items-center gap-4">
                <span className="text-3xl">💳</span>

                <div>
                  <p className="font-bold text-gray-900">الدفع بالفيزا فقط</p>

                  <p className="text-sm text-gray-500 mt-1">
                    الدفع الإلكتروني باستخدام البطاقة البنكية.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Payment Summary */}
            <div className="bg-[#171717] text-white rounded-2xl p-5 sm:p-7 mt-6">
              <h2 className="text-xl font-bold mb-5">ملخص المبلغ المستحق</h2>

              <div className="flex justify-between items-center gap-3 mb-4">
                <span className="text-gray-300">قيمة الطلب</span>

                <span>{total} جنيه</span>
              </div>

              <div className="flex justify-between items-center gap-3 mb-5">
                <span className="text-gray-300">طريقة السداد</span>

                <span>
                  {paymentChoice === "deposit" ? "العربون فقط" : "كامل المبلغ"}
                </span>
              </div>

              <div className="border-t border-gray-600 pt-5 flex flex-wrap justify-between items-center gap-3">
                <span className="font-bold text-lg">المطلوب دفعه الآن</span>

                <span className="text-2xl md:text-3xl font-bold text-[#ca397d]">
                  {paymentAmount} جنيه
                </span>
              </div>

              <button
                onClick={handlePayment}
                className="w-full mt-7 bg-[#ca397d] text-white py-4 rounded-xl font-bold hover:bg-[#ad2868] transition"
              >
                المتابعة للدفع بالفيزا 💳
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                سيتم تفعيل الدفع الإلكتروني بعد ربط بوابة الدفع بالفيزا.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
