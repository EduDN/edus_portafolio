export type TranslationMap = Record<string, { en: string; es: string }>

const translations: TranslationMap = {
  // Navigation
  'nav.experience': { en: 'Experience',   es: 'Experiencia'  },
  'nav.projects':   { en: 'Projects',     es: 'Proyectos'    },
  'nav.talks':      { en: 'Talks',        es: 'Pláticas'     },
  'nav.downloadCv': { en: 'Download CV',  es: 'Descargar CV' },

  // Hero
  'hero.title': {
    en: 'AI Lead · AI / ML Engineer',
    es: 'AI Lead · Ingeniero AI / ML',
  },
  'hero.summary': {
    en: 'AI Engineer specializing in Generative AI, Agent Systems, Data-Driven and OpenShift solutions. Bridging the gap between technical execution and business strategy. Experienced in deploying AI for Supply Chain optimization and Urban Mobility across Latin America. Proven track record in leading technical teams, managing budgets, and delivering high-impact public speaking engagements on AI innovation.',
    es: 'Ingeniero AI especializado en IA Generativa, Sistemas de Agentes, soluciones Data-Driven y OpenShift. Conecta la ejecución técnica con la estrategia de negocio. Experiencia implementando AI para optimización de Cadena de Suministro y Movilidad Urbana en Latinoamérica. Trayectoria comprobada liderando equipos técnicos, gestionando presupuestos y ofreciendo ponencias de alto impacto sobre innovación en AI.',
  },

  // Experience roles
  'role.deliveryConsultant': { en: 'Delivery Consultant Data & AI',      es: 'Consultor de Entrega Data & AI' },
  'role.genaiEngineer':      { en: 'GenAI Engineer',                     es: 'Ingeniero GenAI'                },
  'role.academicInstructor': { en: 'Academic Instructor',                es: 'Instructor Académico'           },
  'role.cofounderAILead':    { en: 'Co-founder & AI Lead',               es: 'Cofundador y AI Lead'           },
  'role.techProjectManager': { en: 'Freelance Tech Project Manager',     es: 'PM Técnico Freelance'           },
  'role.webDeveloper':       { en: 'Web Developer',                      es: 'Desarrollador Web'              },

  // Talks
  'talk.nubank.title':     { en: 'AI Agents, RAG & LLMs at Nu Bank',         es: 'Agentes AI, RAG y LLMs en Nu Bank'          },
  'talk.github.title':     { en: 'Workshop at GitHub Education',             es: 'Workshop en GitHub Education'               },
  'talk.notion.title':     { en: 'Talk at Notion',                           es: 'Plática en Notion'                          },
  'talk.senate.title':     { en: 'Presentation at Mexican Senate',           es: 'Presentación en el Senado Mexicano'         },
  'talk.anahuac.title':    { en: 'Workshop at Anahuac University',           es: 'Workshop en Universidad Anáhuac'            },
  'talk.talentland.title': { en: 'Talk at Talent Land',                      es: 'Plática en Talent Land'                     },
  'talk.ibm.title':        { en: 'GenAI & ADK Workshops at IBM',             es: 'Workshops GenAI y ADK en IBM'               },
  'talk.consulca.title':   { en: 'Urban Mobility & AI Workshops (LATAM)',    es: 'Workshops de Movilidad Urbana & AI (LATAM)' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
}

export default translations
