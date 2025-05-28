import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const allProjects = [
  {
    title: "Magic Of Flavour",
    description: "Artworks that tell engaging stories visually",
    imgSrc:
      "https://cdn.prod.website-files.com/66ba0621465e7f7a0a12b648/66c456561dfb6698e15d570d_faune-magazine-DQP03Vq78Z4-unsplash.avif",
    tags: ["Art", "Design", "Visual Storytelling"],
  },
  {
    title: "My Day App",
    description: "A simple yet powerful daily planner app",
    imgSrc:
      "https://cdn.prod.website-files.com/66ba0621465e7f7a0a12b648/66c456725e8d29ab8559acfb_thought-catalog-_Xv89TMIazc-unsplash.avif",
    tags: ["App", "Productivity", "React"],
  },
  {
    title: "Movie List",
    description: "A collection of must-watch movies",
    imgSrc:
      "https://cdn.prod.website-files.com/66ba0621465e7f7a0a12b648/66c457690094b215eecb4402_nmg-network-mObU0vid2FU-unsplash.avif",
    tags: ["Movies", "Entertainment", "UI/UX"],
  },
  // Add more older projects here...
];

const RecentWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  // Separate recent (first 2) and previous works (rest)
  const recentProjects = allProjects.slice(0, 2);
  const previousProjects = allProjects.slice(2);

  // Helper to create URL slug
  const toSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#fff1f2] via-[#e0f2f1]/40 to-[#f3e5f5] transition-colors duration-500 ease-in-out">
      <div className="w-[90%] max-w-7xl mx-auto px-6 space-y-20">
        {/* Recent Work Section */}
        <div>
          <div className="text-center mb-12 space-y-3">
            <p className="uppercase text-lg text-[#7c6c9c] tracking-wide font-semibold">
              Latest Projects with Deep Dive
            </p>
            <h1 className="text-5xl font-serif font-semibold text-[#5e548e]">
              Recent Work
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {recentProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative flex-1 cursor-pointer rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate(`/work/${toSlug(project.title)}`)}  // <-- navigate on click
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h2 className="text-3xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium bg-purple-700 bg-opacity-70 text-white rounded-full px-4 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Work Section */}
        <div>
          <div className="text-center mb-12 space-y-3">
            <p className="uppercase text-lg text-[#7c6c9c] tracking-wide font-semibold">
              Explore More of My Journey
            </p>
            <h1 className="text-5xl font-serif font-semibold text-[#5e548e]">
              Previous Work
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {previousProjects.map((project, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredIndex(idx + 2)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate(`/work/${toSlug(project.title)}`)}  // <-- navigate on click
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
                >
                  <h2 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-purple-700 bg-opacity-70 text-white rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-3 bg-[#5e548e] text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:bg-[#7e72b8] transition-colors duration-300"
            aria-label="See More Projects"
          >
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
