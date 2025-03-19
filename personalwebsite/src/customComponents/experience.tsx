// sections/Experiences.tsx
import ExperienceItem from "@/customComponents/experienceItems";

const experiences = [
  { role: "Frontend Developer", company: "Tech Corp", duration: "2022 - Present", description: "Developed modern web applications using Next.js, TypeScript, and TailwindCSS." },
  { role: "UI/UX Designer", company: "Creative Studio", duration: "2020 - 2022", description: "Designed intuitive interfaces and enhanced user experiences." }
];

export default function Experiences() {
  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
}
