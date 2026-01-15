import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const EducationAndWorkJourney = () => {
  const educationItems = [
    {
      year: "2025 - Present",
      title: "B.Sc (Hons) Computing",
      institution: "University of Greenwich (UK) at KMD College",
      description:
        "Final year student deepening expertise in software engineering and web development.",
    },
    {
      year: "2024 - 2025",
      title: "NCC Level 5 Diploma in Computing",
      institution: "KMD College",
      description:
        "Gained technical knowledge in software development, data analysis, and network management.",
    },
    {
      year: "2023 - 2024",
      title: "NCC Level-4 Diploma in Computing",
      institution: "KMD College",
      description:
        "Developed fundamental skills in problem-solving, programming, and system analysis.",
    },
  ];

  const workItems = [
    {
      year: "2025 - Present",
      title: "Web Developer",
      company: "MYDAY THU KYWAL CO., Ltd",
      description:
        "Developing core modules for the WeDay social app, including admin panels for user and content management.",
    },
    {
      year: "2024",
      title: "Web Developer Intern",
      company: "SoftComm Technology Co., Ltd.",
      description:
        "Hands-on experience in full-stack development, working on real-world projects and API integrations.",
    },
    {
      year: "2023 - Present",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      description:
        "Building custom responsive web applications for various clients, ensuring high performance and SEO.",
    },
  ];

  const TimelineItem = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0 border-l border-border"
    >
      <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
        <Badge variant="secondary" className="w-fit">
          {item.year}
        </Badge>
      </div>
      <p className="text-sm font-medium text-foreground/80 mb-2">
        {item.institution || item.company}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );

  return (
    <Section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <h2 className="text-3xl font-serif font-bold text-primary">
                Education
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-2">
              {educationItems.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 flex items-center gap-3">
              <h2 className="text-3xl font-serif font-bold text-primary">
                Experience
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-2">
              {workItems.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default EducationAndWorkJourney;
