import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="bg-black pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-10">
          Ponte en <span className="text-primary">Contacto</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Información de contacto */}
          <div className="bg-dark-light border border-primary rounded-xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-primary text-2xl" />
              <span className="text-white font-bold text-lg">avilezaymar70@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-primary text-2xl" />
              <span className="text-white font-bold text-lg">+593 990069857</span>
            </div>
            <div className="flex gap-3 pt-2">
              {/* Íconos sociales */}
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          {/* Formulario de contacto (solo frontend, no funcional backend) */}
          <form className="bg-dark-light border border-primary rounded-xl shadow-lg p-8 flex flex-col gap-5">
            <label className="text-white font-semibold">Nombre</label>
            <input className="rounded-lg bg-black border border-primary/40 px-4 py-2 text-white focus:border-primary transition" type="text" placeholder="Tu nombre" />
            <label className="text-white font-semibold">Email</label>
            <input className="rounded-lg bg-black border border-primary/40 px-4 py-2 text-white focus:border-primary transition" type="email" placeholder="tucorreo@mail.com" />
            <label className="text-white font-semibold">Mensaje</label>
            <textarea className="rounded-lg bg-black border border-primary/40 px-4 py-2 text-white focus:border-primary transition resize-none" rows={4} placeholder="Tu mensaje..." />
            <button type="submit" className="bg-primary text-black font-bold rounded-xl px-8 py-2 mt-4 hover:bg-primary-dark transition">Enviar</button>
          </form>
        </div>
      </div>
     
    </section>
  );
}
