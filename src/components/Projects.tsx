type Project = {
  title: string
  description: string
  tags: string[]
  emoji: string
  href: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Escape from Pedroyo",
    description: "Videojuego de disparos hecho en React con controles táctiles, sistema de niveles, audio con Web Audio API y diseño responsive para móvil.",
    tags: ["React", "TypeScript", "Web Audio API", "Mobile"],
    emoji: "🎮",
    href: "https://scape-from-pedroyo.netlify.app/",
    featured: true,
  },
  {
    title: "Kmus Pokedex",
    description: "Aplicación que consume la PokéAPI con Axios, mostrando lista de pokémons con tipos, stats y animaciones.",
    tags: ["React", "Axios", "PokeAPI"],
    emoji: "📖",
    href: "https://kmus-pokeapi.netlify.app/",
  },
  {
    title: "Lista de Tareas",
    description: "App minimalista de tareas con TypeScript, operaciones CRUD y persistencia en localStorage.",
    tags: ["React", "TypeScript", "localStorage"],
    emoji: "📝",
    href: "https://tasklist-kmus.netlify.app/",
  },
  {
    title: "Portafolio",
    description: "Este mismo portafolio, construido con React, TypeScript y Tailwind v4. Dark mode, animaciones y diseño responsive.",
    tags: ["React", "TypeScript", "Tailwind v4"],
    emoji: "💼",
    href: "#",
    featured: true,
  },
]

// ── card individual ──
const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`
    group relative flex flex-col gap-4 p-6 rounded-2xl
    border transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl
    ${project.featured
      ? "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-blue-700 hover:shadow-blue-100 dark:hover:shadow-blue-900"
      : "bg-white dark:bg-slate-800 border-blue-100 dark:border-slate-700 hover:shadow-blue-50 dark:hover:shadow-slate-900"
    }
  `}>

    {/* badge featured */}
    {project.featured && (
      <div className="
        absolute top-4 right-4
        px-2 py-0.5 rounded-full text-xs font-semibold
        bg-blue-400 dark:bg-blue-600 text-white
        shadow-sm
      ">
        ✦ destacado
      </div>
    )}

    {/* emoji + título */}
    <div className="flex items-center gap-3">
      <div className="
        w-12 h-12 rounded-xl flex items-center justify-center text-2xl
        bg-blue-100 dark:bg-slate-700
        group-hover:scale-110 transition-transform duration-300
      ">
        {project.emoji}
      </div>

      <h3 className="
        text-lg font-bold
        text-blue-900 dark:text-white
      ">
        {project.title}
      </h3>
    </div>

    {/* descripción */}
    <p className="
      text-sm leading-relaxed flex-1
      text-slate-500 dark:text-slate-400
    ">
      {project.description}
    </p>

    {/* tags */}
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="
            px-3 py-1 rounded-full text-xs font-medium
            bg-blue-100 dark:bg-slate-700
            text-blue-600 dark:text-blue-300
            border border-blue-200 dark:border-slate-600
          "
        >
          {tag}
        </span>
      ))}
    </div>

    {/* link */}
    <a
      href={project.href} target="_blank" rel="noopener noreferrer"
      className="
        self-start flex items-center gap-1.5
        text-sm font-semibold
        text-blue-500 dark:text-blue-400
        hover:text-blue-700 dark:hover:text-blue-300
        transition-colors duration-200
      "
    >
      Ver proyecto
      <span className="group-hover:translate-x-1 transition-transform duration-200">
        →
      </span>
    </a>

  </div>
)

// ── sección principal ──
const Projects = () => {
  return (
    <section
      id="proyectos"
      className="
        py-24 px-6
        bg-gradient-to-b from-white via-blue-50 to-white
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
            mi trabajo
          </p>

          <h2 className="
            text-3xl md:text-4xl font-bold
            text-blue-900 dark:text-white
          ">
            Proyectos
            <span className="
              ml-2 text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-sky-500
            ">
              destacados
            </span>
          </h2>

          <p className="
            max-w-md text-sm md:text-base leading-relaxed
            text-slate-500 dark:text-slate-400
          ">
            Una selección de los proyectos que más me han gustado construir.
          </p>

          {/* línea decorativa */}
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-300 to-sky-400 dark:from-blue-600 dark:to-sky-500 mt-1" />

        </div>

        {/* ── grid de cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects