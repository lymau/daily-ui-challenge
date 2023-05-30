export default function Day2() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen py-20">
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 w-3/5 mx-auto">
          <div className="col-span-7 flex flex-col gap-5 p-10">
            <h1 className="font-bold text-lg">Payment Details</h1>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className=" text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  className="py-2 px-4 border-2 rounded-lg focus:border-blue-400 outline-none"
                  id="email"
                  placeholder="johndoe@example.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cc" className=" text-gray-500">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  className="py-2 px-4 border-2 rounded-lg focus:border-blue-400 outline-none"
                  id="cc"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="expiry" className=" text-gray-500">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="py-2 px-4 border-2 rounded-lg focus:border-blue-400 outline-none"
                    id="expiry"
                    placeholder="mm/yy"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="cvv" className=" text-gray-500">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="py-2 px-4 border-2 rounded-lg focus:border-blue-400 outline-none"
                    id="cvv"
                    placeholder="XXX"
                  />
                </div>
              </div>

              {/* promo code */}
              <div className="flex gap-2">
                <input id="promo" type="checkbox" />
                <label className="text-gray-400" htmlFor="promo">
                  I've a promo code
                </label>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="text-gray-400">Subtotal</p>
                  <p className="text-sky-700 font-bold text-lg">$96</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Platform Fee</p>
                  <p className="text-sky-700 font-bold text-lg">$4</p>
                </div>

                <hr />

                <div className="flex justify-between">
                  <p className="text-gray-400">Total Amount</p>
                  <p className="text-sky-700 font-bold text-xl">$100</p>
                </div>
              </div>

              <button className="bg-sky-500 text-white py-3 rounded-lg">
                Make Payment
              </button>
            </form>
          </div>

          <div className="col-span-5 py-10 pr-10">
            <div className="flex flex-col items-center justify-center gap-5 h-full rounded-lg bg-sky-100 p-5 ">
              <p className="font-bold text-3xl text-center">
                Professional Plan
              </p>

              <p className="text-5xl font-bold text-sky-600 text-center">
                $96{" "}
                <span className="text-2xl font-bold text-gray-700">/month</span>
              </p>

              <ul className="self-start flex flex-col gap-2 px-5 list-disc mt-10">
                <li className="text-gray-700">
                  All features in{" "}
                  <span className="font-bold">basic included</span>
                </li>
                <li className="text-gray-700">
                  Easy and flexible business with{" "}
                  <span className="font-bold">invoice management</span>
                </li>
                <li className="text-gray-700">
                  Full time <span className="font-bold">customer support</span>
                </li>
                <li className="text-gray-700">
                  <span className="font-bold">20 TB </span> cloud storage
                </li>
              </ul>

              <a
                href="#"
                className="underline underline-offset-2 mt-5 font-bold"
              >
                Change plan?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
