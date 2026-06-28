// ══════════════════════════════════════════════════════════════
//  PORTFOLIO DATA  ←  Edit this file to update all content
// ══════════════════════════════════════════════════════════════

export const personal = {
  name: "Rishav Kumar Jha",
  role: "Frontend Developer",
  tagline: "MERN Stack Engineer",
  bio: "Dedicated to crafting fast, scalable, and visually refined web experiences with a strong focus on performance, accessibility, and modern development standards.",
  location: "Gurugram, Haryana, India",
  email: "jharishav763@gmail.com",
  phone: "+91 7970397090",
  linkedin: "https://www.linkedin.com/in/rishav-jha-744019252/",
  github: "https://github.com/rishavjha",
  resumeUrl: "./rishav cv 22.docx",
};

export const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "2", label: "Internships" },
  { value: "1", label: "Certificate" },
];

export const skills = {
  Frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Trinity", "Elementor"],
  "Soft Skills": [
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Time Management",
  ],
};

export const experience = [
  {
    id: 2,
    role: "MERN Stack Intern",
    company: "SOFTnexs private limited",
    duration: "Nov 2024 – Feb 2025",
    type: "Internship",
    description:
      "Intensive MERN Stack internship — built full-stack web applications from scratch.",
    highlights: [
      "Built full-stack web applications using MongoDB, Express.js, React & Node.js",
      "Implemented database integration with MongoDB & Mongoose ODM",
      "Developed RESTful APIs and connected them to React frontends",
      "Collaborated in team projects improving communication & agile skills",
      "Created dynamic, user-friendly interfaces with React hooks & context",
    ],
  },
  {
    id: 1,
    role: "Web Developer — SaaS Website Builder",
    company: "Adaan Digital Solutions Pvt. Ltd.",
    duration: "Jun 2025 – Present",
    type: "Full-time",
    description:
      "1 Year of professional web development — building client-facing websites using modern SaaS builders and custom code.",
    highlights: [
      "Completed 1 year of professional full-time web development experience",
      "Developed 100+ client websites using WordPress with Trinity & Elementor builders",
      "Customized templates with HTML CSS & JavaScript for brand-specific requirements",
      "Implemented fully responsive designs tested across mobile, tablet & desktop",
      "Collaborated with design and product teams to improve web performance",
      "Applied UI/UX best practices to enhance user engagement metrics",
    ],
  }
];

// ── Main projects (shown in /projects page) ──────────────────
export const projects = [
  {
    id: 1,
    title: "Zerodha Clone",
    description:
      "A full-stack stock trading platform inspired by Zerodha, featuring secure authentication, real-time stock browsing, buy/sell functionality, a portfolio dashboard, and complete order history management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Bootstrap",
      "JWT Auth",
    ],
    category: "Full Stack",
    accent: "#6366f1",
    icon: "📈",
    liveUrl: "https://zerodha-clone-3-1mni.onrender.com",
    repoUrl: "https://github.com/rishavjha763",
    featured: false,
    comingSoon: false,
  },
  {
    id: 2,
    title: "Weather Web App",
    description:
      "A real-time weather app built with HTML, CSS, and JavaScript using OpenWeather API, displaying live weather, forecasts, and key metrics with efficient API handling and dynamic UI updates.",
    tech: [
      "React.js",
      "OpenWeather API",
      "Vanilla CSS",
      "Geolocation API",
      "Responsive Design",
    ],
    category: "Frontend",
    accent: "#22d3a0",
    icon: "🌤️",
    liveUrl: "https://weatherrk.netlify.app/",
    repoUrl: "https://github.com/rishavjha763",
    featured: false,
    comingSoon: false,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A React + Vite portfolio showcasing my frontend development skills and projects, featuring dark/light theme, animations, 3D project cards, and a functional EmailJS contact form.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "MUI Icons",
      "EmailJS",
    ],
    category: "Frontend",
    accent: "#a855f7",
    icon: "🎨",
    liveUrl: "#",
    repoUrl: "https://github.com/rishavjha763",
    featured: false,
    comingSoon: false,
  },
];

// ── Coming Soon / Recent Work projects ───────────────────────
export const recentWork = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with the MERN stack, featuring product listings, cart management, and an admin dashboard for inventory control.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    accent: "#f59e0b",
    icon: "🛒",
    comingSoon: true,
    progress: 35,
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "A real-time analytics dashboard for social media metrics — engagement tracking, post scheduling, audience insights, and performance reports with beautiful charts.",
    tech: [
      "React.js",
      "Node.js",
      "Socket.io",
      "Chart.js",
      "MongoDB",
      "Express.js",
    ],
    category: "Full Stack",
    accent: "#ec4899",
    icon: "📊",
    comingSoon: true,
    progress: 20,
  },
  {
    id: 3,
    title: "AI Task Manager",
    description:
      "A smart productivity app powered by AI — auto-prioritizes your tasks, suggests deadlines based on workload patterns, and generates daily focus plans using OpenAI API.",
    tech: [
      "React.js",
      "OpenAI API",
      "Node.js",
      "MongoDB",
      "Framer Motion",
      "Tailwind CSS",
    ],
    category: "AI + Web",
    accent: "#22d3a0",
    icon: "🤖",
    comingSoon: true,
    progress: 10,
  },
];

// ── Quality Services ──────────────────────────────────────────
export const services = [
  {
    icon: "⚡",
    title: "Fast & Performant",
    description:
      "Optimized with modern best practices, lazy loading, and code splitting to deliver fast and high-performance web experiences.",
    accent: "#f59e0b",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "Pixel-perfect and fully responsive layouts designed to deliver seamless experiences across mobile, tablet, and desktop devices.",
    accent: "#6366f1",
  },
  {
    icon: "🎨",
    title: "Modern UI/UX",
    description:
      "Clean and intuitive interfaces enhanced with smooth animations and thoughtful user interactions.",
    accent: "#a855f7",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Secure and scalable applications built with JWT authentication, robust APIs, and clean architecture.",
    accent: "#22d3a0",
  },
  {
    icon: "🛠️",
    title: "Full-Stack Ready",
    description:
      "End-to-end full-stack development using React, Node.js, Express, and MongoDB.",
    accent: "#ec4899",
  },
  {
    icon: "🚀",
    title: "Quick Delivery",
    description:
      "Agile development approach with transparent communication, structured workflows, and reliable on-time delivery.",
    accent: "#3b82f6",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "World College of Technology & Management",
    year: "2022 – 2025",
    status: "Completed",
    icon: "🎓",
  },
  {
    degree: "XII — Arts (BSEB)",
    institution: "Bihar School Examination Board.",
    year: "2022",
    status: "Completed",
    icon: "📚",
  },
];

export const achievements = [
  {
    title: "MERN Stack Developer",
    issuer: "Apna College",
    description:
      "Certificate of Completion — full-stack MERN development covering React, Node, Express, MongoDB",
    year: "2025",
    icon: "🏆",
  },
];

// ── Contact Form ──────────────────────────────────────────────
export const contactConfig = {
  toEmail: "rishavjha763@gmail.com",
  emailjsServiceId: "service_322dnrk",
  emailjsTemplateId: "template_uemwpu5",
  emailjsPublicKey: "Jk2JQT-0qIU73ZGeP",
};

export const timeline = [
  {
    year: "2022",
    title: "Started BCA",
    description:
      "Joined World College of Technology & Management to pursue a Bachelor of Computer Applications (BCA), marking the beginning of my journey into software development and modern web technologies.",
    icon: "🎓",
    color: "#6366f1",
  },
  {
    year: "2022",
    title: "First HTML Page",
    description:
      "Built my first website using HTML and CSS, which sparked a strong passion for web development and creating interactive digital experiences.",
    icon: "💻",
    color: "#a855f7",
  },
  {
    year: "2023",
    title: "Learned JavaScript",
    description:
      "Deepened my JavaScript expertise by mastering core concepts including DOM manipulation, event handling, ES6+ features, asynchronous programming, and modern development practices.",
    icon: "⚡",
    color: "#f59e0b",
  },
  {
    year: "2023",
    title: "Built First React App",
    description:
      "Started working with React and built my first dynamic web application, gaining hands-on experience with components, hooks, state management, and modern frontend development workflows.",
    icon: "⚛️",
    color: "#22d3a0",
  },
  {
    year: "2024",
    title: "MERN Stack Internship",
    description:
      "Joined as a MERN Stack Intern, where I gained real-world experience building and deploying full-stack web applications using modern development technologies and workflows.",
    icon: "🚀",
    color: "#ec4899",
  },
  {
    year: "2024",
    title: "Zerodha Clone Built",
    description:
      "Developed a full-stack trading platform featuring secure authentication, RESTful API integration, database management with MongoDB, and seamless frontend-backend connectivity.",
    icon: "📈",
    color: "#3b82f6",
  },
  {
    year: "2025",
    title: "Web Developer — Adaan",
    description:
      "Joined Adaan Digital Solutions as a full-time developer, where I have successfully delivered 100+ client websites while continuing to work on scalable, user-focused, and visually polished digital solutions.",
    icon: "💼",
    color: "#6366f1",
  },
  {
    year: "2025",
    title: "MERN Certificate",
    description:
      "Earned an official MERN Stack Developer certification from Apna College, strengthening my expertise in full-stack development and modern web technologies.",
    icon: "🏆",
    color: "#f59e0b",
  },
  {
    year: "2026",
    title: "Next Chapter ✨",
    description:
      "Continuously exploring new opportunities to contribute, grow, and build impactful digital experiences through modern web development.",
    icon: "🌟",
    color: "#22d3a0",
  },
];