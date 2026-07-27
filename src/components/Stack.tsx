import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiAxios,
} from "react-icons/si"

type Tech = {
  name: string
  icon: React.ReactNode
  color: string
  level: "experto" | "avanzado" | "aprendiendo"
}

const stack: Tech[] = [
  { name: "React",        icon: <SiReact />,        color: "#61DAFB", level: "avanzado"      },
  { name: "TypeScript",   icon: <SiTypescript />,   color: "#3178C6", level: "avanzado"      },
  { name: "JavaScript",   icon: <SiJavascript />,   color: "#F7DF1E", level: "avanzado"      },
  { name: "Tailwind",     icon: <SiTailwindcss />,  color: "#38BDF8", level: "aprendiendo"   },
  { name: "Axios",        icon: <SiAxios />,        color: "#5A29E4", level: "aprendiendo"  },
  { name: "Vite",         icon: <SiVite />,         color: "#646CFF", level: "avanzado"     },
  { name: "Node.js",      icon: <SiNodedotjs />,    color: "#68A063", level: "aprendiendo"     },
  { name: "HTML5",        icon: <SiHtml5 />,        color: "#E34F26", level: "avanzado"      },
  { name: "Git",          icon: <SiGit />,          color: "#F05032", level: "aprendiendo"     },
  { name: "GitHub",       icon: <SiGithub />,       color: "#ffffff", level: "aprendiendo"     }
]

const levelColor: Record<Tech["level"], string> = {
  experto:      "bg-blue-400  dark:bg-blue-600  text-white",
  avanzado:     "bg-sky-300   dark:bg-sky-700   text-white",
  aprendiendo:  "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
}

// ── card ──
const TechCard = ({ tech }: { tech: Tech }) => (
  <div className="
    group flex flex-col items-center gap-3 p-5 rounded-2xl
    bg-white dark:bg-slate-800
    border border-blue-100 dark:border-slate-700
    hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-900
    hover:border-blue-300 dark:hover:border-blue-600
    transition-all duration-300 cursor-default
  ">

    {/* icono */}
    <div
      className="text-4xl transition-transform duration-300 group-hover:scale-125"
      style={{ color: tech.color }}
    >
      {tech.icon}
    </div>

    {/* nombre */}
    <p className="text-sm font-semibold text-blue-900 dark:text-white">
      {tech.name}
    </p>

    {/* nivel */}
    <span className={`
      px-2.5 py-0.5 rounded-full text-xs font-medium
      ${levelColor[tech.level]}
    `}>
      {tech.level}
    </span>

  </div>
)

// ── sección ──
const Stack = () => {
  return (
    <section
      id="stack"
      className="
        py-24 px-6
        bg-gradient-to-b from-white via-sky-50 to-white
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* ── encabezado ── */}
        <div className="flex flex-col items-center text-center gap-3">

          <p className="
            text-xs font-semibold tracking-widest uppercase
            text-sky-500 dark:text-sky-400
          ">
            tecnologías
          </p>

          <h2 className="
            text-3xl md:text-4xl font-bold
            text-blue-900 dark:text-white
          ">
            Mi
            <span className="
              ml-2 text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-sky-500
            ">
              stack
            </span>
          </h2>

          <p className="
            max-w-md text-sm md:text-base leading-relaxed
            text-slate-500 dark:text-slate-400
          ">
            Herramientas y tecnologías con las que trabajo día a día.
          </p>

          {/* línea decorativa */}
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-300 to-sky-400 dark:from-blue-600 dark:to-sky-500 mt-1" />

        </div>

        {/* ── grid ── */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {stack.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>

        {/* ── leyenda niveles ── */}
        <div className="flex flex-wrap justify-center gap-4">
          {(Object.entries(levelColor) as [Tech["level"], string][]).map(([level, color]) => (
            <div key={level} className="flex items-center gap-2">

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stack