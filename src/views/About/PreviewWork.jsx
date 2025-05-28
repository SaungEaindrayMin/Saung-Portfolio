import { section } from "motion/react-client";
import React from "react";

const PreviewWork = () => {
  return (
    <section className="w-full bg-white bg-gradient-to-r from-[#fff1f2] via-[#e0f7fa]/[.4] to-[#e8f5e9] min-h-screen flex flex-col items-center gap-10 lg:gap-20">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center relative py-[10%] gap-10 font-serif leading-tight">
        <div className="w-full md:w-1/2 text-center space-y-10 text-gray-800 md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl italic">
            A Developer’s Journey
          </h1>

          <img
            src="/images/Cat.png"
            className="hidden lg:block absolute -bottom-3 w-30 h-30"
            alt=""
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-700 space-y-11">
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            I'm a passionate web developer with a love for building seamless
            website experiences.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 mb-20">
            <div className="space-y-2">
              <p className="font-semibold">Coding the Future</p>
              <p>A Creative Journey Through Web Development</p>
            </div>
            <p>
              Here, I aim to share my development journey, inspirations, and the
              innovative world that exists within my code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewWork;
