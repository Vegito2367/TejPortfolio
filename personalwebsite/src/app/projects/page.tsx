"use client";
import { ProjectItem } from "@/customComponents/projectItem";
const projectsList = [
  {
    title: "Analysis of TFSI Crystallographic Structures",
    description:
      "Developed data engineering pipelines to efficiently process and visualize atomic properties of 1500+ structures. Reduced analysis time from 6 months to 5 minutes.",
    tag: "Open source contribution",
    link: "https://github.com/Vegito2367/PyCIFTer",
    key: 1,
  },
  {
    title: "Optimized RFE Feature Selection with LogRes",
    description:
      "Developed a custom Logistic Regression model for binary classification on heart attack risk data, optimizing feature selection while maintaining 94% accuracy.",
    tag: "Machine Learning",
    link: "https://github.com/Vegito2367/LogResFeatureSelection",
    key: 2,
  },
  {
    title: "MathVenture",
    description:
      "A speed math platform that dynamically generates math problems and analytics using a custom math engine.",
    tag: "Personal",
    link: "https://math-venture.com/",
    key: 3,
  },
  {
    title: "Email Classifier",
    description:
      "Performed sentiment analysis on 30,000 emails using TfIDF vectorization and developed a classifier with 97.8% accuracy.",
    tag: "Machine Learning",
    link: "https://github.com/Vegito2367/EmailClassifier",
    key: 4,
  },
  {
    title: "Tree",
    description:
      "Developed a strategy game that promotes sustainability in an entertaining medium. Implemented Unity ScriptableObjects to create different tree templates and designed a biodiversity mechanic essential to winning the game.",
    tag: "Unity Game Development",
    link: "https://github.com/Vegito2367/Tree-HackUTD",
    key: 5,
  },
  {
    title: "Zer0",
    description:
      "Received 160+ installs on Google Play across 15 countries and was featured on local gaming blogs. Developed a first-person 3D Android parkour game with physics-based movements like wall running, grappling, and jetpacks.",
    tag: "3D Game Development",
    link: "https://github.com/Vegito2367/Zer0Scripts",
    key: 6,
  },
  {
    title: "Decentralized Artificial Intelligence Marketplace (DAIM)",
    description:
      "A platform where developers can share open-source AI models without losing ownership or fearing platform obsolescence. DAIM provides structured access to AI models with performance metrics for seamless integration and customization. Contributors can securely publish and attribute their work while leveraging generative AI for enhanced model insights.",

    link: "https://github.com/Vegito2367/DAIM",
    wins: "Autonomys AI Track Winner - Midwest Blockathon 2025",
    key: 7,
  },

  {
    title: "Crown Ether Analysis",
    description:
      "Currently developing novel analysis techniques using graph theory to analyze the properties of crown ethers. This will be used to predict the binding affinity of crown ethers to various metals.",
    tag: "Research Project",
    link: "https://github.com/Vegito2367/CrownEtherProject",
    key: 8,
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-br font-mono from-gray-900 to-black animated-gradient">
      <section id="projects" className="py-12 mx-auto max-w-6xl">
        <p className="text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Full List of Projects
          </span>
        </p>
        <br />
        {projectsList.map((item, index) => {
          return (
            <>
              <ProjectItem
                title={item.title}
                desc={item.description}
                tag={item.tag as string}
                link={item.link}
                key={index}
              />
              <br />
            </>
          );
        })}
      </section>
    </div>
  );
}
