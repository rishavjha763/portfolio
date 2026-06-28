import { motion } from 'framer-motion';
import WorkIcon               from '@mui/icons-material/Work';
import CalendarMonthIcon      from '@mui/icons-material/CalendarMonth';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useScrollReveal } from '@/hooks';
import { experience } from '@/utils/data';

function ExpCard({ job, i, isLast }) {
  const { ref, inView } = useScrollReveal(0.15);
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, x:-30 }} animate={inView?{ opacity:1, x:0 }:{}}
      transition={{ duration:0.65, delay:i*0.12, ease:[0.16,1,0.3,1] }}
      className="relative pl-12">
      {!isLast && (
        <div className="absolute left-[17px] top-9 bottom-0 w-0.5"
             style={{ background:'linear-gradient(to bottom,rgba(99,102,241,0.45),transparent)' }} />
      )}
      <div className="timeline-dot absolute left-0 top-0">
        <WorkIcon sx={{ fontSize:15 }} />
      </div>
      <motion.div whileHover={{ x:5 }}
        className="rounded-2xl p-6 mb-8"
        style={{ background:'var(--bg-card)', border:'1px solid var(--border)',
                 borderLeft:'2px solid rgba(99,102,241,0.3)', transition:'all 0.3s ease' }}
        onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(99,102,241,0.4)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(99,102,241,0.1)'; }}
        onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.boxShadow='none'; }}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-bold text-lg mb-0.5" style={{ color:'var(--text-primary)' }}>{job.role}</h3>
            <p className="font-body font-semibold text-sm" style={{ color:'var(--accent)' }}>{job.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-body" style={{ color:'var(--text-muted)' }}>
              <CalendarMonthIcon sx={{ fontSize:12 }} /> {job.duration}
            </span>
            <span className="text-xs font-body px-2.5 py-0.5 rounded-full"
                  style={{ background:'rgba(99,102,241,0.1)', color:'var(--accent)', border:'1px solid rgba(99,102,241,0.25)' }}>
              {job.type}
            </span>
          </div>
        </div>
        <p className="font-body text-sm mb-4 italic" style={{ color:'var(--text-secondary)' }}>
          {job.description}
        </p>
        <ul className="space-y-2.5">
          {job.highlights.map((h,j) => (
            <motion.li key={j}
              initial={{ opacity:0, x:-10 }} animate={inView?{ opacity:1, x:0 }:{}}
              transition={{ delay:i*0.12+j*0.06 }}
              className="flex items-start gap-3 text-sm font-body" style={{ color:'var(--text-secondary)' }}>
              <CheckCircleOutlineIcon sx={{ fontSize:16, color:'var(--accent)', flexShrink:0, marginTop:'1px' }} />
              {h}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="section pt-28 md:pt-36">
      <div className="section-inner relative z-10 w-full min-h-screen flex flex-col justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="label mb-3">Career</p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3.2rem)",
              color: "var(--text-primary)",
            }}
          >
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p
            className="font-body text-base max-w-lg mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            1+ year of professional experience — real roles, real products, real
            growth.
          </p>
        </motion.div>
        <div className="max-w-3xl">
          {experience.map((job, i) => (
            <ExpCard
              key={job.id}
              job={job}
              i={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
