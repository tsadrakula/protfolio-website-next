import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "freeCodeCamp",
    location: "Remote",
    description:
      "I worked through freeCodeCamp's curriculum.After 6 months I found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Overland Park, KS",
    description:
      "I work as full-stack developer working on our API built in Laravel, and our websites built in PHP. I also spend time managing the CMS.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-Current",
  },
  {
    title: "Personal Growth",
    location: "Remote",
    description:
      "I am working through Next.js and implementing RESTful routes as well as learning Tailwind.css. So far Next.js is very freeing and fun to work in!",
    icon: React.createElement(FaReact),
    date: "Ongoing Development",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
  "Vue2",
  "C#",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Framer Motion",
] as const;