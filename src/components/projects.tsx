"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import useSectionInView from "../../lib/hook";
import mongoose from "mongoose";
interface ProjectData {
  // Define the properties of your project data
  title: string;
  description: string;
  imageUrl: string;
  completed: boolean;
  tags: string[];
  _id: mongoose.Types.ObjectId | string;
  id: string;
}

const Projects = ({ projects }: { projects: ProjectData[] }) => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
