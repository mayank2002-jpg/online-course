import React from "react";
import hero from "../assets/images/home-hero.jpg";
export default function Banner() {
  return (
    <>
      <div className="p-8 text-center">
        <h1 className="text-4xl font-semibold pb-6">
          <span className="text-purple-600">Improve</span> Your Skill with
          Different Way
        </h1>
        <p className="text-lg pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          debitis repudiandae quisquam molestiae, eum error facere pariatur
          voluptatibus omnis dignissimos ad animi nihil ducimus impedit deserunt
          nisi cupiditate reiciendis temporibus!
        </p>
        <button className="bg-purple-600 text-white p-3 rounded-lg w-60">
          Get Started Now
        </button>
        <img src={hero} alt="hero-img" />
      </div>
    </>
  );
}
