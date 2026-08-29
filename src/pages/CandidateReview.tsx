import { useState } from "react";
import { Screen } from "../App";
import { candidates, statusColors } from "../data/mock";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
  candidateId: string | null;
  opportunityId: string | null;
}

type Status = "Em análise" | "Aprovado" | "Recusado";

export default function CandidateReview({ navigate, candidateId }: Props) {
  const candidate = candidates.find((c) => c.id === candidateId) ?? candidates[0];
  const [status, setStatus] = useState<Status>(candidate.status as Status);
  const [saved, setSaved] = useState(false);
  const [note, setNote] = useState("");

  const handleSave = (newStatus: Status) => {
    setStatus(newStatus);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate("org-panel")}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Voltar ao painel
      </button>

      {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo da Organização — Passo 3</p>*/}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Candidate info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-xl flex-shrink-0">
              {candidate.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {candidate.name}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">{candidate.area} · {candidate.university}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[status]}`}>
                  {status}
                </span>
                <span className="text-xs text-gray-400">Candidatura em {candidate.appliedAt}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Competências</h2>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((s) => (
                <span key={s} className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Mensagem de candidatura</h2>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">{candidate.message}</p>
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Portfólio</h2>
            <div className="space-y-2">
              {candidate.portfolio.map((link) => (
                <div key={link} className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1C3.69 1 1 3.69 1 7s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 7h12M7 1C5.5 2.5 4.5 4.6 4.5 7s1 4.5 2.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Notas internas</h2>
            <textarea
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 resize-none transition-all"
              rows={3}
              placeholder="Adicione observações visíveis apenas para sua equipe..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>

        {/* Action sidebar */}
        <div className="space-y-4">
          <div className="border border-gray-100 rounded-xl p-6 sticky top-20">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Atualizar status</h2>

            <div className="space-y-2 mb-6">
              {(["Em análise", "Aprovado", "Recusado"] as Status[]).map((s) => (
                <button
                  key={s}
                  onClick={() => handleSave(s)}
                  className={`w-full py-3 rounded-md text-sm font-medium border transition-all text-left px-4 flex items-center justify-between ${
                    status === s
                      ? s === "Aprovado"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : s === "Recusado"
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-amber-500 text-white border-amber-500"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {s}
                  {status === s && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {saved && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center text-xs text-emerald-700 font-medium mb-4">
                Status atualizado!
              </div>
            )}

            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500 mb-2">Disponibilidade</p>
              <p className="text-sm font-medium text-gray-900">{candidate.availability}</p>
            </div>
            {status === "Aprovado" && (
              <button onClick={() => navigate("messages")} className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors">
                Iniciar conversa
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
