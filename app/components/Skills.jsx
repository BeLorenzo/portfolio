export default function Skills() {
  const skills = [
    "JavaScript", "React", "Next.js", "Node.js", "Express", 
    "MongoDB", "Supabase", "C", "Assembly", "Algorand (Web3)", "Tailwind CSS", "Git"
  ];

  return (
    <section id = "skills" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center">
          <span className="text-blue-500 font-mono text-xl mr-3">03.</span> 
          My Toolbox
          <div className="ml-6 h-[1px] bg-gray-700 flex-grow"></div>
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-gray-300 font-mono hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}