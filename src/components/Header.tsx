import { useEffect, useState } from "react";
import avatar from "../assets/avatar_kmus.png";// ← agrega este import arriba del archivo

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Inicio", href: "#" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack",    href: "#stack"   },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // ── scroll listener ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── dark mode en <html> ──
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md"
            : "bg-gradient-to-r from-blue-100 via-sky-100 to-blue-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ── logo ── */}
        <div className="flex items-center gap-3">
          {/* avatar circular */}
          <div className="w-10 h-10 rounded-full ring-2 ring-blue-400 dark:ring-blue-500 shadow overflow-hidden">
            <img
              src={avatar}
              alt="Kmus avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-blue-800 dark:text-blue-300 font-bold text-lg tracking-wide">
            Kmus<span className="text-sky-500">Dev</span>
          </span>
        </div>

        {/* ── nav desktop ── */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                px-4 py-2 rounded-full text-sm font-medium
                text-blue-700 dark:text-blue-300
                hover:bg-blue-200 dark:hover:bg-slate-700
                transition-all duration-200
              "
            >
              {link.label}
            </a>
          ))}

        
        </nav>

        {/* ── controles derecha ── */}
        <div className="flex items-center gap-3">
          {/* toggle dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar modo"
            className="
              w-9 h-9 rounded-full flex items-center justify-center
              bg-blue-200 dark:bg-slate-700
              text-blue-700 dark:text-yellow-300
              hover:scale-110 transition-all duration-200
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* hamburguesa móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`
              block w-6 h-0.5 rounded
              bg-blue-600 dark:bg-blue-300
              transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-2" : ""}
            `}
            />
            <span
              className={`
              block w-6 h-0.5 rounded
              bg-blue-600 dark:bg-blue-300
              transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
            />
            <span
              className={`
              block w-6 h-0.5 rounded
              bg-blue-600 dark:bg-blue-300
              transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
            />
          </button>
        </div>
      </div>

      {/* ── menú móvil ── */}
      <div
        className={`
        md:hidden overflow-hidden
        transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <nav
          className="
          flex flex-col px-6 pb-4 gap-1
          bg-white/90 dark:bg-slate-900/90 backdrop-blur-md
        "
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                px-4 py-3 rounded-xl text-sm font-medium
                text-blue-700 dark:text-blue-300
                hover:bg-blue-100 dark:hover:bg-slate-700
                transition-all duration-200
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* barra decorativa */}
      <div className="h-px w-full bg-gradient-to-r from-blue-300 via-sky-400 to-blue-300 dark:from-slate-700 dark:via-blue-600 dark:to-slate-700" />
    </header>
  );
};

export default Header;
