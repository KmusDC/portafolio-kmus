import { useState } from "react"

type FormData = {
  nombre: string
  email: string
  mensaje: string
}

type FormStatus = "idle" | "sending" | "success" | "error"

const initialForm: FormData = {
  nombre: "",
  email: "",
  mensaje: "",
}

type SocialLink = {
  label: string
  href: string
  icon: string
  description: string
}

const socials: SocialLink[] = [
  { label: "GitHub",   href: "#", icon: "🐙", description: "github.com/kmus"       },
  { label: "LinkedIn", href: "#", icon: "💼", description: "linkedin.com/in/kmus"  },
  { label: "Twitter",  href: "#", icon: "🐦", description: "@kmus"                 },
  { label: "Email",    href: "#", icon: "📧", description: "kmusdc128@email.com"        },
]

const Contact = () => {
  const [form, setForm]     = useState<FormData>(initialForm)
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    // simulación de envío → reemplaza con tu lógica real
    await new Promise((res) => setTimeout(res, 1500))

    setStatus("success")
    setForm(initialForm)

    // vuelve a idle después de 4 segundos
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <section
      id="contacto"
      className="
        py-24 px-6
        bg-gradient-to-b from-white via-blue-50 to-blue-100
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
            hablemos
          </p>

          <h2 className="
            text-3xl md:text-4xl font-bold
            text-blue-900 dark:text-white
          ">
            Ponte en
            <span className="
              ml-2 text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-sky-500
            ">
              contacto
            </span>
          </h2>

          <p className="
            max-w-md text-sm md:text-base leading-relaxed
            text-slate-500 dark:text-slate-400
          ">
            ¿Tienes un proyecto en mente? me encantaría escucharte.
          </p>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-300 to-sky-400 dark:from-blue-600 dark:to-sky-500 mt-1" />
        </div>

        {/* ── contenido ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── formulario ── */}
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-4 p-8 rounded-2xl
              bg-white dark:bg-slate-800
              border border-blue-100 dark:border-slate-700
              shadow-sm
            "
          >
            <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-1">
              Envíame un mensaje ✉️
            </h3>

            {/* nombre */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="
                  px-4 py-3 rounded-xl text-sm
                  bg-blue-50 dark:bg-slate-700
                  border border-blue-200 dark:border-slate-600
                  text-slate-700 dark:text-white
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                  transition-all duration-200
                "
              />
            </div>

            {/* email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="
                  px-4 py-3 rounded-xl text-sm
                  bg-blue-50 dark:bg-slate-700
                  border border-blue-200 dark:border-slate-600
                  text-slate-700 dark:text-white
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                  transition-all duration-200
                "
              />
            </div>

            {/* mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                required
                rows={5}
                className="
                  px-4 py-3 rounded-xl text-sm resize-none
                  bg-blue-50 dark:bg-slate-700
                  border border-blue-200 dark:border-slate-600
                  text-slate-700 dark:text-white
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                  transition-all duration-200
                "
              />
            </div>

            {/* botón submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="
                mt-1 px-6 py-3 rounded-xl font-semibold text-sm
                bg-blue-400 dark:bg-blue-600 text-white
                hover:bg-blue-500 dark:hover:bg-blue-700
                disabled:opacity-60 disabled:cursor-not-allowed
                shadow transition-all duration-200
              "
            >
              {status === "idle"    && "Enviar mensaje 🚀"}
              {status === "sending" && "Enviando...  ⏳"}
              {status === "success" && "¡Enviado! ✅"}
              {status === "error"   && "Error, intenta de nuevo ❌"}
            </button>

            {/* mensaje de éxito */}
            {status === "success" && (
              <p className="
                text-center text-sm font-medium
                text-green-500 dark:text-green-400
                animate-pulse
              ">
                ¡Gracias! Te responderé pronto 💙
              </p>
            )}

          </form>

          {/* ── info lateral ── */}
          <div className="flex flex-col gap-6">

            {/* disponibilidad */}
            <div className="
              p-6 rounded-2xl
              bg-white dark:bg-slate-800
              border border-blue-100 dark:border-slate-700
              shadow-sm flex flex-col gap-3
            ">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold text-blue-900 dark:text-white">
                  Disponible para proyectos
                </p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Actualmente estoy abierto a nuevas oportunidades freelance o colaboraciones.
              </p>

              {/* tiempo respuesta */}
              <div className="
                flex items-center gap-3 mt-1 p-3 rounded-xl
                bg-blue-50 dark:bg-slate-700
              ">
                <span className="text-xl">⚡</span>
                <div>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                    Tiempo de respuesta
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menos de 24 horas
                  </p>
                </div>
              </div>
            </div>

            {/* redes sociales */}
            <div className="
              p-6 rounded-2xl
              bg-white dark:bg-slate-800
              border border-blue-100 dark:border-slate-700
              shadow-sm flex flex-col gap-4
            ">
              <h3 className="text-sm font-bold text-blue-900 dark:text-white">
                También me encuentras en
              </h3>

              <div className="flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-3 p-3 rounded-xl
                      hover:bg-blue-50 dark:hover:bg-slate-700
                      transition-all duration-200 group
                    "
                  >
                    <div className="
                      w-9 h-9 rounded-full flex items-center justify-center text-lg
                      bg-blue-100 dark:bg-slate-700
                      group-hover:scale-110 transition-transform duration-200
                    ">
                      {social.icon}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                        {social.label}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {social.description}
                      </p>
                    </div>

                    <span className="
                      ml-auto text-blue-300 dark:text-slate-600
                      group-hover:text-blue-500 group-hover:translate-x-1
                      transition-all duration-200
                    ">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact