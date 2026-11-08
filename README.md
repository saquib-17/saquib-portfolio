# Mohammed Saquib Ansari — Developer Portfolio

> **Software Engineer & Full-Stack Developer**  
> Master of Computer Applications (MCA) @ **PES University, Bengaluru** (2026–2028) • BCA (9.14 CGPA) • Web Development Intern

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.10-black?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✦ Overview

A modern, high-performance developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed around a glassmorphism design system with custom vector animations, a developer terminal intro preloader, dual-theme support (Dark Mode & Light Mode), and a dedicated curriculum vitae viewer route.

### Key Highlights
- **Developer Terminal Preloader:** Cinematic 4-stage intro animation (terminal boot sequence, geometric "SA" monogram reveal, animated progress line, and upward curtain exit).
- **Dual-Theme System (Dark & Light Mode):** Complete global theme system with zero flash of unstyled content (FOUC), persistent `localStorage` preference, and theme-adaptive vector illustrations.
- **Calibrated Proportions & Spacing:** Balanced 1140px main container with symmetrical side margins, non-overlapping section indicators, and independent vertical sidebars.
- **Dedicated Resume Route (`/resume`):** Built-in client-side routing supporting direct access, PDF actions (`Open PDF` & `Download PDF`), responsive viewer framing (1100px max width), and candidate credential summaries.
- **Living Ambient Canvas:** Dynamic particle grid with proximity stroke rendering and interactive cursor spotlight.
- **Accessible & Responsive:** Fully responsive layout tested across desktop (1440px), laptop (1280px), tablet (768px/1024px), and mobile (390px), with strict adherence to `prefers-reduced-motion`.

---

## ✦ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite 5 |
| **Styling & Design System** | Tailwind CSS 3.4, PostCSS, Custom HSL Semantic Design Tokens |
| **Animations & Motion** | Framer Motion 14, Lottie-React 3, HTML5 Canvas, CSS Animations |
| **Iconography** | Lucide React, React Icons (Simple Icons, Font Awesome, Tabler) |
| **Typography** | Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code/Mono) |
| **Utility & Feedback** | Canvas-Confetti (Contact Form Submit Effect) |

---

## ✦ Page Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ PRELOADER: Terminal Boot • "SA" Monogram • Progress • Curtain Reveal  │
├────────────────────────────────────────────────────────────────────────┤
│ NAVBAR: Origami Bird SVG • Section Links • Theme Toggle • Resume CTA   │
├────────────────────────────────────────────────────────────────────────┤
│ HERO: Two-Column Stage • Typewriter Title • Glowing CTAs • Lottie      │
├────────────────────────────────────────────────────────────────────────┤
│ ABOUT ME: Who I Am • Coder Lottie • Education (MCA & BCA) • Beyond Code │
├────────────────────────────────────────────────────────────────────────┤
│ TECHNICAL SKILLS: Interactive Bento Shell • Categorized Tech Grid      │
├────────────────────────────────────────────────────────────────────────┤
│ EXPERIENCE: Timeline Cards • Diamond Indicators • Role Details         │
├────────────────────────────────────────────────────────────────────────┤
│ FEATURED PROJECTS: Architecture Overview • Tech Badges • Demo Links    │
├────────────────────────────────────────────────────────────────────────┤
│ CERTIFICATIONS: Credential Cards • Issuing Authority Badges           │
├────────────────────────────────────────────────────────────────────────┤
│ CONTACT: Direct Communication • Social Links • Interactive Form        │
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER: 3-Column Grid • Live IST Clock • Outlined Social Pills • Top   │
├────────────────────────────────────────────────────────────────────────┤
│ DEDICATED ROUTE (/resume): 1100px Centered PDF Viewer • Actions        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## ✦ Project Structure

```
portfolio/
├── public/                       # Static public assets
│   ├── favicon.svg               # Browser favicon
│   ├── og-image.svg              # OpenGraph social share card
│   ├── resume.pdf                # Authentic curriculum vitae document
│   ├── robots.txt                # Search engine crawlers policy
│   └── sitemap.xml               # XML sitemap
├── src/                          # Application source code
│   ├── assets/                   # Lottie animations and graphics
│   │   ├── coder.json            # About section coder illustration
│   │   ├── hero-animation-dark.json   # Theme-aware Hero Lottie (Dark Mode)
│   │   └── hero-animation-light.json  # Theme-aware Hero Lottie (Light Mode)
│   ├── components/               # Modular UI components
│   │   ├── About.jsx             # About Me & Education cards
│   │   ├── Certifications.jsx    # Professional certifications showcase
│   │   ├── Contact.jsx           # Interactive contact form & details
│   │   ├── CursorGlow.jsx        # Ambient cursor spotlight follower
│   │   ├── DeveloperBackground.jsx # Living particle canvas
│   │   ├── EmailSidebar.jsx      # Fixed right vertical email link
│   │   ├── Experience.jsx        # Professional internship timeline
│   │   ├── Footer.jsx            # 3-column footer with live IST clock
│   │   ├── Hero.jsx              # Hero landing stage with typewriter
│   │   ├── Layout.jsx            # Global shell layout wrapper
│   │   ├── Navbar.jsx            # Top navigation & mobile drawer
│   │   ├── Preloader.jsx         # Developer terminal intro animation
│   │   ├── Projects.jsx          # Featured software projects
│   │   ├── ResumePage.jsx        # Dedicated /resume route with PDF viewer
│   │   ├── ScrollProgress.jsx    # Reading progress bar at top of viewport
│   │   ├── SectionIndicator.jsx  # Fixed quick navigation vertical dots
│   │   ├── Skills.jsx            # Bento interactive skills matrix
│   │   └── SocialSidebar.jsx     # Fixed left social links sidebar
│   ├── context/
│   │   └── ThemeContext.jsx      # Centralized Dark/Light theme state
│   ├── data/
│   │   └── portfolio.js          # Single source of truth for portfolio data
│   ├── App.jsx                   # Application router & mount controller
│   ├── index.css                 # Global CSS variables & utility classes
│   └── main.jsx                  # React DOM entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML shell with theme pre-render script
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind theme tokens and fonts
└── vite.config.js                # Vite build configuration
```

---

## ✦ Getting Started

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/saquib-17/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Run ESLint checks
npm run lint

# 5. Build for production
npm run build

# 6. Preview production build locally
npm run preview
```

---

## ✦ Deployment

The portfolio is configured for deployment on modern edge hosting platforms:

- **Vercel:** Configuration provided in `vercel.json` with SPA route rewrites for `/resume`.
- **Netlify:** Ready for zero-config static deployment from `dist/`.

---

## ✦ Author & Contact

**Mohammed Saquib Ansari**  
- **Email:** [saquib.dev.contact@gmail.com](mailto:saquib.dev.contact@gmail.com)  
- **GitHub:** [@saquib-17](https://github.com/saquib-17)  
- **LinkedIn:** [linkedin.com/in/mdsaquib17](https://linkedin.com/in/mdsaquib17)  
- **LeetCode:** [leetcode.com/u/saquib17](https://leetcode.com/u/saquib17)  

---

## ✦ License

This project is open-source and available under the [MIT License](LICENSE).
