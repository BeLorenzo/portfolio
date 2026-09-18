"use client";
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-gray-950 text-gray-100 min-h-screen selection:bg-blue-500/30">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contacts />
      </main>
    </LanguageProvider>
  );
}