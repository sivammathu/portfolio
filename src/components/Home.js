import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-pink-400 pb-2 font-bold">
          Welcome to my site. I'm,
        </h1>
        <h2 className="text-white text-4xl">Mathusudhanan Ravindran,</h2>
        <p className="pt-4 text-[#c6c6c6] max-w[700px]">
          Full-stack developer holding experience in React, Node, Express,
          Tailwind, MongoDB, SQLite, Playwright, VBA, etc. Having this site to
          show my experience and few demo projects to let know level of
          experience in each unit specified here.
        </p>
        <div className="pt-5">
          <button className="gap-2 rounded border-2 group py-4 px-6 flex items-center hover:bg-pink-600 text-white hover:border-pink-600 duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
