export default function Skills() {
  const techSkills = [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "Java", "C++", "Go", "SQL", "Shell Script", "Assembly"]
    },
    {
      category: "Web & Frameworks",
      items: ["React", "Next.js", "Node.js", "Express", "Vite", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Database & Cloud",
      items: ["MongoDB", "Supabase", "Vercel", "Resend"]
    },
    {
      category: "Tools & Other",
      items: ["Git", "Linux", "Algorand SDK", "Smart Contracts", "Web3", "Ollama"]
    },
  ];

  const languages = [
    { name: "Italian", level: "Native" },
    { name: "English", level: "B2" },
  ];

  const softSkills = [
    "Problem Solving",
    "Fast Learner",
    "Attention to Detail",
    "Adaptability",
  ];

  return (
    <section id="skills" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center">
          <span className="text-blue-500 font-mono text-xl mr-3">03.</span>
          My Toolbox
          <div className="ml-6 h-[1px] bg-gray-700 flex-grow"></div>
        </h2>

        {/* Tech Skills */}
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
          Technologies I work with
        </p>
        <div className="space-y-6 mb-14">
          {techSkills.map((cat, i) => (
            <div key={i}>
              <p className="text-xs font-mono text-gray-600 mb-2">{cat.category}</p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, j) => (
                  <div
                    key={j}
                    className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-300 font-mono text-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
          Languages
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg font-mono text-sm text-gray-300 flex items-center gap-2"
            >
              {lang.name}
              <span className="text-blue-400 text-xs">{lang.level}</span>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
          How I work
        </p>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((s, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-300 font-mono text-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              {s}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}