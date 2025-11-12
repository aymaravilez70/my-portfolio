import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 50 }, // Nivel en porcentaje
  { name: "CSS3", icon: FaCss3Alt, level: 50 },
  { name: "JavaScript", icon: FaJs, level: 60 },
  { name: "React", icon: FaReact, level: 40 },
  { name: "Node.js", icon: FaNodeJs, level: 40 },
  { name: "Python", icon: FaPython, level: 50 },
];

// Función para determinar el label según el nivel
const getLevelLabel = (level: number) => {
  if (level >= 85) return "Avanzado";
  if (level >= 50) return "Intermedio";
  return "Básico";
};

export default function Skills() {
  return (
    <section id="habilidades" className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-10">
          <span className="text-primary">Habilidades Técnicas</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-dark-light border border-primary/30 rounded-xl shadow-lg p-4 flex flex-col items-center gap-3
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-primary hover:bg-primary/20
                  group cursor-pointer"
              >
                {/* Icono */}
                <Icon
                  className="text-4xl text-primary transition-all duration-300 group-hover:scale-125 
                    group-hover:drop-shadow-[0_0_10px_#10B981]"
                />
                {/* Nombre */}
                <span className="text-white font-bold text-sm text-center group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                {/* Barra de progreso */}
                <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-green-400 h-full rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* Label de nivel */}
                <span className="text-xs text-gray-400 font-semibold">
                  {getLevelLabel(skill.level)}
                </span>
              </div>
            );
          })}
        </div>
        {/* Lista de tags extra */}
        <div className="flex flex-wrap justify-center gap-3">
          {["TypeScript", "Next.js","Mysql","Tailwind", "PostgreSQL", "Git", "Figma","PHP"].map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary font-semibold border border-primary px-4 py-2 rounded-xl text-sm shadow hover:bg-primary/40 cursor-pointer transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
