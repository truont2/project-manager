import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

// Interface: a structure that defines the contract in your application, It defines the syntax for classes to follow.
interface ProjectListProps {
  projects: Project[];
}
// function takes in data which is the type of projectlistProps which is a object with value of project arrays
function ProjectList({ projects }: ProjectListProps) {
  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      <ProjectCard project={project}></ProjectCard>
    </div>
  ));
  return <div className="row">{items}</div>;
}

export default ProjectList;
