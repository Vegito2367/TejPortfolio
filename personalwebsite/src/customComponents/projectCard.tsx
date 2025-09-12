
// import { FC } from "react";
// import { motion } from 'framer-motion';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   techStack: string[];
//   link: string;
//   wins?: string;
// }


// const ProjectCard: FC<ProjectCardProps> = ({ title, description, techStack, link, wins }) => {
//   return (
//     <motion.a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block p-8 bg-gradient-to-br from-gray-900 to-black 
//         rounded-xl shadow-lg transition-all duration-300 
//         hover:shadow-2xl hover:shadow-orange-500/30 
//         hover:scale-[1.03] border border-gray-800 
//         hover:border-orange-400 group"
//     >
//       <div className="space-y-4">
//         <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 
//           transition-colors duration-300 
//           group-hover:text-orange-400">
//           {title}
//         </h3>
//         {wins && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="mt-5 relative overflow-hidden"
//           >
//             <div className="bg-gradient-to-r from-orange-400 to-yellow-300 
//       p-1 rounded-lg shadow-lg">

//               <p className="text-yellow-300 text-sm md:text-md leading-relaxed font-medium
//   tracking-wide bg-gray-900/80 p-3 rounded border-l-2 border-orange-400
//   shadow-inner flex items-center">
//                 {wins}
//               </p>
//             </div>
//           </motion.div>
//         )}
//         <p className="text-gray-400 text-base md:text-lg leading-relaxed">
//           {description}
//         </p>
//         <div className="mt-6 flex flex-wrap gap-3">
//           {techStack.map((tech, index) => (
//             <motion.span
//               key={index}
//               className="text-sm md:text-base bg-gray-800 
//                 text-orange-300 px-4 py-2 rounded-full 
//                 font-medium transition-all duration-300
//                 hover:bg-orange-400 hover:text-white"

//             >
//               {tech}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </motion.a>
//   );
// };

// export default ProjectCard;
// components/ProjectCard.tsx
// components/ProjectCard.tsx
// components/ProjectCard.tsx

import { FC, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  wins?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, techStack, link, wins }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.5 });

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: "perspective(800px)",
      }}
      className="block p-8 bg-gradient-to-br from-gray-900 to-black 
        rounded-xl shadow-lg transition-all duration-300 
        hover:shadow-2xl hover:shadow-orange-500/30 
        border border-gray-800 
        group relative"
    >
      <motion.div
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            // THIS IS THE FINAL FIX
            (latest: number[]) => {
              const [x, y] = latest;
              return `radial-gradient(
                400px at ${x * 100 + 50}% ${y * 100 + 50}%, 
                rgba(255, 255, 255, 0.1), 
                transparent 80%
              )`;
            }
          )
        }}
        className="absolute inset-0 rounded-xl"
      />

      <div style={{ transform: "translateZ(50px)" }} className="space-y-4">
        <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 
          transition-colors duration-300 
          group-hover:text-orange-400">
          {title}
        </h3>
        {wins && (
          <div className="mt-5 bg-gradient-to-r from-orange-400 to-yellow-300 p-1 rounded-lg shadow-lg">
            <p className="text-yellow-300 text-sm md:text-md leading-relaxed font-medium
              tracking-wide bg-gray-900/80 p-3 rounded border-l-2 border-orange-400
              shadow-inner flex items-center">
              {wins}
            </p>
          </div>
        )}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
        <div style={{ transform: "translateZ(30px)" }} className="mt-6 flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-sm md:text-base bg-gray-800 
                text-orange-300 px-4 py-2 rounded-full 
                font-medium transition-colors duration-300
                group-hover:bg-orange-400 group-hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;