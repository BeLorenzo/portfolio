import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      label: "Freelance / Live in Prod",
      title: "Summer Camp Management Platform",
      description: "Full-stack platform built from scratch handling 50+ real user registrations. Features secure auth, admin dashboard for payments, and automated transactional emails.",
      tech: ["React", "Supabase", "Vercel", "Resend"],
      liveLink: "https://www.sportessence.it",
      githubLink: null,
      imageUrl: null
    },
    {
      label: "Thesis Project",
      title: "Blockchain AI Game Framework",
      description: "Smart contract framework deployed on Algorand. Integrates a Web3 frontend and 7 autonomous local AI agents (Ollama) with memory management to learn and adapt strategies.",
      tech: ["Algorand", "React", "Node.js", "Ollama"],
      liveLink: null,
      githubLink: "https://github.com/BeLorenzo/Game4Blockchain",
      imageUrl: null //"/HomePage.png" 
    },
    {
      label: "2nd Place - PwC Hack Arena",
      title: "Dynamic Travel Insurance",
      description: "Conceptualized and prototyped a modular travel insurance web app featuring a real-time destination risk dashboard and on-demand micro-coverage.",
      tech: ["UI Prototyping", "Business Analysis", "Product Design"],
      liveLink: null,
      githubLink: null,
      imageUrl: null
    },
    {
      label: "Academic Project",
      title: "ForkIt - Open Source Fast Food",
      description: "RESTful backend powering a collaborative ordering system. Implemented secure Role-Based Access Control (RBAC) for 4 distinct user tiers and dynamic cost calculations.",
      tech: ["Express", "Node.js", "MongoDB", "JavaScript"],
      liveLink: null,
      githubLink: "https://github.com/BeLorenzo/ForkIt",
      imageUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center">
          <span className="text-blue-500 font-mono text-xl mr-3">01.</span>
          Featured Work
          <div className="ml-6 h-[1px] bg-gray-800 flex-grow"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              
              {project.imageUrl && (
                <div className="relative w-full h-44">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-blue-400 font-mono text-xs uppercase tracking-wider">{project.label}</span>
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </Link>
                    )}
                    {project.liveLink && (
                      <Link href={project.liveLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-200 mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-xs font-mono text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}