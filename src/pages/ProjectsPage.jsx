import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon    from '@mui/icons-material/GitHub';
import StarIcon      from '@mui/icons-material/Star';
import { useScrollReveal } from '@/hooks';
import { projects } from '@/utils/data';

function TiltCard({ p, i }) {
  const { ref, inView } = useScrollReveal(0.1);
  const cardRef = useRef(null);
  const [tilt, setTilt]       = useState({ rx:0, ry:0, gx:50, gy:50, glare:0 });
  const [hovered, setHovered] = useState(false);

  const onMove = e => {
    const el = cardRef.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top)  / r.height;
    setTilt({ rx:(py-0.5)*-12, ry:(px-0.5)*12, gx:px*100, gy:py*100, glare:0.12 });
  };
  const onEnter = () => setHovered(true);
  const onLeave = () => {
    setTilt({ rx:0, ry:0, gx:50, gy:50, glare:0 });
    setHovered(false);
  };

  const cardStyle = {
    background:      'var(--bg-card)',
    border:          hovered ? `1px solid ${p.accent}55` : '1px solid var(--border)',
    /* Beautiful layered shadow on hover */
    boxShadow: hovered
      ? `0 0 0 1px ${p.accent}18,
         0 4px 6px -1px rgba(0,0,0,0.12),
         0 20px 40px -8px ${p.accent}30,
         0 36px 60px -16px ${p.accent}18`
      : '0 2px 8px rgba(0,0,0,0.06)',
    transform: `perspective(1000px)
                rotateX(${tilt.rx}deg)
                rotateY(${tilt.ry}deg)
                translateZ(${hovered ? '10px' : '0px'})`,
    transition: hovered
      ? 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.08s ease'
      : 'border-color 0.4s ease, box-shadow 0.5s ease, transform 0.55s ease',
    transformStyle: 'preserve-3d',
    willChange:     'transform',
    overflow:       'hidden',
    borderRadius:   '16px',
  };

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:50 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.7, delay:i*0.13, ease:[0.16,1,0.3,1] }}
    >
      <div ref={cardRef} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}
           className="relative group" style={cardStyle}>

        {/* Glare overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
             style={{
               background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,${tilt.glare}), transparent 55%)`,
               transition: 'opacity 0.15s',
             }} />

        {/* Accent top bar */}
        <div className="h-[3px] w-full"
             style={{ background:`linear-gradient(to right, ${p.accent}, ${p.accent}00)`,
                      opacity: hovered ? 1 : 0.5, transition:'opacity 0.3s' }} />

        <div className="p-6">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-2xl">{p.icon}</span>
              <span className="text-xs font-body font-semibold px-2 py-0.5 rounded-full"
                    style={{ background:`${p.accent}18`, color:p.accent, border:`1px solid ${p.accent}35` }}>
                {p.category}
              </span>
              {p.featured && (
                <span className="text-xs font-body px-2 py-0.5 rounded-full inline-flex items-center gap-0.5"
                      style={{ background:'rgba(245,158,11,0.1)', color:'#f59e0b', border:'1px solid rgba(245,158,11,0.3)' }}>
                  <StarIcon sx={{fontSize:10}} /> Featured
                </span>
              )}
            </div>
            {/* Action buttons — visible on hover */}
            <div className="flex gap-1.5" style={{ opacity:hovered?1:0, transition:'opacity 0.25s' }}>
              {[
                { href:p.repoUrl, icon:<GitHubIcon sx={{fontSize:15}}/>,    label:'Repo' },
                { href:p.liveUrl, icon:<OpenInNewIcon sx={{fontSize:15}}/>, label:'Live' },
              ].map(btn => (
                <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
                   onClick={e=>e.stopPropagation()} aria-label={btn.label}
                   className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                   style={{ background:'var(--bg-secondary)', border:'1px solid var(--border)', color:'var(--text-secondary)' }}
                   onMouseEnter={e=>{e.currentTarget.style.borderColor=p.accent; e.currentTarget.style.color=p.accent; e.currentTarget.style.background=`${p.accent}12`;}}
                   onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.background='var(--bg-secondary)';}}>
                  {btn.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg mb-2"
              style={{ color: hovered ? p.accent : 'var(--text-primary)', transition:'color 0.25s' }}>
            {p.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm leading-relaxed mb-4" style={{ color:'var(--text-secondary)' }}>
            {p.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tech.map(t => (
              <span key={t} className="text-xs font-body px-2 py-1 rounded-lg"
                    style={{ background:'var(--bg-secondary)', color:'var(--text-muted)', border:'1px solid var(--border)' }}>
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 text-sm font-display font-semibold"
             style={{ color:p.accent }}>
            View Project <OpenInNewIcon sx={{fontSize:14}} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="section pt-28 md:pt-36">
      <div className="section-inner relative z-10 w-full min-h-screen flex flex-col justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="label mb-3">My Work</p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3.2rem)",
              color: "var(--text-primary)",
            }}
          >
            Projects <span className="gradient-text">I’ve Built</span>
          </h1>
          <p
            className="font-body text-base max-w-lg mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            A showcase of real-world applications built using modern web
            technologies, focusing on performance, interactivity, and user
            experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((p, i) => (
            <TiltCard key={p.id} p={p} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p
            className="font-body text-sm mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            More projects on GitHub
          </p>
          <a
            href="https://github.com/rishavjha763"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <GitHubIcon sx={{ fontSize: 16 }} /> View All Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
}
