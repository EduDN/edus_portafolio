export interface WorkExperience {
  company: string
  roleKey: string        // translation key for job title
  period: string         // date range string (not translated)
  type?: 'full-time' | 'part-time' | 'freelance'
  descriptionKey?: string
  bullets?: string[]     // plain strings, what was accomplished — no translation key
}

export interface Project {
  name: string        // plain string — no translation key
  overview: string    // plain string — no translation key
  githubUrl: string   // full GitHub URL
}

export interface Talk {
  titleKey: string
  organizationKey: string
  type: 'talk' | 'workshop' | 'presentation'
  description?: string   // plain string, what the talk was about
  photos?: string[]      // optional array of image URLs or relative paths like '/talks/nubank.jpg'
}

export const workExperiences: WorkExperience[] = [
  {
    company: 'IBM',
    roleKey: 'role.deliveryConsultant',
    period: 'Nov 2024 – Present',
    type: 'full-time',
    bullets: [
      'Developed and implemented Generative AI solutions for Supply Chain optimization — metrics control, inventory control and last mile delivery.',
      'Created AI agents with ADK to interact with databases using LLMs for data-driven decision making.',
      'Processed large volumes of data for cleaning, analysis and dashboard creation using Tableau, Python, Pandas and SQL with DB2.',
      'Built an LLM classification system for user feedback using cosine similarity for semantic evaluation.',
      'Deployed and managed proofs of concept in local OpenShift environments (Single Node); performed container troubleshooting.',
      'Managed a team of 3 developers — onboarding, documentation and project implementations.',
      'Delivered workshops on GenAI, agent creation using ADK, Spark and data pipelines.',
    ],
  },
  {
    company: 'IBM',
    roleKey: 'role.genaiEngineer',
    period: 'Nov 2023 – Nov 2024',
    type: 'full-time',
    bullets: [
      'Built LLM-based Proof of Concepts using Watsonx.ai, Llama 3, Mistral and Whisper (speech-to-text).',
      'Extracted and analyzed data using Python; visualized results with Matplotlib.',
      'Developed RAG pipelines for chatbots; integrated AI into React projects and REST APIs.',
      'Delivered client-facing demos and participated in stakeholder meetings.',
    ],
  },
  {
    company: 'CONSULCA',
    roleKey: 'role.academicInstructor',
    period: 'Dec 2025 – Apr 2026',
    type: 'part-time',
    bullets: [
      'Delivered training to Latin American institutions on reinforcement learning, neural networks, computer vision and generative AI.',
      'Focused on public transport management: delay modeling, traffic congestion prediction and intelligent urban traffic signal systems.',
    ],
  },
  {
    company: 'Binary Brains',
    roleKey: 'role.cofounderAILead',
    period: 'Apr 2023 – Jan 2026',
    type: 'full-time',
    bullets: [
      'Co-founded a student programming club; managed financial planning, budget and team organization.',
      'Led AI strategy, event organization, team mentorship and project execution.',
      'Delivered technical talks on AI Agents, RAG and LLMs at Nu Bank, GitHub Education, Notion, Mexican Senate, Anahuac University and Talent Land.',
      'Award-winning participant in national hackathons (Banorte, IPN) — built multi-agent transportation solutions using Q-Learning, LangGraph, Claude and Gemini.',
    ],
  },
  {
    company: 'México Evalua',
    roleKey: 'role.techProjectManager',
    period: 'Oct 2022 – Mar 2023',
    type: 'freelance',
    bullets: [
      'Sold and managed a web application built with Angular, Node.js and APIs.',
      'Recruited development team, managed project budget and implemented Agile methodologies with Trello.',
      'Ensured timely delivery and alignment with client business goals.',
    ],
  },
  {
    company: 'Mexico City Government',
    roleKey: 'role.webDeveloper',
    period: 'Sep 2020 – Oct 2021',
    type: 'full-time',
    bullets: [
      'Preventive maintenance of web platforms and internal systems using Angular, GitHub, SQL and Node.js.',
    ],
  },
  {
    company: 'CFE',
    roleKey: 'role.webDeveloper',
    period: 'Feb 2019 – Aug 2019',
    type: 'full-time',
    bullets: [
      'Development and maintenance of the Integral System of Human Resources and Social Security.',
      'Stack: .NET, ASP, CSS3, JavaScript, SQL Server.',
    ],
  },
]

// Projects start empty — add new entries here to display a ProjectCard after the next build.
// Each entry only needs: name, overview, and githubUrl.
// Example:
// {
//   name: 'My Project',
//   overview: 'A short description of what this project does.',
//   githubUrl: 'https://github.com/username/repo',
// },
export const projects: Project[] = []

export const talks: Talk[] = [
  {
    titleKey: 'talk.nubank.title',
    organizationKey: 'Nu Bank',
    type: 'talk',
    description: 'Talk on AI Agents, RAG pipelines and LLMs — covering practical implementations and real-world use cases using Hugging Face.',
  },
  {
    titleKey: 'talk.github.title',
    organizationKey: 'GitHub Education',
    type: 'workshop',
    description: 'Hands-on workshop on building AI applications using GitHub Copilot, LLMs and open-source tooling for student developers.',
  },
  {
    titleKey: 'talk.notion.title',
    organizationKey: 'Notion',
    type: 'talk',
    description: 'Talk on leveraging AI tools and productivity workflows inside Notion for knowledge management and team collaboration.',
  },
  {
    titleKey: 'talk.senate.title',
    organizationKey: 'Mexican Senate',
    type: 'presentation',
    description: 'Presentation on AI innovation and its policy implications for government officials and public sector decision makers.',
  },
  {
    titleKey: 'talk.anahuac.title',
    organizationKey: 'Anahuac University',
    type: 'workshop',
    description: 'Workshop for university students covering LLMs, agent architectures and how to start building with generative AI.',
  },
  {
    titleKey: 'talk.talentland.title',
    organizationKey: 'Talent Land',
    type: 'talk',
    description: "Talk at one of Latin America's largest tech festivals on the future of AI agents and autonomous systems.",
  },
  {
    titleKey: 'talk.ibm.title',
    organizationKey: 'IBM',
    type: 'workshop',
    description: 'Client-facing GenAI workshops on agent creation with ADK and data pipeline automation using Spark.',
  },
  {
    titleKey: 'talk.consulca.title',
    organizationKey: 'CONSULCA',
    type: 'workshop',
    description: 'Training sessions for Latin American institutions on applying AI to urban mobility — traffic prediction, delay modeling and smart signal systems.',
  },
]
