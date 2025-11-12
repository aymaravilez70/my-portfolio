import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-lighter mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Aymar Aviles Ronquillo. Portafolio profesional desarrollado con <span className="text-primary">Next.js</span> y <span className="text-primary">Tailwind CSS</span>.
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition"><FaGithub size={21} /></a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition"><FaLinkedin size={21} /></a>
          <a href="mailto:info@dev.com" className="text-gray-400 hover:text-primary transition"><FaEnvelope size={21} /></a>
        </div>
      </div>
    </footer>
  );
}
