import React from "react";
import { Link } from "react-router-dom";
import { useContexts } from "../Context/Context";

const Cart = () => {
  const {
    product,
    cart,
    toggleWishlist,
    wishlist,
    removeFromCart,
    addToCart,
    CheckOut,
    cartTotal,
    Product_Details,
  } = useContexts();

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex justify-center my-16">
          <p>No items in cart</p>
        </div>
      ) : (
        <div className="flex flex-col mb-10">
          <div className="py-16 px-20">
            <div>Home / Cart</div>
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
                    <th className="py-4 px-6 text-left">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td
                        className="py-4 px-6 "
                        onClick={() => Product_Details(product)}
                      >
                        <Link to={"/product_Details"} className="flex items-center">
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
                        <input
                          className="border w-14 ring-1 ring-black rounded"
                          type="number"
                          min={"1"}
                          // max={"1000"}
                          value={product.quantity}
                          onChange={(e) =>
                            addToCart(
                              product,
                              e.target.value - product.quantity
                            )
                          }
                        />
                      </td>
                      <td className="py-4 px-6">
                        {`₹ ${parseInt(product.price * product.quantity)}`}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <img
                            className="object-none"
                            src="/src/assets/icons/Fill Eye (1).png"
                            alt="delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-4">
              <button className="border py-2 px-4 rounded">
                <Link to={"/"}> Return To Shop</Link>
              </button>
              <button className="border py-2 px-4 rounded">Update Cart</button>
            </div>
            <div className="flex justify-between items-start mt-10 max-sm:flex-wrap">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-300 p-2 rounded"
                />
                <button className="bg-black text-white font-bold py-2 px-4 rounded">
                  Apply Coupon
                </button>
              </div>
              <div className="border p-8 rounded w-96">
                <h2 className="font-bold">Cart Total</h2>
                <div className="flex justify-between mt-2">
                  <span>Subtotal:</span>
                  <span>₹{parseInt(cartTotal)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Total:</span>
                  <span>₹{parseInt(cartTotal)}</span>
                </div>
                {cart.find((product) => product.quantity >= 1) ? (
                  <Link to={"checkout"}>
                    <button
                      className={`bg-black text-white font-bold py-2 px-4 rounded mt-4 w-full`}
                      onClick={() => CheckOut(cart)}
                    >
                      Process to checkout
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <section>
        <div className="m-10">
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="w-5 h-10 bg-black rounded-md"></div>
                  <p className="self-center text-black font-semibold">
                    This Month
                  </p>
                </div>
                <div className="">
                  <p className="text-5xl font-semibold">
                    Best Selling Products
                  </p>
                </div>
              </div>
            </div>
            <div className="self-end">
              <div className="flex justify-center">
                <button
                  className="bg-black text-white w-40 h-14 rounded-md"
                  type="button"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-8 mt-10 overflow-x-auto">
            {product.map((product) => (
              <div
                key={product.id}
                className="min-w-[270px] min-h-[370px] flex flex-col gap-4 overflow-hidden group"
              >
                <div className="min-h-[250px] bg-[#F5F5F5] flex justify-center relative rounded">
                  {product.discount ? (
                    <span className="w-14 h-7 bg-red-500 text-white rounded flex justify-center items-center text-sm absolute left-3 top-3">
                      {`- ${product.discount}%`}
                    </span>
                  ) : (
                    ""
                  )}
                  <span className="absolute right-3 top-3 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product)}
                    >
                      <img
                        className={
                          wishlist.find((item) => item.id === product.id)
                            ? "invert"
                            : ""
                        }
                        src={"/src/assets/icons/Fill Heart.png"}
                        alt="wishlist"
                      />
                    </button>
                    <button type="button">
                      <img
                        className=""
                        src="/src/assets/icons/Fill Eye.png"
                        alt="eye"
                      />
                    </button>
                  </span>
                  <Link to={"/product_Details"}>
                    <img
                      onClick={() => Product_Details(product)}
                      className="object-contain h-[250px]"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product);
                      }}
                      className={"py-2 px-4 w-full"}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>

                <div className="">
                  <span className="text-nowrap overflow-hidden">
                    {product.title}
                  </span>
                  <div className="flex gap-3">
                    ₹{product.price}
                    <div className="line-through opacity-50">₹1000</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((star, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < product.rating.rate
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.913c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.975-2.89a1 1 0 00-1.175 0l-3.975 2.89c-.784.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.975-2.89c-.783-.57-.38-1.81.588-1.81h4.913a1 1 0 00.95-.69L9.049 2.927z"></path>
                        </svg>
                      ))}
                    </div>
                    <span>({product.rating.count})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
