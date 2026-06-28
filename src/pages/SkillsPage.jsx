import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks';
import { skills } from '@/utils/data';

const catStyle = {
  Frontend:     { accent:'#6366f1', bg:'rgba(99,102,241,0.08)',  border:'rgba(99,102,241,0.2)'  },
  Backend:      { accent:'#22d3a0', bg:'rgba(34,211,160,0.08)',  border:'rgba(34,211,160,0.2)'  },
  Tools:        { accent:'#f59e0b', bg:'rgba(245,158,11,0.08)',  border:'rgba(245,158,11,0.2)'  },
  'Soft Skills':{ accent:'#a855f7', bg:'rgba(168,85,247,0.08)',  border:'rgba(168,85,247,0.2)'  },
};

const allSkills = Object.values(skills).flat();

function SkillCard({ cat, items, i }) {
  const { ref, inView } = useScrollReveal(0.15);
  const s = catStyle[cat] || catStyle.Tools;
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:0.6, delay:i*0.1, ease:[0.16,1,0.3,1] }}
      className="card p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-8 rounded-full" style={{ background:`linear-gradient(to bottom,${s.accent},transparent)` }} />
        <h3 className="font-display font-bold text-base" style={{ color:s.accent }}>{cat}</h3>
        <span className="ml-auto font-body text-xs" style={{ color:'var(--text-muted)' }}>{items.length} skills</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill,j) => (
          <motion.span key={skill}
            initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}}
            transition={{ delay:i*0.1+j*0.05 }}
            whileHover={{ y:-3, scale:1.05 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-body font-semibold cursor-default"
            style={{ background:s.bg, border:`1px solid ${s.border}`, color:s.accent }}>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  return (
    <div className="section pt-28 md:pt-36">
      <div className="section-inner relative z-10 w-full min-h-screen flex flex-col justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="label mb-3">My Toolkit</p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3.2rem)",
              color: "var(--text-primary)",
            }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p
            className="font-body text-base max-w-lg mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            Technologies and tools I use to build modern, scalable applications
            — from pixel-perfect UIs to robust backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {Object.entries(skills).map(([cat, items], i) => (
            <SkillCard key={cat} cat={cat} items={items} i={i} />
          ))}
        </div>

        {/* Marquee */}
        <div
          className="relative overflow-hidden py-5"
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            className="absolute left-0 inset-y-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--bg-primary), transparent)",
            }}
          />
          <div
            className="absolute right-0 inset-y-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--bg-primary), transparent)",
            }}
          />
          <div className="marquee-track">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-3 px-4 py-2 rounded-full text-sm font-body whitespace-nowrap"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "var(--accent)" }}
                />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
