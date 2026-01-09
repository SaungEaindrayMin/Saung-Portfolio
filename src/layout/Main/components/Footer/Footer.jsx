import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/ui/container";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border text-foreground py-16 mt-auto">
      <Container className="text-center flex flex-col items-center gap-8">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="uppercase text-sm md:text-base tracking-wide text-muted-foreground font-mono"
          once
        >
          If you want to connect, my inbox is always open.
        </TextAnimate>

        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary"
        >
          Let's Talk
        </TextAnimate>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-medium text-muted-foreground uppercase">
          {["Home", "About", "Work", "Contact Me"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 mt-2">
          <a
            href="https://github.com/SaungEaindrayMin"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/saung-eaindray-min-028161313"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground/50 mt-6 tracking-widest">
          © {new Date().getFullYear()} SaungEaindrayMin. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
