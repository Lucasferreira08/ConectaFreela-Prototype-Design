import { useState } from "react";
import { Screen } from "../App";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

const opportunities = [
  { title: "Desenvolvedor Front-end React", status: "Ativa", applicants: 7, date: "Encerra em 2 dias" },
  { title: "Analista de Dados para impacto", status: "Encerrada", applicants: 14, date: "Concluída em jul. 2026" },
];

const team = [
  { initials: "LF", name: "Luiza Ferreira", role: "Administração", detail: "Gestão de pessoas" },
  { initials: "RA", name: "Rafael Alves", role: "Recrutamento", detail: "Tecnologia e dados" },
  { initials: "MA", name: "Marina Araujo", role: "Membro", detail: "Projetos estratégicos" },
];

export default function OrgProfile({ navigate }: Props) {
  const [section, setSection] = useState<"profile" | "team" | "opportunities">("profile");
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setEditing(false);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="rounded-xl bg-ink p-7 sm:p-10 text-white">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-lg bg-emerald-600 flex items-center justify-center text-2xl font-semibold flex-shrink-0">EJ</div>
            <div>
              <p className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Empresa Júnior · Belo Horizonte, MG</p>
              <h1 className="text-4xl mt-2" style={{ fontFamily: "'Instrument Serif', serif" }}>EJ Consulting</h1>
              <p className="text-sm text-white/65 mt-2">Projetos reais, desenvolvimento de pessoas e impacto para negócios locais.</p>
            </div>
          </div>
          <button onClick={() => setEditing(true)} className="rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-emerald-50 transition-colors">Editar perfil</button>
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
        {[
          ["18", "projetos concluídos"],
          ["4,8", "média nas avaliações"],
          ["92%", "taxa de resposta"],
          ["3", "vagas ativas"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl border border-gray-100 bg-white p-5">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </section>

      <div className="flex gap-6 border-b border-gray-100 mt-10">
        {([
          ["profile", "Institucional"],
          ["team", "Equipe"],
          ["opportunities", "Oportunidades"],
        ] as const).map(([key, label]) => (
          <button key={key} onClick={() => setSection(key)} className={`pb-3 text-sm font-medium border-b-2 transition-colors ${section === key ? "border-emerald-600 text-emerald-700" : "border-transparent text-gray-400 hover:text-gray-700"}`}>
            {label}
          </button>
        ))}
      </div>

      {section === "profile" && (
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-gray-900">Sobre a organização</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">A EJ Consulting é uma empresa júnior formada por estudantes que conectam conhecimento acadêmico a desafios reais. Criamos projetos de tecnologia, dados e estratégia para organizações que querem crescer com propósito.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">Causas e áreas de atuação</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Educação", "Tecnologia", "Empreendedorismo", "Impacto local", "Dados"].map((item) => (
                  <span key={item} className="rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700">{item}</span>
                ))}
              </div>
            </section>
            <section className="rounded-xl bg-gray-50 p-6">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Impacto em 2026</p>
              <div className="mt-5 grid sm:grid-cols-3 gap-5">
                <div><p className="text-2xl font-semibold text-emerald-700">126h</p><p className="text-xs text-gray-500 mt-1">de talento mobilizado</p></div>
                <div><p className="text-2xl font-semibold text-emerald-700">9</p><p className="text-xs text-gray-500 mt-1">negócios apoiados</p></div>
                <div><p className="text-2xl font-semibold text-emerald-700">28</p><p className="text-xs text-gray-500 mt-1">estudantes envolvidos</p></div>
              </div>
            </section>
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Avaliações recebidas</h2>
                <button onClick={() => navigate("reviews")} className="text-sm font-medium text-emerald-700">Ver todas</button>
              </div>
              <div className="mt-4 rounded-xl border border-gray-100 p-5">
                <div className="flex gap-1 text-amber-400">★★★★★ <span className="ml-2 text-xs text-gray-400 self-center">há 2 semanas</span></div>
                <p className="mt-3 text-sm text-gray-600">"Uma equipe organizada, receptiva e com objetivos muito claros. Foi uma experiência excelente."</p>
                <p className="mt-3 text-xs font-medium text-gray-700">Mariana Costa · Desenvolvedora Front-end</p>
              </div>
            </section>
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border border-gray-100 p-5">
              <h2 className="text-sm font-semibold text-gray-800">Informações</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-xs text-gray-400">Fundada em</dt><dd className="text-gray-700 mt-0.5">2018</dd></div>
                <div><dt className="text-xs text-gray-400">Tipo de organização</dt><dd className="text-gray-700 mt-0.5">Empresa Júnior</dd></div>
                <div><dt className="text-xs text-gray-400">Contato</dt><dd className="text-emerald-700 mt-0.5">contato@ejconsulting.org</dd></div>
              </dl>
            </div>
            <div className="rounded-xl border border-gray-100 p-5">
              <h2 className="text-sm font-semibold text-gray-800">Canais</h2>
              <div className="mt-4 space-y-2 text-sm text-emerald-700">
                <p>ejconsulting.org</p>
                <p>linkedin.com/company/ejconsulting</p>
              </div>
            </div>
          </aside>
        </div>
      )}

      {section === "team" && (
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Equipe da organização</h2>
              <p className="text-sm text-gray-400 mt-1">Gerencie quem pode publicar vagas e avaliar candidatos.</p>
            </div>
            <button className="rounded-md border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">+ Convidar membro</button>
          </div>
          <div className="mt-5 space-y-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl border border-gray-100 p-5 flex items-center gap-4">
                <span className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-xs font-semibold text-emerald-700 flex-shrink-0">{member.initials}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{member.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{member.detail}</p>
                </div>
                <span className="rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs text-gray-600">{member.role}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {section === "opportunities" && (
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Oportunidades publicadas</h2>
              <p className="text-sm text-gray-400 mt-1">Acompanhe vagas ativas, rascunhos e oportunidades encerradas.</p>
            </div>
            <button onClick={() => navigate("post-opportunity", { role: "org" })} className="rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white">Nova oportunidade</button>
          </div>
          <div className="mt-5 space-y-3">
            {opportunities.map((op) => (
              <button key={op.title} onClick={() => navigate("org-panel")} className="w-full text-left rounded-xl border border-gray-100 p-5 hover:border-emerald-200 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{op.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{op.applicants} candidaturas · {op.date}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${op.status === "Ativa" ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>{op.status}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <form onSubmit={(event) => { event.preventDefault(); save(); }} className="w-full max-w-lg rounded-xl bg-white p-7 shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>Editar perfil</h2>
                <p className="text-sm text-gray-400 mt-1">Atualize as informações visíveis aos talentos.</p>
              </div>
              <button type="button" onClick={() => setEditing(false)} aria-label="Fechar" className="text-gray-400">×</button>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="org-name" className="block text-xs font-medium text-gray-600 mb-1.5">Nome da organização</label>
                <input id="org-name" defaultValue="EJ Consulting" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div>
                <label htmlFor="org-type-location" className="block text-xs font-medium text-gray-600 mb-1.5">Tipo e localização</label>
                <input id="org-type-location" defaultValue="Empresa Júnior · Belo Horizonte, MG" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div>
                <label htmlFor="org-description" className="block text-xs font-medium text-gray-600 mb-1.5">Descrição</label>
                <textarea id="org-description" defaultValue="Projetos reais, desenvolvimento de pessoas e impacto para negócios locais." rows={4} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={() => setEditing(false)} className="flex-1 rounded-md border border-gray-200 py-3 text-sm font-medium text-gray-600">Cancelar</button>
              <button className="flex-1 rounded-md bg-emerald-600 py-3 text-sm font-medium text-white">Salvar alterações</button>
            </div>
          </form>
        </div>
      )}

      {saved && <div className="fixed bottom-6 right-6 rounded-md bg-emerald-700 px-4 py-3 text-sm font-medium text-white shadow-md">Perfil atualizado com sucesso.</div>}
    </div>
  );
}
