// components/ExperienceItem.tsx
import { FC } from "react";
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ role, company, duration, description }) => {
  return (
    <motion.div 
      className="group relative pl-6 border-l-4 border-orange-500 
        shadow-lg rounded-lg overflow-hidden 
        bg-gradient-to-br from-gray-800 to-gray-900 
        transition-all duration-300 
        hover:shadow-xl hover:border-orange-400
        dark:from-gray-900 dark:to-black
        mb-8 hover:scale-[1.02]"
    >
      <div 
        className="absolute -left-2 top-0 w-4 h-4 
          bg-orange-500 rounded-full"
      ></div>

      {/* Experience Details */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {role} 
          <span className="text-orange-400 ml-2">@ {company}</span>
        </h3>
        
        <p className="text-gray-400 font-medium text-sm md:text-base">
          {duration}
        </p>
        
        <p className="mt-2 text-gray-300 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
