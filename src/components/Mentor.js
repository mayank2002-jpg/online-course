import React from "react";
import mentor from "../assets/images/mentor.jpg";
import social from "../assets/images/linkedien.png";
export default function Mentor() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Meet <span className="text-purple-600"> Mr. Arun</span> - The Mentor
      </h1>
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
  );
}
