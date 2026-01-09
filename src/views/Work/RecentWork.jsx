import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { categories, projects } from "./projectsData";

const RecentWork = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const toSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Section className="py-24 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">
              Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A collection of projects exploring design, development, and
              digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground font-medium"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/work/${toSlug(project.title)}`)}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <div className="flex items-center justify-center overflow-hidden rounded-xl h-[300px]">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="max-w-full max-h-full"
                  />

                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs text-muted-foreground border-border/50"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
};

export default RecentWork;
