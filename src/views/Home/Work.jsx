import React, { useState } from "react";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Magic Of Flavour",
      description: "Artworks that tell engaging stories visually",
      imgSrc:
        "https://cdn.prod.website-files.com/66ba0621465e7f7a0a12b648/66c456561dfb6698e15d570d_faune-magazine-DQP03Vq78Z4-unsplash.avif",
    },
    {
      title: "My Day App",
      description: "A simple yet powerful daily planner app",
      imgSrc:
        "https://cdn.prod.website-files.com/66ba0621465e7f7a0a12b648/66c456725e8d29ab8559acfb_thought-catalog-_Xv89TMIazc-unsplash.avif",
    },
    {
      title: "Movie List",
      description: "A collection of must-watch movies",
      imgSrc:
        "https://cdn.prod.website-files.com/66ba0621465e7f7a0a12b648/66c457690094b215eecb4402_nmg-network-mObU0vid2FU-unsplash.avif",
    },
  ];

  return (
    <section className="w-full py-20 bg-white bg-gradient-to-r from-[#fff1f2] via-[#e0f2f1]/[.4] to-[#f3e5f5] transition-colors duration-500 ease-in-out">
      <div className="w-[90%] mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <p className="uppercase text-lg text-[#7c6c9c] tracking-wide">
            Crafting Web Experiences That Inform, Engage, and Inspire
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5e548e]">My Recent Work</h1>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 ease-in-out rounded-xl hover:bg-[#fdf6ff]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full md:w-1/2 rounded-lg shadow-md"
                />
                <div className="mt-6 md:mt-0 md:w-1/2 md:px-10 space-y-3">
                  <h1 className="text-2xl font-light font-serif text-[#5e548e]">
                    {project.title}
                  </h1>
                  <p className="text-lg text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-[#f8f9fa] text-[#4a4a4a] pt-2 px-5 py-2 rounded-lg shadow hover:scale-105 hover:bg-[#e3f2fd] transition-all">
            <p className="text-xl">See More</p>
            <img
              src="https://cdn.prod.website-files.com/66ba0620465e7f7a0a12b268/66c450200d53d63c92a5bb07_Cute%20Cat.svg"
              className="w-8 h-8"
              alt="See More"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
