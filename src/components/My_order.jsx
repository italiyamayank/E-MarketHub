import React from "react";
import { useContexts } from "../Context/Context";
import { Link } from "react-router-dom";

const My_order = () => {
  const {
    checkout,
    cartTotal,
    cart,
    removeFromCart,
    Product_Details,
  } = useContexts();

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex justify-center my-16">
          <p>No order</p>
        </div>
      ) : (
        <div className="flex flex-col mb-10">
          <div className="py-16 px-20">
            <div>Home / order</div>
          </div>
          <div className="mx-14">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="w-full border-b">
                    <th className="py-4 px-6 text-left">Product</th>
                    <th className="py-4 px-6 text-left">Price</th>
                    <th className="py-4 px-6 text-left">Quantity</th>
                    <th className="py-4 px-6 text-left">Subtotal</th>
                    <th className="py-4 px-6 text-left">Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {checkout.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td
                        className="py-4 px-6 flex items-center"
                        onClick={() => Product_Details(product)}
                      >
                        <Link to={"/product_Details"}>
                          <img
                            src={product.image}
                            alt=""
                            className="w-16 h-16 mr-4"
                          />
                          {product.title}
                        </Link>
                      </td>
                      <td className="py-4 px-6">₹{product.price}</td>
                      <td className="py-4 px-6">
                        <div className="border w-14 ring-1 ring-black rounded">
                          {product.quantity}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {`₹ ${parseInt(product.price * product.quantity)}`}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default My_order;
