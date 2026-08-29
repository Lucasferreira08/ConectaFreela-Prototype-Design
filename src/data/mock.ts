export const opportunities = [
  {
    id: "op1",

    title: "Desenvolvedor Front-end React",

    org: "LabTech UFMG",

    orgType: "Laboratório",

    category: "Tecnologia",

    skills: ["React", "TypeScript", "Tailwind CSS"],
    type: "Voluntário",
    modality: "Híbrido",
    duration: "3 meses",

    hours: "10h/semana",

    deadline: "30/08/2026",

    description:
      "Buscamos um estudante de computação para colaborar no desenvolvimento de um painel de visualização de dados para pesquisa acadêmica. Projeto com impacto direto em publicação científica.",

    featured: true,

    applicants: 7,
  },

  {
    id: "op2",

    title: "Designer de Identidade Visual",

    org: "ONG Raízes",

    orgType: "ONG",

    category: "Design",

    skills: ["Figma", "Branding", "Illustrator"],
    type: "Voluntário",
    modality: "Remoto",
    duration: "6 semanas",

    hours: "8h/semana",

    deadline: "15/09/2026",

    description:
      "Redesign completo da identidade visual da ONG para comunicação digital. O trabalho será reconhecido publicamente e pode compor portfólio.",

    featured: false,

    applicants: 3,
  },

  {
    id: "op3",

    title: "Analista de Dados",

    org: "EJ Consulting",

    orgType: "Empresa Júnior",

    category: "Dados",

    skills: ["Python", "SQL", "Power BI"],
    type: "Remunerado",
    modality: "Presencial",
    duration: "2 meses",

    hours: "20h/semana",

    deadline: "10/09/2026",

    description:
      "Análise de dados de vendas e geração de relatórios para cliente da empresa júnior. Remuneração por projeto com possibilidade de contratação.",

    featured: true,

    applicants: 12,
  },

  {
    id: "op4",

    title: "Redator de Conteúdo Técnico",

    org: "StartupEdu",

    orgType: "Pequeno Negócio",

    category: "Marketing",

    skills: ["Redação", "SEO", "WordPress"],
    type: "Remunerado",
    modality: "Remoto",
    duration: "Contínuo",

    hours: "5h/semana",

    deadline: "Contínuo",

    description:
      "Produção de artigos técnicos sobre educação e tecnologia para blog institucional. Pagamento por artigo publicado.",

    featured: false,

    applicants: 5,
  },
]

export const applications = [
  {
    id: "app1",

    opportunityId: "op1",

    opportunityTitle: "Desenvolvedor Front-end React",

    org: "LabTech UFMG",

    appliedAt: "12/08/2026",

    status: "Em análise",

    message:
      "Tenho experiência sólida em React e TypeScript, desenvolvi dois projetos acadêmicos com foco em dashboards de dados. Seria uma ótima oportunidade para colaborar com pesquisa aplicada.",
  },

  {
    id: "app2",

    opportunityId: "op3",

    opportunityTitle: "Analista de Dados",

    org: "EJ Consulting",

    appliedAt: "05/08/2026",

    status: "Aprovado",

    message:
      "Tenho familiaridade com Python e SQL, já trabalhei com análise exploratória em projetos de iniciação científica. Disponível para 20h/semana.",
  },

  {
    id: "app3",

    opportunityId: "op2",

    opportunityTitle: "Designer de Identidade Visual",

    org: "ONG Raízes",

    appliedAt: "01/08/2026",

    status: "Recusado",

    message:
      "Sou estudante de Design com portfólio focado em branding para pequenas organizações. Tenho interesse em contribuir com causas sociais.",
  },
]

export const candidates = [
  {
    id: "c1",

    opportunityId: "op1",

    name: "Mariana Costa",

    avatar: "MC",

    area: "Ciência da Computação",

    university: "USP",

    skills: ["React", "TypeScript", "Node.js"],

    appliedAt: "10/08/2026",

    status: "Em análise",

    message:
      "Tenho experiência sólida em React e TypeScript, desenvolvi dois projetos acadêmicos com foco em dashboards de dados. Seria uma ótima oportunidade para colaborar com pesquisa aplicada.",

    portfolio: ["github.com/marianac", "marianacosta.dev"],

    availability: "10h/semana",

    rating: null,
  },

  {
    id: "c2",

    opportunityId: "op1",

    name: "Rafael Sousa",

    avatar: "RS",

    area: "Engenharia de Software",

    university: "UNICAMP",

    skills: ["React", "Vue.js", "GraphQL"],

    appliedAt: "11/08/2026",

    status: "Aprovado",

    message:
      "Trabalho com React há 2 anos, participei de 3 hackathons e tenho projetos de visualização de dados no GitHub.",

    portfolio: ["github.com/rafaels", "linkedin.com/in/rafaelsousa"],

    availability: "15h/semana",

    rating: null,
  },

  {
    id: "c3",

    opportunityId: "op1",

    name: "Júlia Mendes",

    avatar: "JM",

    area: "Sistemas de Informação",

    university: "UFMG",

    skills: ["React", "Python", "Figma"],

    appliedAt: "12/08/2026",

    status: "Recusado",

    message:
      "Desenvolvedora front-end com interesse em research. Tenho projetos de dashboard para análise de dados educacionais.",

    portfolio: ["github.com/juliamendes"],

    availability: "8h/semana",

    rating: null,
  },
]

export const statusColors: Record<string, string> = {
  "Em análise": "bg-amber-50 text-amber-700 border border-amber-200",

  Aprovado: "bg-emerald-50 text-emerald-700 border border-emerald-200",

  Recusado: "bg-red-50 text-red-600 border border-red-200",

  Encerrado: "bg-gray-100 text-gray-500 border border-gray-200",
}
