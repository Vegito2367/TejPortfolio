// // sections/Experiences.tsx
// import ExperienceItem from "@/customComponents/experienceItems";

// const experiences = [
//   { 
//     role: "Software Engineering Intern", 
//     company: "Gemini Exchange", 
//     duration: "Jun. 2025 – Aug. 2025", 
//     description: "Built wire payments integration with Cross River Bank leading to an expected $4M in revenue",
//     logo: "/gemini.png" // Placeholder logo
//   },
//   { 
//     role: "Research Engineer", 
//     company: "Blakemore Lab - KU", 
//     duration: "Feb. 2024 – Present", 
//     description: "Developed data engineering pipelines to process and visualize atomic properties of 1500+ structures. Automated crystallographic analysis, reducing processing time from 6 months to 5 minutes.",
//     logo: "/ku.png" // Placeholder logo
//   },
//   { 
//     role: "Software Engineering Intern", 
//     company: "Security Benefit", 
//     duration: "Jun. 2023 – Dec. 2023", 
//     description: "Automated Sailpoint access management, saving 100 hours annually. Developed and maintained ETL processes using Python and AWS (S3) to support internal and consumer applications.",
//     logo: "/sb.png" // Placeholder logo
//   },
// ];

// export default function Experiences() {
//   return (
//     <section id="experience" className="py-24 max-w-6xl mx-auto">
//       <h2 className="text-6xl font-bold mb-16 text-center">Experience</h2>
//       <div className="relative">
//         <div className="border-l-4 border-orange-500 absolute h-full left-5 top-0"></div>
//         {experiences.map((exp, index) => (
//           <ExperienceItem key={index} {...exp} />
//         ))}
//       </div>
//     </section>
//   );
// }
// sections/Experiences.tsx
import ExperienceItem from "@/customComponents/experienceItems";

const experiences = [
  { 
    role: "Software Engineering Intern", 
    company: "Gemini Exchange", 
    duration: "Jun. 2025 – Aug. 2025", 
    description: "Built wire payments integration with Cross River Bank leading to an expected $4M in revenue.",
    logo: "/gemini.png",
    position: { top: '5%', left: '15%' } // Position along the path
  },
  { 
    role: "Research Engineer", 
    company: "Blakemore Lab - KU", 
    duration: "Feb. 2024 – Present", 
    description: "Developed data engineering pipelines to process and visualize atomic properties of 1500+ structures. Automated crystallographic analysis, reducing processing time from 6 months to 5 minutes.",
    logo: "/ku.png",
    position: { top: '25%', left: '55%' } // Position along the path
  },
  { 
    role: "Software Engineering Intern", 
    company: "Security Benefit", 
    duration: "Jun. 2023 – Dec. 2023", 
    description: "Automated Sailpoint access management, saving 100 hours annually. Developed and maintained ETL processes using Python and AWS (S3) to support internal and consumer applications.",
    logo: "/sb.png",
    position: { top: '65%', left: '25%' } // Position along the path
  },
];

// A simple star component
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute bg-white rounded-full" style={style} />
);

export default function Experiences() {
  // Generate some random stars for the background
  const stars = Array.from({ length: 100 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    return {
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `twinkle ${Math.random() * 5 + 2}s linear infinite`,
      },
    };
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden w-screen bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0">
        {stars.map((star, i) => <Star key={i} style={star.style} />)}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-6xl font-bold mb-24 text-center text-orange-500">My Journey</h2>
        
        <div className="relative h-[800px]"> {/* Container for the path and items */}
          {/* The glowing SVG Path */}
          <svg width="100%" height="100%" viewBox="0 0 800 800" preserveAspectRatio="none" className="absolute top-0 left-0">
            <defs>
              <linearGradient id="glowingPath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#ea580c', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path 
              d="M 120 40 C 400 150, 400 350, 680 420 S 300 600, 200 750"
              stroke="url(#glowingPath)" 
              fill="none" 
              strokeWidth="4"
              strokeLinecap="round"
              pathLength="1"
              className="opacity-50"
            />
          </svg>

          {/* Map experiences onto the canvas */}
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this CSS to your global stylesheet for the twinkling effect
/* In your global.css */
/*
@keyframes twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
*/