import avatar from "../assets/avatar_kmus.png"

type SocialLink = {
  label: string
  href: string
  icon: string
}

const socials: SocialLink[] = [
  { label: "GitHub",    href: "#", icon: "🐙" },
  { label: "LinkedIn",  href: "#", icon: "💼" },
  { label: "Twitter",   href: "#", icon: "🐦" },
]

const Hero = () => {
  return (
    <section className="
      min-h-screen flex items-center justify-center
      bg-gradient-to-b from-blue-50 via-sky-50 to-white
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      px-6 pt-20 transition-colors duration-300
    ">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">

        {/* ── avatar ── */}
        <div className="relative">

          {/* anillo animado exterior */}
          <div className="
            absolute inset-0 rounded-full
            bg-gradient-to-tr from-blue-300 via-sky-400 to-blue-200
            dark:from-blue-600 dark:via-sky-500 dark:to-blue-700
            animate-spin
            scale-110 blur-sm opacity-50
          " style={{ animationDuration: "6s" }} />

          {/* anillo fijo */}
          <div className="
            relative w-36 h-36 rounded-full
            ring-4 ring-blue-300 dark:ring-blue-600
            shadow-xl overflow-hidden
          ">
            <img
              src={avatar}
              alt="Kmus avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* badge estado */}
          <div className="
            absolute bottom-1 right-1
            bg-white dark:bg-slate-800
            border-2 border-blue-200 dark:border-slate-600
            rounded-full px-2 py-0.5
            flex items-center gap-1
            shadow-md
          ">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              disponible
            </span>
          </div>

        </div>

        {/* ── texto ── */}
        <div className="flex flex-col gap-3">

          {/* saludo */}
          <p className="
            text-sm font-semibold tracking-widest uppercase
            text-sky-500 dark:text-sky-400
          ">
            👋 Hola, soy
          </p>

          {/* nombre */}
          <h1 className="
            text-4xl md:text-6xl font-bold
            text-blue-900 dark:text-white
            leading-tight
          ">
            Eduardo
            <span className="
              block text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-sky-500
            ">
              Rodríguez
            </span>
          </h1>

          {/* descripción */}
          <p className="
            max-w-xl mx-auto text-base md:text-lg
            text-slate-500 dark:text-slate-400
            leading-relaxed
          ">
            Desarrollador Frontend especializado en
            <span className="text-blue-500 dark:text-blue-400 font-medium"> React </span>
            y
            <span className="text-blue-500 dark:text-blue-400 font-medium"> TypeScript</span>.
            Apasionado por crear experiencias digitales únicas.
          </p>

        </div>

        {/* ── stack ── */}
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "TypeScript", "Tailwind", "Vite", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-1.5 rounded-full text-sm font-medium
                bg-blue-100 dark:bg-slate-800
                text-blue-700 dark:text-blue-300
                border border-blue-200 dark:border-slate-600
                hover:bg-blue-200 dark:hover:bg-slate-700
                transition-all duration-200
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── botones CTA ── */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#proyectos"
            className="
              px-7 py-3 rounded-full font-semibold text-sm
              bg-blue-400 dark:bg-blue-600 text-white
              hover:bg-blue-500 dark:hover:bg-blue-700
              shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900
              transition-all duration-200
            "
          >
            Ver proyectos 🚀
          </a>

          <a
            href="#contacto"
            className="
              px-7 py-3 rounded-full font-semibold text-sm
              bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-300
              border border-blue-200 dark:border-slate-600
              hover:bg-blue-50 dark:hover:bg-slate-700
              shadow transition-all duration-200
            "
          >
            Contáctame 💬
          </a>
        </div>

        {/* ── redes sociales ── */}
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-white dark:bg-slate-800
                border border-blue-200 dark:border-slate-600
                text-lg shadow
                hover:scale-110 hover:border-blue-400
                transition-all duration-200
              "
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* ── scroll indicator ── */}
        <div className="flex flex-col items-center gap-2 mt-4 animate-bounce">
          <span className="text-xs text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-transparent dark:from-blue-600" />
        </div>

      </div>
    </section>
  )
}

export default Hero