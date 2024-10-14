import React from "react";
import Header from "../component/Header";
import { FaArrowLeft } from "react-icons/fa6";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="flex  p-[40px]  justify-between">
        <div className="bg-gray-200 ml-[40px] rounded-xl">
          <div className="p-4 bg-white rounded-tl-xl ml-[500px] mt-[700px]">
            <div className="h-[50px] w-[50px] justify-center  items-center flex bg-black rounded-full">
              <FaArrowLeft className="flex rotate-45 text-3xl" color="white" />
            </div>
          </div>
        </div>
        <div className="c">
          <h1 className="capitalize text-7xl font-semibold ">
            <span className="text-orange-400">creativity</span> in the <br />
            digital world
          </h1>
          <p className="font-semibold text-lg mt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br /> industry. Lorem Ipsum has been the industry's standard dummy{" "}
            <br /> text ever since the
          </p>
          <button className="hover:bg-orange-400 border-2 mt-[20px] mr-[10px] border-black hover:border-white text-black p-[10px] hover:text-white rounded-full px-[30px]">
            Get In Touch
          </button>
          <button className="hover:bg-orange-400 border-2 border-black hover:border-white text-black p-[10px] hover:text-white rounded-full px-[30px]">
            More
          </button>
          <h1 className="capitalize mt-[30px] text-2xl font-semibold">
            Our Portfolio
          </h1>
          <div className="bg-gray-300 h-[200px] w-[400px] rounded-xl mt-[30px]"></div>
          <div className="flex items-center gap-5 mt-[40px]">
            <div className="h-[100px] w-[100px]  bg-gray-300 rounded-xl"></div>
            <h1 className="font-semibold">
              <span className="capitalize font-bold text-xl">new</span>
              <br />
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry. Lorem Ipsum has been <br /> the industry's
              standard dummy text ever since the
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
