import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-black text-white p-10 relative">
      <div className="container mx-auto flex justify-between flex-wrap">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">E-MarketHub</h3>
          <div className="flex flex-col">
            <h4 className="font-semibold mt-2">Subscribe to</h4>
            <p>Get 10% off your first order</p>
            <span className="flex items-center">
              <input
                className="w-[217px] py-3 pl-4 pr-12 rounded-md bg-black text-white ring-white ring-1"
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <button className="-ml-10 p-2 bg-transparent" type="button">
                <img
                  className="w-6 h-6"
                  src="/src/assets/icons/icon-send.png"
                  alt=""
                />
              </button>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Support</h3>
          <div className="flex flex-col gap-2">
            <address className="not-italic">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </address>
            <a href="mailto:E-MarketHub@gmail.com">E-MarketHub@gmail.com</a>
            <a href="tel:+8801588889999">+88015-88888-9999</a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Quick Link</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Download And Shere</h3>
          <p>Save ₹3 with App New User Only</p>
          <div className="flex justify-between">
            <img src="/src/assets/icons/Qrcode 1.png" alt="QR Code" />
            <div className="flex flex-col gap-2">
              <img src="/src/assets/icons/playstore.png" alt="Google Play" />
              <img src="/src/assets/icons/appstore.png" alt="App Store" />
            </div>
          </div>
          
        </div>
      </div>
      <div className="text-center flex justify-between items-center pt-8">
        <p>&copy; Copyright 2024. All right reserved</p>
        <div className="flex gap-4 ">
            <a href="#">
              <img src="/src/assets/icons/Icon-Facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/Icon-Twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/icon-instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/Icon-Linkedin.png" alt="LinkedIn" />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
