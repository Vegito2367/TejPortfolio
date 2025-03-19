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
    <div className="border-l-4 border-blue-500 pl-6 mb-8">
      <h3 className="text-xl font-semibold">{role} @ {company}</h3>
      <p className="text-gray-500">{duration}</p>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

export default ExperienceItem;
