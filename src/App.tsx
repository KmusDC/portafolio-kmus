import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header   from "./components/Header"
import Hero     from "./components/Hero"
import Projects from "./components/Projects"
import Stack    from "./components/Stack"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App