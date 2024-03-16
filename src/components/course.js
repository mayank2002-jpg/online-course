import React from "react";
import courses from "../assets/images/course.jpg";
import courses1 from "../assets/images/course1.webp";
export default function course() {
  return (
    <>
      <div
        id="course"
        className="container mx-auto flex flex-col m-10 items-center"
      >
        <h1 className="text-center font-semibold text-3xl m-8 text-purple-600 md:text-5xl">
          Most Bought Courses
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="items-center md:flex justify-center">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mb-4 hover:shadow-2xl md:mr-10">
            <img
              className="w-full"
              src={courses}
              alt="Sunset in the mountains"
            />
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
          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mb-4 hover:shadow-2xl">
            <img
              className="w-full"
              src={courses1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">
                All In One Jounarlism Course
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 p-4 flex space-x-6 justify-center items-center ">
              <p className="font-semibold">Price - $169/-</p>
              <button className="bg-purple-600 p-2 text-white rounded-xl w-32 hover:bg-purple-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
