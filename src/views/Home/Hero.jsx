import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/Saung Eaindray Min's CV.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Saung_Eaindray_Min_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="absolute top-1/3 -left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-chart-1/30 to-chart-4/30 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-r from-chart-4/20 to-chart-1/20 blur-[120px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm sm:text-base text-primary/90 mb-4 tracking-wide"
        >
          &gt; Building Experiences for the Web
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl text-primary font-semibold leading-tight tracking-tight"
        >
          Saung Eaindray Min
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light"
        >
          Frontend Developer & Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed"
        >
          I craft clean, interactive, and accessible web experiences that bring
          design and code together beautifully.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <Button asChild size="lg" className="rounded-full text-base px-8 h-12">
            <a href="/work">View Projects</a>
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            size="lg"
            className="rounded-full text-base px-8 h-12 gap-x-2"
          >
            Download Resume
            <FaDownload />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
