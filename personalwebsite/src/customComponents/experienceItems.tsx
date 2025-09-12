// // components/ExperienceItem.tsx
import { FC } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
  position: { top: string; left: string };
}

const ExperienceItem: FC<ExperienceItemProps> = ({ role, company, duration, description, logo, position }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-trigger animation every time it's in view
    threshold: 0.9,   // Trigger when 50% of the item is visible
  });

  const variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  return (
    <motion.div
      ref={ref}
      className="group absolute w-80 md:w-96"
      style={{ top: position.top, left: position.left }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {/* Central Node / Planet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`relative w-20 h-20 flex items-center justify-center transition-all duration-700 ${inView ? 'scale-100' : 'scale-75'}`}>
          {/* Glowing Aura */}
          <div className={`absolute inset-0 bg-orange-500 rounded-full blur-xl transition-opacity duration-700 ${inView ? 'opacity-75' : 'opacity-25'}`}></div>
          <img src={logo} alt={`${company} logo`} className="relative w-16 h-16 rounded-full border-2 border-orange-400" />
        </div>
      </div>

      {/* Experience Details - positioned relative to the node */}
      <motion.div 
        className="relative p-6 bg-black bg-opacity-50 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-white">
          {role} 
          <span className="text-orange-400 ml-2">@ {company}</span>
        </h3>
        <p className="text-gray-400 font-medium text-sm">
          {duration}
        </p>
        <p className="mt-2 text-gray-300 leading-relaxed text-base">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;