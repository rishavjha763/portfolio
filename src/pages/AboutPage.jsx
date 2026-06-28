import { motion } from 'framer-motion';
import LocationOnIcon    from '@mui/icons-material/LocationOn';
import SchoolIcon        from '@mui/icons-material/School';
import EmojiEventsIcon   from '@mui/icons-material/EmojiEvents';
import CodeIcon          from '@mui/icons-material/Code';
import { useScrollReveal } from '@/hooks';
import { personal, education, achievements } from '@/utils/data';

const fade = (delay=0) => ({
  hidden: { opacity:0, y:28 },
  show:   { opacity:1, y:0, transition:{ duration:0.65, delay, ease:[0.16,1,0.3,1] } },
});

export default function AboutPage() {
  const { ref, inView } = useScrollReveal(0.1);
  return (
    <div className="section pt-28 md:pt-36">
      <div className="section-inner relative z-10 w-full min-h-screen flex flex-col justify-center py-16 ">
        {/* Header */}
        <motion.div
          variants={fade()}
          initial="hidden"
          animate="show"
          className="mb-14 "
        >
          <p className="label mb-3">Who I Am</p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3.2rem)",
              color: "var(--text-primary)",
            }}
          >
            About <span className="gradient-text">Me</span>
          </h1>
          <p
            className="font-body text-base max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            A passionate developer blending clean code with modern design
            principles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left col — profile card */}
          <motion.div
            variants={fade(0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-2"
          >
            {/* Photo card */}
            <div
              className="rounded-3xl overflow-hidden mb-5"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 0 50px rgba(99,102,241,0.1)",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/rishav-jha-about.jpeg"
                  alt="Rishav Kumar Jha"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 12%" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--bg-card) 0%, transparent 50%)",
                  }}
                />
              </div>
              <div
                className="px-5 pb-5 pt-3"
                style={{ background: "var(--bg-card)" }}
              >
                <h2
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {personal.name}
                </h2>
                <p
                  className="font-body text-sm mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {personal.role}
                </p>
                <p
                  className="font-body text-xs flex items-center gap-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  <LocationOnIcon sx={{ fontSize: 13 }} /> {personal.location}
                </p>
              </div>
            </div>

            {/* Quick info */}
            {[
              {
                icon: <CodeIcon sx={{ fontSize: 15 }} />,
                label: "Stack",
                val: "MERN",
              },
              {
                icon: <SchoolIcon sx={{ fontSize: 15 }} />,
                label: "Degree",
                val: "BCA 2022–25",
              },
              {
                icon: <EmojiEventsIcon sx={{ fontSize: 15 }} />,
                label: "Certificate",
                val: "Apna College",
              },
              {
                icon: <LocationOnIcon sx={{ fontSize: 15 }} />,
                label: "Based in",
                val: "Gurugram, HR",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl mb-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {row.icon}
                </div>
                <span
                  className="font-body text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {row.label}
                </span>
                <span
                  className="ml-auto font-display font-semibold text-xs"
                  style={{ color: "var(--text-primary)" }}
                >
                  {row.val}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right col */}
          <div className="lg:col-span-3 space-y-10">
            <motion.div variants={fade(0.15)} initial="hidden" animate="show">
              <p className="label mb-4">My Story</p>
              <div
                className="space-y-4 font-body text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  I'm{" "}
                  <span
                    style={{ color: "var(--text-primary)", fontWeight: 600 }}
                  >
                    Rishav Kumar Jha
                  </span>
                  , a Frontend Developer and MERN Stack Engineer based in
                  Gurugram, Haryana, specializing in building modern, scalable,
                  and user-focused web applications. I completed my BCA from
                  World College of Technology & Management and have hands-on
                  experience delivering production-ready digital solutions
                  across both frontend and full-stack development.
                </p>
                <p>
                  During my MERN Stack internship at SOFTnexs Private Limited, I
                  developed full-stack applications from the ground up, working
                  extensively with databases, REST APIs, and responsive user
                  interfaces. This experience strengthened my understanding of
                  modern web technologies and scalable application development.
                </p>
                <p>
                  Later, at Adaan Digital Solutions, I contributed to the
                  development of 100+ client websites using modern SaaS platforms
                  while collaborating closely with design and development teams
                  to deliver polished and efficient user experiences. I’m
                  passionate about creating high-performance digital products
                  that combine clean architecture, accessibility, and refined
                  visual design.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fade(0.2)} initial="hidden" animate="show">
              <p className="label mb-4">Education</p>
              <div className="space-y-3">
                {education.map((e, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-4 rounded-2xl"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span className="text-2xl">{e.icon}</span>
                    <div>
                      <p
                        className="font-display font-semibold text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {e.degree}
                      </p>
                      <p
                        className="font-body text-xs mt-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {e.institution}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-xs font-body"
                          style={{ color: "var(--accent)" }}
                        >
                          {e.year}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-body"
                          style={{
                            background: "rgba(34,211,160,0.1)",
                            color: "var(--green)",
                            border: "1px solid rgba(34,211,160,0.25)",
                          }}
                        >
                          {e.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fade(0.25)} initial="hidden" animate="show">
              <p className="label mb-4">Achievements</p>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl glow-box"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{a.icon}</span>
                    <div>
                      <p
                        className="font-display font-bold text-base"
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
                      <p
                        className="font-body text-sm mt-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {a.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
