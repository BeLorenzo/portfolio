"use client";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';

export default function Projects() {
  const { lang } = useLanguage();

  const projects = [
    {
      label: t.projects[lang].p1.label,
      title: t.projects[lang].p1.title,
      description: t.projects[lang].p1.desc,
      tech: ["React", "Supabase", "Vercel", "Resend"],
      liveLink: "https://www.sportessence.it",
      githubLink: null
    },
    {
      label: t.projects[lang].p2.label,
      title: t.projects[lang].p2.title,
      description: t.projects[lang].p2.desc,
      tech: ["Algorand", "React", "Node.js", "Ollama"],
      liveLink: null,
      githubLink: "https://github.com/BeLorenzo/Game4Blockchain"
    },
    {
      label: t.projects[lang].p3.label,
      title: t.projects[lang].p3.title,
      description: t.projects[lang].p3.desc,
      tech: ["UI Prototyping", "Business Case", "Product Design"],
      liveLink: null,
      githubLink: null
    },
    {
      label: t.projects[lang].p4.label,
      title: t.projects[lang].p4.title,
      description: t.projects[lang].p4.desc,
      tech: ["Express", "Node.js", "MongoDB", "JavaScript"],
      liveLink: null,
      githubLink: "https://github.com/BeLorenzo/ForkIt"
    },
    {
      label: t.projects[lang].p5.label,
      title: t.projects[lang].p5.title,
      description: t.projects[lang].p5.desc,
      tech: ["React", "Capacitor", "Android", "TypeScript", "Tailwind"],
      liveLink: "https://github.com/BeLorenzo/al-piof/releases",
      githubLink: "https://github.com/BeLorenzo/al-piof"
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center group">
          <span className="text-blue-500 font-mono text-xl mr-3 group-hover:text-emerald-400 transition-colors">01.</span>
          {t.projects[lang].title}
          <div className="ml-6 h-[1px] bg-gray-800 flex-grow group-hover:bg-gray-700 transition-colors"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.3)] transition-all duration-300 group">
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-blue-400 font-mono text-xs uppercase tracking-wider group-hover:text-emerald-400 transition-colors">{project.label}</span>
                <div className="flex gap-3">
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-gray-300 bg-gray-800/50 border border-gray-700/50 px-3 py-1 rounded-full group-hover:border-blue-500/30 transition-colors">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}