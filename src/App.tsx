import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />

    </div>
  )
}

export default App