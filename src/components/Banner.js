import React from "react";
import hero from "../assets/images/home-hero.jpg";
export default function Banner() {
  return (
    <>
      <div className="container mx-auto px-10 md:flex justify-around items-center mt-10">
        <div className="p-8 text-center md:flex flex-col items-start">
          <h1 className="text-4xl font-semibold pb-6 md:text-6xl text-left">
            <span className="text-purple-600">Master </span> the Art of
            Journalism with Our Online Courses
          </h1>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          </div>
          <p className="text-lg pb-6 w-96 md:w-auto text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            debitis repudiandae quisquam molestiae, eum error facere pariatur
            voluptatibus omnis dignissimos ad animi nihil ducimus impedit
            deserunt nisi cupiditate reiciendis temporibus!
          </p>
          <button className="bg-purple-600 text-white p-3 rounded-lg w-60 hover:bg-purple-500">
            Get Started Now
          </button>
        </div>

        <img className="md:h-96" src={hero} alt="hero-img" />
      </div>
    </>
  );
}
