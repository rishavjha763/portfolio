import { useState } from 'react';
import { motion } from 'framer-motion';
import SendIcon              from '@mui/icons-material/Send';
import EmailOutlinedIcon     from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon     from '@mui/icons-material/PhoneOutlined';
import LinkedInIcon          from '@mui/icons-material/LinkedIn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CheckCircleIcon       from '@mui/icons-material/CheckCircle';
import toast from 'react-hot-toast';
import { personal, contactConfig } from '@/utils/data';

const INFO = [
  { icon:<EmailOutlinedIcon sx={{fontSize:18}}/>,     label:'Email',    val:personal.email,  href:`mailto:${personal.email}` },
  { icon:<PhoneOutlinedIcon sx={{fontSize:18}}/>,     label:'Phone',    val:personal.phone,  href:`tel:${personal.phone}` },
  { icon:<LinkedInIcon      sx={{fontSize:18}}/>,     label:'LinkedIn', val:'rishav-jha-744019252', href:personal.linkedin },
  { icon:<LocationOnOutlinedIcon sx={{fontSize:18}}/>,label:'Location', val:personal.location, href:null },
];

const fade = d => ({ hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.65,delay:d,ease:[0.16,1,0.3,1]}} });

export default function ContactPage() {
  const [form, setForm]       = useState({name:'',email:'',subject:'',message:''});
  const [busy, setBusy]       = useState(false);
  const [done, setDone]       = useState(false);
  const set = e => setForm(f=>({...f,[e.target.name]:e.target.value}));

  const submit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.'); return;
    }
    setBusy(true);
    try {
      const { emailjsServiceId:svc, emailjsTemplateId:tpl, emailjsPublicKey:key, toEmail } = contactConfig;
      const unconfigured = svc==='YOUR_EMAILJS_SERVICE_ID';
      if (unconfigured) {
        await new Promise(r=>setTimeout(r,1400));
        setDone(true);
        toast.success('Message sent! (Demo mode — set up EmailJS to send real emails)');
      } else {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send',{
          method:'POST', headers:{'Content-Type':'application/json'},
          body:JSON.stringify({ service_id:svc, template_id:tpl, user_id:key,
            template_params:{ from_name:form.name, from_email:form.email,
              subject:form.subject||'Portfolio Contact', message:form.message, to_email:toEmail } }),
        });
        if (res.ok) { setDone(true); toast.success("Message sent! I'll reply soon."); }
        else throw new Error();
      }
      setForm({name:'',email:'',subject:'',message:''});
    } catch { toast.error('Something went wrong. Please email directly.'); }
    setBusy(false);
  };

  return (
    <div className="section pt-28 md:pt-36">
      <div className="section-inner relative z-10 w-full min-h-screen flex flex-col justify-center py-16">
        <motion.div
          variants={fade(0)}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <p className="label mb-3">Get In Touch</p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3.2rem)",
              color: "var(--text-primary)",
            }}
          >
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p
            className="font-body text-base max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project, opportunity, or just want to say hi? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            variants={fade(0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-4"
          >
            {INFO.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="card flex items-center gap-4 p-4 rounded-2xl"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p
                    className="font-body text-xs mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="font-body text-sm font-medium truncate block transition-colors"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                    >
                      {item.val}
                    </a>
                  ) : (
                    <p
                      className="font-body text-sm font-medium truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.val}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl glow-box"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(99,102,241,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--green)" }}
                />
                <span
                  className="font-display font-semibold text-sm"
                  style={{ color: "var(--green)" }}
                >
                  Available for work
                </span>
              </div>
              <p
                className="font-body text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Open to frontend / full-stack roles, internships, and freelance
                projects in Gurugram or remote.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fade(0.18)}
            initial="hidden"
            animate="show"
            className="lg:col-span-3"
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card rounded-3xl p-14 text-center glow-box"
              >
                <CheckCircleIcon
                  sx={{ fontSize: 64, color: "var(--green)", marginBottom: 16 }}
                />
                <h3
                  className="font-display font-bold text-2xl mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="font-body text-sm mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Thanks for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="btn-ghost text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                className="card rounded-3xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-body mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Name <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={set}
                      placeholder="Rishav Kumar Jha"
                      className="form-field"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-body mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Email <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={set}
                      placeholder="Rishav@example.com"
                      className="form-field"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-body mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Subject
                  </label>
                  <input
                      name="subject"
                    value={form.subject}
                    onChange={set}
                    placeholder="Project Collaboration / Job Opportunity…"
                    className="form-field"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-body mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Message <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={set}
                    rows={6}
                    placeholder="Tell me about your project, timeline, budget…"
                    className="form-field resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={busy}
                  className="btn-primary w-full justify-center"
                  style={{
                    opacity: busy ? 0.7 : 1,
                    cursor: busy ? "not-allowed" : "pointer",
                  }}
                >
                  {busy ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                      Sending…
                    </>
                  ) : (
                    <>
                      <SendIcon sx={{ fontSize: 16 }} /> Send Message
                    </>
                  )}
                </button>
                <p
                  className="text-xs font-body text-center"
                  style={{ color: "var(--text-muted)" }}
                >
                  Delivered to{" "}
                  <span style={{ color: "var(--accent)" }}>
                    {contactConfig.toEmail}
                  </span>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
