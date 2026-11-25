// English version of the resume (page /resume and public/resume-breno-silveira.pdf).
// Same content as data/resume.ts, translated for international remote roles.
import type { Resume, ResumeLabels } from './resume';

export const resumeEn: Resume = {
  name: 'Breno Silveira Leal',
  role: 'Full Stack Developer | AI & Automation',
  contact: [
    'Teresópolis, RJ, Brazil – open to remote work (UTC-3)',
    '+55 21 97354-9107',
    'brenosilveiraleal@gmail.com',
  ],
  links: [
    { label: 'Portfolio', value: 'brenosilveira.vercel.app', href: 'https://brenosilveira.vercel.app' },
    { label: 'LinkedIn', value: 'linkedin.com/in/breno-silveira-leal', href: 'https://www.linkedin.com/in/breno-silveira-leal/' },
    { label: 'GitHub', value: 'github.com/BrenoSilveiraLeal', href: 'https://github.com/BrenoSilveiraLeal' },
  ],

  summary: 'Full Stack Developer with a B.Sc. in Computer Science (UNIFESO, Brazil) and hands-on experience in web development, applied AI and technology education. I build complete applications — interface, back end, database and deployment — with TypeScript, React, Next.js, Python, FastAPI, PostgreSQL and Supabase, using generative AI and AI coding tools to ship faster and automate processes. 15 projects published in my portfolio and 3 university hackathons. Looking for Full Stack, Front-end, AI & Automation or Implementation/Support roles, remote.',

  skills: [
    { group: 'Languages', items: 'TypeScript, JavaScript, Python, SQL, HTML5, CSS3' },
    { group: 'Front-end', items: 'React, Next.js, responsive design, UX/UI' },
    { group: 'Back-end & APIs', items: 'Node.js, FastAPI, REST APIs, authentication, integrations, SQLAlchemy' },
    { group: 'Databases', items: 'PostgreSQL, Supabase, SQLite' },
    { group: 'AI & automation', items: 'Generative AI (Gemini, ChatGPT), prompt engineering, AI agents, chatbots' },
    { group: 'Tools', items: 'Git, GitHub, Vercel, VS Code' },
    { group: 'Support', items: 'Troubleshooting, computer networks, software installation and configuration' },
  ],

  experience: [
    {
      role: 'Robotics, Programming and Computer Science Teacher', org: 'Casa da Inovação – Instituto Bem Viver / UniRio', place: 'Teresópolis, RJ, Brazil', period: 'Oct 2025 – Present',
      bullets: [
        'Plan and teach hands-on programming, robotics and computer classes for students of different ages and levels.',
        'Design Arduino and Tinkercad activities that build logic and practical problem-solving skills.',
        'Produce teaching materials, documentation and reports to track each class’s progress.',
        'Provide technical support to students and users with software, devices, internet and digital tools.',
      ],
    },
    {
      role: 'Technology Educator', org: 'Microlins', place: 'Teresópolis, RJ, Brazil', period: 'May 2025 – Oct 2025',
      bullets: [
        'Taught computer and programming classes, with one-on-one technical guidance for students.',
        'Created teaching materials and organized classes and lesson planning.',
        'Solved technical issues in the learning environment, keeping classes running without interruptions.',
      ],
    },
    {
      role: 'Customer Service and Operations', org: 'Newsstand', place: 'Teresópolis, RJ, Brazil', period: '2024',
      bullets: [
        'Handled customer service, cash register, inventory control and supplier contact.',
      ],
    },
  ],

  projects: [
    {
      name: 'Insidely – Full stack web platform', href: 'https://insidely.vercel.app', url: 'insidely.vercel.app',
      stack: 'Next.js, React, TypeScript, PostgreSQL, Supabase, Vercel',
      bullets: [
        'Built end to end a platform that connects people with verified employees for conversations about companies and careers, aiming to reduce professional frustration.',
        'Implemented authentication, distinct user roles, scheduling, payments and external integrations with Next.js, TypeScript and Supabase.',
        'Ran testing, debugging, QA and continuous deployment on Vercel.',
      ],
    },
    {
      name: 'A.T.L.A.S – AI-powered investment platform', href: 'https://atlasagent.vercel.app', url: 'atlasagent.vercel.app',
      stack: 'Python, FastAPI, SQLAlchemy, SQLite, Next.js, TypeScript, Gemini, MetaTrader 5',
      bullets: [
        'Created a multi-agent AI ecosystem that analyzes charts, statistics and market news to guide stock buy and sell decisions.',
        'Structured the back end in Python/FastAPI with SQLAlchemy and the front end in Next.js/TypeScript, with risk management, decision auditing and optional MetaTrader 5 integration.',
      ],
    },
    {
      name: 'Casa da Inovação – Institutional website', href: 'https://casadainovacao.vercel.app', url: 'casadainovacao.vercel.app',
      stack: 'Next.js, React, JavaScript, Google Forms, Vercel',
      bullets: [
        'Developed the institution’s official website, bringing courses, locations, schedules, projects and history together in a responsive interface.',
        'Integrated pre-enrollment with Google Forms, simplifying sign-up for new students.',
      ],
    },
  ],
  moreProjects: {
    text: '12 more published projects — e-commerce stores, management systems (CRM/ERP), personal finance, travel and a WhatsApp chatbot — with videos and links at',
    href: 'https://brenosilveira.vercel.app',
    url: 'brenosilveira.vercel.app',
  },

  hackathons: [
    { name: 'Brightline', period: '2026', text: 'App that analyzes medical imaging exams to help identify bone fractures.' },
    { name: 'Unifeso Challenge – Hospital management system', period: '2025', text: 'Implemented the database layer (data modeling and SQL queries) and worked on the back end and on integrating the components.' },
    { name: 'Smartwatch for elderly people', period: '2023', text: 'Prototype watch that detects falls and calls for help when needed.' },
  ],

  education: [
    { title: 'B.Sc. in Computer Science', org: 'UNIFESO – Centro Universitário Serra dos Órgãos, Brazil', period: '2023 – 2026 (completed)' },
    { title: 'Computer Technician (technical degree)', org: 'FAETEC, Brazil', period: '2023' },
  ],

  courses: [
    'Dev Immersion with Google Gemini, 10th edition – Alura (2025)',
    'Python Course – Santander Open Academy (in progress)',
    'Cursor with Python: AI-assisted development – Santander Open Academy (in progress)',
    'Master AI with Gemini – Santander Open Academy (in progress)',
    'Santander Bootcamp 2023 – Fullstack Java + Angular – DIO / Santander (2023)',
    'LGPD (Brazilian data protection law) Fundamentals – Santander (2023)',
    'C# Systems Programmer – FAETEC (2023)',
    'Computer Networks – FAETEC (2023)',
    'Computer Operator – FAETEC (2023)',
    'Computer Assembly and Maintenance – FAETEC (2023)',
    'JavaScript Course – Tech4Me (2021 – 2022)',
    'Delphi Course – Tech4Me (2022)',
    'English, intermediate level – English House (2016 – 2021)',
  ],

  activities: [
    'Brazilian Robotics Olympiad (OBR) 2023 – organized the Regional Stage in Rio de Janeiro (30 h).',
    'Geração Teretech (2022) – startup creation program: ideation, development and business model validation.',
  ],

  softSkills: 'Clear and didactic communication | Problem solving | Teamwork | Organization and planning | Customer service | Adaptability | Logical and analytical thinking',

  languages: 'Portuguese – native | English – intermediate (English House, 2016 – 2021)',
};

export const resumeEnPdf = '/resume-breno-silveira.pdf';

export const resumeEnLabels: ResumeLabels = {
  lang: 'en',
  docLabel: 'Resume of Breno Silveira Leal',
  summary: 'Professional summary',
  skills: 'Technical skills',
  experience: 'Work experience',
  projects: 'Projects',
  tech: 'Tech',
  hackathons: 'Hackathons',
  education: 'Education',
  courses: 'Courses and certifications',
  activities: 'Extracurricular activities',
  softSkills: 'Soft skills',
  languages: 'Languages',
  back: '← Portfolio',
  share: 'Share link',
  copied: 'Link copied ✓',
  download: 'Download PDF',
  shareTitle: 'Resume — Breno Silveira',
  path: '/resume',
  pdf: resumeEnPdf,
  pdfName: 'Resume-Breno-Silveira.pdf',
  other: { label: 'Versão em português', href: '/curriculo' },
};
