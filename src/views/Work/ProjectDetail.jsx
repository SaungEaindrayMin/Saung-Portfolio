import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
];

const toSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find((p) => toSlug(p.title) === projectId);

  if (!project) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-3 bg-purple-700 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-purple-700 hover:underline"
      >
        ← Back to Projects
      </button>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.imgSrc}
        alt={project.title}
        className="w-full rounded-lg shadow-md mb-6"
      />
      <p className="text-lg mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-purple-700 text-white rounded-full px-4 py-2"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Add more detailed info here if you want */}
    </div>
  );
};

export default ProjectDetail;
