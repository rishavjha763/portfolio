import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6"
      style={{ background: 'var(--bg-primary)' }}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-3xl text-white"
        style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))',
                 boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}>
        R
      </motion.div>
      <div className="w-40 h-px rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div className="h-full w-1/3 rounded-full"
          style={{ background: 'linear-gradient(to right, var(--accent), var(--accent-2))' }}
          animate={{ x: ['−100%','300%'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} />
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-xs font-body tracking-widest uppercase"
        style={{ color: 'var(--text-muted)' }}>
        Loading...
      </motion.p>
    </motion.div>
  );
}
