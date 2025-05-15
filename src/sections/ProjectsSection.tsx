import TerminalWindow from "../Components/TerminalWindow";
import  projects  from "../data/projects";

const ProjectsSection = () => (
  <TerminalWindow title="> Projects">
    <ul className="list-disc pl-5">
      {projects.map((project, index) => (
        <li key={index}>
          <strong>{project.name}</strong>: {project.description}
        </li>
      ))}
    </ul>
  </TerminalWindow>
);

export default ProjectsSection;
