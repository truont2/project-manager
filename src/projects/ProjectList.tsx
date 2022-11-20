import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

import React, { useState } from "react";

// Interface: a structure that defines the contract in your application, It defines the syntax for classes to follow.
interface ProjectListProps {
  projects: Project[];
}
// function takes in data which is the type of projectlistProps which is a object with value of project arrays
function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    console.log(project);
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({})
  }

  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (<ProjectForm onCancel={cancelEditing}/>) : <ProjectCard project={project} onEdit={handleEdit} />}
    </div>
  ));
  return <div className="row">{items}</div>;
}

export default ProjectList;
