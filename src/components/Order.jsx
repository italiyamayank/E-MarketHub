import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <div className="my-[100px]">
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-col gap-9 text-center">
            <p className="font-medium text-xl">Oreder placed successfully</p>
            <p className="">You may go home page.</p>
          </div>
          <div className="">
            <Link to={"/"}>
              <button
                className="bg-black w-[254px] h-[56px] rounded-md text-white"
                type="button"
              >
                Back to home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
