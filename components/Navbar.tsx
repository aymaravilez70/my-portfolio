import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="w-full bg-black/95 backdrop-blur border-b border-dark-lighter fixed top-0 left-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl">
          <span className="text-white">Aymar </span>
          <span className="text-primary">Aviles Ronquillo</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          <li><Link href="#sobre-mi" className="hover:text-primary transition">Sobre mí</Link></li>
          <li><Link href="#proyectos" className="hover:text-primary transition">Proyectos</Link></li>
          <li><Link href="#habilidades" className="hover:text-primary transition">Habilidades</Link></li>
          <li><Link href="#experiencia" className="hover:text-primary transition">Experiencia</Link></li>
          <li><Link href="#contacto" className="hover:text-primary transition">Contacto</Link></li>
        </ul>

        {/* Social */}
        <div className="flex gap-4">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:avilezaymar70@gmail.com" className="text-primary hover:text-white transition">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
