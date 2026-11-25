// Conteúdo do currículo. A página /curriculo e o PDF (public/curriculo-breno-silveira.pdf)
// são gerados a partir deste arquivo — edite aqui e gere o PDF de novo (ver README).
//
// Formato pensado para ATS (sistemas de triagem de currículos): uma coluna, seções com
// nomes padrão, texto selecionável, sem tabelas/ícones, e tópicos no formato do Google
// ("fiz X, usando Y, resultando em Z"): verbo de ação + o que foi feito + como/impacto.

export const resume = {
  name: 'Breno Silveira Leal',
  role: 'Desenvolvedor Full Stack | IA & Automação',
  contact: [
    'Teresópolis, RJ – disponível para remoto e híbrido',
    '(21) 97354-9107',
    'brenosilveiraleal@gmail.com',
  ],
  links: [
    { label: 'Portfólio', value: 'brenosilveira.vercel.app', href: 'https://brenosilveira.vercel.app' },
    { label: 'LinkedIn', value: 'linkedin.com/in/breno-silveira-leal', href: 'https://www.linkedin.com/in/breno-silveira-leal/' },
    { label: 'GitHub', value: 'github.com/BrenoSilveiraLeal', href: 'https://github.com/BrenoSilveiraLeal' },
  ],

  summary: 'Desenvolvedor Full Stack graduado em Ciência da Computação (UNIFESO), com experiência em desenvolvimento web, IA aplicada e educação tecnológica. Desenvolvo aplicações completas — interface, back-end, banco de dados e deploy — com TypeScript, React, Next.js, Python, FastAPI, PostgreSQL e Supabase, usando IA generativa para acelerar entregas e automatizar processos. 15 projetos publicados no portfólio e 3 hackathons universitários. Busco vagas de Desenvolvedor Full Stack, Front-end, IA & Automação ou Implementação/Suporte de sistemas.',

  skills: [
    { group: 'Linguagens', items: 'TypeScript, JavaScript, Python, SQL, HTML5, CSS3' },
    { group: 'Front-end', items: 'React, Next.js, design responsivo, UX/UI' },
    { group: 'Back-end e APIs', items: 'Node.js, FastAPI, APIs REST, autenticação, integrações, SQLAlchemy' },
    { group: 'Banco de dados', items: 'PostgreSQL, Supabase, SQLite' },
    { group: 'IA e automação', items: 'IA generativa (Gemini, ChatGPT), engenharia de prompt, agentes de IA, chatbots' },
    { group: 'Ferramentas', items: 'Git, GitHub, Vercel, VS Code' },
    { group: 'Suporte', items: 'Troubleshooting, redes de computadores, instalação e configuração de software' },
  ],

  experience: [
    {
      role: 'Professor de Robótica, Programação e Informática', org: 'Casa da Inovação – Instituto Bem Viver / UniRio', place: 'Teresópolis, RJ', period: 'Out/2025 – Atual',
      bullets: [
        'Planejo e ministro aulas práticas de programação, robótica e informática para turmas de diferentes idades e níveis.',
        'Desenvolvo atividades com Arduino e Tinkercad que trabalham lógica e resolução de problemas na prática.',
        'Produzo materiais didáticos, documentação e relatórios para acompanhar a evolução das turmas.',
        'Presto suporte técnico a alunos e usuários com software, dispositivos, internet e ferramentas digitais.',
      ],
    },
    {
      role: 'Educador de Tecnologia', org: 'Microlins', place: 'Teresópolis, RJ', period: 'Mai/2025 – Out/2025',
      bullets: [
        'Ministrei aulas de informática e programação, com orientação técnica individual aos alunos.',
        'Criei materiais didáticos e organizei turmas e o planejamento das atividades.',
        'Resolvi dificuldades técnicas no ambiente de aprendizagem, mantendo as aulas sem interrupções.',
      ],
    },
    {
      role: 'Atendimento e Operações', org: 'Banca de Jornal', place: 'Teresópolis, RJ', period: '2024',
      bullets: [
        'Realizei atendimento ao público, operação de caixa, controle de estoque e contato com fornecedores.',
      ],
    },
  ],

  projects: [
    {
      name: 'Insidely – Plataforma web full stack', href: 'https://insidely.vercel.app', url: 'insidely.vercel.app',
      stack: 'Next.js, React, TypeScript, PostgreSQL, Supabase, Vercel',
      bullets: [
        'Desenvolvi de ponta a ponta uma plataforma que conecta pessoas a funcionários verificados para conversas sobre empresas e carreiras, com o objetivo de reduzir a frustração profissional.',
        'Implementei autenticação, perfis distintos de usuários, agendamento, pagamentos e integrações externas com Next.js, TypeScript e Supabase.',
        'Conduzi testes, depuração, QA e deploy contínuo na Vercel.',
      ],
    },
    {
      name: 'A.T.L.A.S – Plataforma de investimentos com IA', href: 'https://atlasagent.vercel.app', url: 'atlasagent.vercel.app',
      stack: 'Python, FastAPI, SQLAlchemy, SQLite, Next.js, TypeScript, Gemini, MetaTrader 5',
      bullets: [
        'Criei um ecossistema multiagente de IA que analisa gráficos, estatísticas e notícias do mercado para orientar decisões de compra e venda de ações.',
        'Estruturei o back-end em Python/FastAPI com SQLAlchemy e o front-end em Next.js/TypeScript, com gerenciamento de risco, auditoria das decisões e integração opcional com MetaTrader 5.',
      ],
    },
    {
      name: 'Casa da Inovação – Site institucional', href: 'https://casadainovacao.vercel.app', url: 'casadainovacao.vercel.app',
      stack: 'Next.js, React, JavaScript, Google Forms, Vercel',
      bullets: [
        'Desenvolvi o site oficial da instituição, centralizando cursos, unidades, horários, projetos e história em uma interface responsiva.',
        'Integrei a pré-matrícula ao Google Forms, simplificando a inscrição de novos alunos.',
      ],
    },
  ],
  moreProjects: {
    text: 'Outros 12 projetos publicados — e-commerces, sistemas de gestão (CRM/ERP), finanças pessoais, turismo e um chatbot de WhatsApp — com vídeos e links em',
    href: 'https://brenosilveira.vercel.app',
    url: 'brenosilveira.vercel.app',
  },

  hackathons: [
    { name: 'Brightline', period: '2026', text: 'Aplicativo que analisa exames de imagem para apoiar a identificação de fraturas.' },
    { name: 'Unifeso Challenge – Sistema de administração hospitalar', period: '2025', text: 'Implementei a camada de banco de dados (modelagem e consultas SQL) e participei do back-end e da integração entre os componentes.' },
    { name: 'Relógio inteligente para idosos', period: '2023', text: 'Protótipo de relógio que detecta quedas e aciona pedido de ajuda quando necessário.' },
  ],

  education: [
    { title: 'Bacharelado em Ciência da Computação', org: 'UNIFESO – Centro Universitário Serra dos Órgãos', period: '2023 – 2026 (concluído)' },
    { title: 'Técnico em Informática', org: 'FAETEC', period: '2023' },
  ],

  courses: [
    'Imersão Dev com Google Gemini, 10ª edição – Alura (2025)',
    'Curso de Python – Santander Open Academy (em andamento)',
    'Cursor com Python: Desenvolvimento inteligente com IA – Santander Open Academy (em andamento)',
    'Domine IA com Gemini – Santander Open Academy (em andamento)',
    'Santander Bootcamp 2023 – Fullstack Java + Angular – DIO / Santander (2023)',
    'Fundamentos de LGPD – Santander (2023)',
    'Programador de Sistemas C# – FAETEC (2023)',
    'Redes de Computadores – FAETEC (2023)',
    'Operador de Computador – FAETEC (2023)',
    'Montagem e Manutenção de Computador – FAETEC (2023)',
    'Curso de JavaScript – Tech4Me (2021 – 2022)',
    'Curso de Delphi – Tech4Me (2022)',
    'Inglês, nível intermediário – English House (2016 – 2021)',
  ],

  activities: [
    'Olimpíada Brasileira de Robótica (OBR) 2023 – organização da Fase Regional no Rio de Janeiro (30 h).',
    'Geração Teretech (2022) – programa de criação de startups: ideação, desenvolvimento e validação de modelo de negócio.',
  ],

  softSkills: 'Comunicação clara e didática | Resolução de problemas | Trabalho em equipe | Organização e planejamento | Atendimento ao público | Adaptabilidade | Pensamento lógico e analítico',

  languages: 'Português – nativo | Inglês – intermediário (English House, 2016 – 2021)',
};

export const resumePdf = '/curriculo-breno-silveira.pdf';
