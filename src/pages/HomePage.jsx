import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SchoolIcon from "@mui/icons-material/School";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GitHubCalendar } from 'react-github-calendar';
import {
  personal,
  stats,
  skills,
  experience,
  projects,
  recentWork,
  services,
  education,
  achievements,
  timeline,
} from "@/utils/data";

import { useScrollReveal } from "@/hooks";

/* ── animated gradient letters ── */
function AnimatedName() {
  const letters = "Rishav".split("");
  const palette = [
    "#6366f1",
    "#818cf8",
    "#a855f7",
    "#c084fc",
    "#ec4899",
    "#6366f1",
  ];
  return (
    <span className="inline-flex">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          animate={{
            color: [
              palette[i],
              palette[(i + 2) % palette.length],
              palette[(i + 4) % palette.length],
              palette[i],
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          style={{ display: "inline-block" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Photo card — no zoom ── */
function PhotoCard() {
  return (
    <div
      className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden relative"
      style={{
        border: "2px solid rgba(99,102,241,0.35)",
        boxShadow:
          "0 0 0 1px rgba(99,102,241,0.08), 0 24px 60px rgba(99,102,241,0.18)",
      }}
    >
      <img
        src="/rishav-main.jpeg"
        alt="Rishav Kumar Jha"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center 15%" }}
      />
      {/* subtle gradient overlay bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(to top, rgba(6,6,12,0.5), transparent)",
        }}
      />
      {/* corner dot */}
      <div
        className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}

/* ── Reusable section header ── */
function SectionHead({ label, title, subtitle, linkTo, linkLabel }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
      <div>
        <p className="label mb-2">{label}</p>
        <h2
          className="font-display font-bold"
          style={{
            fontSize: "clamp(1.7rem,3.5vw,2.5rem)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="font-body text-sm mt-1.5 max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="btn-ghost text-sm whitespace-nowrap self-start sm:self-auto flex-shrink-0"
          style={{ padding: "10px 20px" }}
        >
          {linkLabel} <ArrowForwardIcon sx={{ fontSize: 15 }} />
        </Link>
      )}
    </div>
  );
}

/* ── Skills mini ── */
const catColor = {
  Frontend: "#6366f1",
  Backend: "#22d3a0",
  Tools: "#f59e0b",
  "Soft Skills": "#a855f7",
};
function SkillsMini() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div ref={ref} className="grid sm:grid-cols-2 gap-5">
      {Object.entries(skills).map(([cat, items], ci) => (
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: ci * 0.08 }}
          className="p-5 rounded-2xl"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-1 h-6 rounded-full"
              style={{ background: catColor[cat] }}
            />
            <span
              className="font-display font-bold text-sm"
              style={{ color: catColor[cat] }}
            >
              {cat}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {items.map((s, si) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: ci * 0.08 + si * 0.04 }}
                className="text-xs font-body px-2.5 py-1 rounded-full"
                style={{
                  background: `${catColor[cat]}12`,
                  color: catColor[cat],
                  border: `1px solid ${catColor[cat]}30`,
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Experience mini ── */
function ExperienceMini() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div ref={ref} className="space-y-5">
      {experience.map((job, i) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className="relative pl-12"
        >
          {i < experience.length - 1 && (
            <div
              className="absolute left-[17px] top-9 bottom-0 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom,rgba(99,102,241,0.4),transparent)",
              }}
            />
          )}
          <div
            className="absolute left-0 top-0 w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: "var(--bg-card)",
              border: "2px solid var(--accent)",
              color: "var(--accent)",
              boxShadow: "0 0 14px rgba(99,102,241,0.28)",
            }}
          >
            <WorkIcon sx={{ fontSize: 14 }} />
          </div>
          <div
            className="p-5 rounded-2xl"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderLeft: "2px solid rgba(99,102,241,0.3)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h4
                  className="font-display font-bold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {job.role}
                </h4>
                <p
                  className="font-body text-xs mt-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  {job.company}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className="text-xs font-body flex items-center gap-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  <CalendarMonthIcon sx={{ fontSize: 11 }} />
                  {job.duration}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-body"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  {job.type}
                </span>
              </div>
            </div>
            <ul className="space-y-1.5 mt-3">
              {job.highlights.slice(0, 3).map((h, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-xs font-body"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      fontSize: 13,
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Projects mini ── */
function ProjectsMini() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -6 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${p.accent}50`;
            e.currentTarget.style.boxShadow = `0 16px 48px ${p.accent}22`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            className="h-[3px]"
            style={{
              background: `linear-gradient(to right,${p.accent},transparent)`,
            }}
          />
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{p.icon}</span>
              <span
                className="text-xs font-body px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: `${p.accent}15`,
                  color: p.accent,
                  border: `1px solid ${p.accent}30`,
                }}
              >
                {p.category}
              </span>
              {p.featured && (
                <StarIcon sx={{ fontSize: 13, color: "#f59e0b" }} />
              )}
            </div>
            <h4
              className="font-display font-bold text-sm mb-1.5"
              style={{ color: "var(--text-primary)" }}
            >
              {p.title}
            </h4>
            <p
              className="font-body text-xs leading-relaxed mb-3"
              style={{
                color: "var(--text-secondary)",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {p.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs font-body px-1.5 py-0.5 rounded"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-muted)",
                  }}
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 3 && (
                <span
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  +{p.tech.length - 3}
                </span>
              )}
            </div>
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-display font-semibold"
              style={{ color: p.accent }}
            >
              View <OpenInNewIcon sx={{ fontSize: 12 }} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Services section ── */
function ServicesSection() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: i * 0.08 }}
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl group"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${s.accent}45`;
            e.currentTarget.style.boxShadow = `0 12px 40px ${s.accent}18`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* icon */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
            style={{
              background: `${s.accent}14`,
              border: `1px solid ${s.accent}28`,
            }}
          >
            {s.icon}
          </div>
          <h3
            className="font-display font-bold text-base mb-2 transition-colors"
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = s.accent)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            {s.title}
          </h3>
          <p
            className="font-body text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {s.description}
          </p>
          {/* bottom accent */}
          <div
            className="mt-4 h-0.5 w-0 rounded-full group-hover:w-full transition-all duration-500"
            style={{
              background: `linear-gradient(to right,${s.accent},transparent)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Recent Work / Coming Soon ── */
function RecentWorkSection() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {recentWork.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className="rounded-2xl overflow-hidden relative"
          style={{
            background: "var(--bg-card)",
            border: `1px solid ${p.accent}30`,
          }}
        >
          {/* shimmer top bar */}
          <div
            className="h-[3px] shimmer w-full"
            style={{
              background: `linear-gradient(90deg,${p.accent}30,${p.accent},${p.accent}30)`,
            }}
          />

          <div className="p-6">
            {/* coming soon badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{p.icon}</span>
                <span
                  className="text-xs font-body px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: `${p.accent}15`,
                    color: p.accent,
                    border: `1px solid ${p.accent}30`,
                  }}
                >
                  {p.category}
                </span>
              </div>
              <span
                className="inline-flex items-center gap-1 text-xs font-body px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  color: "#f59e0b",
                  border: "1px solid rgba(245,158,11,0.3)",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 11 }} /> Coming Soon
              </span>
            </div>

            <h4
              className="font-display font-bold text-base mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {p.title}
            </h4>
            <p
              className="font-body text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {p.description}
            </p>

            {/* progress bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className="text-xs font-body"
                  style={{ color: "var(--text-muted)" }}
                >
                  Progress
                </span>
                <span
                  className="text-xs font-display font-bold"
                  style={{ color: p.accent }}
                >
                  {p.progress}%
                </span>
              </div>
              <div
                className="h-1.5 rounded-full w-full overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${p.progress}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(to right,${p.accent},${p.accent}88)`,
                  }}
                />
              </div>
            </div>

            {/* tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs font-body px-2 py-0.5 rounded-md"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* subtle overlay pattern */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at 90% 10%, ${p.accent}08, transparent 60%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ── About mini ── */
function AboutMini() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div
          className="rounded-2xl overflow-hidden mb-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="h-52 overflow-hidden">
            <img
              src="/rishav-jha-about.jpeg"
              alt="Rishav Kumar Jha"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 12%" }}
            />
          </div>
          <div className="p-4">
            <p
              className="font-display font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {personal.name}
            </p>
            <p className="font-body text-sm" style={{ color: "var(--accent)" }}>
              {personal.role} · {personal.tagline}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-3 rounded-xl text-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="font-display font-bold text-xl gradient-text">
                {s.value}
              </p>
              <p
                className="font-body text-xs mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p
          className="font-body text-sm leading-relaxed mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {personal.bio} I completed my BCA from World College of Technology &
          Management and have 1+ year of web development experience.
        </p>
        <p className="label mb-3">Education</p>
        <div className="space-y-2 mb-4">
          {education.map((e, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="text-xl">{e.icon}</span>
              <div>
                <p
                  className="font-display font-semibold text-xs"
                  style={{ color: "var(--text-primary)" }}
                >
                  {e.degree}
                </p>
                <p
                  className="font-body text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {e.institution}
                </p>
                <p
                  className="font-body text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  {e.year}
                </p>
              </div>
            </div>
          ))}
        </div>
        {achievements.map((a, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl glow-box"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <span className="text-2xl">{a.icon}</span>
            <div>
              <p
                className="font-display font-bold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {a.title}
              </p>
              <p
                className="font-body text-xs mt-0.5"
                style={{ color: "var(--accent)" }}
              >
                {a.issuer} · {a.year}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ════ MAIN PAGE ════ */
export default function HomePage() {
  return (
    <>
      {/* ━━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28 section"
        style={{ paddingTop: "", paddingBottom: "" }}
      >
        <div className="absolute inset-0" style={{ paddingTop: "96px" }} />

        {/* orbs */}
        <motion.div
          className="orb"
          animate={{ scale: [1, 1.2, 1], opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle,var(--accent),transparent 70%)",
            top: "-10%",
            right: "-5%",
            opacity: 0.14,
          }}
        />
        <motion.div
          className="orb"
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            width: 380,
            height: 380,
            background:
              "radial-gradient(circle,var(--accent-2),transparent 70%)",
            bottom: "5%",
            left: "-8%",
            opacity: 0.07,
          }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.3,
          }}
        />

        <div className="section-inner relative z-10 w-full flex flex-col justify-center pt-16 pb-0">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">
            {/* LEFT */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7 text-xs font-body font-medium"
                style={{
                  background: "rgba(34,211,160,0.1)",
                  border: "1px solid rgba(34,211,160,0.3)",
                  color: "var(--green)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
                  style={{ background: "var(--green)" }}
                />
                Open to opportunities
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-bold leading-[1.08] mb-4"
                style={{
                  fontSize: "clamp(2.4rem,6vw,4.2rem)",
                  color: "var(--text-primary)",
                }}
              >
                Hi, I'm <AnimatedName />
                <br />
                <span
                  style={{ color: "var(--text-secondary)", fontSize: "0.78em" }}
                >
                  Kumar Jha
                </span>
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5"
              >
                <span
                  className="font-display font-semibold text-lg"
                  style={{ color: "var(--accent)" }}
                >
                  {personal.role}
                </span>
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <span
                  className="font-body text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {personal.tagline}
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-body text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "var(--text-secondary)" }}
              >
                {personal.bio}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 mb-10"
              >
                <a
                  href="/rishav cv 22.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Resume <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </a>
                <Link to="/contact" className="btn-ghost">
                  <EmailOutlinedIcon sx={{ fontSize: 16 }} /> Contact Me
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                {[
                  {
                    href: "https://www.linkedin.com/in/rishav-jha-744019252/",
                    icon: <LinkedInIcon sx={{ fontSize: 18 }} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/rishavjha763",
                    icon: <GitHubIcon sx={{ fontSize: 18 }} />,
                    label: "GitHub",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
                <div
                  className="w-8 h-px"
                  style={{ background: "var(--border)" }}
                />
                <span
                  className="text-xs font-body"
                  style={{ color: "var(--text-muted)" }}
                >
                  Let's connect
                </span>
              </motion.div>
            </motion.div>

            {/* RIGHT — Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <PhotoCard />
                {/* floating tags — 4 tags now */}
                {["React.js", "Node.js", "MongoDB", "Express.js"].map(
                  (tag, i) => {
                    const positions = [
                      { top: "-14px", left: "-20px" },
                      { bottom: "-14px", right: "-20px" },
                      {
                        top: "50%",
                        right: "-24px",
                        transform: "translateY(-60%)",
                      },
                      {
                        top: "50%",
                        left: "-24px",
                        transform: "translateY(20%)",
                      },
                    ];
                    return (
                      <motion.div
                        key={tag}
                        animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                        transition={{
                          duration: 3 + i * 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.7,
                        }}
                        className="absolute px-3 py-1.5 rounded-xl text-xs font-display font-semibold whitespace-nowrap"
                        style={{
                          ...positions[i],
                          background: "var(--bg-card)",
                          border: "1px solid rgba(99,102,241,0.35)",
                          color: "var(--accent)",
                          boxShadow: "0 4px 20px rgba(99,102,241,0.15)",
                          zIndex: 10,
                        }}
                      >
                        {tag}
                      </motion.div>
                    );
                  },
                )}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                className="text-center p-4 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="font-display font-bold text-2xl sm:text-3xl gradient-text">
                  {s.value}
                </p>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center gap-2 mt-10"
          >
            <span
              className="text-xs font-body tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8"
              style={{
                background:
                  "linear-gradient(to bottom,var(--accent),transparent)",
              }}
            />
          </motion.div>

          {/* ━━━━ GITHUB CONTRIBUTION GRAPH ━━━━━━━━━━━━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-14 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GitHubIcon sx={{ fontSize: 18, color: "var(--accent)" }} />
              <p className="label" style={{ margin: 0 }}>
                GitHub Activity
              </p>
            </div>

            <div
              className="p-5 sm:p-8 rounded-2xl overflow-x-auto"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <GitHubCalendar
                username="rishavjha763"
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                blockSize={13}
                blockMargin={4}
                fontSize={13}
                style={{ margin: "0 auto" }}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>

            <a
              href="https://github.com/rishavjha763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-body mt-3"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              View GitHub profile <OpenInNewIcon sx={{ fontSize: 12 }} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ━━━━ ABOUT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="Who I Am"
            title="About Me"
            subtitle="Developer, learner, builder — always shipping."
            linkTo="/about"
            linkLabel="Full Bio"
          />
          <AboutMini />
        </div>
      </section>
      {/* ━━━━ TIMELINE PREVIEW ━━━━━━━━━━━━━━━━━━━━━ */}

      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="Journey"
            title="My Timeline"
            subtitle="A short preview of my coding journey."
            linkTo="/timeline"
            linkLabel="View Full Timeline"
          />

          {/* ───────── DESKTOP ───────── */}
          <div className="hidden md:block relative">
            {/* Center Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--accent), transparent)",
              }}
            />

            {timeline.slice(0, 4).map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-center mb-10"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`w-[42%] ${
                      isLeft ? "mr-auto pr-4" : "ml-auto pl-4"
                    }`}
                  >
                    <div
                      className="p-4 rounded-xl transition-all duration-300 ease-out"
                      style={{
                        background: "var(--bg-card)",
                        border: `1px solid ${item.color}25`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 1px ${item.color}25, 0 10px 25px ${item.color}20`;
                        e.currentTarget.style.borderColor = `${item.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = `${item.color}25`;
                      }}
                    >
                      <span
                        className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
                        style={{
                          background: `${item.color}12`,
                          color: item.color,
                        }}
                      >
                        {item.year}
                      </span>

                      <h3 className="text-sm font-semibold flex items-center gap-2 mb-1">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </h3>

                      <p className="text-xs opacity-70 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs z-10"
                    style={{
                      background: `${item.color}15`,
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 0 8px ${item.color}40`,
                    }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      {item.icon}
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* ───────── MOBILE ───────── */}
          <div className="md:hidden relative pl-10">
            {/* Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-4 top-0 bottom-0 w-[2px] origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent), transparent)",
              }}
            />

            {timeline.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="absolute left-0 w-7 h-7 rounded-full flex items-center justify-center text-sm"
                  style={{
                    background: `${item.color}15`,
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 6px ${item.color}40`,
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {item.icon}
                  </motion.span>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="ml-10 p-4 rounded-xl transition-all duration-300 ease-out"
                  style={{
                    background: "var(--bg-card)",
                    border: `1px solid ${item.color}25`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 1px ${item.color}25, 0 8px 20px ${item.color}20`;
                    e.currentTarget.style.borderColor = `${item.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = `${item.color}25`;
                  }}
                >
                  <span
                    className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
                    style={{
                      background: `${item.color}12`,
                      color: item.color,
                    }}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-sm font-semibold flex items-center gap-2 mb-1">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs opacity-70">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ SERVICES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="What I Offer"
            title="Quality Services"
            subtitle="Delivering scalable and polished web solutions from concept to deployment."
          />
          <ServicesSection />
        </div>
      </section>

      {/* ━━━━ SKILLS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="My Toolkit"
            title="Skills & Technologies"
            subtitle="From pixel-perfect UIs to full-stack backends."
            linkTo="/skills"
            linkLabel="All Skills"
          />
          <SkillsMini />
        </div>
      </section>

      {/* ━━━━ EXPERIENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="Career"
            title="Work Experience"
            subtitle="Real roles, real products, real growth."
            linkTo="/experience"
            linkLabel="Full Timeline"
          />
          <ExperienceMini />
        </div>
      </section>

      {/* ━━━━ PROJECTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="My Work"
            title="Projects I've Built"
            subtitle="Real-world apps built with modern web technologies, focused on performance and user experience."
            linkTo="/projects"
            linkLabel="All Projects"
          />
          <ProjectsMini />
        </div>
      </section>

      {/* ━━━━ RECENT WORK / COMING SOON ━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <SectionHead
            label="In the Lab"
            title="Featured Projects"
            subtitle=" Projects currently in development — exciting work in progress."
          />
          <RecentWorkSection />
        </div>
      </section>

      {/* ━━━━ CONTACT CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section-divider">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-14 text-center glow-box relative overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            {/* bg orb */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08), transparent 60%)",
              }}
            />
            <p className="label mb-3">Open to Work</p>
            <h2
              className="font-display font-bold mb-4 relative"
              style={{
                fontSize: "clamp(1.8rem,4vw,2.8rem)",
                color: "var(--text-primary)",
              }}
            >
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p
              className="font-body text-base mb-8 max-w-lg mx-auto relative"
              style={{ color: "var(--text-secondary)" }}
            >
              Have a project or opportunity? I'd love to hear from you. Let's
              create something great together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <Link to="/contact" className="btn-primary">
                <EmailOutlinedIcon sx={{ fontSize: 16 }} /> Get In Touch
              </Link>
              <a
                href="/rishav cv 22.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                View Resume <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
