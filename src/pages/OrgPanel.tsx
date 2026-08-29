import { useState } from "react"
import { Screen } from "../App"
import { opportunities, candidates, statusColors } from "../data/mock"
import OpportunityCard from "../components/OpportunityCard"

interface Props {
  navigate: (screen: Screen, extras?: any) => void
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8 1.5l1.9 4.2 4.6.5-3.4 3.2.9 4.6L8 11.8l-4 2.2.9-4.6-3.4-3.2 4.6-.5L8 1.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function OrgPanel({ navigate }: Props) {
  const myOp = opportunities[0]
  const myCandidates = candidates.filter((c) => c.opportunityId === myOp.id)
  const [showPromotion, setShowPromotion] = useState(false)
  const [promoted, setPromoted] = useState(false)

  const statuses = [
    {
      label: "Em análise",
      count: myCandidates.filter((c) => c.status === "Em análise").length,
    },
    {
      label: "Aprovados",
      count: myCandidates.filter((c) => c.status === "Aprovado").length,
    },
    {
      label: "Recusados",
      count: myCandidates.filter((c) => c.status === "Recusado").length,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1
            className="text-3xl font-semibold text-gray-900"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Painel da Organização
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            EJ Consulting · Empresa Júnior
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("institutional-plan")}
            className="hidden sm:block border border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-md text-sm font-medium hover:bg-emerald-50 transition-colors"
          >
            Plano Institucional
          </button>
          <button
            onClick={() => navigate("post-opportunity", { role: "org" })}
            className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Nova oportunidade
          </button>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-emerald-100 bg-emerald-50/60 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex gap-3 items-start">
          <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-white text-emerald-700 flex items-center justify-center">
            <SparkleIcon />
          </span>
          <div>
            <p className="text-sm font-semibold text-emerald-900">
              Você está no plano Gratuito
            </p>
            <p className="text-xs text-emerald-700 mt-1">
              Amplie o alcance das vagas, tenha métricas e convide sua equipe
              com o Plano Institucional.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("institutional-plan")}
          className="whitespace-nowrap text-sm font-medium text-emerald-700 hover:text-emerald-800"
        >
          Conhecer planos →
        </button>
      </div>

      {/* Active opportunity */}
      <div className="mb-8">
        <OpportunityCard
          organization={myOp.org}
          organizationType={myOp.orgType}
          title={myOp.title}
          type={myOp.type}
          modality={myOp.modality}
          description={myOp.description}
          skills={myOp.skills}
          hours={myOp.hours}
          deadline={myOp.deadline}
          status="Ativa"
          featured={promoted}
          onOpen={() =>
            navigate("opportunity-detail", { selectedOpportunityId: myOp.id })
          }
        >
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex gap-6 text-center">
              {statuses.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-semibold text-gray-900">
                    {s.count}
                  </p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {myCandidates.length}
                </p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
            </div>
            <button
              onClick={(event) => {
                event.stopPropagation()
                setShowPromotion(true)
              }}
              disabled={promoted}
              className="flex items-center gap-1.5 rounded-md border border-emerald-200 bg-white px-4 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50 disabled:cursor-default disabled:border-emerald-100 disabled:text-emerald-600"
            >
              <SparkleIcon /> {promoted ? "Vaga destacada" : "Destacar vaga"}
            </button>
          </div>
        </OpportunityCard>
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
              className="border border-gray-100 rounded-xl p-5 flex items-center gap-4 hover:border-gray-200 transition-all cursor-pointer group"
              onClick={() =>
                navigate("candidate-review", {
                  selectedCandidateId: c.id,
                  selectedOpportunityId: myOp.id,
                  role: "org",
                })
              }
            >
              {/* Avatar */}
              <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm flex-shrink-0">
                {c.avatar}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {c.name}
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  {c.area} · {c.university}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status + Meta */}
              <div className="text-right flex-shrink-0">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[c.status]}`}
                >
                  {c.status}
                </span>
                <p className="text-xs text-gray-400 mt-2">
                  Candidatura em {c.appliedAt}
                </p>
              </div>

              <svg
                className="text-gray-300 group-hover:text-emerald-400 transition-colors flex-shrink-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {showPromotion && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-7 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <SparkleIcon />
                </span>
                <h2
                  className="mt-4 text-2xl text-gray-900"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Destaque esta oportunidade
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Apareça nas posições de maior visibilidade da busca por 7
                  dias.
                </p>
              </div>
              <button
                onClick={() => setShowPromotion(false)}
                aria-label="Fechar"
                className="text-xl text-gray-400 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <div className="mt-6 rounded-xl border-2 border-emerald-500 bg-emerald-50/40 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Destaque por 7 dias
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Selo de destaque, posição privilegiada e mais alcance.
                  </p>
                </div>
                <p className="text-lg font-semibold text-emerald-700">R$ 29</p>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 flex-shrink-0 text-emerald-600"
                >
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Exibição prioritária nas buscas
              </li>
              <li className="flex gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 flex-shrink-0 text-emerald-600"
                >
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Selo visual de oportunidade em destaque
              </li>
              <li className="flex gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 flex-shrink-0 text-emerald-600"
                >
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Resumo de alcance ao final do período
              </li>
            </ul>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setShowPromotion(false)}
                className="flex-1 rounded-md border border-gray-200 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setPromoted(true)
                  setShowPromotion(false)
                }}
                className="flex-1 rounded-md bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Destacar por R$ 29
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Demonstração do protótipo · nenhum pagamento será processado.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
