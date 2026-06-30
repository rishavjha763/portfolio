import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

// ── Knowledge Base ──────────────────────────────────────────
const knowledge = [
  // Greetings
  {
    patterns: ["hello", "hi", "hey", "hii", "helo", "namaste", "sup", "yo"],
    answer:
      "Hey! 👋 I'm Rishav's portfolio assistant. Ask me anything about Rishav — his skills, projects, experience, education, or how to contact him!",
  },

  // Who are you / about
  {
    patterns: [
      "who are you",
      "who is rishav",
      "about you",
      "about rishav",
      "tell me about",
      "introduce",
      "yourself",
      "background",
    ],
    answer:
      "I'm Rishav Kumar Jha — a Frontend Developer & MERN Stack Engineer based in Gurugram, Haryana, India. 🚀\n\nI'm dedicated to crafting fast, scalable, and visually refined web experiences with a strong focus on performance, accessibility, and modern development standards.\n\nI have 1+ year of professional experience, completed 5+ projects, and done 2 internships.",
  },

  // Location
  {
    patterns: [
      "location",
      "where",
      "city",
      "live",
      "based",
      "gurugram",
      "haryana",
    ],
    answer: "📍 Rishav is based in Gurugram, Haryana, India.",
  },

  // Skills
  {
    patterns: [
      "skill",
      "tech",
      "technology",
      "stack",
      "know",
      "tools",
      "language",
      "framework",
      "what can",
    ],
    answer:
      "🛠️ Rishav's Tech Stack:\n\n⚛️ Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap\n\n🔧 Backend: Node.js, Express.js, MongoDB, Mongoose, RESTful APIs\n\n🧰 Tools: Git, GitHub, VS Code, Postman, Trinity, Elementor\n\n💬 Soft Skills: Communication, Teamwork, Problem-solving, Time Management",
  },

  // Experience
  {
    patterns: [
      "experience",
      "work",
      "job",
      "intern",
      "internship",
      "company",
      "adaan",
      "softnexs",
      "professional",
    ],
    answer:
      "💼 Rishav's Work Experience:\n\n1️⃣ Web Developer @ Adaan Digital Solutions Pvt. Ltd.\n   Jun 2025 – Present | Full-time\n   • Developed 100+ client websites using WordPress\n   • Custom HTML, CSS & JS for brand-specific needs\n   • Fully responsive designs across all devices\n\n2️⃣ MERN Stack Intern @ SOFTnexs Private Limited\n   Nov 2024 – Feb 2025 | Internship\n   • Built full-stack apps using MongoDB, Express, React & Node\n   • Developed RESTful APIs connected to React frontends\n   • Dynamic UIs with React hooks & context",
  },

  // Projects
  {
    patterns: [
      "project",
      "built",
      "portfolio",
      "zerodha",
      "weather",
      "work done",
      "what have you made",
    ],
    answer:
      "🚀 Rishav's Projects:\n\n📈 Zerodha Clone — Full-stack stock trading platform with JWT auth, buy/sell, portfolio dashboard\nTech: React, Node.js, Express, MongoDB, MUI\n🔗 zerodha-clone-3-1mni.onrender.com\n\n🌤️ Weather App — Real-time weather with OpenWeather API, live forecasts & geolocation\nTech: React.js, OpenWeather API, Responsive Design\n🔗 weatherrk.netlify.app\n\n🎨 Portfolio Website — This very site! React + Vite, Framer Motion, dark/light theme, EmailJS\nTech: React, Vite, Tailwind CSS, Framer Motion",
  },

  // Coming soon projects
  {
    patterns: [
      "coming soon",
      "upcoming",
      "future",
      "in progress",
      "working on",
      "next project",
      "ecommerce",
      "social media",
      "ai task",
    ],
    answer:
      "🔬 Projects In Development:\n\n🛒 E-Commerce Platform (35% done)\nFull MERN stack online store with cart, product listings & admin dashboard\n\n📊 Social Media Dashboard (20% done)\nReal-time analytics with Socket.io, Chart.js & performance reports\n\n🤖 AI Task Manager (10% done)\nSmart productivity app using OpenAI API for auto-prioritizing tasks",
  },

  // Education
  {
    patterns: [
      "education",
      "college",
      "degree",
      "study",
      "bca",
      "school",
      "qualification",
      "university",
    ],
    answer:
      "🎓 Rishav's Education:\n\n🏫 Bachelor of Computer Applications (BCA)\n   World College of Technology & Management\n   2022 – 2025 | Completed\n\n📚 XII — Arts (BSEB)\n   Bihar School Examination Board\n   2022 | Completed",
  },

  // Certificate
  {
    patterns: [
      "certificate",
      "certification",
      "apna college",
      "achievement",
      "award",
    ],
    answer:
      "🏆 Rishav's Certification:\n\nMERN Stack Developer Certificate\nIssued by: Apna College (2025)\n\nCovers full-stack MERN development — React, Node, Express & MongoDB.",
  },

  // Contact
  {
    patterns: [
      "contact",
      "email",
      "phone",
      "reach",
      "hire",
      "connect",
      "linkedin",
      "github",
      "message",
      "touch",
    ],
    answer:
      "📬 Contact Rishav:\n\n📧 Email: jharishav763@gmail.com\n📞 Phone: +91 7970397090\n💼 LinkedIn: linkedin.com/in/rishav-jha-744019252\n🐙 GitHub: github.com/rishavjha\n\nFeel free to reach out for freelance projects, collaborations or job opportunities!",
  },

  // Services
  {
    patterns: [
      "service",
      "offer",
      "provide",
      "freelance",
      "hire",
      "what do you do",
    ],
    answer:
      "⚡ Rishav's Services:\n\n⚡ Fast & Performant websites with lazy loading & code splitting\n📱 Fully Responsive designs for all devices\n🎨 Modern UI/UX with smooth animations\n🔒 Secure & Scalable apps with JWT auth\n🛠️ Full-Stack Development (React + Node + MongoDB)\n🚀 Quick Delivery with agile approach",
  },

  // Resume
  {
    patterns: ["resume", "cv", "download", "hire me"],
    answer:
      "📄 You can download Rishav's resume directly from the portfolio!\n\nJust click the **'View Resume'** button on the homepage. Or reach out at jharishav763@gmail.com 📧",
  },

  // Timeline / Journey
  {
    patterns: [
      "journey",
      "timeline",
      "story",
      "history",
      "started",
      "how did",
      "coding journey",
      "career",
    ],
    answer:
      "🗺️ Rishav's Journey:\n\n🎓 2022 — Started BCA & built first HTML page\n⚡ 2023 — Mastered JavaScript & built first React app\n🚀 2024 — MERN Stack Internship @ SOFTnexs\n📈 2024 — Built Zerodha Clone (full-stack)\n💼 2025 — Joined Adaan Digital Solutions full-time\n🏆 2025 — Earned MERN Certificate from Apna College\n🌟 2026 — Exploring new opportunities!",
  },

  // Stats
  {
    patterns: [
      "stats",
      "numbers",
      "how many",
      "years",
      "projects count",
      "experience years",
    ],
    answer:
      "📊 Rishav in Numbers:\n\n⏱️ 1+ Years of Professional Experience\n🚀 5+ Projects Built\n💼 2 Internships Completed\n🏆 1 Professional Certificate",
  },

  // Availability
  {
    patterns: [
      "available",
      "open to work",
      "looking for",
      "opportunity",
      "job",
      "full time",
      "freelance",
    ],
    answer:
      "✅ Yes! Rishav is currently open to new opportunities!\n\nHe's available for:\n• Full-time Frontend/MERN roles\n• Freelance web projects\n• Collaborations\n\nReach out at: jharishav763@gmail.com 📧",
  },
];

// ── Suggested Questions ────────────────────────────────────
const suggestions = [
  "Who is Rishav?",
  "What are his skills?",
  "Show me his projects",
  "Work experience?",
  "How to contact him?",
];

// ── Find best answer ───────────────────────────────────────
function getAnswer(input) {
  const lower = input.toLowerCase().trim();

  for (const entry of knowledge) {
    if (entry.patterns.some((p) => lower.includes(p))) {
      return entry.answer;
    }
  }

  return "Sorry, this is private — I can't share that info right now. 🙏\n\nYou can ask me about:\n• Skills & Tech Stack\n• Projects\n• Work Experience\n• Education\n• Contact Info\n• Services";
}

// ── Main Component ─────────────────────────────────────────
export default function PortfolioBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey there! 👋 I'm Rishav's AI assistant.\n\nAsk me anything about Rishav — his skills, projects, experience, or how to hire him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function handleSend(text) {
    const msg = text || input;
    if (!msg.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getAnswer(msg) }]);
    }, 700);
  }

  return (
    <>
      {/* ── Floating Button ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px rgba(99,102,241,0.0)",
              "0 0 22px rgba(99,102,241,0.45)",
              "0 0 0px rgba(99,102,241,0.0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full"
        >
          <motion.button
            onClick={() => setOpen((o) => !o)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--accent), #a855f7)",
            }}
            aria-label="Open chat"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CloseIcon sx={{ fontSize: 18 }} style={{ color: "#fff" }} />
                </motion.span>
              ) : (
                <motion.span
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChatIcon sx={{ fontSize: 18 }} style={{ color: "#fff" }} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 rounded-2xl overflow-hidden flex flex-col"
            style={{
              bottom: "calc(4.75rem + env(safe-area-inset-bottom, 0px))",
              right: "1rem",
              left: "1rem",
              top: "auto",
              maxWidth: "380px",
              width: "auto",
              marginLeft: "auto",
              height: "min(480px, 70vh)",
              background: "var(--bg-card)",
              border: "1px solid rgba(99,102,241,0.25)",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.1)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--accent), #a855f7)",
                }}
              >
                <SmartToyIcon sx={{ fontSize: 18, color: "#fff" }} />
              </div>
              <div>
                <p
                  className="font-display font-bold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Rishav's Assistant
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                  <span
                    className="text-xs font-body"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Always online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{ scrollbarWidth: "thin" }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-1"
                    style={{
                      background:
                        msg.from === "bot"
                          ? "linear-gradient(135deg, var(--accent), #a855f7)"
                          : "rgba(99,102,241,0.2)",
                    }}
                  >
                    {msg.from === "bot" ? (
                      <SmartToyIcon sx={{ fontSize: 12, color: "#fff" }} />
                    ) : (
                      <PersonIcon
                        sx={{ fontSize: 12, color: "var(--accent)" }}
                      />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className="px-3 py-2.5 rounded-2xl text-xs font-body leading-relaxed max-w-[78%] whitespace-pre-line"
                    style={
                      msg.from === "bot"
                        ? {
                            background: "var(--bg-secondary)",
                            border: "1px solid var(--border)",
                            color: "var(--text-secondary)",
                            borderBottomLeftRadius: "4px",
                          }
                        : {
                            background:
                              "linear-gradient(135deg, var(--accent), #a855f7)",
                            color: "#fff",
                            borderBottomRightRadius: "4px",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), #a855f7)",
                    }}
                  >
                    <SmartToyIcon sx={{ fontSize: 12, color: "#fff" }} />
                  </div>
                  <div
                    className="px-4 py-3 rounded-2xl flex items-center gap-1"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      borderBottomLeftRadius: "4px",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: "var(--accent)" }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-xs font-body px-2.5 py-1 rounded-full transition-all"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "var(--accent)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(99,102,241,0.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(99,102,241,0.1)")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              className="px-4 py-3 flex items-center gap-2 flex-shrink-0"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Rishav..."
                className="flex-1 text-xs font-body px-3 py-2.5 rounded-xl outline-none"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: input.trim()
                    ? "linear-gradient(135deg, var(--accent), #a855f7)"
                    : "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <SendIcon
                  sx={{
                    fontSize: 15,
                    color: input.trim() ? "#fff" : "var(--text-muted)",
                  }}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
