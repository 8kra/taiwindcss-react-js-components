import React from "react";

// icons
import { FaStar, FaTrophy } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi2";

const UiCards = () => {
  return (
    <div className="space-y-4">
      {/* card one  */}
      <div className="w-[600px] bg-white rounded-2xl p-8 space-y-8">
        <div className="flex justify-between items-center space-x-4 mb-4">
          <div className="flex items-center space-x-4">
            <img
              src="/avatar.svg"
              alt=""
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h2 className="text-3xl font-bold">Frederick Wilson</h2>
              <p className="text-gray-600">Product Designer</p>
            </div>
          </div>
          <button className="px-8 py-2 bg-violet-500 text-lg text-white rounded-full">
            Hire
          </button>
        </div>

        <div className="flex items0center space-x-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-[2px] h-12 bg-violet-500"></div>
            <div className="p-2 bg-violet-600 text-white rounded-full">
              <FaTrophy size={20} />
            </div>
            <div className="w-[2px] h-12 bg-violet-100"></div>
          </div>

          <div className="w-full grid grid-cols-3 gap-5 mb-4">
            <div className="flex flex-col items-center bg-gray-50 text-gray-500 rounded-xl p-5 text-center justify-center">
              <FaStar size={28} />
              <p>+5 Years Exp</p>
            </div>
            <div className="flex flex-col items-center bg-gray-50 text-gray-500 rounded-xl p-5 text-center justify-center">
              <TbBriefcaseFilled size={28} />
              <p>24 Projects</p>
            </div>
            <div className="flex flex-col items-center bg-gray-50 text-gray-500 rounded-xl p-5 text-center justify-center">
              <HiUserGroup size={28} />
              <p>34.8K Followers</p>
            </div>
          </div>
        </div>
      </div>
      {/* card one  */}

      {/* card two  */}
      <div className="w-[600px] bg-white p-6 rounded-2xl flex items-center space-x-4">
        <img src="/logo.svg" alt="" className="w-24 h-24 rounded-xl" />

        <div className="w-full space-y-4">
          <div>
            <h2 className="text-xl font-bold">Apple's Products Design</h2>
            <p className="text-gray-600">Apple Inc. | 2023 - 2024</p>
          </div>
          <div className="flex justify-between">
            <p>www.apple.com</p>
            <a href="/" className="text-xl text-violet-600">
              Explore
            </a>
          </div>
        </div>
      </div>
      {/* card two  */}

      {/* card three  */}
      <div className="w-[600px] bg-white p-8 rounded-2xl grid grid-cols-3 gap-8">
        <img src="/pr1.svg" alt="product 1" className="rounded-2xl" />
        <img src="/pr2.svg" alt="product 2" className="rounded-2xl" />
        <img src="/pr3.svg" alt="product 3" className="rounded-2xl" />
      </div>
      {/* card three  */}
    </div>
  );
};

export default UiCards;
