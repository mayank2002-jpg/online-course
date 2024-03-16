import React from "react";
import hero2 from "../assets/images/home-feature.webp";
export default function Features() {
  return (
    <>
      <div className="container mx-auto md:flex flex-col items-center justify-around">
        <img className="px-6 md:h-96" src={hero2} alt="" />
        <div>
          <h1 className="text-3xl font-semibold p-4 mt-4 text-center md:text-6xl">
            Make your <span className="text-purple-600">Learning</span>{" "}
            Enjoyable
          </h1>

          <p className="text-sm px-6 md:w-auto">
            Set the way of learning according to your wishes with some of the
            benefits that you get us, so you on enjoy the lessons that we
            provide.
          </p>
        </div>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className="md:flex flex-row flex-wrap justify-center">
          <div className=" p-4 shadow-md rounded-lg m-4 bg-white overflow-hidden text-sm transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-95 hover:duration-500 ...">
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="purple"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="text-xl font-medium">Easy Accessable</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              eius.
            </p>
          </div>
          <div className=" p-4 shadow-md rounded-lg m-4 bg-white overflow-hidden text-sm transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-95 hover:duration-500 ...">
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="purple"
                className="w-6 h-6"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="text-xl font-medium">More Affordable Cost</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              eius.
            </p>
          </div>
          <div className=" p-4 shadow-md rounded-lg m-4 bg-white overflow-hidden text-sm transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-95 hover:duration-500 ...">
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="purple"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="text-xl font-medium">Flexible Study Time</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              eius.
            </p>
          </div>
          <div className=" p-4 shadow-md rounded-lg m-4 bg-white overflow-hidden text-sm transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-95 hover:duration-500 ...">
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="purple"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="text-xl font-medium">Consultation With Mentor</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              eius.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
