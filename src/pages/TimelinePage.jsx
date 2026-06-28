import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks";
import { timeline } from "@/utils/data";

/* ───────── Desktop Card ───────── */
function TimelineCard({ item, index }) {
  const { ref, inView } = useScrollReveal(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-center mb-12">
      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className={`
          w-full md:w-[42%]
          ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}
        `}
      >
        <div
          className="p-4 rounded-xl w-full transition-all duration-300 ease-out"
          style={{
            background: "var(--bg-card)",
            border: `1px solid ${item.color}30`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 0 1px ${item.color}25, 0 10px 25px ${item.color}20`;
            e.currentTarget.style.borderColor = `${item.color}50`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = `${item.color}30`;
          }}
        >
          {/* Year */}
          <span
            className="text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block"
            style={{
              background: `${item.color}15`,
              color: item.color,
            }}
          >
            {item.year}
          </span>

          {/* Title */}
          <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </h3>

          {/* Description */}
          <p className="text-xs opacity-80 leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>

      {/* Center Dot */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center text-sm z-10"
        style={{
          background: `${item.color}20`,
          border: `2px solid ${item.color}`,
          boxShadow: `0 0 8px ${item.color}40`, // subtle glow
        }}
      >
        {item.icon}
      </div>
    </div>
  );
}

/* ───────── Mobile / Tablet Timeline ───────── */
function MobileTimeline() {
  return (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 to-transparent" />

      {timeline.map((item, i) => (
        <motion.div
          key={i}
          className="relative mb-10"
          whileHover={{ scale: 1.02 }}
        >
          {/* Dot */}
          <div
            className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{
              background: `${item.color}20`,
              border: `2px solid ${item.color}`,
              boxShadow: `0 0 6px ${item.color}40`, // subtle glow
            }}
          >
            {item.icon}
          </div>

          {/* Card */}
          <div
            className="ml-10 p-4 rounded-xl transition-all duration-300 ease-out"
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${item.color}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 1px ${item.color}25, 0 8px 20px ${item.color}20`;
              e.currentTarget.style.borderColor = `${item.color}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = `${item.color}30`;
            }}
          >
            <span
              className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
              style={{
                background: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.year}
            </span>

            <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </h3>

            <p className="text-xs opacity-80 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ───────── MAIN PAGE ───────── */
export default function TimelinePage() {
  return (
    <div className="section pt-24 md:pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
            My Journey
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Life <span className="text-indigo-500">Timeline</span>
          </h1>

          <p className="text-sm opacity-70 max-w-md mx-auto">
            Every milestone that led me here – a little story.
          </p>
        </div>

        {/* Mobile + Tablet */}
        <div className="block md:hidden">
          <MobileTimeline />
        </div>

        {/* Desktop */}
        <div className="hidden md:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] top-0 bottom-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          {timeline.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 p-6 rounded-2xl"
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <p className="font-bold text-lg mb-1">
            The story is not over yet...🚀{" "}
          </p>
          <p className="text-sm opacity-70">
            Next chapter will come very soon{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
