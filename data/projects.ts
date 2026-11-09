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
    description: 'Plataforma web de consultas com profissionais verificados para apoio a decisões de carreira. Com o objetivo de reduzir a frustração profissional.',
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
    description: 'Carteira de vacinação digital para pets, com dicas de cuidado, produtos indicados e ficha clínica que gera um PDF com peso, idade e o problema do animal para enviar ao veterinário.',
    detail: 'Uma plataforma que reúne a carteira de vacinação do pet, dicas de cuidado e produtos indicados. Também permite preencher a ficha clínica, com nome, peso, idade e o problema observado, e gerar um PDF para encaminhar ao veterinário.',
    role: 'Conceito, produto, UX/UI e desenvolvimento', stack: ['Product thinking', 'UX/UI', 'Agenda e lembretes', 'Saúde animal'],
    liveUrl: 'https://cuidapetapp.vercel.app/', previewUrl: 'https://cuidapetapp.vercel.app/', visual: 'cuidapet', cover: '/images/projects/cuidapet-preview.jpg',
  },
  {
    id: '05', slug: 'decora-moveis', name: 'Decora Móveis', category: 'Móveis / e-commerce',
    description: 'Loja de móveis fictícia, criada como demonstração, com vitrine de peças, cores e condições de pagamento e um fluxo completo para simular a compra.',
    detail: 'Um e-commerce de móveis desenvolvido como demonstração. Permite explorar as peças, ver opções de cores e detalhes, e simular uma compra do início ao fim, sem venda real.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['E-commerce', 'UX/UI', 'Front-end'],
    liveUrl: 'https://decoramoveis.vercel.app/', previewUrl: 'https://decoramoveis.vercel.app/', visual: 'decora', cover: '/images/projects/decora-moveis-preview.jpg',
  },
  {
    id: '06', slug: 'altezza', name: 'Altezza Imóveis', category: 'Imóveis / alto padrão',
    description: 'Imobiliária de luxo para apresentar casas de alto padrão, com imagens amplas dos ambientes por dentro e agendamento de visita. Conceito demonstrativo.',
    detail: 'Uma vitrine imobiliária de luxo, criada como demonstração, que apresenta casas de alto padrão por dentro, com imagens amplas, informações essenciais e recursos para agendar uma visita.',
    role: 'Conceito, direção visual, UX/UI e desenvolvimento', stack: ['Real estate', 'UX/UI', 'Front-end'],
    liveUrl: 'https://altezzaimoveis.vercel.app/', previewUrl: 'https://altezzaimoveis.vercel.app/', visual: 'altezza', cover: '/images/projects/altezza.png',
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
