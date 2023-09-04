"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "../../lib/hook";

const About = () => {
  const { ref } = useSectionInView("About", .95);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Business Administration</span>, I decided
        to change my career to programming. I am a self-taught{" "}
        <span className="font-medium">full-stack web developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My personal
        core stack is{" "}
        <span className="font-medium">
          React, Next.js(in progress), Node.js, Express, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently utilizing the{" "}
        <span className="font-medium">LAMP</span> stack at my job.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, playing guitar, and playing with my dogs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
        <span className="italic">When I am coding,</span> I am learning about
        different languages and frameworks Currently that is{" "}
        <span className="font-medium">C# and a deeper dive into Next.js</span>.
      </p>
    </motion.section>
  );
};

export default About;
