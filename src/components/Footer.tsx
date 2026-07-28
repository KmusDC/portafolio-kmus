import type { ReactNode } from "react";
import githubIcon from "../assets/github_icon.png";
import linkedinIcon from "../assets/linkedin_icon.png";
import xIcon from "../assets/x_icon.png";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
  
};

const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/KmusDC",
    icon: <img src={githubIcon} alt="" className="h-5 w-5 object-contain" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardo-rodriguez-0a6479176/",
    icon: <img src={linkedinIcon} alt="" className="h-5 w-5 object-contain" />,
  },
  {
    label: "X",
    href: "https://x.com/KmusDC",
    icon: <img src={xIcon} alt="" className="h-5 w-5 object-contain" />,
  },
];

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
      w-full
      bg-gradient-to-r from-blue-100 via-sky-100 to-blue-200
      dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
      border-t border-blue-200 dark:border-slate-700
      transition-colors duration-300
    "
    >
      {/* línea decorativa top */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-300 via-sky-400 to-blue-300 dark:from-slate-700 dark:via-blue-600 dark:to-slate-700" />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8">
        {/* ── fila principal ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* logo */}
          <div className="flex items-center gap-3">
            <span className="text-blue-800 dark:text-blue-300 font-bold text-lg tracking-wide">
              Kmus<span className="text-sky-500">Dev</span>
            </span>
          </div>

          {/* nav links */}
          <nav className="flex flex-wrap justify-center gap-1">
            {navLinks.map((link) => (
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

          {/* redes */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  w-9 h-9 rounded-full flex items-center justify-center text-base
                  bg-white dark:bg-slate-800
                  border border-blue-200 dark:border-slate-600
                  hover:scale-110 hover:border-blue-400 dark:hover:border-blue-500
                  shadow-sm transition-all duration-200
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── divisor ── */}
        <div className="w-full h-px bg-blue-200 dark:bg-slate-700" />

        {/* ── fila copyright ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {year} KmusDev. Todos los derechos reservados.
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            Hecho con
            <span className="text-red-400 animate-pulse">♥</span>
            usando React + TypeScript + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
