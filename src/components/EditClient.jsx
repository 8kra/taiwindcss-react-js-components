import React from "react";
import { IoClose } from "react-icons/io5";
const EditClient = () => {
  return (
    <div className="w-[460px] p-6 bg-white rounded-2xl">
      <div className="flex justify-between py-2 items-center">
        <h1 className="text-xl font-semibold">Edit client</h1>
        <button className="p-2 rounded-full bg-gray-100 text-gray-500">
          <IoClose />
        </button>
      </div>

      <div className="my-5 p-4 bg-gray-50 flex justify-center space-x-8 items-center rounded-md">
        <img
          src="https://randomuser.me/api/portraits/men/24.jpg"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <button className="px-5 py-2 rounded-md bg-blue-100 text-blue-500 font-semibold">
          Change Image
        </button>
        <button className="px-5 py-2 rounded-md bg-red-100 text-red-500 font-semibold">
          Remove
        </button>
      </div>

      <form className="space-y-8">
        <div className="flex space-x-5">
          <div className="space-y-2">
            <label htmlFor="" className="font-medium">
              First Name
            </label>
            <input
              type="text"
              placeholder="Joe"
              className="w-full outline-0 p-2 bg-gray-50 focus:ring-2 focus:ring-violet-300 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="font-medium">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full outline-0 p-2 bg-gray-50 focus:ring-2 focus:ring-violet-300 rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="" className="font-medium">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-full outline-0 p-2 bg-gray-50 focus:ring-2 focus:ring-violet-300 rounded-lg"
          />
        </div>
        <button className="w-full bg-violet-600 text-white text-lg px-5 py-3 rounded-lg hover:bg-violet-800">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditClient;
