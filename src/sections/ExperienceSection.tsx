import TerminalWindow from "../Components/TerminalWindow";
import { experience } from "../data/experience";

const ExperienceSection = () => (
  <TerminalWindow title="> Experience">
    <ul className="list-disc pl-5">
      {experience.map((exp, index) => (
        <li key={index}>
          <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
        </li>
      ))}
    </ul>
  </TerminalWindow>
);

export default ExperienceSection;
