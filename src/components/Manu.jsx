import React, { useEffect, useState } from "react";
import { useContexts } from "../Context/Context";
import { Link } from "react-router-dom";
import "flowbite";

const Manu = () => {
  // const dummy = [
  //   {
  //     id: "1",
  //     image: "image",
  //     title: "title",
  //     name: "hi",
  //     price: 321,
  //     discount: 60,
  //     rating: { rate: 3, count: 4 },
  //   },
  // ];
  // const [product, setProduct] = useState(dummy, []);
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

  const {
    displayedProducts,
    product,
    showAll,
    setShowAll,
    loading,
    wishlist,
    toggleWishlist,
    addToCart,
    Product_Details,
  } = useContexts();

  return (
    <div id="tops" className="mb-10 px-20 max-sm:px-1 ">
      <div className="flex flex-col py-7 gap-32 ">
        <div className="flex gap-2 max-sm:justify-center">
          <div className=" border-r border-[#00000041] w-[20%] h-fit max-sm:hidden">
            <div className="flex flex-col gap-5 pr-4 ">
              <span className="flex justify-between">
                <div>Woman’s Fashion</div>
                <img src="/src/assets/icons/DropDown.png" alt="DropDown" />
              </span>
              <span className="flex justify-between">
                <div>Men’s Fashion</div>
                <img src="/src/assets/icons/DropDown.png" alt="DropDown" />
              </span>
              <div>Electronics</div>
              <div>Home & Lifestyle</div>
              <div>Medicine</div>
              <div>Sports & Outdoor</div>
              <div>Baby’s & Toys</div>
              <div>Groceries & Pets</div>
              <div>Health & Beauty</div>
            </div>
          </div>

          <div className=" flex justify-center  w-[80%] ">
            <div className="w-[892px] h-[334] text-white bg-black px-12 rounded-md ">
              <div className="flex justify-between">
                <div className="flex flex-col gap-7 justify-center w-[42%]">
                  <span className="flex items-center gap-7">
                    <img src="/src/assets/img/Apple.png" alt="apple" />
                    <div>iPhone 14 Series</div>
                  </span>
                  <h1 className="font-semibold leading-[60px] tracking-wide text-[48px]">
                    Up to 10% off Voucher
                  </h1>
                  <div className="flex gap-2">
                    <p className="border-b border-white w-fit ">Shop Now</p>
                    <img
                      src="/src/assets/icons/arrow-right.png"
                      alt="arrow-right"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <img src="/src/assets/img/slid_image.png" alt="slid_image" />
                </div>
              </div>
            </div>
          </div>

          {/* <div
            id="default-carousel"
            class="relative w-full"
            data-carousel="static"
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div className="absolute flex justify-center h-full w-[80%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <div className="w-[892px] h-[334] text-white bg-black px-12 rounded-md ">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-7 justify-center w-[42%]">
                        <span className="flex items-center gap-7">
                          <img src="/src/assets/img/Apple.png" alt="apple" />
                          <div>iPhone 14 Series</div>
                        </span>
                        <h1 className="font-semibold leading-[60px] tracking-wide text-[48px]">
                          Up to 10% off Voucher
                        </h1>
                        <div className="flex gap-2">
                          <p className="border-b border-white w-fit ">
                            Shop Now
                          </p>
                          <img
                            src="/src/assets/icons/arrow-right.png"
                            alt="arrow-right"
                          />
                        </div>
                      </div>
                      <div className="pt-8">
                        <img
                          src="/src/assets/img/slid_image.png"
                          alt="slid_image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div className="absolute flex justify-center h-full w-[80%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <div className="w-[892px] h-[334] text-white bg-black px-12 rounded-md ">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-7 justify-center w-[42%]">
                        <span className="flex items-center gap-7">
                          <img src="/src/assets/img/Apple.png" alt="apple" />
                          <div>iPhone 14 Series</div>
                        </span>
                        <h1 className="font-semibold leading-[60px] tracking-wide text-[48px]">
                          Up to 10% off Voucher
                        </h1>
                        <div className="flex gap-2">
                          <p className="border-b border-white w-fit ">
                            Shop Now
                          </p>
                          <img
                            src="/src/assets/icons/arrow-right.png"
                            alt="arrow-right"
                          />
                        </div>
                      </div>
                      <div className="pt-8">
                        <img
                          src="/src/assets/img/slid_image.png"
                          alt="slid_image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
            </div>
            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div> */}
        </div>

        <section>
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-20 max-md:flex-col">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="w-5 h-10 bg-black rounded-md"></div>
                  <p className="self-center text-black font-semibold">
                    Today’s
                  </p>
                </div>
                <div className="">
                  <p className="text-5xl font-semibold">Flash Sales</p>
                </div>
              </div>
              <div className="self-end flex gap-3 text-center">
                <div className="self-end flex gap-3">
                  <span className="flex flex-col font-bold">
                    Days
                    <span className="font-bold text-4xl">03</span>
                  </span>
                  <span className="self-center">
                    <img
                      className=""
                      src="/src/assets/icons/semiclone.png"
                      alt="semiclone"
                    />
                  </span>
                </div>
                <div className="self-end flex gap-3">
                  <span className="flex flex-col font-bold">
                    Hours
                    <span className="font-bold text-4xl">23</span>
                  </span>
                  <span className="self-center">
                    <img
                      className=""
                      src="/src/assets/icons/semiclone.png"
                      alt="semiclone"
                    />
                  </span>
                </div>
                <div className="self-end flex gap-3">
                  <span className="flex flex-col font-bold">
                    Minutes
                    <span className="font-bold text-4xl">19</span>
                  </span>
                  <span className="self-center">
                    <img
                      className=""
                      src="/src/assets/icons/semiclone.png"
                      alt="semiclone"
                    />
                  </span>
                </div>
                <div className="self-end flex gap-3">
                  <span className="flex flex-col font-bold">
                    Seconds
                    <span className="font-bold text-4xl">56</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="self-end ">
              <div className="flex gap-5">
                <img src="./src/assets/icons/left.png" alt="left" />
                <img src="./src/assets/icons/rigth.png" alt="rigth" />
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
                  <span className="absolute right-3 top-3 flex flex-col gap-2 z-50">
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
                  <Link to={"product_Details"}>
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
          <div className=" border-b border-black opacity-50 mt-14"></div>
        </section>
      </div>
      <section>
        <div className="">
          <div className="flex justify-between max-sm:flex-wrap">
            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="w-5 h-10 bg-black rounded-md"></div>
                  <p className="self-center text-black font-semibold">
                    Categories
                  </p>
                </div>
                <div className="">
                  <p className="text-5xl font-semibold">Browse By Category</p>
                </div>
              </div>
            </div>
            <div className="self-end">
              <div className="flex gap-5">
                <img src="./src/assets/icons/left.png" alt="left" />
                <img src="./src/assets/icons/rigth.png" alt="rigth" />
              </div>
            </div>
          </div>
          <div className="pt-14 flex justify-evenly flex-wrap">
            <img
              className="hover:invert hover:bg-white hover:rounded-md mb-2"
              src="/src/assets/img/Category-Phone.png"
              alt="image"
            />
            <img
              className="hover:invert hover:bg-white hover:rounded-md mb-2"
              src="/src/assets/img/Category-Phone (1).png"
              alt="image"
            />
            <img
              className="hover:invert hover:bg-white hover:rounded-md mb-2"
              src="/src/assets/img/Category-Phone (2).png"
              alt="image"
            />
            <img
              className="hover:invert hover:bg-white hover:rounded-md mb-2"
              src="/src/assets/img/Category-Phone (3).png"
              alt="image"
            />
            <img
              className="hover:invert hover:bg-white hover:rounded-md mb-2"
              src="/src/assets/img/Category-Phone (4).png"
              alt="image"
            />
          </div>
        </div>
        <div className=" border-b border-black opacity-50 mt-14"></div>
      </section>

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

      <div className="relative bg-black text-white px-8 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <div className="text-gray-400">Categories</div>
            <h1 className="text-4xl font-bold">
              Enhance Your Music Experience
            </h1>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold">23</div>
                <div className="text-gray-400">Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold">05</div>
                <div className="text-gray-400">Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold">59</div>
                <div className="text-gray-400">Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold">35</div>
                <div className="text-gray-400">Seconds</div>
              </div>
            </div>
            <button className="mt-6 px-4 py-2 bg-white text-black rounded-md">
              Buy Now!
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex relative">
            <img
              className=""
              src="/src/assets/img/Ellipse 23.png"
              alt="Ellipse"
            />
            <img
              src="/src/assets/img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
              alt="JBL Speaker"
              className="w-full rounded-lg absolute p-8"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="mt-10">
          <div className="flex justify-between">
            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="w-5 h-10 bg-black rounded-md"></div>
                  <p className="self-center text-black font-semibold">
                    Our Products
                  </p>
                </div>
                <div className="">
                  <p className="text-5xl font-semibold">Explore Our Products</p>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div role="status" className=" flex justify-center items-center">
              <svg
                aria-hidden="true"
                className="  w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="">Loading...</span>
            </div>
          ) : (
            <>
              {displayedProducts.length > 1 ? (
                <div className="grid grid-cols-4 gap-5 mt-10 justify-center max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 ">
                  {displayedProducts.map((product) => (
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
                          <div className="opacity-50">
                            ({product.rating.count})
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="font-bold text-3xl flex justify-center items-center mt-5">
                    Server Error...
                  </div>
                </>
              )}
              <div className="flex justify-center mt-12">
                {!showAll && (
                  <button
                    className="bg-black text-white w-56 h-12 rounded-md"
                    type="button"
                    onClick={() => setShowAll(true)}
                  >
                    View All Products
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <section>
        <div className="mt-10">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              <div className="w-5 h-10 bg-black rounded-md"></div>
              <p className="self-center text-black font-semibold">Featured</p>
            </div>
            <div className="">
              <p className="text-5xl font-semibold">New Arrival</p>
            </div>
          </div>
          <div className="flex gap-8 mt-14">
            <div className="w-[570px] h-[600px] bg-black  rounded-md flex pt-[70px] text-white">
              <img
                className="relative flex justify-center"
                src="/src/assets/img/ps5-slim-goedkope-playstation_large 1.png"
                alt=""
              />
              <div className="absolute flex flex-col self-end pl-8 gap-4 pb-8">
                <p className="font-semibold text-2xl ">PlayStation 5</p>
                <p className="w-[242px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <p>Shop Now</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="">
                <img
                  className="w-vw"
                  src="/src/assets/img/Frame 685.png"
                  alt=""
                />
              </div>
              <div className="flex gap-8 flex-wrap">
                <img
                  className="w-vw"
                  src="/src/assets/img/Frame 686.png"
                  alt=""
                />
                <img
                  className="w-vw"
                  src="/src/assets/img/Frame 687.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-32 flex justify-center gap-20 flex-wrap">
          <div className="flex flex-col items-center gap-6">
            <p>
              <img src="/src/assets/img/Services.png" alt="" />
            </p>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-bold text-xl">FREE AND FAST DELIVERY</p>
              <p className="">Free delivery for all orders over ₹140</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p>
              <img src="/src/assets/img/Services (1).png" alt="" />
            </p>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-bold text-xl">24/7 CUSTOMER SERVICE</p>
              <p className="">Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p>
              <img src="/src/assets/img/Services (2).png" alt="" />
            </p>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-bold text-xl">MONEY BACK GUARANTEE</p>
              <p className="">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
      <div className=" sticky flex justify-end">
        <a href="#tops" className="">
          <img
            className=""
            src="/src/assets/icons/Fill with Up Arrow.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Manu;
