// components/ExperienceItem.tsx
import { FC } from "react";

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ role, company, duration, description }) => {
  return (
    <div className="relative pl-6 border-l-4 border-orange-500 mb-8 hover:scale-[1.01] transition-all duration-350">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
      <h3 className="text-2xl font-bold text-white">{role} <span className="text-orange-400">@ {company}</span></h3>
      <p className="text-gray-400 font-medium">{duration}</p>
      <p className="mt-2 text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default ExperienceItem;

