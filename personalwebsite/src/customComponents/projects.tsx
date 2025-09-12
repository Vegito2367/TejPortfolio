// sections/Projects.tsx
import ProjectCard from "@/customComponents/projectCard";
import Link from "next/link";

const projects = [
    { 
      title: "EirAI", 
      description: "A service designed to reduce administrative bloat for healthcare professionals and medical coders. EirAI converts patient-doctor conversations into structured SOAP notes using speech-to-text, identifies relevant ICD codes, and cross-references a dataset of prior insurance approvals to suggest the most approvable treatment paths. The system indexes ~73,000 ICD codes and simulates real-world conditions using a dataset with over 1.5 million rows.", 
      techStack: ["Python", "Whisper", "GPT-4", "Google Gemini","PostgreSQL", "Next.js", "Framer-Motion", "Tailwind CSS"], 
      link: "https://github.com/aelxxs/EirAI",
      wins: "Theme Track 2nd Place - HackKU 2025"
    },
    { 
      title: "Decentralized Artificial Intelligence Marketplace (DAIM)", 
      description: "A platform where developers can share open-source AI models without losing ownership or fearing platform obsolescence. DAIM provides structured access to AI models with performance metrics for seamless integration and customization. Contributors can securely publish and attribute their work while leveraging generative AI for enhanced model insights.", 
      techStack: ["Pinata IPFS", "Next.js", "Autonomy API", "TypeScript", "Google Gemini API","Tailwind CSS","Ethers.js"], 
      link: "https://github.com/Vegito2367/DAIM",
      wins: "Autonomys AI Track Winner - Midwest Blockathon 2025"
    },
  
  {
    title: "Development of Cheminformatics Pipelines to analyze Crown Ethers",
    description: "Currently developing novel analysis techniques using graph theory to analyze the properties of crown ethers. This will be used to predict the binding affinity of crown ethers to various metals.",
    techStack: ["Python", "Matplotlib", "Pandas", "NumPy", "Plotly"],
    link: "https://github.com/Vegito2367/CrownEtherProject"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-6xl font-bold">Projects</h2>
        <Link href="/projects" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300">
            View All Projects
        </Link>
      </div>
      <div className="flex flex-col space-y-10">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
