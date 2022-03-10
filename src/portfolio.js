const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://xsc.dev/',
  title: 'xsc.dev',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yannick',
  role: 'friendly technologist',
  description:
  'Team lead and software engineer. 10+ years of experience with backend platforms and infrastructure, including web-facing and high-load environments. Strong affinity towards functional programming, TDD and free software. Strives for simplicity and intuitive interfaces. Vim user.',
  social: {
    linkedin: 'https://www.linkedin.com/in/yannickscherer/',
    github: 'https://github.com/xsc'
  },
}

const projects = [
  {
    name: 'into-docker',
    description:
      'Unified and robust Docker builds without ever writing a Dockerfile. Build directly from your source code!',
    stack: ['Clojure', 'GraalVM'],
    sourceCode: 'https://github.com/into-docker/into-docker',
    // livePreview: 'https://github.com',
  },
  {
    name: 'clojure libraries',
    description:
      'Open-source utilities and tools, e.g. for updating oudated dependencies, rewriting Clojure code, data access, etc...',
    stack: ['Clojure'],
    sourceCode: 'https://github.com/xsc?tab=repositories&q=&type=&language=clojure&sort=stargazers',
  },
{
    name: 'aufi',
    description:
      'An image upload, delivery and resizing service, based on S3 and delivering hundreds of images per second.',
    stack: ['Clojure', 'AWS'],
    sourceCode: 'https://github.com/stalefruits/aufi',
  },
]

const skills = [
  'Clojure', 'TypeScript', 'Java',
  'DevOps',
  'API Design', 'Architecture', 'Databases',
  'Coaching & Mentoring', 'Developer Experience',
  'AWS', 'Kubernetes', 'Docker'

]

const contact = {
  email: 'yannick@xsc.dev',
}

export { header, about, projects, skills, contact }
