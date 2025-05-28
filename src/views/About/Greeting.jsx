import React from "react";

const Greeting = () => {
  return (
    <section className="w-full bg-white bg-gradient-to-r from-[#fff1f2] via-[#e0f7fa]/[.4] to-[#e8f5e9] min-h-screen flex items-center py-20">
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Optional: Add image if needed */}
        {/* <div className="flex justify-center">
          <img
            src="/images/Cat.png"
            className="max-w-sm md:max-w-md rounded-xl shadow-lg"
            alt="Smiling Cat"
          />
        </div> */}

        <div className="text-center md:text-left space-y-6">
          <p className="uppercase text-sm md:text-base tracking-widest text-[#999] font-mono">
            Hi there...
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#6C4F8D] leading-tight">
            It's nice to meet you,
          </h1>
          <p className="text-base md:text-lg text-[#444] leading-relaxed">
            As a web developer and problem solver, I’m dedicated to crafting
            seamless digital experiences, optimizing performance, and bringing
            ideas to life through clean, efficient code. My work is driven by a
            passion for innovation, user-centric design, and building impactful
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
