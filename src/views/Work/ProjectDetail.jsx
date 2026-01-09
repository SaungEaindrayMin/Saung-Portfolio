import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProjects } from "./projectsData";

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
          className="mt-4 px-6 py-3 bg-[#FF758F] text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-[#555555] hover:underline"
      >
        ← Back to Projects
      </button>

      <h1 className="text-4xl font-bold text-[#262424] mb-6">
        {project.title}
      </h1>

      <div
        className={`grid gap-4 mb-6 ${
          project.images.length === 1
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
        }`}
      >
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} ${index + 1}`}
            className={`w-full object-cover rounded-lg shadow-md ${
              project.images.length === 1 ? "h-100" : "h-70"
            }`}
          />
        ))}
      </div>

      <p className="text-lg mb-4 text-[#555555]">{project.description}</p>
      {project.detailsDescription && (
        <p className="text-sm mb-6 text-gray-400">
          {project.detailsDescription}
        </p>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#2F4F4F]/10  text-[#2F4F4F] rounded-full px-4 py-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
