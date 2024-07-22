import React from "react";

const Contact = () => {
  return (
    <div className=" mb-16 px-[60px]">
      <div className="py-12">
        <div className="">Home / Cantact</div>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="flex flex-col w-[340px] bg-[#ffffff] shadow rounded-md p-7 gap-7">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img src="/src/assets/icons/icons-phone.png" alt="phone" />
              <p className="font-medium">Call To Us</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>
          <div className="border-b"></div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img src="/src/assets/icons/icons-phone.png" alt="phone" />
              <p className="font-medium">Write To US</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Email: customer@E-MarketHub.com</p>
              <p>Email: support@E-MarketHub.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  bg-[#ffffff] shadow rounded-md p-7 gap-7">
          <div className="flex gap-4">
            <input
              className="w-56 h-12 px-3 rounded-md bg-[#F5F5F5]"
              type="text"
              name=""
              id=""
              placeholder="your *"
            />
            <input
              className="w-56 h-12 px-3 rounded-md bg-[#F5F5F5]"
              type="text"
              name=""
              id=""
              placeholder="your *"
            />
            <input
              className="w-56 h-12 px-3 rounded-md bg-[#F5F5F5]"
              type="text"
              name=""
              id=""
              placeholder="your *"
            />
          </div>
          <div className="">
            <textarea
              className="p-3 rounded-md bg-[#F5F5F5] w-full h-[200px]"
              name=""
              id=""
              placeholder="Your Massage"
            ></textarea>
          </div>
          <div className=" flex justify-end">
            <button className="w-[200px] h-12 bg-black text-white rounded-md">
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
