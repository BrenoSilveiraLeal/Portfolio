export const contact = {
  email: 'brenosilveiraleal@gmail.com',
  emailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=brenosilveiraleal@gmail.com&su=Contato%20pelo%20portf%C3%B3lio&body=Ol%C3%A1%20Breno%2C%0A%0A',
  whatsapp: 'https://wa.me/5521973549107',
  linkedin: 'https://www.linkedin.com/in/breno-silveira-leal/',
  github: 'https://github.com/BrenoSilveiraLeal',
  resume: '/curriculo',
  instagram: 'https://www.instagram.com/bsl_silveira/',
};

export const tools = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Supabase', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Vercel', 'IA / LLMs'];

export type ProjectGroup = 'produto' | 'loja' | 'site' | 'sistema';

export const projectGroups: { id: ProjectGroup; label: string }[] = [
  { id: 'produto', label: 'Produtos & IA' },
  { id: 'loja', label: 'E-commerce' },
  { id: 'site', label: 'Sites & experiências' },
  { id: 'sistema', label: 'Sistemas' },
];

// Agrupa cada projeto (pelo slug) em uma categoria do filtro da home.
export const groupBySlug: Record<string, ProjectGroup> = {
  insidely: 'produto',
  atlas: 'produto',
  cuidapet: 'produto',
  finaxis: 'produto',
  hypix: 'loja',
  'decora-moveis': 'loja',
  aureon: 'loja',
  inovatech: 'loja',
  'luma-perfumaria': 'loja',
  'casa-da-inovacao': 'site',
  'saborama-motion': 'site',
  voyagetrip: 'site',
  altezza: 'site',
  vertice: 'sistema',
  'chatbot-casa-da-inovacao': 'sistema',
};
