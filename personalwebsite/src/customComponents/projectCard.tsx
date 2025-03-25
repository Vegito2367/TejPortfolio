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
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-6 bg-gray-900 rounded-lg shadow-lg transition-all duration-300 
                 hover:shadow-orange-500 hover:scale-105 border border-gray-800 
                 hover:border-orange-400"
    >
      <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="text-sm bg-orange-400 text-white px-3 py-1 rounded-md font-semibold shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
