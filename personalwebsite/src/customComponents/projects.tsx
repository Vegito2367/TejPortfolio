// sections/Projects.tsx
import ProjectCard from "@/customComponents/projectCard";

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
  },
  {
    title: "Analysis of TFSI Crystallographic Structures",
    description: "Developed data engineering pipelines to efficiently process and visualize atomic properties of 1500+ structures. Reduced analysis time from 6 months to 5 minutes.",
    techStack: ["Python", "Matplotlib", "Pandas", "NumPy", "Plotly"],
    link: "https://tfsi-research.vercel.app"
  },
  {
    title: "Optimized RFE Feature Selection with LogRes",
    description: "Developed a custom Logistic Regression model for binary classification on heart attack risk data, optimizing feature selection while maintaining 94% accuracy.",
    techStack: ["Python", "NumPy", "StandardScaler"],
    link: "https://github.com/Vegito2367/LogResFeatureSelection"
  },
  {
    title: "MathVenture",
    description: "A speed math platform that dynamically generates math problems and analytics using a custom math engine.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    link: "https://math-venture.com/"
  },
  {
    title: "Email Classifier",
    description: "Performed sentiment analysis on 30,000 emails using TfIDF vectorization and developed a classifier with 97.8% accuracy.",
    techStack: ["Python", "simpleGmail", "Sklearn", "Matplotlib", "NumPy", "Pandas"],
    link: "https://github.com/Vegito2367/EmailClassifier"
  },
  {
    title: "Tree",
    description: "Developed a strategy game that promotes sustainability in an entertaining medium. Implemented Unity ScriptableObjects to create different tree templates and designed a biodiversity mechanic essential to winning the game.",
    techStack: ["Unity API", "C#", "ScriptableObjects"],
    link: "https://github.com/Vegito2367/Tree-HackUTD"
  },
  {
    title: "Zer0",
    description: "Received 160+ installs on Google Play across 15 countries and was featured on local gaming blogs. Developed a first-person 3D Android parkour game with physics-based movements like wall running, grappling, and jetpacks.",
    techStack: ["Unity", "Blender", "C#", "GIMP"],
    link: "https://github.com/Vegito2367/Zer0Scripts"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
