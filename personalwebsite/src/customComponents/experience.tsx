// sections/Experiences.tsx
import ExperienceItem from "@/customComponents/experienceItems";

const experiences = [
  { 
    role: "Lead App Developer", 
    company: "CyPhy Labs, Center for Design and Research (CDR)", 
    duration: "Jun. 2024 – Present", 
    description: "Leading the Android/iOS app development for a smart mirror product; secured a $100,000+ order. Implementing a scalable communication system for 5000+ users using Swift, Kotlin, Firebase Cloud Messaging, PostgreSQL, and Docker." 
  },
  { 
    role: "Research Engineer", 
    company: "Blakemore Lab - KU", 
    duration: "Feb. 2024 – Present", 
    description: "Developed data engineering pipelines to process and visualize atomic properties of 1500+ structures. Automated crystallographic analysis, reducing processing time from 6 months to 5 minutes." 
  },
  { 
    role: "Software Engineering Intern", 
    company: "Security Benefit", 
    duration: "Jun. 2023 – Dec. 2023", 
    description: "Automated Sailpoint access management, saving 100 hours annually. Developed and maintained ETL processes using Python and AWS (S3) to support internal and consumer applications." 
  },
  { 
    role: "VP Engineering and Education", 
    company: "KU Blockchain Institute (KUBI)", 
    duration: "Aug. 2023 – Apr. 2024", 
    description: "Led bi-weekly blockchain and web development workshops. Engineered smart contracts for KUBI’s DAO, logging 500+ hours of club participation." 
  }
];

export default function Experiences() {
  return (
    <section id="experience" className="py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
}
