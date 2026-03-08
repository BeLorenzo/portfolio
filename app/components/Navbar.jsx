import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-xl tracking-tighter">
          <span className="text-blue-500">&lt;</span>
          <span className="text-gray-100 font-bold">Lorenzo</span>
          <span className="text-blue-500"> /&gt;</span>
        </Link>
        <div className="hidden sm:flex gap-6 text-sm font-mono text-gray-400">
          <a href="#projects" className="hover:text-blue-400 transition-colors">01. Work</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">02. Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">03. Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">04. Contact</a>
        </div>
        {/* CV Button for Mobile / Extra CTA */}
        <a 
          href="/CV_Lorenzo_Belotti.pdf" 
          target="_blank"
          className="px-4 py-2 border border-blue-500 text-blue-500 text-xs font-mono rounded hover:bg-blue-500/10 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}