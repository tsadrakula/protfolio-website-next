import Projects from "@/components/projects";
import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { getProjects } from "../../lib/projects-bs";

export default async function Home() {
  const { projects } = await getProjects();

  if (!projects) {
    throw new Error("Failed to get projects!");
  }
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
