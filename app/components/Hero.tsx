"use client";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl relative z-10">
        <p className="text-blue-500 font-mono mb-4 text-lg">{t.hero[lang].hi}</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Lorenzo Belotti.
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-300 mb-6 leading-tight">
          {t.hero[lang].role}
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed" dangerouslySetInnerHTML={{ __html: t.hero[lang].description }} />
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/CV_Lorenzo_Belotti.pdf" 
            target="_blank" 
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
          >
            {t.hero[lang].download}
          </Link>
          <Link 
            href="https://github.com/BeLorenzo" 
            target="_blank" 
            className="px-6 py-3 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 transition-all"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/lorenzobelotti" 
            target="_blank" 
            className="px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 text-gray-300 rounded-lg transition-all"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
