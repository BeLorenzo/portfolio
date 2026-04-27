// src/components/Hero.jsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24">
      <div className="max-w-3xl">
        <p className="text-blue-500 font-mono mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-white">
          Lorenzo Belotti.
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-6">
          I build full-stack solutions with a business mindset.
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
          I am a Software Engineer with a BSc in Computer Science (104/110). By combining years of prior professional experience in technical operations with modern expertise in Web3 and local AI, I look beyond the code to build applications focused on efficiency, process automation, and real-world impact.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/CV_Lorenzo_Belotti.pdf" 
            target="_blank"
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-900/20"
          >
            Download CV
          </Link>
          <Link 
            href="https://github.com/BeLorenzo" 
            target="_blank" 
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 transition-all"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/lorenzobelotti" 
            target="_blank" 
            className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 rounded-lg transition-all"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}