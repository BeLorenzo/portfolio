"use client";
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-32 px-8 sm:px-16 lg:px-24 bg-gray-950 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-blue-500 font-mono mb-4">{t.contact[lang].step}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          {t.contact[lang].title}
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          {t.contact[lang].desc}
        </p>

        <a href="mailto:lorenzo18999@gmail.com"
          className="inline-block px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold rounded-lg transition-all"
        >
          {t.contact[lang].button}
        </a>
      </div>

      <footer className="mt-32 text-gray-600 font-mono text-sm">
        <p>{t.contact[lang].footer}</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="https://github.com/BeLorenzo"
            target="_blank"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
          
          <a href="https://linkedin.com/in/lorenzobelotti"
            target="_blank"
            className="hover:text-gray-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}