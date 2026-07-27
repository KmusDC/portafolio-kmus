import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <Hero />

      {/* padding para que el contenido no quede bajo el header fixed */}
      <main className="pt-20 max-w-6xl mx-auto px-6 py-10">

        {/* contenido de prueba para ver el scroll */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="
              mb-6 p-6 rounded-2xl
              bg-white dark:bg-slate-800
              shadow-sm border border-blue-100 dark:border-slate-700
            "
          >
            <p className="text-blue-700 dark:text-blue-300 font-medium">
              Sección {i + 1}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Scroll para ver el efecto del header 👆
            </p>
          </div>
        ))}

      </main>
    </div>
  )
}

export default App