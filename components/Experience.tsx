const experience = [
  {
    title: "Vendedor | Alvirene",
    period: "Jun 2024 - Feb 2025",
    desc: "Gestión de ventas, levantamiento de inventario (500+ productos), registros contables y control de stock en empresa de construcción y ferretería.",
  },
  {
    title: "Especialista en Base de Datos | Farmacia Anthony",
    period: "Ene 2024 - Jun 2024",
    desc: "Mantenimiento de base de datos farmacéutica, registro de medicamentos, conciliación de inventarios y precisión de datos en 800+ registros.",
  },
  {
    title: "Asistente en Prácticas | Punto de Encuentro",
    period: "Sep 2022 - Mar 2023",
    desc: "Soporte técnico, capacitación en herramientas ofimáticas (Microsoft Office, Google Workspace) y asistencia a usuarios.",
  },
];


export default function Experience() {
  return (
    <section id="experiencia" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-center">
          Experiencia <span className="text-primary">Profesional</span>
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-primary/80 to-primary/40 rounded-full opacity-80" />
          <ul className="space-y-12">
            {experience.map((exp) => (
              <li key={exp.title} className="relative flex gap-6 items-start">
                <span className="absolute left-0 top-2 w-6 h-6 rounded-full bg-black border-4 border-primary" />
                <div className="block-particles rounded-xl shadow-md p-6 flex-1 border border-primary/20">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}