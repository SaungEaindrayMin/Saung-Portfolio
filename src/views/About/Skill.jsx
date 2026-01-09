import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiMysql,
  SiGit,
  SiPostman,
  SiMongodb,
  SiRedux,
  SiMui,
  SiFirebase,
  SiPrisma,
  SiFigma,
  SiTypescript,
  SiGithub,
} from "react-icons/si";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const skills = {
  Frontend: {
    description: "Building interactive and responsive UIs.",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "ShadCN", icon: <SiShadcnui className="text-foreground" /> },
      { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
    ],
  },
  Backend: {
    description: "Server-side logic and API integrations.",
    items: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
    ],
  },
  Database: {
    description: "Data management and storage solutions.",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-foreground" /> },
    ],
  },
  Tools: {
    description: "Workflow and collaboration tools.",
    items: [
      { name: "Github", icon: <SiGithub className="text-foreground" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
};

export default function SkillSection() {
  return (
    <Section className="py-24 bg-muted/30">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-sm uppercase tracking-widest border-primary/20">
            Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            The technologies and tools I use to build robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, { description, items }], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">{category}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1.5 rounded-md border border-border/50 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
