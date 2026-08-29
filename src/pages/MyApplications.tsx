import { Screen } from "../App"
import { applications, opportunities } from "../data/mock"
import OpportunityCard from "../components/OpportunityCard"

interface Props {
  navigate: (screen: Screen, extras?: any) => void
}

export default function MyApplications({ navigate }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo do Talento — Passo 4</p>*/}
        <h1
          className="text-3xl font-semibold text-gray-900"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Minhas Candidaturas
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {applications.length} candidaturas enviadas
        </p>
      </div>

      {/* Summary pills */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          {
            label: "Em análise",
            count: applications.filter((a) => a.status === "Em análise").length,
            color: "bg-amber-50 border-amber-100 text-amber-700",
          },

          {
            label: "Aprovadas",
            count: applications.filter((a) => a.status === "Aprovado").length,
            color: "bg-emerald-50 border-emerald-100 text-emerald-700",
          },

          {
            label: "Recusadas",
            count: applications.filter((a) => a.status === "Recusado").length,
            color: "bg-red-50 border-red-100 text-red-600",
          },
        ].map((s) => (
          <div
            key={s.label}
            className={`rounded-xl border p-4 text-center ${s.color}`}
          >
            <p className="text-2xl font-semibold">{s.count}</p>
            <p className="text-xs mt-0.5 opacity-80">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Applications list */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {applications.map((app) => {
          const opportunity = opportunities.find(
            (op) => op.id === app.opportunityId,
          )
          if (!opportunity) return null

          const statusTone =
            app.status === "Aprovado"
              ? "green"
              : app.status === "Recusado"
                ? "red"
                : "amber"

          return (
            <OpportunityCard
              key={app.id}
              organization={app.org}
              organizationType={opportunity.orgType}
              title={app.opportunityTitle}
              type={opportunity.type}
              modality={opportunity.modality}
              description={opportunity.description}
              skills={opportunity.skills}
              hours={opportunity.hours}
              deadline={opportunity.deadline}
              status={app.status}
              statusTone={statusTone}
              actionLabel="Acompanhar etapa →"
              note={app.message}
              noteLabel={`Candidatura enviada em ${app.appliedAt}`}
              secondaryAction={
                app.status === "Aprovado"
                  ? {
                      label: "Abrir conversa →",
                      onClick: () => navigate("messages"),
                    }
                  : undefined
              }
              onOpen={() => navigate("application-status")}
            />
          )
        })}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
        <p className="text-sm text-gray-400">Buscar mais oportunidades?</p>
        <button
          onClick={() => navigate("browse")}
          className="text-sm bg-emerald-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-emerald-700 transition-colors"
        >
          Ver oportunidades
        </button>
      </div>
    </div>
  )
}
