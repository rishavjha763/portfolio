import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon   from '@mui/icons-material/GitHub';
import EmailIcon    from '@mui/icons-material/Email';
import { personal } from '@/utils/data';

export default function Footer() {
  return (
    <footer className="section-divider mt-4">
      <div style={{ maxWidth:'1120px', margin:'0 auto', padding:'32px 20px' }}
           className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs text-white"
               style={{ background:'linear-gradient(135deg,var(--accent),var(--accent-2))' }}>R</div>
          <span className="font-display font-bold text-sm" style={{ color:'var(--text-secondary)' }}>
            Rishav Kumar Jha
          </span>
        </Link>
        <p className="text-xs font-body text-center" style={{ color:'var(--text-muted)' }}>
          © {new Date().getFullYear()} Rishav Kumar Jha.
        </p>
        <div className="flex items-center gap-4">
          {[
            { href:"https://www.linkedin.com/in/rishav-jha-744019252/",           icon:<LinkedInIcon sx={{fontSize:18}}/>, label:'LinkedIn' },
            { href:"https://github.com/rishavjha763",             icon:<GitHubIcon   sx={{fontSize:18}}/>, label:'GitHub'   },
            { href:`mailto:${personal.email}`,  icon:<EmailIcon    sx={{fontSize:18}}/>, label:'Email'    },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined}
               rel="noopener noreferrer" aria-label={label}
               style={{ color:'var(--text-muted)', transition:'color 0.2s, transform 0.2s', display:'inline-flex' }}
               onMouseEnter={e=>{ e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.transform='scale(1.15)'; }}
               onMouseLeave={e=>{ e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.transform='scale(1)'; }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
