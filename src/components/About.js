import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="w-full h-full flex flex-col justify-center items-center md:px-20 px-5">
        <div className="max-w-[800px] w-full sm:grid grid-cols-2 gap-10">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl border-b-4 inline font-bold border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[800px] w-full sm:grid grid-cols-2 gap-10">
          <div className="pb-8 pl-4">
            <p className="text-3xl text-right">
              Hi, I'm Mathu, happy to meet you here. Please have a look around!!
            </p>
          </div>
          <div className="pb-8 pl-4">
            I'm passionate about coding, app building. I specialize in creating
            web applications and all you different application that you see here
            is almost unique and created only for my recruiter to let know my
            experience and what I can do.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
