"use client";
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';

interface TechSkillCategory {
  category: string;
  items: string[];
}

export default function Skills() {
  const { lang } = useLanguage();

  const techSkills: TechSkillCategory[] = [
    {
      category: t.skills[lang].c1,
      items: ["Google Cloud (GCP)", "BigQuery", "Apache Airflow", "Dataform", "Looker Studio"]
    },
    {
      category: t.skills[lang].c2,
      items: ["Python", "SQL", "JavaScript", "Java", "C++", "Go", "Shell Script"]
    },
    {
      category: t.skills[lang].c3,
      items: ["React", "Node.js", "Express", "Vite", "HTML/CSS"]
    },
    {
      category: t.skills[lang].c4,
      items: ["MongoDB", "Supabase", "Git", "Docker", "Linux", "Ollama (Local AI)"]
    },
  ];

  return (
    <section id="skills" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center group">
          <span className="text-blue-500 font-mono text-xl mr-3 group-hover:text-emerald-400 transition-colors">03.</span>
          {t.skills[lang].title}
          <div className="ml-6 h-[1px] bg-gray-700 flex-grow group-hover:bg-gray-600 transition-colors"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {techSkills.map((cat, i) => (
            <div key={i} className="bg-gray-950/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/40 hover:bg-gray-900/60 transition-all duration-300 group">
              <p className="text-sm font-mono text-blue-400 mb-5 uppercase tracking-wider group-hover:text-emerald-400 transition-colors">{cat.category}</p>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3.5 py-1.5 bg-gray-900 border border-gray-700/80 rounded-md text-gray-300 font-mono text-xs hover:border-blue-400 hover:text-white hover:bg-blue-900/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
