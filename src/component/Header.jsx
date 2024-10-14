import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex p-[40px]  justify-between items-center">
        <div className="flex justify-between gap-5 items-center">
          <FaUserAlt className="text-[40px]" />
          <div className="flex p-[10px] rounded-full bg-slate-200 items-center">
            <h1 className="mr-[150px] ml-[20px]">Hammad Arif</h1>
            <div className="h-[40px] mr-[10px] w-[40px] bg-black rounded-full flex items-center justify-center">
              <IoCall color="white" className="text-[20px]" />
            </div>
            <div className="h-[40px] w-[40px] bg-slate-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between gap-7 items-center">
          <div className="flex bg-slate-200 p-3 rounded-full ">
            <input
              type="text"
              className="outline-none mr-[90px] pl-[20px] bg-slate-200"
              placeholder="Search"
            />
            <div className="h-[40px] w-[40px] bg-slate-500 rounded-full items-center flex justify-center text-white text-2xl font-bold">
              <FaSearch />
            </div>
          </div>
          <button className="bg-orange-400 py-[10px] text-white text-xl px-[50px] rounded-full">
            Menu
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
