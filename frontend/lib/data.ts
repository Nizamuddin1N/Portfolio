// ─────────────────────────────────────────────────────────────────
// ALL YOUR PORTFOLIO DATA LIVES HERE
// Just edit this file whenever you want to update your portfolio
// ─────────────────────────────────────────────────────────────────

// ── Navigation ────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Research',     href: '#research' },
  { label: 'Contact',      href: '#contact' },
]

// ── Hero ───────────────────────────────────────────────────────────
export const HERO_ROLES = [
  'Full Stack Developer',
  'AI / ML Engineer',
  'DevOps Engineer',
  'Software Engineer',
]

export const HERO_STATS = [
]

// ── Skills ─────────────────────────────────────────────────────────
export const SKILLS: Record<string, string[]> = {
  'Languages': [
    'Python',
    'C++',
    'JavaScript',
    'TypeScript',
  ],
  'Frontend': [
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
  ],
  'Backend': [
    'Node.js',
    'Express.js',
    'REST APIs',
    'Microservices',
    'Kafka',
  ],
  'Databases & Caching': [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Firebase',
  ],
  'Cloud & DevOps': [
    'Docker',
    'Kubernetes',
    'AWS EC2 / RDS',
    'CI/CD Pipelines',
    'GitHub Actions',
  ],
  'AI & Machine Learning': [
    'Scikit-learn',
    'Neural Networks',
    'NLP / TF-IDF',
    'VADER',
    'TextBlob',
    'Pandas',
    'NumPy',
    'Matplotlib',
  ],
}

// ── Projects ───────────────────────────────────────────────────────
export type ProjectCategory = 'fullstack' | 'ai' | 'devops'

export interface Project {
  title:       string
  icon:        string
  categories:  ProjectCategory[]
  description: string
  highlights:  string[]
  tech:        string[]
  github:      string
  live:        string
  accentColor: string
}

export const PROJECTS: Project[] = [
  {
    title:      'foodRush – Food Delivery Platform',
    icon:       '🍔',
    categories: ['fullstack', 'devops'],
    description:
      'Cloud-native microservices platform with API Gateway and distributed services (Auth, User, Restaurant, Order, Payment). Event-driven architecture using Apache Kafka with Outbox Pattern ensures reliable async communication. Containerized on Kubernetes with rolling updates, health checks, autoscaling, and CI/CD pipelines.',
    highlights:  ['Microservices', 'Kafka + Outbox', 'Kubernetes', 'Redis Rate Limiting'],
    tech:        ['React.js', 'Node.js', 'PostgreSQL (AWS RDS)', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS EC2', 'GitHub Actions'],
    github:      'https://github.com/Nizamuddin1N/foodrush',
    live:        'https://foodrush-nizm.vercel.app',
    accentColor: '#00FF87',
  },
{
  title:       'lineCODE – Collaborative Real-Time Code Editor',
  icon:        '💻',
  categories:  ['fullstack'],
  description:
    'Multi-user code editor built on Operational Transformation for conflict-free real-time sync. Redis Pub/Sub adapter keeps Socket.IO in sync across server instances. JWT auth with owner/editor/viewer roles, live cursors, per-document chat, 50-version history with restore, and AI code assistance via OpenRouter. Share documents instantly via unique tokens.',
  highlights:  ['Operational Transformation', 'Redis Pub/Sub', 'JWT + Role Permissions', 'AI Code Assist'],
  tech:        ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Redis', 'Docker'],
  github:      'https://github.com/Nizamuddin1N/lineCODE',
  live:        'https://linecode-nizm.vercel.app',
  accentColor: '#7c6fcd',
},
  {
    title:      'devNest — Campus Platform',
    icon:       '🏫',
    categories: ['fullstack'],
    description:
      'Student platform integrating automated opportunity scraping, structured learning roadmaps, and discussion modules. Modular Express APIs with Redis caching and optimized MongoDB schemas ensure efficient data handling and high request throughput across multiple features.',
    highlights:  ['Web Scraping', 'Redis Caching', 'JWT Auth', 'Real-time Updates'],
    tech:        ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
    github:      'https://github.com/Nizamuddin1N/devNest',
    live:        'https://devnest-nizm.vercel.app',
    accentColor: '#00FF87',
  },
  {
    title:      'Twitter Sentiment Analysis',
    icon:       '🧠',
    categories: ['ai'],
    description:
      'Large-scale sentiment analysis on 61,692 Twitter posts benchmarking VADER and TextBlob against Logistic Regression, SVM, KNN, Decision Trees, and Random Forest. Achieved 93.65% accuracy with Random Forest and performed topic modeling using LDA.',
    highlights:  ['93.65% Accuracy', '61K+ Tweets', 'LDA Topics', 'Model Comparison'],
    tech:        ['Python', 'NLP', 'VADER', 'TextBlob', 'Random Forest', 'Scikit-learn', 'LDA'],
    github:      'https://github.com/Nizamuddin1N/Twitter_Sentiment_Analysis',
    live:        '',
    accentColor: '#4D9FFF',
  },
  {
    title:      'AI Spam Email Detection',
    icon:       '📧',
    categories: ['ai'],
    description:
      'End-to-end ML pipeline for classifying emails as spam or legitimate. NLP preprocessing with tokenization, stop-word removal, and TF-IDF feature extraction. Naive Bayes classifier with an interactive interface for real-time prediction and efficient filtering.',
    highlights:  ['TF-IDF Features', 'Naive Bayes', 'NLP Pipeline', 'Real-time UI'],
    tech:        ['Python', 'NLP', 'TF-IDF', 'Naive Bayes', 'Scikit-learn'],
    github:      'https://github.com/Nizamuddin1N/AI_Email_Spam_Dectection',
    live:        '',
    accentColor: '#FFB800',
  },
    {
    title:       'MediGenie – Disease Prediction & Wellness Platform',
    icon:        '🧠',
    categories:  ['ai', 'fullstack'],
    description:
        'ML-powered health platform for early disease prediction and personalized recommendations. Random Forest models analyze user symptoms and generate insights with nutrition, remedies, exercises, and expert videos. JWT authentication and modular APIs enable seamless system interaction.',
    highlights:  ['Random Forest ML', 'Multi-Disease Prediction', 'JWT Authentication', 'Health Recommendation Engine'],
    tech:        ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'Scikit-learn'],
    github:      'https://github.com/Nizamuddin1N/MEDIGENIE',
    live:        '',
    accentColor: '#00c896',
    }
]

// ── Research ───────────────────────────────────────────────────────
export interface ResearchItem {
  icon:        string
  title:       string
  description: string
  tags:        string[]
  driveLink:   string   // ← add this
}

export const RESEARCH: ResearchItem[] = [
  {
    icon:  '⚡',
    title: 'Hybrid Optimization for Deep Learning Training',
    description:
      'Proposed a novel hybrid optimizer combining momentum-based updates with adaptive gradient scaling. Demonstrated stable, efficient convergence on the MNIST benchmark — outperforming vanilla SGD on loss curve smoothness and overall training stability.',
    tags:      ['Deep Learning', 'Optimization', 'Neural Networks', 'MNIST'],
    driveLink: 'https://drive.google.com/file/d/1v51QFLGjYfia4x4AnaQIjNaGrjkdWf-V/view',
  },
  {
    icon:  '📊',
    title: 'Sentiment Analysis on Social Media Data',
    description:
      'Comprehensive comparative study across 61,000+ tweets using TF-IDF features and multiple ML classifiers. Benchmarked lexicon-based vs statistical ML approaches. Achieved 93.65% accuracy and surfaced key topic clusters via LDA topic modelling.',
    tags:      ['NLP', 'Twitter Data', 'TF-IDF', 'Machine Learning', 'LDA'],
    driveLink: 'https://drive.google.com/file/d/13PQ3hJxlp17q54yBgNWt0wUV9g7hgwEU/view',
  },
]

// ── Achievements ───────────────────────────────────────────────────
export interface Achievement {
  emoji:      string
  title:      string
  sub:        string
  hoverColor: string
}

export const ACHIEVEMENTS: Achievement[] = [
  { emoji: '🏆', title: '300+ LeetCode Problems',  sub: 'Rating above 1500',          hoverColor: 'rgba(255,184,0,0.25)'  },
  { emoji: '⚔️',  title: 'Codeforces 1000+',        sub: 'Competitive Programming',    hoverColor: 'rgba(255,69,69,0.25)'  },
  { emoji: '🌏', title: 'ICPC Sri Lanka Regional',  sub: 'Programming Contest',         hoverColor: 'rgba(77,159,255,0.25)' },
  { emoji: '🎓', title: 'Delta Full Stack Program', sub: 'Apna College Certified',      hoverColor: 'rgba(0,255,135,0.25)'  },
  { emoji: '📚', title: 'DSA Certified',            sub: 'CodeHelp Program',            hoverColor: 'rgba(0,255,135,0.25)'  },
  { emoji: '🇮🇳', title: 'GPAI India Student',      sub: 'COL-CEMCA Programme',         hoverColor: 'rgba(255,184,0,0.25)'  },
  { emoji: '🎤', title: "Leader's Talk Organizer",  sub: 'Event with Narayana Murthy',  hoverColor: 'rgba(77,159,255,0.25)' },
  { emoji: '🖥️', title: 'NVIDIA Volunteer',         sub: 'Community Meetup',            hoverColor: 'rgba(0,255,135,0.25)'  },
]

// ── Contact Links ──────────────────────────────────────────────────
export const CONTACT_LINKS = [
  {
    icon:  '📧',
    label: 'Email',
    value: 'nizamuddin00128@gmail.com',
    href:  'mailto:nizamuddin00128@gmail.com',
  },
  {
    icon:  '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nizamuddin12',
    href:  'https://linkedin.com/in/nizamuddin12',
  },
  {
    icon:  '🐙',
    label: 'GitHub',
    value: 'github.com/Nizamuddin1N',
    href:  'https://github.com/Nizamuddin1N',
  },
]