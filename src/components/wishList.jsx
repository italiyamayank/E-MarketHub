import React from "react";
import { useContexts } from "../Context/Context";
import { Link } from "react-router-dom";
import axios from "axios";

const WishlistPage = () => {
  const { product, toggleWishlist, addToCart, Product_Details, wishlist } =
    useContexts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="">
          <p>No items in wishlist</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((product, id) => (
            <div
              key={id}
              className="min-w-[270px] min-h-[370px] flex flex-col gap-4 overflow-hidden group"
            >
              <div className="min-h-[250px] bg-[#F5F5F5] flex justify-center relative rounded">
                <span className="w-14 h-7 bg-red-500 text-white rounded flex justify-center items-center text-sm absolute left-3 top-3">
                  {product.discount || "-40%"}
                </span>
                <button
                  className="absolute right-3 top-3"
                  type="button"
                  onClick={() => toggleWishlist(product, id)}
                >
                  <img
                    className="object-none"
                    src="/src/assets/icons/Fill Eye (1).png"
                    alt="delete"
                  />
                </button>
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
                    onClick={() => addToCart(product)}
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
                    {[...Array(5)].map((count, index) => (
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
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.913c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.975-2.89a1 1 0 00-1.175 0l-3.975 2.89c-.784.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.975-2.89c-.783-.57-.38-1.81.588-1.81h4.913a1 1 0 00.95-.69l1.518-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <div className="opacity-50">({product.rating.count})</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {product.length !== 0 && (
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
                        onClick={() => addToCart(product)}
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
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.913c.969 0 1.371 1.24.588 1.81l-3.975 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.975-2.89a1 1 0 00-1.175 0l-3.975 2.89c-.784.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.975-2.89c-.783-.57-.38-1.81.588-1.81h4.913a1 1 0 00.95-.69l1.518-4.674z" />
                          </svg>
                        ))}
                      </div>
                      <div className="opacity-50">({product.rating.count})</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WishlistPage;
