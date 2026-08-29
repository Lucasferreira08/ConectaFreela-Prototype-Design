import { Screen } from "../App"
import BrandLogo from "../components/BrandLogo"
import dataLabImage from "../assets/landing/data-lab.webp"
import designWorkshopImage from "../assets/landing/design-workshop.webp"
import juniorEnterpriseImage from "../assets/landing/junior-enterprise.webp"
import socialProjectImage from "../assets/landing/social-project.webp"
import teamProjectImage from "../assets/landing/team-project.webp"

interface Props {
  navigate: (screen: Screen, extras?: any) => void
}

const talentSteps = [
  [
    "01",
    "Crie seu perfil",
    "Apresente suas competências, portfólio e disponibilidade.",
  ],
  [
    "02",
    "Encontre um projeto",
    "Filtre oportunidades por área, formato e carga horária.",
  ],
  ["03", "Candidate-se", "Conte à organização como você pode contribuir."],
  [
    "04",
    "Acompanhe o processo",
    "Consulte cada atualização no seu painel pessoal.",
  ],
]

const organizationSteps = [
  [
    "01",
    "Publique a necessidade",
    "Explique o projeto, as competências e o tempo necessário.",
  ],
  [
    "02",
    "Receba candidaturas",
    "Conheça estudantes interessados no desafio proposto.",
  ],
  [
    "03",
    "Analise os perfis",
    "Compare experiência, portfólio e disponibilidade.",
  ],
  [
    "04",
    "Forme sua equipe",
    "Converse com os candidatos e atualize o processo.",
  ],
]

const audiences = [
  [
    "Estudantes",
    "Experiência prática ainda na graduação.",
    teamProjectImage,
    "Estudantes reunidos em torno de um protótipo de tecnologia sustentável",
  ],
  [
    "Laboratórios",
    "Competências para pesquisas aplicadas.",
    dataLabImage,
    "Estudante analisando dados em um laboratório de computação",
  ],
  [
    "ONGs",
    "Pessoas qualificadas para projetos sociais.",
    socialProjectImage,
    "Equipe de projeto social trabalhando em uma horta comunitária",
  ],
  [
    "Empresas juniores",
    "Novos talentos para demandas de clientes.",
    juniorEnterpriseImage,
    "Equipe universitária reunida com representante de uma organização",
  ],
]

function StepList({
  steps,
  accent,
}: {
  steps: string[][]
  accent: "green" | "dark"
}) {
  return (
    <ol>
      {steps.map(([number, title, description]) => (
        <li
          key={number}
          className="cf-step-row grid gap-3 border-b border-gray-200 py-5"
        >
          <span
            className={`cf-display text-xl ${
              accent === "green" ? "text-emerald-700" : "text-[#0a1a12]"
            }`}
          >
            {number}
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function Landing({ navigate }: Props) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f4] text-gray-900">
      <header className="border-b border-gray-200/80 bg-[#f7f8f4]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <BrandLogo />
          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-1 sm:gap-3"
          >
            <button
              onClick={() =>
                navigate("auth", { role: null, authMode: "login" })
              }
              className="px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950 sm:px-4"
            >
              Entrar
            </button>
            <button
              onClick={() =>
                navigate("auth", { role: null, authMode: "signup" })
              }
              className="rounded-lg bg-[#0a1a12] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#065f46] sm:px-5"
            >
              Cadastrar grátis
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="cf-landing-hero mx-auto grid">
          <div className="flex items-center px-5 py-14 sm:px-8 sm:py-20 lg:justify-end lg:py-16 lg:pl-8 lg:pr-14">
            <div className="cf-landing-copy w-full lg:ml-auto">
              <p className="mb-6 max-w-md text-sm font-medium leading-relaxed text-emerald-800">
                Oportunidades acadêmicas e sociais em um só lugar
              </p>
              <h1 className="cf-display cf-landing-title text-[#0a1a12]">
                Encontre projetos que precisam do que você sabe.
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                Conectamos estudantes a laboratórios, ONGs e empresas juniores
                com oportunidades para aprender, colaborar e construir
                portfólio.
              </p>
              <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <button
                  onClick={() =>
                    navigate("auth", { role: "talent", authMode: "signup" })
                  }
                  className="rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  Explorar oportunidades
                </button>
                <button
                  onClick={() =>
                    navigate("auth", { role: "org", authMode: "signup" })
                  }
                  className="py-2 text-sm font-semibold text-[#065f46] underline decoration-emerald-300 underline-offset-4 transition-colors hover:text-emerald-800"
                >
                  Publicar uma oportunidade →
                </button>
              </div>
            </div>
          </div>

          <div className="cf-landing-mosaic grid gap-2 px-5 pb-5 sm:px-8 sm:pb-8 lg:px-0 lg:pb-0">
            <figure className="cf-mosaic-main relative overflow-hidden rounded-lg lg:rounded-none">
              <img
                src={teamProjectImage}
                alt="Equipe diversa de estudantes desenvolvendo um projeto de tecnologia sustentável"
                width="1536"
                height="1024"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-[#0a1a12] px-3 py-2 text-xs font-medium text-white sm:bottom-4 sm:left-4">
                Projeto de tecnologia · equipe universitária
              </figcaption>
            </figure>
            <figure className="cf-mosaic-data overflow-hidden rounded-lg lg:rounded-none">
              <img
                src={dataLabImage}
                alt="Estudante desenvolvendo software e analisando dados em laboratório"
                width="1024"
                height="1536"
                loading="lazy"
                className="h-full w-full object-cover object-[48%_center]"
              />
            </figure>
            <figure className="cf-mosaic-design overflow-hidden rounded-lg lg:rounded-none">
              <img
                src={designWorkshopImage}
                alt="Designer apresentando conceitos visuais para colegas de projeto"
                width="1536"
                height="1024"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <figure className="cf-mosaic-social relative overflow-hidden rounded-lg lg:rounded-none">
              <img
                src={socialProjectImage}
                alt="Integrantes de projeto social cuidando de uma horta comunitária"
                width="1536"
                height="1024"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 bg-white px-3 py-2 text-xs font-medium text-[#0a1a12]">
                Impacto local · projeto social
              </figcaption>
            </figure>
            <figure className="cf-mosaic-junior overflow-hidden">
              <img
                src={juniorEnterpriseImage}
                alt="Equipe de empresa júnior reunida com representante de uma organização"
                width="1024"
                height="1536"
                loading="lazy"
                className="h-full w-full object-cover object-[center_42%]"
              />
            </figure>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="cf-process-intro grid gap-10 border-b border-gray-200 pb-12 md:items-end">
              <h2 className="cf-display text-5xl leading-none tracking-[-0.025em] text-[#0a1a12] sm:text-6xl">
                Dois caminhos. Um lugar para colaborar.
              </h2>
              <p className="max-w-xl text-base leading-7 text-gray-500 md:justify-self-end">
                Quem quer aprender encontra desafios concretos. Quem tem um
                projeto encontra pessoas dispostas a colocá-lo em prática.
              </p>
            </div>
            <div className="grid gap-16 pt-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mb-7 flex items-center justify-between border-b-2 border-emerald-600 pb-4">
                  <h3 className="text-lg font-semibold text-[#0a1a12]">
                    Para talentos
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">
                    Aprender fazendo
                  </span>
                </div>
                <StepList steps={talentSteps} accent="green" />
                <button
                  onClick={() =>
                    navigate("auth", { role: "talent", authMode: "signup" })
                  }
                  className="mt-7 text-sm font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4"
                >
                  Criar perfil de talento →
                </button>
              </div>
              <div>
                <div className="mb-7 flex items-center justify-between border-b-2 border-[#0a1a12] pb-4">
                  <h3 className="text-lg font-semibold text-[#0a1a12]">
                    Para organizações
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                    Tirar projetos do papel
                  </span>
                </div>
                <StepList steps={organizationSteps} accent="dark" />
                <button
                  onClick={() =>
                    navigate("auth", { role: "org", authMode: "signup" })
                  }
                  className="mt-7 text-sm font-semibold text-[#0a1a12] underline decoration-gray-300 underline-offset-4"
                >
                  Publicar uma oportunidade →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8f4] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 border-b border-gray-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="cf-display text-5xl leading-none tracking-[-0.025em] text-[#0a1a12] sm:text-6xl">
                Feito para quem faz.
              </h2>
              <p className="max-w-sm text-sm leading-6 text-gray-500">
                Diferentes contextos, conectados pela vontade de aprender e
                gerar resultado concreto.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map(([label, description, image, alt], index) => (
                <figure key={label}>
                  <div className="cf-audience-image overflow-hidden bg-gray-200">
                    <img
                      src={image}
                      alt={alt}
                      width={index === 1 || index === 3 ? "1024" : "1536"}
                      height={index === 1 || index === 3 ? "1536" : "1024"}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.025]"
                    />
                  </div>
                  <figcaption className="border-t border-gray-300 pt-4">
                    <p className="text-sm font-semibold text-[#0a1a12]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#065f46] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-medium text-emerald-200">
                Seu próximo projeto pode começar aqui.
              </p>
              <h2 className="cf-display max-w-2xl text-5xl leading-[0.98] tracking-[-0.025em] sm:text-6xl">
                Transforme o que você sabe em experiência real.
              </h2>
            </div>
            <button
              onClick={() =>
                navigate("auth", { role: "talent", authMode: "signup" })
              }
              className="shrink-0 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#065f46] transition-colors hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explorar oportunidades
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <BrandLogo compact />
          <p className="text-xs text-gray-400">Protótipo MVP · 2026</p>
        </div>
      </footer>
    </div>
  )
}
