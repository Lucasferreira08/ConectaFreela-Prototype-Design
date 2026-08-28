import { Screen } from "../App";
import BrandLogo from "../components/BrandLogo";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

export default function Landing({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-8 h-18 flex items-center justify-between pt-6">
          <BrandLogo light />
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("auth", { role: null, authMode: "login" })}
              className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2"
            >
              Entrar
            </button>
            <button
              onClick={() => navigate("auth", { role: null, authMode: "signup" })}
              className="text-sm bg-white text-gray-900 px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors font-medium"
            >
              Cadastrar grátis
            </button>
          </div>
        </div>
      </header>

      {/* Hero — dark full bleed */}
      <section
        className="relative overflow-hidden flex flex-col justify-end"
        style={{
          background: "linear-gradient(135deg, #0a1a12 0%, #0d1f17 40%, #071310 100%)",
          minHeight: "92vh",
        }}
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow orb */}
        <div
          className="absolute top-1/4 right-1/4 rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            transform: "translate(30%, -20%)",
          }}
        />

        {/* Floating cards — decorative, top right */}
        <div className="absolute top-32 right-8 lg:right-24 hidden lg:flex flex-col gap-3 w-72">
          <div
            className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-4"
            style={{ transform: "rotate(1.5deg)" }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] text-emerald-400 font-medium">LabTech UFMG</p>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">Voluntário</span>
            </div>
            <p className="text-sm font-semibold text-white mb-3">Desenvolvedor Front-end React</p>
            <div className="flex gap-1.5 flex-wrap">
              {["React", "TypeScript", "Tailwind"].map(s => (
                <span key={s} className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          <div
            className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-4 ml-6"
            style={{ transform: "rotate(-1deg)" }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] text-emerald-400 font-medium">ONG Raízes</p>
              <span className="text-[10px] bg-white/10 text-white/50 border border-white/10 px-2 py-0.5 rounded-full">Voluntário</span>
            </div>
            <p className="text-sm font-semibold text-white mb-3">Designer de Identidade Visual</p>
            <div className="flex gap-1.5 flex-wrap">
              {["Figma", "Branding"].map(s => (
                <span key={s} className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          {/* Applied toast */}
          <div className="flex items-center gap-2.5 bg-emerald-500 text-white rounded-xl px-4 py-3 text-xs font-medium self-start ml-2 shadow-lg shadow-emerald-900/40">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5L5 9.5L11 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Candidatura enviada!
          </div>
        </div>

        {/* Main copy */}
        <div className="relative max-w-6xl mx-auto px-8 pb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Plataforma em beta aberto · 200+ oportunidades ativas
          </div>

          <h1
            className="text-white leading-none mb-8 max-w-3xl"
            style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
          >
            Talento encontra{" "}
            <br />
            <em className="text-emerald-400 not-italic">propósito.</em>
          </h1>

          <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl">
            Estudantes, laboratórios, ONGs e empresas juniores em uma só plataforma.
            Projetos reais. Portfólio verdadeiro. Conexões que importam.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("auth", { role: "talent", authMode: "signup" })}
              className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-4 rounded-xl font-medium transition-colors text-sm"
            >
              Sou Talento — ver oportunidades
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => navigate("auth", { role: "org", authMode: "signup" })}
              className="flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-7 py-4 rounded-xl font-medium transition-colors text-sm"
            >
              Sou Organização — publicar projeto
            </button>
          </div>

          {/* Stats inline */}
          <div className="flex gap-8 mt-14 border-t border-white/10 pt-8">
            {[
              { v: "200+", l: "oportunidades" },
              { v: "840", l: "talentos" },
              { v: "62", l: "organizações" },
              { v: "4.8★", l: "avaliação" },
            ].map(s => (
              <div key={s.l}>
                <p className="text-2xl font-semibold text-white">{s.v}</p>
                <p className="text-xs text-white/40 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-emerald-600 tracking-widest uppercase mb-3">Como funciona</p>
          <h2
            className="text-4xl text-gray-900"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Simples para todos os lados
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Talent column */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full mb-6">
              Para Talentos
            </div>
            <div className="space-y-6">
              {[
                { n: "01", title: "Crie seu perfil", desc: "Competências, portfólio e disponibilidade em minutos." },
                { n: "02", title: "Encontre oportunidades", desc: "Filtre por área, tipo e competência. Veja o que encaixa com você." },
                { n: "03", title: "Candidate-se com uma mensagem", desc: "Sem burocracia. Apresente-se e espere o retorno." },
                { n: "04", title: "Acompanhe suas candidaturas", desc: "Veja o status em tempo real no seu painel pessoal." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="text-xs font-semibold text-emerald-500 w-6 flex-shrink-0 pt-0.5">{step.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{step.title}</p>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("auth", { role: "talent", authMode: "signup" })}
              className="mt-8 w-full bg-emerald-600 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              Criar perfil grátis
            </button>
          </div>

          {/* Org column */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/10 px-3 py-1.5 rounded-full mb-6">
              Para Organizações
            </div>
            <div className="space-y-6">
              {[
                { n: "01", title: "Publique sua oportunidade", desc: "Descreva o projeto, habilidades e carga horária esperada." },
                { n: "02", title: "Receba candidaturas", desc: "Talentos encontram sua vaga pelos filtros de busca." },
                { n: "03", title: "Revise os candidatos", desc: "Veja perfil, portfólio e mensagem de cada candidato." },
                { n: "04", title: "Atualize o status", desc: "Aprove, recuse ou mantenha em análise diretamente no painel." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="text-xs font-semibold text-emerald-400 w-6 flex-shrink-0 pt-0.5">{step.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{step.title}</p>
                    <p className="text-sm text-white/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("auth", { role: "org", authMode: "signup" })}
              className="mt-8 w-full border border-white/20 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Publicar oportunidade
            </button>
          </div>
        </div>
      </section>

      {/* Bento — quem usa */}
      <section className="pb-24 px-8 max-w-6xl mx-auto w-full">
        <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-8 text-center">Feito para</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: "🎓", label: "Estudantes", desc: "Experiência real ainda na graduação" },
            { icon: "🔬", label: "Laboratórios", desc: "Apoio técnico para pesquisas aplicadas" },
            { icon: "🌱", label: "ONGs", desc: "Voluntários qualificados para projetos sociais" },
            { icon: "🚀", label: "Empresas Juniores", desc: "Talentos para demandas de clientes" },
          ].map((item) => (
            <div key={item.label} className="border border-gray-100 rounded-2xl p-5 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <p className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">{item.label}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-8 mb-16 rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #065f46, #047857)" }}>
        <div className="px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl text-white mb-2"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Pronto para começar?
            </h2>
            <p className="text-emerald-200/80 text-sm">É gratuito. Sem cartão de crédito.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => navigate("auth", { role: "talent", authMode: "signup" })}
              className="bg-white text-emerald-800 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-colors"
            >
              Cadastrar como Talento
            </button>
            <button
              onClick={() => navigate("auth", { role: "org", authMode: "signup" })}
              className="border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Sou Organização
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <BrandLogo compact />
          <p className="text-xs text-gray-400">Protótipo MVP · 2026</p>
        </div>
      </footer>
    </div>
  );
}
