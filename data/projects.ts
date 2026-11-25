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
  visual: 'insidely' | 'casa' | 'atlas' | 'decora' | 'altezza' | 'cuidapet' | 'voyagetrip' | 'vertice' | 'chatbot' | 'aurium' | 'inovatech' | 'luma' | 'saborama' | 'hypix' | 'finaxis';
  previewUrl?: string;
  cover?: string;
};

const projectCatalog: Project[] = [
  {
    id: '01', slug: 'insidely', name: 'Insidely', category: 'Product / career platform',
    description: 'Plataforma web de consultas com profissionais verificados para apoio a decisões de carreira com o objetivo de reduzir a frustração profissional.',
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
    description: 'Plataforma de investimentos que usa inteligência artificial para analisar o mercado financeiro e tomar decisões de compra e venda de ações, executadas pelo meu próprio escritório.',
    detail: 'As IAs analisam gráficos, estatísticas e informações do mercado para orientar decisões de compra e venda de ações. A estratégia busca acumular ativos e gerar dividendos, com operações realizadas pela Genial Investimentos.',
    role: 'Conceito, inteligência artificial, UX/UI e desenvolvimento', stack: ['Inteligência artificial', 'Análise de mercado', 'Ações', 'Dividendos'],
    liveUrl: 'https://atlasagent.vercel.app/', previewUrl: 'https://atlasagent.vercel.app/', visual: 'atlas', cover: '/images/projects/atlas-home.png',
  },

  {
    id: '04', slug: 'saborama-motion', name: 'Saborama Motion', category: 'Gastronomia / cardápio digital',
    description: 'Cardápio digital demonstrativo com hambúrgueres, pizzas, salgados, bebidas e sobremesas.',
    detail: 'Uma experiência de cardápio digital que apresenta diferentes comidas e bebidas com animações mostrando a montagem dos pratos, de hambúrgueres a pizzas e sobremesas.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['Cardápio digital', 'Gastronomia', 'Animação', 'UX/UI'],
    liveUrl: 'https://saboramamotion.vercel.app/', previewUrl: 'https://saboramamotion.vercel.app/', visual: 'saborama', cover: '/images/projects/saborama-motion-preview.jpg',
  },

  {
    id: '05', slug: 'hypix', name: 'Hypex', category: 'Moda / vestuário de luxo',
    description: 'Loja fictícia de roupas de luxo, criada como projeto demonstrativo.',
    detail: 'Uma experiência de e-commerce de moda para apresentar uma seleção de roupas de luxo em uma vitrine digital.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['Moda', 'E-commerce demonstrativo', 'UX/UI', 'Desenvolvimento web'],
    liveUrl: 'https://hypexroupas.vercel.app/', previewUrl: 'https://hypexroupas.vercel.app/', visual: 'hypix', cover: '/images/projects/hypix-preview.jpg',
  },

  {
    id: '06', slug: 'voyagetrip', name: 'Voyage', category: 'Turismo / viagens',
    description: 'Projeto demonstrativo de uma agência de viagens, com destinos, roteiros diários, hospedagens próximas e pacotes promocionais.',
    detail: 'Uma plataforma demonstrativa de turismo para descobrir destinos, planejar o que fazer em cada dia da viagem e encontrar hotéis, resorts e pacotes com opções de hospedagem e ofertas.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['Turismo', 'Planejamento de viagens', 'UX/UI', 'Desenvolvimento web'],
    liveUrl: 'https://voyagetrip.vercel.app/', previewUrl: 'https://voyagetrip.vercel.app/', visual: 'voyagetrip', cover: '/images/projects/voyagetrip-preview.jpg',
  },

  {
    id: '07', slug: 'inovatech', name: 'InovaTech', category: 'Tecnologia / produtos Apple',
    description: 'Loja demonstrativa de produtos Apple, com iPhone, MacBook, iPad e headsets.',
    detail: 'Uma experiência de e-commerce para explorar produtos Apple, visualizar animações interativas do iPhone, consultar detalhes internos e alternar entre opções de cores.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['E-commerce', 'Produtos Apple', 'Animação interativa', 'UX/UI'],
    liveUrl: 'https://inovatechapp.vercel.app/', previewUrl: 'https://inovatechapp.vercel.app/', visual: 'inovatech', cover: '/images/projects/inovatech-preview.jpg',
  },

  {
    id: '08', slug: 'decora-moveis', name: 'Decora Móveis', category: 'Móveis / e-commerce',
    description: 'Loja de móveis fictícia, criada como demonstração, com vitrine de peças, cores e condições de pagamento e um fluxo completo para simular a compra.',
    detail: 'Um e-commerce de móveis desenvolvido como demonstração. Permite explorar as peças, ver opções de cores e detalhes, e simular uma compra do início ao fim, sem venda real.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['E-commerce', 'UX/UI', 'Front-end'],
    liveUrl: 'https://decoramoveis.vercel.app/', previewUrl: 'https://decoramoveis.vercel.app/', visual: 'decora', cover: '/images/projects/decora-moveis-preview.jpg',
  },

  {
    id: '09', slug: 'altezza', name: 'Altezza Imóveis', category: 'Imóveis / alto padrão',
    description: 'Imobiliária de luxo para apresentar casas de alto padrão, com imagens amplas dos ambientes por dentro e agendamento de visita. Conceito demonstrativo.',
    detail: 'Uma vitrine imobiliária de luxo, criada como demonstração, que apresenta casas de alto padrão por dentro, com imagens amplas, informações essenciais e recursos para agendar uma visita.',
    role: 'Conceito, direção visual, UX/UI e desenvolvimento', stack: ['Real estate', 'UX/UI', 'Front-end'],
    liveUrl: 'https://altezzaimoveis.vercel.app/', previewUrl: 'https://altezzaimoveis.vercel.app/', visual: 'altezza', cover: '/images/projects/altezza.png',
  },

  {
    id: '10', slug: 'luma-perfumaria', name: 'Luma Perfumaria', category: 'Beleza / perfumaria',
    description: 'Loja demonstrativa de perfumes com informações sobre fragrâncias e materiais utilizados.',
    detail: 'Uma experiência de e-commerce para explorar perfumes e conhecer detalhes das fragrâncias e dos materiais utilizados em cada produto.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['E-commerce', 'Perfumaria', 'Fragrâncias', 'UX/UI'],
    liveUrl: 'https://lumaperfumaria.vercel.app/', previewUrl: 'https://lumaperfumaria.vercel.app/', visual: 'luma', cover: '/images/projects/luma-preview.jpg',
  },

  {
    id: '11', slug: 'aureon', name: 'Aureon', category: 'Automotivo / loja de veículos',
    description: 'Loja demonstrativa de veículos que reúne carros, motos, barcos, jet skis, helicópteros e aviões.',
    detail: 'Uma vitrine digital para explorar diferentes categorias de veículos e conhecer as opções disponíveis em uma experiência de loja demonstrativa.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['Veículos', 'E-commerce demonstrativo', 'UX/UI', 'Desenvolvimento web'],
    liveUrl: 'https://aureonveiculos.vercel.app/', previewUrl: 'https://aureonveiculos.vercel.app/', visual: 'aurium', cover: '/images/projects/aurium-preview.jpg',
  },

  {
    id: '12', slug: 'cuidapet', name: 'CuidaPet', category: 'Pet care / saúde e rotina',
    description: 'Carteira de vacinação digital para pets, com dicas de cuidado, produtos indicados e uma ficha clínica completa: o histórico do animal, idas anteriores ao veterinário, acidentes e dados como peso e idade, exportados em PDF para o veterinário.',
    detail: 'Uma plataforma que reúne a carteira de vacinação do pet, dicas de cuidado e produtos indicados. A ficha clínica guarda o histórico completo do animal (consultas anteriores, acidentes, tratamentos, peso, idade e o problema atual) e gera um PDF para encaminhar ao veterinário.',
    role: 'Conceito, produto, UX/UI e desenvolvimento', stack: ['Product thinking', 'UX/UI', 'Agenda e lembretes', 'Saúde animal'],
    liveUrl: 'https://cuidapetapp.vercel.app/', previewUrl: 'https://cuidapetapp.vercel.app/', visual: 'cuidapet', cover: '/images/projects/cuidapet-preview.jpg',
  },

  {
    id: '13', slug: 'vertice', name: 'Vértice', category: 'Gestão empresarial / CRM e ERP',
    description: 'Plataforma demonstrativa de gestão empresarial que reúne recursos de CRM e ERP em um só lugar.',
    detail: 'Um sistema demonstrativo para apoiar a gestão de empresas, combinando o acompanhamento do relacionamento com clientes (CRM) e processos de gestão empresarial (ERP).',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['CRM', 'ERP', 'Gestão empresarial', 'UX/UI'],
    liveUrl: 'https://verticegestao.vercel.app/', previewUrl: 'https://verticegestao.vercel.app/', visual: 'vertice', cover: '/images/projects/vertice-preview.jpg',
  },

  {
    id: '14', slug: 'finaxis', name: 'Finaxis', category: 'Finanças / controle financeiro',
    description: 'Aplicativo de controle financeiro pessoal para organizar contas, cartões, receitas e despesas.',
    detail: 'A plataforma ajuda a acompanhar entradas recorrentes e variáveis, contas fixas e gastos ocasionais, além de organizar transações de bancos e cartões. Também reúne dicas para apoiar o planejamento financeiro pessoal.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['Finanças pessoais', 'Gestão de receitas e despesas', 'Cartões e contas', 'UX/UI'],
    liveUrl: 'https://finaxisfinancas.vercel.app/', previewUrl: 'https://finaxisfinancas.vercel.app/', visual: 'finaxis', cover: '/images/projects/finaxis-preview.jpg',
  },

  {
    id: '15', slug: 'chatbot-casa-da-inovacao', name: 'Central de Comunicados', category: 'Educação / comunicação escolar',
    description: 'Chatbot de WhatsApp feito para a Casa da Inovação: responde dúvidas automaticamente, encaminha atendimentos para a equipe e envia comunicados para alunos e turmas.',
    detail: 'Um painel para cuidar do WhatsApp do curso: respostas automáticas editáveis, atendimentos, alunos e turmas e envio de comunicados. Usa uma integração não oficial com o WhatsApp, por isso há risco de bloqueio do número; foi desenvolvido para uso interno do curso.',
    role: 'Conceito, UX/UI e desenvolvimento', stack: ['Chatbot', 'WhatsApp', 'JavaScript', 'Painel de atendimento'],
    liveUrl: 'https://github.com/BrenoSilveiraLeal/Chatbot-Casa-da-Inovacao', visual: 'chatbot', cover: '/images/projects/chatbot-casa-da-inovacao-preview.jpg',
  },
];

const projectOrder = [
  'insidely',
  'casa-da-inovacao',
  'atlas',
  'saborama-motion',
  'hypix',
  'voyagetrip',
  'aureon',
  'altezza',
  'inovatech',
  'luma-perfumaria',
  'decora-moveis',
  'cuidapet',
  'vertice',
  'finaxis',
  'chatbot-casa-da-inovacao',
];

export const projects: Project[] = projectOrder.flatMap((slug, index) => {
  const project = projectCatalog.find((item) => item.slug === slug);
  return project ? [{ ...project, id: String(index + 1).padStart(2, '0') }] : [];
});

const homepageProjectSlugs = ['insidely', 'casa-da-inovacao', 'atlas', 'saborama-motion', 'hypix', 'voyagetrip'];
export const featuredProjects = homepageProjectSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
