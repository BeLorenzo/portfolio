// app/components/Experience.jsx
export default function Experience() {
  const steps = [
    {
      date: "Sep 2022 - Apr 2026",
      title: "Bachelor's Degree in Computer Science | 104/110",
      company: "Università degli Studi di Milano",
      description: "Thesis Project: Framework for Web3 and Local AI Agent integration on the Algorand blockchain. Gained deep knowledge of smart contracts and autonomous systems."
    },
    {
      date: "2025 - Present",
      title: "Freelance Full-Stack Developer",
      company: "Sportessence",
      description: "Designed and deployed a full-stack platform from scratch, successfully onboarding and managing 100+ real user registrations within the first launch season."
    },
    {
      date: "Apr 2021 - Jul 2022",
      title: "Technical Sales & Operations",
      company: "Thermoinfissi S.R.L.",
      description: "Engineered dynamic Excel pricing models, replacing manual paper calculations and reducing quote generation time by an estimated 80%. Streamlined the sales pipeline by automating complex markup logic."
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center">
          <span className="text-blue-500 font-mono text-xl mr-3">02.</span> 
          Experience & Education
          <div className="ml-6 h-[1px] bg-gray-800 flex-grow"></div>
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 border-l border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-200">{step.title}</h3>
                <span className="text-blue-500 font-mono text-sm">{step.date}</span>
              </div>
              <h4 className="text-gray-400 font-medium mb-3">{step.company}</h4>
              <p className="text-gray-500 max-w-2xl leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}