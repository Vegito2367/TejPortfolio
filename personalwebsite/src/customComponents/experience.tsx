// sections/Experiences.tsx
import ExperienceItem from "@/customComponents/experienceItems";

const experiences = [
  { 
    role: "Research Engineer", 
    company: "Blakemore Lab - KU", 
    duration: "Feb. 2024 – Present", 
    description: "Developed data engineering pipelines to process and visualize atomic properties of 1500+ structures. Automated crystallographic analysis, reducing processing time from 6 months to 5 minutes." 
  },
  { 
    role: "VP Engineering and Education", 
    company: "KU Blockchain Institute (KUBI)", 
    duration: "Aug. 2023 – Apr. 2024", 
    description: "Led bi-weekly blockchain and web development workshops. Engineered smart contracts for KUBI’s DAO, logging 500+ hours of club participation." 
  },
  { 
    role: "Software Engineering Intern", 
    company: "Security Benefit", 
    duration: "Jun. 2023 – Dec. 2023", 
    description: "Automated Sailpoint access management, saving 100 hours annually. Developed and maintained ETL processes using Python and AWS (S3) to support internal and consumer applications." 
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="py-12 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
}
