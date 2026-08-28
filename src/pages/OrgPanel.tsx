import { Screen } from "../App";
import { opportunities, candidates, statusColors } from "../data/mock";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

export default function OrgPanel({ navigate }: Props) {
  const myOp = opportunities[0];
  const myCandidates = candidates.filter((c) => c.opportunityId === myOp.id);

  const statuses = [
    { label: "Em análise", count: myCandidates.filter(c => c.status === "Em análise").length },
    { label: "Aprovados", count: myCandidates.filter(c => c.status === "Aprovado").length },
    { label: "Recusados", count: myCandidates.filter(c => c.status === "Recusado").length },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo da Organização — Passo 2</p>*/}
          <h1 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Painel da Organização
          </h1>
          <p className="text-sm text-gray-400 mt-1">EJ Consulting · Empresa Júnior</p>
        </div>
        <button
          onClick={() => navigate("post-opportunity", { role: "org" })}
          className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Nova oportunidade
        </button>
      </div>

      {/* Active opportunity card */}
      <div className="border border-emerald-100 bg-emerald-50/50 rounded-2xl p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-medium mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Ativa
            </span>
            <h2 className="text-lg font-semibold text-gray-900">{myOp.title}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{myOp.hours} · {myOp.duration} · Prazo: {myOp.deadline}</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {myOp.skills.map(s => (
              <span key={s} className="text-xs bg-white text-gray-600 border border-gray-200 px-2.5 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 text-center">
          {statuses.map((s) => (
            <div key={s.label}>
              <p className="text-xl font-semibold text-gray-900">{s.count}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
          <div>
            <p className="text-xl font-semibold text-gray-900">{myCandidates.length}</p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
        </div>
      </div>

      {/* Candidates table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">
            Candidatos — {myOp.title}
          </h2>
        </div>

        <div className="space-y-3">
          {myCandidates.map((c) => (
            <div
              key={c.id}
              className="border border-gray-100 rounded-2xl p-5 flex items-center gap-4 hover:border-gray-200 transition-all cursor-pointer group"
              onClick={() => navigate("candidate-review", { selectedCandidateId: c.id, selectedOpportunityId: myOp.id, role: "org" })}
            >
              {/* Avatar */}
              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm flex-shrink-0">
                {c.avatar}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{c.name}</p>
                </div>
                <p className="text-xs text-gray-400">{c.area} · {c.university}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.skills.slice(0, 3).map(s => (
                    <span key={s} className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>

              {/* Status + Meta */}
              <div className="text-right flex-shrink-0">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[c.status]}`}>
                  {c.status}
                </span>
                <p className="text-xs text-gray-400 mt-2">Candidatura em {c.appliedAt}</p>
              </div>

              <svg className="text-gray-300 group-hover:text-emerald-400 transition-colors flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
