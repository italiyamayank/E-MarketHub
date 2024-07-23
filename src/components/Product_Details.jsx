import React, { useState } from "react";
import { useContexts } from "../Context/Context";
import { Link } from "react-router-dom";

const Product_Details = () => {
  const {
    product,
    wishlist,
    toggleWishlist,
    addToCart,
    Product_Details,
    product_Details,
  } = useContexts();

  const { isAuthenticated, navigate } = useContexts();

  // const [quantity, setQuantity] = useState([1]);
  // const dummy = [{ id: "1", image: "image", title: "title", count: "11" }];
  // const [product, setProduct] = useState([]);
  // const [showAll, setShowAll] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const productsData = await response.json();
  //       setProduct(productsData);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadProducts();
  // }, []);
  // const displayedProducts = showAll ? product : product.slice(0, 8);

  // const [quantity, setQuantity] = useState(1);

  // const handleQuantityChange = (change) => {
  //   setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  //   addToCart(product)
  // };

  return (
    <div>
      <div className="py-16 px-20 max-sm:px-0">
        <div className="">
            <div className="max-sm:hidden">Account / Gaming / Havic HV G-92 Gamepad</div>
          {product_Details.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row p-4">
              <div className=" md:w-1/2 p-4">
                <div className=" flex justify-center">
                  <img
                    src={product.image}
                    alt=""
                    className="w-[50%]  rounded-md"
                  />
                </div>
                <div className="flex justify-evenly space-x-4 mt-4">
                  <img
                    src={product.image}
                    alt=""
                    className="w-1/6 rounded-md"
                  />
                  <img
                    src={product.image}
                    alt=""
                    className="w-1/6 rounded-md"
                  />
                  <img
                    src={product.image}
                    alt=""
                    className="w-1/6 rounded-md"
                  />
                  <img
                    src={product.image}
                    alt=""
                    className="w-1/6 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <div className="flex items-center mb-2">
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
                  <span className="ml-4 text-green-600">In Stock</span>
                </div>
                <p className="text-xl font-semibold mb-4">{`₹ ${product.price}`}</p>
                <p className="mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-6 my-3">
                  <div className=" flex gap-3 items-center">
                    <span className="font-bold">Colours:</span>
                    <div className="flex space-x-2 ">
                      <button className="w-5 h-5 bg-gray-200 border border-gray-400 rounded-full"></button>
                      <button className="w-5 h-5 bg-black border border-gray-400 rounded-full"></button>
                      <button className="w-5 h-5 bg-gray-400 border border-gray-400 rounded-full"></button>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center max-sm:flex-wrap">
                    <span className="font-bold">Size:</span>
                    <div className="flex space-x-2">
                      <button className="py-1 px-3 border border-gray-400 rounded">
                        XS
                      </button>
                      <button className="py-1 px-3 border border-gray-400 rounded">
                        S
                      </button>
                      <button className="py-1 px-3 border border-gray-400 rounded">
                        M
                      </button>
                      <button className="py-1 px-3 border border-gray-400 rounded">
                        L
                      </button>
                      <button className="py-1 px-3 border border-gray-400 rounded">
                        XL
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  {!isAuthenticated ? (
                    <Link to={"/cart"}>
                      <button
                        className="bg-black text-white py-2 px-4 rounded"
                        // className={"py-2 px-4 w-full"}
                        type="button"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        By Now
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="bg-black text-white py-2 px-4 rounded"
                      // className={"py-2 px-4 w-full"}
                      type="button"
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      By Now
                    </button>
                  )}
                  <button
                    className=""
                    type="button"
                    onClick={() => toggleWishlist(product)}
                  >
                    <img
                      className={
                        wishlist.find((product) => product.id === product.id)
                          ? "invert"
                          : ""
                      }
                      src={"/src/assets/icons/Fill Heart.png"}
                      alt="wishlist"
                    />
                  </button>
                </div>
                <div className="mt-10 px-4 py-6 border">
                  <div className="border-b border-gray-300 py-2 flex gap-3 items-center">
                    <img
                      src="/src/assets/icons/icon-delivery.png"
                      alt="delivery"
                    />
                    <div className="">
                      <p className="font-bold">Free Delivery</p>
                      <p>
                        <a href="#" className="text-blue-500">
                          Enter your postal code for Delivery Availability
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className=" py-2 flex gap-3 items-center">
                    <img src="/src/assets/icons/Icon-return.png" alt="return" />
                    <div className="">
                      <p className="font-bold">Return Delivery</p>
                      <p>
                        Free 30 Days Delivery Returns.
                        <a href="#" className="text-blue-500">
                          Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section>
          <div className="mt-10">
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
                            wishlist.find(
                              (product) => product.id === product.id
                            )
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
                    <img
                      onClick={() => Product_Details(product)}
                      className="object-contain h-[250px] cursor-pointer"
                      src={product.image}
                      alt={product.name}
                    />
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
      </div>
    </div>
  );
};

export default Product_Details;
