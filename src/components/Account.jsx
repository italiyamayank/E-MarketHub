import React from "react";

const Account = () => {
  return (
    <div className=" min-h-screen mb-10">
      <div className="py-16 px-20 flex justify-between">
        <div className="">Home / My Account</div>
        <div className="">Welcome! Md Rimel</div>
      </div>
      <div className="flex ">
        <div className=" w-96 gap-5 flex flex-col items-center">
          <div className="">
            <div className="font-bold mb-3">Manage My Account</div>
            <div className="ml-5">
              <div className="">My Profile</div>
              <div className="">Address Book</div>
              <div className="">My Payment Options</div>
            </div>
          </div>
          <div className="-ml-6">
            <div className="font-bold mb-3  ">My Orders</div>
            <div className="ml-6 ">
              <div className="">My Returnse</div>
              <div className="">My Cancellations</div>
            </div>
          </div>
          <div className="-ml-20 font-bold">My WishList</div>
        </div>

        <div className="p-9 max-sm:ml-64 flex flex-col gap-7 shadow rounded-md w-full mx-10">
          <div className="text-xl">Edit Your Profile</div>
          <form className="flex flex-col gap-5" action="">
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="">First Name</label>
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="enter First Name"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="">Last Name</label>
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="enter Last Name"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="">Email</label>
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="enter Email"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="">Address</label>
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="enter Address"
                />
              </div>
            </div>
            <div className=" gap-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Password Changes</label>
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="Current Passwod"
                />
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="New Passwod"
                />
                <input
                  className="bg-[#F5F5F5] px-5 py-2 rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="Confirm New Passwod"
                />
              </div>
            </div>
            <div className="flex gap-6 self-end">
              <button className="" type="button">
                Cancel
              </button>
              <button
                className="bg-black text-white w-[150px] h-[40px] rounded-md"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
