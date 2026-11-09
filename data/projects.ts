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
  visual: 'insidely' | 'casa' | 'atlas' | 'decora' | 'altezza' | 'cuidapet';
  previewUrl?: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    id: '01', slug: 'insidely', name: 'Insidely', category: 'Product / career platform',
    description: 'Plataforma web para reduzir a frustração profissional por meio de consultoria autêntica com funcionários verificados.',
    detail: 'A Insidely aproxima pessoas de funcionários verificados para oferecer conversas e perspectivas reais sobre empresas e profissões antes de uma decisão de carreira.',
    role: 'Conceito, produto, UX/UI e desenvolvimento', stack: ['Product thinking', 'UX/UI', 'React', 'Next.js', 'Supabase'],
    liveUrl: 'https://insidely.vercel.app/', previewUrl: 'https://insidely.vercel.app/', visual: 'insidely', cover: '/images/projects/insidely-preview-20261109.jpg',
  },
  {
    id: '02', slug: 'casa-da-inovacao', name: 'Casa da Inovação', category: 'Institucional / educação',
    description: 'Site oficial da Casa da Inovação E. F. Therezópolis, com informações sobre cursos, horários, projetos, história e pré-matrícula integrada ao Google Forms.',
    detail: 'Uma presença digital institucional para apresentar a Casa da Inovação, orientar visitantes e facilitar o acesso à pré-matrícula.',
    role: 'Estratégia de conteúdo, UX/UI, implementação e iteração', stack: ['Arquitetura da informação', 'UX/UI', 'Front-end', 'Desenvolvimento com IA'],
    liveUrl: 'https://casadainovacao.vercel.app/', previewUrl: 'https://casadainovacao.vercel.app/', visual: 'casa', cover: '/images/projects/casa-da-inovacao-home.png',
  },
  {
    id: '03', slug: 'atlas', name: 'A.T.L.A.S', category: 'Investimentos / inteligência artificial',
    description: 'Plataforma de investimentos que usa inteligência artificial para analisar o mercado financeiro e apoiar decisões sobre ações.',
    detail: 'As IAs analisam gráficos, estatísticas e informações do mercado para orientar decisões de compra e venda de ações. A estratégia busca acumular ativos e gerar dividendos, com operações realizadas pela Genial Investimentos.',
    role: 'Conceito, inteligência artificial, UX/UI e desenvolvimento', stack: ['Inteligência artificial', 'Análise de mercado', 'Ações', 'Dividendos'],
    liveUrl: 'https://atlasagent.vercel.app/', previewUrl: 'https://atlasagent.vercel.app/', visual: 'atlas', cover: '/images/projects/atlas-home.png',
  },
  {
    id: '04', slug: 'cuidapet', name: 'CuidaPet', category: 'Pet care / saúde e rotina',
    description: 'Aplicação para tutores criarem perfis, cadastrarem seus pets, acompanharem vacinas e consultas, receberem lembretes e encontrarem dicas e produtos adequados.',
    detail: 'Uma agenda de cuidados que reúne os perfis dos pets, a carteira de vacinação, lembretes de consultas e orientações e produtos relacionados a cada animal.',
    role: 'Conceito, produto, UX/UI e desenvolvimento', stack: ['Product thinking', 'UX/UI', 'Agenda e lembretes', 'Saúde animal'],
    liveUrl: 'https://cuidapetapp.vercel.app/', previewUrl: 'https://cuidapetapp.vercel.app/', visual: 'cuidapet', cover: '/images/projects/cuidapet-preview.jpg',
  },
  {
    id: '05', slug: 'decora-moveis', name: 'Decora Móveis', category: 'Móveis / e-commerce',
    description: 'Loja digital de móveis autorais, com foco em uma experiência visual que destaca as peças, suas cores e condições de compra.',
    detail: 'Uma vitrine online para explorar móveis com personalidade, visualizar opções de cores e encontrar os detalhes de cada peça.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['E-commerce', 'UX/UI', 'Front-end'],
    liveUrl: 'https://decoramoveis.vercel.app/', previewUrl: 'https://decoramoveis.vercel.app/', visual: 'decora', cover: '/images/projects/decora-moveis-preview.jpg',
  },
  {
    id: '06', slug: 'altezza', name: 'Altezza Imóveis', category: 'Imóveis / alto padrão',
    description: 'Experiência digital para uma imobiliária exclusiva, dedicada à apresentação de casas e propriedades de alto padrão.',
    detail: 'Uma vitrine imobiliária editorial que apresenta imóveis premium por meio de imagens amplas, informações essenciais e recursos para agendar uma visita.',
    role: 'Conceito, direção visual, UX/UI e desenvolvimento', stack: ['Real estate', 'UX/UI', 'Front-end'],
    liveUrl: 'https://altezzaimoveis.vercel.app/', previewUrl: 'https://altezzaimoveis.vercel.app/', visual: 'altezza', cover: '/images/projects/altezza.png',
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
