import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon      from '@mui/icons-material/Menu';
import CloseIcon     from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon  from '@mui/icons-material/DarkMode';
import { useTheme } from '@/context/ThemeContext';
import { personal } from '@/utils/data';

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Timeline", to: "/timeline" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { isDark, toggle }      = useTheme();
  const location                = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-bg border-b" : ""}`}
        style={{
          borderColor: "var(--border)",
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
      >
        {/* Same max-width & padding as .section-inner */}
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          className="flex items-center justify-between sm:px-8 lg:px-10"
        >
          {/* Logo */}

          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src="/rk1logo.png"
              alt="Rishav Logo"
              className="h-20 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="px-3 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200"
                style={({ isActive }) => ({
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  background: "transparent",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? "d" : "l"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <LightModeIcon sx={{ fontSize: 17 }} />
                  ) : (
                    <DarkModeIcon sx={{ fontSize: 17 }} />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Resume — desktop only */}
            <a
              href="/rishav cv 22.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex"
              style={{ fontSize: "0.78rem", padding: "9px 18px" }}
            >
              Resume ↗
            </a>

            {/* Burger — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {open ? (
                <CloseIcon sx={{ fontSize: 18 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 18 }} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="h-20" onClick={() => setOpen(false)} />
            <div className="flex-1 flex flex-col items-center justify-center gap-2 pb-16">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={l.to}
                    className="block px-8 py-3 font-display text-2xl font-bold text-center rounded-2xl"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--accent)" : "var(--text-primary)",
                    })}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
