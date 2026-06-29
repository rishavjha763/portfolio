import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ExperiencePage from "@/pages/ExperiencePage";
import ContactPage from "@/pages/ContactPage";
import TimelinePage from "@/pages/TimelinePage";
import PortfolioBot from "@/components/PortfolioBot";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const variants = {
  initial: { opacity: 0, y: 18 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function Inner() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      {!loading && (
        <>
          <CustomCursor />
          <ScrollTop />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <PortfolioBot />
        </>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-accent)",
            fontFamily: "DM Sans,sans-serif",
            fontSize: "0.875rem",
          },
          success: {
            iconTheme: { primary: "var(--green)", secondary: "var(--bg-card)" },
          },
          error: {
            iconTheme: { primary: "#f44336", secondary: "var(--bg-card)" },
          },
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Inner />
      </BrowserRouter>
    </ThemeProvider>
  );
}
