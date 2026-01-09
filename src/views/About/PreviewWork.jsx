import React from "react";

const PreviewWork = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#111111] via-[#2A2A2A] to-[#111111] min-h-screen flex flex-col items-center gap-10 lg:gap-20">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center relative py-[10%] gap-10 font-serif leading-tight">
        
        <div className="w-full md:w-1/2 text-center space-y-10 md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl italic text-[#FF758F] drop-shadow-md">
            A Developer’s Journey
          </h1>

          <img
            src="/images/Cat.png"
            className="hidden lg:block absolute -bottom-3 w-32 h-32 opacity-80"
            alt="Decorative Cat"
          />
        </div>

        <div className="w-full md:w-1/2 text-[#FAFAFA] space-y-11">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#FF758F] font-medium">
            I'm a passionate web developer with a love for building seamless
            website experiences.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="space-y-2">
              <p className="font-semibold text-[#FAFAFA]">Coding the Future</p>
              <p className="text-[#5A5A5A]">
                A Creative Journey Through Web Development
              </p>
            </div>
            <p className="text-[#FAFAFA]/90">
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
