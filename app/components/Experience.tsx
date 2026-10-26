"use client";
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';

interface Step {
  date: string;
  title: string;
  company: string;
  description: string;
}

export default function Experience() {
  const { lang } = useLanguage();

  const steps: Step[] = [
    {
      date: "Jun 2026 - Present",
      title: t.exp[lang].e1.title,
      company: t.exp[lang].e1.company,
      description: t.exp[lang].e1.desc
    },
    {
      date: "Sep 2022 - Apr 2026",
      title: t.exp[lang].e2.title,
      company: t.exp[lang].e2.company,
      description: t.exp[lang].e2.desc
    },
    {
      date: "Apr 2021 - Jul 2022",
      title: t.exp[lang].e3.title,
      company: t.exp[lang].e3.company,
      description: t.exp[lang].e3.desc
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 sm:px-16 lg:px-24 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 flex items-center group">
          <span className="text-blue-500 font-mono text-xl mr-3 group-hover:text-emerald-400 transition-colors">02.</span> 
          {t.exp[lang].title}
          <div className="ml-6 h-[1px] bg-gray-800 flex-grow group-hover:bg-gray-700 transition-colors"></div>
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 border-l border-gray-800 hover:border-blue-500 transition-colors duration-300 group">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                <span className="text-blue-500 font-mono text-sm mt-1 md:mt-0">{step.date}</span>
              </div>
              <h4 className="text-gray-400 font-medium mb-3">{step.company}</h4>
              <p className="text-gray-500 max-w-2xl leading-relaxed group-hover:text-gray-400 transition-colors">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
