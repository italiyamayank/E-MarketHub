import React from "react";
import { useContexts } from "../Context/Context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { checkout, cartTotal } = useContexts();

  return (
    <div className="m-6">
      <div className="px-6">
        <div className="">
          Account / My Account / Product/ View Cart/ CheckOut
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
        {/* <div className="md:w-[60%] bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-3xl font-semibold  mb-6">Billing Details</h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-600 mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-gray-600 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-600 mb-2">
                Street Address*
              </label>
              <input
                type="text"
                id="address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apartment" className="block text-gray-600 mb-2">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-gray-600 mb-2">
                  Town/City*
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-600 mb-2">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">
                <input type="checkbox" className="mr-2" />
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div> */}
        <div className="md:w-[40%] h-fit bg-white p-6 rounded-lg shadow-md mt-8 md:mt-0">
          <div className="">
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>
            <div className="space-y-4 mb-4">
              {checkout.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center mt-5 p-5 rounded-md shadow"
                >
                  <span className="flex gap-5 items-center ">
                    <img className="w-12" src={product.image} alt="" />
                    <span> {product.title} </span>
                  </span>
                  <span className="text-nowrap">{`₹ ${parseInt(
                    product.price * product.quantity
                  )}`}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Subtotal:</span>
                <span>₹{parseInt(cartTotal)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total:</span>
                <span>₹{parseInt(cartTotal)}</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col">
                  <div className="">
                    <input
                      type="radio"
                      id="bank"
                      name="payment-method"
                      className="mr-2"
                    />
                    <label htmlFor="bank">Bank</label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="cod"
                      name="payment-method"
                      className="mr-2"
                    />
                    <label htmlFor="cod">Cash on delivery</label>
                  </div>
                </div>
                <div className="flex">
                  <img
                    src="/src/assets/img/Bkash.png"
                    alt="Bkash"
                    className="w-8 ml-2"
                  />
                  <img
                    src="/src/assets/img/Visa.png"
                    alt="Visa"
                    className="w-8 ml-2"
                  />
                  <img
                    src="/src/assets/img/Mastercard.png"
                    alt="Mastercard"
                    className="w-8 ml-2"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center max-sm:flex-col gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-300 p-2 rounded w-2/3 max-sm:w-full"
                />
                <button className="bg-black text-white font-bold py-2 px-4 rounded max-sm:mt-2 ">
                  Apply Coupon
                </button>
              </div>
              <div className="">
                <Link to={"order"}>
                  <button className="bg-black text-white font-bold py-2 px-4 rounded w-full flex justify-center mt-4">
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
