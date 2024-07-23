import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContexts } from "../Context/Context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const { isAuthenticated, logout } = useContexts();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="">
      <div className="flex bg-black text-white items-center justify-center  gap-2  ">
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p className="cursor-pointer mr-3">
          <Link to={"#"}>ShopNow</Link>
        </p>
      </div>
      <div className="flex items-center justify-around p-4 border-b border-b-[#00000041] flex-wrap ">
        <h2 className="font-bold max-sm:hidden">
          <Link to={"/"}>E-MarketHub</Link>
        </h2>
        <div className="max-lg:hidden ">
          <ul className="flex gap-12">
            <li className="cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"contact"}>Contact</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"about"}>About</Link>
            </li>
            {!!isAuthenticated && (
              <li className="cursor-pointer">
                <NavLink to={"login"}>Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              className="w-64 h-9 bg-[#F5F5F5] px-5 py-2 rounded"
              placeholder="What are you looking for?"
              type="text"
              name="search"
              id="search"
            />
            <button type="button">
              <img
                className="absolute right-2 top-1"
                src="/src/assets/icons/Search.png"
                alt="search"
              />
            </button>
          </div>
          <button type="button" className="">
            <Link to={"wishlist"}>
              <img src="/src/assets/icons/Wishlist.png" alt="wishlist" />
            </Link>
          </button>
          <button type="button" className="">
            <Link to={"cart"}>
              <img src="/src/assets/icons/Add to card.png" alt="cart" />
            </Link>
          </button>
          {!isAuthenticated && (
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="">
                <img
                  className="rounded-full"
                  src="/src/assets/icons/user.png"
                  alt="user"
                />
              </button>

              {isOpen && (
                <div className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg backdrop-blur-[100px] text-white bg-[#777378] ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 flex flex-col gap-1">
                    <Link
                      to={"account"}
                      className="flex items-center px-4 py-2 text-sm leading-5 "
                    >
                      <img
                        className="pr-1"
                        src="/src/assets/icons/user (1).png"
                        alt="Manage My Account"
                      />
                      Manage My Account
                    </Link>
                    <Link
                      to={"my_order"}
                      className="flex items-center px-4 py-2 text-sm leading-5 "
                    >
                      <img
                        className="pr-3"
                        src="/src/assets/icons/icon-mallbag.png"
                        alt="My Order"
                      />
                      My Order
                    </Link>
                    <Link
                      to={"#"}
                      className="flex items-center px-4 py-2 text-sm leading-5 "
                    >
                      <img
                        className="pr-3"
                        src="/src/assets/icons/icon-cancel.png"
                        alt="My Cancellations"
                      />
                      My Cancellations
                    </Link>
                    <Link
                      to={"#"}
                      className="flex items-center px-4 py-2 text-sm leading-5 "
                    >
                      <img
                        className="pr-3"
                        src="/src/assets/icons/Icon-Reviews.png"
                        alt="My Reviews"
                      />
                      My Reviews
                    </Link>

                    <div
                      className="flex items-center px-4 py-2 text-sm leading-5 cursor-pointer"
                      onClick={() => logout()}
                    >
                      <img
                        className="pr-3 "
                        src="/src/assets/icons/Icon-logout.png"
                        alt="Logout"
                      />
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
