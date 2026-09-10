export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  visual: 'insidely' | 'casa' | 'aeternum';
  previewUrl?: string;
  cover?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    id: '01', slug: 'insidely', name: 'Insidely', category: 'Product / digital platform',
    description: 'Marketplace de conversas profissionais para conhecer a realidade de empresas e profissões antes de tomar decisões de carreira.',
    detail: 'Uma plataforma digital para descobrir o que existe por dentro de uma oportunidade antes de tomar uma decisão.',
    role: 'Conceito, produto, UX/UI e desenvolvimento', stack: ['Product thinking', 'UX/UI', 'React', 'Next.js', 'Supabase'],
    liveUrl: 'https://insidely.vercel.app/', previewUrl: 'https://insidely.vercel.app/', visual: 'insidely', cover: '/images/projects/insidely-home.png', status: 'Em desenvolvimento',
  },
  {
    id: '02', slug: 'casa-da-inovacao', name: 'Casa da Inovação', category: 'Institutional / education',
    description: 'Site oficial da Casa da Inovação E.F. Therezópolis, com informações sobre cursos, horários, projetos, história e pré-matrícula integrada ao Google Forms.',
    detail: 'Uma presença digital institucional para apresentar a Casa da Inovação, orientar visitantes e facilitar o acesso à pré-matrícula.',
    role: 'Estratégia de conteúdo, UX/UI, implementação e iteração', stack: ['Information architecture', 'UX/UI', 'Front-end', 'AI-assisted development'],
    liveUrl: 'https://casadainovacao.vercel.app/', previewUrl: 'https://casadainovacao.vercel.app/', visual: 'casa', cover: '/images/projects/casa-da-inovacao-home.png',
  },
  {
    id: '03', slug: 'aeternum', name: 'AETERNUM', category: 'AI / multi-agent ecosystem',
    description: 'Ecossistema de agentes artificiais especializados em inteligência financeira, pesquisa de mercado, análise quantitativa e trading algorítmico.',
    detail: 'Um ecossistema multi-agente de inteligência artificial para explorar diferentes camadas de análise financeira e de mercado.',
    role: 'Projeto em desenvolvimento', stack: ['Inteligência financeira', 'Pesquisa de mercado', 'Análise quantitativa', 'Trading algorítmico'],
    visual: 'aeternum', status: 'Em desenvolvimento',
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
