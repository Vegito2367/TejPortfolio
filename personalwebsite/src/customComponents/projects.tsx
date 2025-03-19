// sections/Projects.tsx
import ProjectCard from "@/customComponents/projectCard";

const projects = [
  { title: "Portfolio Website", description: "A sleek personal portfolio using Next.js and TailwindCSS.", techStack: ["Next.js", "TypeScript", "TailwindCSS"], link: "#" },
  { title: "E-commerce Store", description: "Built a full-stack e-commerce platform.", techStack: ["React", "Node.js", "MongoDB"], link: "#" }
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
