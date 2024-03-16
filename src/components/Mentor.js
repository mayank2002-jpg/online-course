import React from "react";
import mentor from "../assets/images/mentor.jpg";
import social from "../assets/images/linkedien.png";
export default function Mentor() {
  return (
    <>
      <h1
        id="mentor"
        className="container mx-auto text-3xl font-bold text-center mb-4 md:text-6xl"
      >
        Meet <span className="text-purple-600"> Mr. Arun</span> - The Mentor
      </h1>
      <div className="text-center mb-10">
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
      </div>
      <div className="p-4 md:flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-10 text-center hover:shadow-2xl ">
          <img className="w-full" src={mentor} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Arun Khurrana</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-4 flex items-center space-x-4 justify-center mb-4">
            <img className="w-10 cursor-pointer" src={social} alt="" />
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </>
  );
}
