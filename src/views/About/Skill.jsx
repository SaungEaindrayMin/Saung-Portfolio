import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiMysql,
  SiGit,
  SiPostman,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-sky-500 text-3xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
    { name: "ShadCN UI", icon: <SiShadcnui className="text-violet-500 text-3xl" /> },
  ],
  Backend: [
    { name: "Laravel", icon: <FaLaravel className="text-red-600 text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit className="text-orange-500 text-3xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" /> },
  ],
};

export default function SkillSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff1f2] via-[#e0f7fa]/[.4] to-[#e8f5e9] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-teal-500 text-transparent bg-clip-text">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 inline-block pb-1 px-4">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full"
                >
                  <Card className="group transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg">
                    <CardContent className="flex flex-col items-center py-6 px-3 space-y-3">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
