import React from "react";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Course from "./components/course";
import Features from "./components/Features";
import Testimonals from "./components/Testimonals";
import Mentor from "./components/Mentor";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Timer /> */}
      <Course />
      <Features />
      <Testimonals />
      <Mentor />
      <Footer />
    </>
  );
}

export default App;
