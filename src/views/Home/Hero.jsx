import React from "react";
import { Marquee } from "@/components/magicui/marquee";

const Hero = () => {
  return (
    <section className="w-full bg-white bg-gradient-to-r from-[#fff1f2] via-[#e0f7fa]/[.4] to-[#e8f5e9] min-h-screen flex flex-col items-center gap-10 lg:gap-20">
      <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center relative min-h-[80vh]">
        <div className="text-center text-[#5e548e] lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight z-10">
          <p className="italic">Creative</p>
          <p className="font-bold uppercase">Web Developer</p>
          <p className="italic">
            Crafting <span className="font-bold uppercase">Interactive</span>
          </p>
          <p className="font-bold uppercase">Experiences</p>
        </div>

        {/* <div className="relative w-full max-w-[500px]">
          <img
            src="https://cdn.prod.website-files.com/66ba0620465e7f7a0a12b268/66c44e0d80e69f1103f4cfee_Home%20Hero%20Sectionpng.avif"
            className="w-full h-auto object-cover"
            alt="Hero Image"
          />
        </div> */}
      </div>

      <div className="relative w-full text-[#5e548e] py-5">
        <Marquee
          pauseOnHover
          className="[--duration:10s] text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider"
        >
          Let's Connect • Let's Connect • Let's Connect • Let's Connect •
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
