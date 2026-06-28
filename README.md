# Rishav Kumar Jha — Portfolio

A world-class, production-ready portfolio website built with React + Vite, Tailwind CSS, Framer Motion, and Material UI.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## ⚙️ Configuration Guide

### 1. Resume Link
File: `src/utils/data.js`
```js
personal.resumeUrl = "https://drive.google.com/your-resume-link"
```
Upload your resume to Google Drive → Share → Copy Link → paste here.

### 2. Project Links
File: `src/utils/data.js`
```js
projects[0].liveUrl = "https://your-zerodha-clone.vercel.app"
projects[0].repoUrl = "https://github.com/rishavjha/zerodha-clone"
projects[1].liveUrl = "https://your-weather-app.vercel.app"
projects[1].repoUrl = "https://github.com/rishavjha/weather-app"
```

### 3. Contact Form (EmailJS Setup)
The contact form uses [EmailJS](https://emailjs.com) — no backend needed.

**Steps:**
1. Sign up at https://emailjs.com (free tier: 200 emails/month)
2. Create a new Email Service (Gmail recommended)
3. Create a new Email Template. Use these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — email subject
   - `{{message}}` — email body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Paste into `src/utils/data.js`:

```js
contactConfig.emailjsServiceId  = "service_xxxxxxx"
contactConfig.emailjsTemplateId = "template_xxxxxxx"
contactConfig.emailjsPublicKey  = "xxxxxxxxxxxxxxxx"
```

Emails are delivered to: `rishavjha763@gmail.com`
To change recipient: `contactConfig.toEmail = "your@email.com"`

### 4. Profile Photo
Replace the initials placeholder in:
- `src/components/sections/HeroSection.jsx` (line ~80) — replace the `<div>RK</div>` block with an `<img>` tag
- `src/components/sections/AboutSection.jsx` (line ~53) — same

```jsx
// Replace placeholder div with:
<img src="/profile.jpg" alt="Rishav Kumar Jha" className="w-full h-full object-cover" />
```
Place your photo at: `public/profile.jpg`

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── Footer.jsx       # Footer
│   ├── sections/
│   │   ├── HeroSection.jsx  # Landing hero
│   │   ├── AboutSection.jsx # About + education
│   │   ├── SkillsSection.jsx# Skills grid + marquee
│   │   ├── ProjectsSection.jsx # 3D tilt project cards
│   │   └── ExperienceSection.jsx # Timeline
│   └── ui/
│       ├── CustomCursor.jsx # Acid-green cursor
│       ├── Loader.jsx       # Loading screen
│       └── SectionWrapper.jsx # Reusable section
├── pages/
│   ├── HomePage.jsx         # Assembles all sections
│   └── ContactPage.jsx      # Contact form
├── hooks/
│   └── index.js             # Custom React hooks
├── utils/
│   └── data.js              # ← ALL CONTENT HERE
├── styles/
│   └── globals.css          # Design system + custom CSS
├── App.jsx                  # Router + layout
└── main.jsx                 # Entry point
```

---

## 🎨 Design System

- **Theme:** Dark ink (#050508) with acid green (#b8f400) accent
- **Fonts:** Syne (display/headings) + DM Sans (body)
- **Motion:** Framer Motion scroll animations, 3D tilt cards, custom cursor
- **Icons:** Material UI Icons

---

## 🌐 Deployment

```bash
npm run build
```

Deploy `dist/` to:
- [Vercel](https://vercel.com) — drag & drop or connect GitHub
- [Netlify](https://netlify.com) — same
- GitHub Pages — with `vite.config.js` base path config
