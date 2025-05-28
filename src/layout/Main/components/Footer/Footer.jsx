import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FEFEFA] border-t border-[#eaeaea] text-[#222] py-16 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-8">

        <TextAnimate
          animation="blurInUp"
          by="character"
          className="uppercase text-sm md:text-base tracking-wide text-[#7a7a7a] font-mono"
          once
        >
          Ready for your next project?
        </TextAnimate>

        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#A68BBE]"
        >
          Let's Talk
        </TextAnimate>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-medium text-[#555] uppercase">
          {["Home", "About", "Work", "Contact Me"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-[#A68BBE] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 mt-2">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6 text-[#555] hover:text-[#A68BBE] transition-colors duration-200" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="h-6 w-6 text-[#555] hover:text-[#A68BBE] transition-colors duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="h-6 w-6 text-[#555] hover:text-[#A68BBE] transition-colors duration-200" />
          </a>
        </div>

        <p className="text-xs text-[#999] mt-6 tracking-wider">
          © {new Date().getFullYear()} Saung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
