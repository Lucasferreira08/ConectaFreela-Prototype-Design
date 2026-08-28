import { Screen } from "../App";
import { applications, statusColors } from "../data/mock";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

export default function MyApplications({ navigate }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo do Talento — Passo 4</p>*/}
        <h1 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Minhas Candidaturas
        </h1>
        <p className="text-sm text-gray-400 mt-1">{applications.length} candidaturas enviadas</p>
      </div>

      {/* Summary pills */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Em análise", count: applications.filter(a => a.status === "Em análise").length, color: "bg-amber-50 border-amber-100 text-amber-700" },
          { label: "Aprovadas", count: applications.filter(a => a.status === "Aprovado").length, color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
          { label: "Recusadas", count: applications.filter(a => a.status === "Recusado").length, color: "bg-red-50 border-red-100 text-red-600" },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl border p-4 text-center ${s.color}`}>
            <p className="text-2xl font-semibold">{s.count}</p>
            <p className="text-xs mt-0.5 opacity-80">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Applications list */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-emerald-600 font-medium mb-1">{app.org}</p>
                <h3 className="text-base font-semibold text-gray-900">{app.opportunityTitle}</h3>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-4 ${statusColors[app.status]}`}>
                {app.status}
              </span>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-xs font-medium text-gray-500 mb-1">Sua mensagem</p>
              <p className="text-sm text-gray-600 leading-relaxed">{app.message}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Candidatura em {app.appliedAt}</span>
              {app.status === "Aprovado" && (
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Aguarde o contato da organização
                </span>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <button onClick={() => navigate("application-status")} className="text-xs font-medium text-emerald-700 hover:text-emerald-800">
                Acompanhar etapa →
              </button>
              {app.status === "Aprovado" && <button onClick={() => navigate("messages")} className="text-xs font-medium text-gray-500 hover:text-gray-800">Abrir conversa →</button>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
        <p className="text-sm text-gray-400">Buscar mais oportunidades?</p>
        <button
          onClick={() => navigate("browse")}
          className="text-sm bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
        >
          Ver oportunidades
        </button>
      </div>
    </div>
  );
}
