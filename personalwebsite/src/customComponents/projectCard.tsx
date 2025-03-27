
import { FC } from "react";
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}


const ProjectCard: FC<ProjectCardProps> = ({ title, description, techStack, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gradient-to-br from-gray-900 to-black 
        rounded-xl shadow-lg transition-all duration-300 
        hover:shadow-2xl hover:shadow-orange-500/30 
        hover:scale-[1.03] border border-gray-800 
        hover:border-orange-400 group"
    >
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl text-white font-bold mb-2 
          transition-colors duration-300 
          group-hover:text-orange-400">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs md:text-sm bg-gray-800 
                text-orange-300 px-3 py-1 rounded-full 
                font-medium transition-all duration-300
                hover:bg-orange-400 hover:text-white"

            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
