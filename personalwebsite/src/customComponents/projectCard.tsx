// components/ProjectCard.tsx
import { FC } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, techStack, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="text-sm bg-blue-600 text-white px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
