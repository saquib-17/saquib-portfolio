// Central data source for Mohammed Saquib Ansari's Developer Portfolio.
// Strictly maintains accurate personal information, education, experience, skills, projects, and certifications.

export const profile = {
  name: 'Mohammed Saquib Ansari',
  shortName: 'Saquib',
  role: 'MCA Student | Java & Full-Stack Developer',
  titles: [
    'MCA Student @ PES University',
    'Java & DSA Enthusiast',
    'Full-Stack Developer',
    'Backend Development Learner',
    'Software Development Enthusiast',
  ],
  educationStatus: 'MCA Student, First Semester at PES University, Bengaluru',
  degreeStatus: 'BCA Completed • Currently Pursuing MCA',
  positioning: 'MCA Student | Java & Full-Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'saquiba070@gmail.com',
  resumeUrl: '/resume.pdf',
}

export const hero = {
  greeting: "Hi, I'm",
  name: 'Mohammed Saquib Ansari',
  subtitle: 'MCA Student & Aspiring Software Developer',
  typewriterTitles: [
    'Java & DSA Enthusiast',
    'Full-Stack Developer',
    'Backend Development Learner',
    'Software Development Enthusiast',
  ],
  description:
    "I'm an MCA student at PES University with a strong interest in software development and problem-solving. I enjoy building practical web applications and exploring how things work behind the scenes. Currently, I'm strengthening my Java and Data Structures & Algorithms skills while improving my full-stack development knowledge.",
  ctaWork: 'View My Work',
  ctaContact: 'Get In Touch',
}

export const about = {
  eyebrow: '02 — ABOUT',
  heading: 'About Me',
  paragraphs: [
    "I'm Mohammed Saquib Ansari, an MCA student at PES University with a strong interest in software development and problem-solving.",
    "I enjoy building practical web applications and understanding the logic behind the systems I develop. My current focus is strengthening my Java and Data Structures & Algorithms skills while developing my knowledge of full-stack web development using JavaScript and the MERN stack.",
    "I believe in learning by building, experimenting with technologies, and understanding the fundamentals behind the code. I'm continuously working on improving my programming, problem-solving, and software development skills.",
  ],
  focusAreas: [
    'Java & Algorithmic Problem Solving (DSA)',
    'Full-Stack Web Development (MERN Stack)',
    'Backend & API Development (Node.js & Express)',
    'Database Fundamentals (MongoDB & SQL)',
  ],
  education: [
    {
      id: 'mca',
      degree: 'Master of Computer Applications (MCA)',
      shortDegree: 'MCA',
      institution: 'PES University',
      location: 'Bengaluru, Karnataka',
      duration: '2026–2028',
      status: 'Currently Pursuing',
      semester: 'First Semester',
      badge: 'Currently Pursuing',
    },
    {
      id: 'bca',
      degree: 'Bachelor of Computer Applications (BCA)',
      shortDegree: 'BCA',
      institution: 'Seshadripuram College, Tumakuru',
      location: 'Tumakuru, Karnataka',
      duration: 'Graduation Year: 2026',
      cgpa: '9.14',
      status: 'Graduated',
      badge: 'Graduated • CGPA: 9.14',
    },
  ],
}

export const internshipExperience = [
  {
    id: 'labmentix-internship',
    role: 'Web Development Intern',
    company: 'Labmentix',
    location: 'Bengaluru, Karnataka',
    duration: '2 Months',
    description:
      'Completed a two-month Web Development internship at Labmentix, where I gained hands-on experience building full-stack web applications using the MERN stack.',
    responsibilities: [
      'Gained practical experience working with frontend and backend technologies.',
      'Worked with GitHub for version control.',
      'Used Postman for API testing.',
      'Deployed applications using Vercel, Render and Netlify.',
      'Developed an understanding of the full-stack web development workflow.',
    ],
  },
]

export const skillsCategories = [
  {
    id: 'programming',
    name: 'Programming & Core',
    description: 'Primary programming and problem-solving languages',
    skills: [
      { name: 'Java', note: 'Primary Focus • DSA & OOP' },
      { name: 'JavaScript', note: 'Web Development Primary' },
      { name: 'Data Structures & Algorithms', note: 'DSA using Java' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Responsive web interface technologies',
    skills: [
      { name: 'HTML', note: 'Semantic Markup' },
      { name: 'CSS', note: 'Responsive Layouts' },
      { name: 'React', note: 'Fundamentals & Components' },
      { name: 'Tailwind CSS', note: 'Utility-First Styling' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server runtime, APIs and MERN stack',
    skills: [
      { name: 'Node.js', note: 'V8 Server Runtime' },
      { name: 'Express.js', note: 'RESTful Routing & APIs' },
      { name: 'MERN Stack', note: 'Full-Stack Architecture' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Data storage, schemas and querying',
    skills: [
      { name: 'MongoDB', note: 'Document Database' },
      { name: 'SQL', note: 'Relational Queries & Schemas' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    description: 'Version control, testing and deployment',
    skills: [
      { name: 'Git', note: 'Version Control' },
      { name: 'GitHub', note: 'Code Collaboration' },
      { name: 'Visual Studio Code', note: 'Development IDE' },
      { name: 'Postman', note: 'API Testing & Contracts' },
      { name: 'Vercel', note: 'Frontend Deployment' },
      { name: 'Netlify', note: 'Web Hosting' },
      { name: 'Render', note: 'Cloud Application Hosting' },
    ],
  },
]

export const currentlyLearning = {
  title: 'Currently Learning',
  description:
    'Continuously expanding my technical foundation through hands-on learning, problem-solving and practical development.',
  items: [
    {
      name: 'Python',
      purpose: 'MCA Coursework & Future Development',
      badge: 'Language',
    },
    {
      name: 'Flask',
      purpose: 'Backend Exploration & APIs',
      badge: 'Microframework',
    },
    {
      name: 'Backend Fundamentals',
      purpose: 'System Design & Architecture',
      badge: 'Core Concept',
    },
    {
      name: 'Data Structures & Algorithms in Java',
      purpose: 'Algorithmic Problem Solving Focus',
      badge: 'DSA Practice',
    },
  ],
}

// 4 User Projects:
// 3 Featured Projects + 1 Additional Project (MyNotes)
export const userProjects = {
  featured: [
    {
      id: 'ai-analyst-dashboard',
      number: '01',
      title: 'AI Analyst Dashboard',
      category: 'Featured Project',
      accentColor: '#2cc4c9',
      tagline: 'AI-assisted analytical dashboard and data insights platform',
      status: 'Details & documentation pending',
    },
    {
      id: 'smart-ai-attendance',
      number: '02',
      title: 'Smart AI Attendance System',
      category: 'Featured Project',
      accentColor: '#ff5479',
      tagline: 'Automated attendance recognition and management system',
      status: 'Details & documentation pending',
    },
    {
      id: 'speech-to-text-app',
      number: '03',
      title: 'Speech-to-Text Application',
      category: 'Featured Project',
      accentColor: '#38bdf8',
      tagline: 'Real-time audio transcription and voice processing interface',
      status: 'Details & documentation pending',
    },
  ],
  additional: [
    {
      id: 'mynotes',
      number: '04',
      title: 'MyNotes — Personal Notes & Productivity Application',
      category: 'Additional Project',
      accentColor: '#a855f7',
      tagline: 'Personal notes management and study productivity workspace',
      status: 'Optional project card — details pending',
      enabled: true,
    },
  ],
}

export const certifications = [
  {
    id: 'cert-java',
    title: 'Java Certification',
    issuer: 'Simplilearn',
    status: 'Completed',
    subject: 'Core Java Programming & Object-Oriented Principles',
    badgeColor: '#F89820',
  },
  {
    id: 'cert-nodejs',
    title: 'Node.js Certification',
    issuer: 'Simplilearn',
    status: 'Completed',
    subject: 'Server-Side JavaScript, Asynchronous I/O & RESTful APIs',
    badgeColor: '#68A063',
  },
  {
    id: 'cert-mongodb',
    title: 'MongoDB Certification',
    issuer: 'Simplilearn',
    status: 'Completed',
    subject: 'NoSQL Document Database, Schema Design & CRUD Operations',
    badgeColor: '#47A248',
  },
]

export const socialLinks = {
  github: 'https://github.com/saquib-17',
  linkedin: 'https://www.linkedin.com/in/mdsaquib17',
  leetcode: 'https://leetcode.com/u/saquib17/',
  email: 'saquiba070@gmail.com',
}

export const navigationLinks = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Skills', href: '#skills', number: '02' },
  { label: 'Experience', href: '#experience', number: '03' },
  { label: 'Projects', href: '#projects', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
]

export const sectionDots = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
