export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 sm:px-16 lg:px-24 bg-gray-950 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-blue-500 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          I am actively looking for new opportunities to build efficient, scalable software. 
          If your team needs a Full-Stack Developer with a pragmatic approach and a focus on solving real business problems, my inbox is open.
        </p>

        <a href="mailto:lorenzo18999@gmail.com"
          className="inline-block px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold rounded-lg transition-all"
        >
          Say Hello
        </a>
      </div>

      <footer className="mt-32 text-gray-600 font-mono text-sm">
        <p>Built by Lorenzo Belotti.</p>
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