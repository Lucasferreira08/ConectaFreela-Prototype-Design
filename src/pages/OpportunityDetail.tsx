import { useState } from "react";
import { Screen } from "../App";
import { opportunities } from "../data/mock";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
  opportunityId: string | null;
}

export default function OpportunityDetail({ navigate, opportunityId }: Props) {
  const op = opportunities.find((o) => o.id === opportunityId) ?? opportunities[0];
  const [applied, setApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleApply = () => {
    if (message.trim().length < 10) return;
    setApplied(true);
    setShowModal(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate("browse")}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Voltar às oportunidades
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo do Talento — Passo 3</p>*/}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm flex-shrink-0">
                {op.org.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm text-emerald-600 font-medium">{op.org} · {op.orgType}</p>
                <h1 className="text-2xl font-semibold text-gray-900 mt-0.5" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {op.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap gap-2">
            <span className={`text-xs px-3 py-1.5 rounded-full font-medium border ${
              op.type === "Voluntário"
                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                : "bg-blue-50 text-blue-700 border-blue-100"
            }`}>
              {op.type}
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full font-medium border bg-gray-50 text-gray-600 border-gray-100">
              {op.category}
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full font-medium border bg-gray-50 text-gray-600 border-gray-100">
              {op.duration}
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full font-medium border bg-gray-50 text-gray-600 border-gray-100">
              {op.hours}
            </span>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Sobre a oportunidade</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{op.description}</p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Competências desejadas</h2>
            <div className="flex flex-wrap gap-2">
              {op.skills.map((s) => (
                <span key={s} className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Apply card */}
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-700">Candidatar-se</p>
              <span className="text-xs text-gray-400">{op.applicants} candidatos</span>
            </div>

            <div className="space-y-3 mb-5 text-xs text-gray-500">
              <div className="flex items-center justify-between">
                <span>Prazo</span>
                <span className="font-medium text-gray-700">{op.deadline}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Carga</span>
                <span className="font-medium text-gray-700">{op.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Duração</span>
                <span className="font-medium text-gray-700">{op.duration}</span>
              </div>
            </div>

            {applied ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
                <svg className="w-6 h-6 text-emerald-600 mx-auto mb-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-medium text-emerald-700">Candidatura enviada!</p>
                <p className="text-xs text-emerald-600 mt-0.5">Acompanhe em "Candidaturas"</p>
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-emerald-600 text-white py-3 rounded-md font-medium text-sm hover:bg-emerald-700 transition-colors"
              >
                Candidatar-se agora
              </button>
            )}

            {applied && (
              <button
                onClick={() => navigate("my-applications")}
                className="w-full mt-2 border border-gray-200 text-gray-600 py-3 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Ver minhas candidaturas
              </button>
            )}
          </div>

          {/* Org info */}
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="text-xs font-medium text-gray-500 mb-3">Sobre a organização</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-xs">
                {op.org.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{op.org}</p>
                <p className="text-xs text-gray-400">{op.orgType}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Escreva sua mensagem
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Apresente-se brevemente e conte por que você é a pessoa certa para esta oportunidade.
            </p>

            <label htmlFor="apply-message" className="block text-xs font-medium text-gray-600 mb-1.5">Sua mensagem</label>
            <textarea
              id="apply-message"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 resize-none transition-all"
              rows={5}
              placeholder="Ex: Tenho 2 anos de experiência em React e já trabalhei com dashboards de dados em projetos acadêmicos. Tenho disponibilidade imediata e muito interesse nessa área..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="text-xs text-gray-400 mt-1 mb-6">{message.length}/500 · mínimo 10 caracteres</p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleApply}
                disabled={message.trim().length < 10}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-md font-medium text-sm hover:bg-emerald-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Enviar candidatura
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
