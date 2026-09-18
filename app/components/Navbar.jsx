"use client";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-xl tracking-tighter">
          <span className="text-blue-500">&lt;</span>
          <span className="text-gray-100 font-bold">Lorenzo</span>
          <span className="text-blue-500"> /&gt;</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-mono text-gray-400">
          <a href="#projects" className="hover:text-blue-400 transition-colors">{t.nav[lang].work}</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">{t.nav[lang].exp}</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">{t.nav[lang].skills}</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav[lang].contact}</a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-900 border border-gray-800 rounded-md p-1">
            <button 
              onClick={() => toggleLang('en')}
              className={`px-2 py-1 rounded text-xs font-mono transition-colors ${lang === 'en' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              EN
            </button>
            <button 
              onClick={() => toggleLang('it')}
              className={`px-2 py-1 rounded text-xs font-mono transition-colors ${lang === 'it' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              IT
            </button>
          </div>

          <a href="/CV_Lorenzo_Belotti.pdf"
            target="_blank"
            className="px-4 py-2 border border-blue-500 text-blue-500 text-xs font-mono rounded hover:bg-blue-500/10 transition-colors hidden sm:block"
          >
            {t.nav[lang].resume}
          </a>
        </div>
      </div>

      {/* Mobile-only link row */}
      <div className="md:hidden flex justify-around px-4 py-2 border-t border-gray-800 text-xs font-mono text-gray-500">
        <a href="#projects" className="hover:text-blue-400 transition-colors">Work</a>
        <a href="#experience" className="hover:text-blue-400 transition-colors">Exp</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
}