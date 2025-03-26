
import { FC } from "react";
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

// const ProjectCard: FC<ProjectCardProps> = ({ title, description, techStack, link }) => {
//   return (
//     <a 
//       href={link} 
//       target="_blank" 
//       rel="noopener noreferrer" 
//       className="p-6 bg-gray-900 rounded-lg shadow-lg transition-all duration-300 
//                  hover:shadow-orange-500 hover:scale-105 border border-gray-800 
//                  hover:border-orange-400"
//     >
//       <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
//       <p className="text-gray-400">{description}</p>

//       <div className="mt-4 flex flex-wrap gap-2">
//         {techStack.map((tech, index) => (
//           <span 
//             key={index} 
//             className="text-sm bg-orange-400 text-white px-3 py-1 rounded-md font-semibold shadow-md"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;




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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
