import { Project } from "@/models/Projects";
import connectDB from "./mongodb";


export async function getProjects() {
  try {
    await connectDB();

    const projects = await Project.find().lean().exec();

    const results = projects.length;

    return {
      projects,
      results,
    };
  } catch (error) {
    return { error };
  }
}

