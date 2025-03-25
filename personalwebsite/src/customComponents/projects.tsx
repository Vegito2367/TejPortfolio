// sections/Projects.tsx
import ProjectCard from "@/customComponents/projectCard";

const projects = [
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
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
