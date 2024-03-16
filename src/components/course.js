import React from "react";
import courses from "../assets/images/course.jpg";
export default function course() {
  return (
    <div className="flex flex-col m-10">
      <h1 className="text-center font-semibold text-3xl mb-4 text-purple-600">
        Most Bought Courses
      </h1>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mb-4 hover:shadow-2xl">
        <img className="w-full" src={courses} alt="Sunset in the mountains" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">
            My Learning as a Journalist
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 p-4 flex space-x-6 justify-center items-center ">
          <p className="font-semibold">Price - $99/-</p>
          <button className="bg-purple-600 p-2 text-white rounded-xl w-32 hover:bg-purple-500">
            Buy Now
          </button>
        </div>
      </div>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl">
        <img className="w-full" src={courses} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Be The Best Journalist</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 p-4 flex space-x-6 justify-center items-center ">
          <p className="font-semibold">Price - $69/-</p>
          <button className="bg-purple-600 p-2 text-white rounded-xl w-32 hover:bg-purple-500">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
