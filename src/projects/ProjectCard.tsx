import { Project } from "./Project";

// function takes in paramter which is a type string and returns a type of string
function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

// need to create an interface to define the properties that come into the component.
interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
      </section>
    </div>
  );
}

export default ProjectCard;
