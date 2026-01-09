import React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center bg-background py-0">
      <Container className="text-center max-w-3xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm tracking-widest uppercase">
            Hello World
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary tracking-tight leading-tight mb-8">
            Nice to <span className="italic text-muted-foreground">meet</span> you.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a passionate web developer dedicated to crafting seamless digital
            experiences. I combine clean code with user-centric design to build
            solutions that matter.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};


export default Greeting;
