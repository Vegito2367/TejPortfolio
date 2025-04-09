
import { FC } from "react";
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  wins?: string;
}


const ProjectCard: FC<ProjectCardProps> = ({ title, description, techStack, link, wins }) => {
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
        {wins && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 relative overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-400 to-yellow-300 
      p-0.5 rounded-lg shadow-lg">

              <p className="text-yellow-300 text-xs md:text-sm leading-relaxed font-medium
  tracking-wide bg-gray-900/80 p-2 rounded border-l-2 border-orange-400
  shadow-inner flex items-center">
                {wins}
              </p>
            </div>
          </motion.div>
        )}
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
