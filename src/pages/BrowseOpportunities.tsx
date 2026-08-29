import { useState } from "react"
import { Screen } from "../App"
import { opportunities } from "../data/mock"
import OpportunityCard from "../components/OpportunityCard"

interface Props {
  navigate: (screen: Screen, extras?: any) => void
}

const categories = ["Todos", "Tecnologia", "Design", "Dados", "Marketing"]

const types = ["Todos", "Voluntário", "Remunerado"]

export default function BrowseOpportunities({ navigate }: Props) {
  const [search, setSearch] = useState("")

  const [category, setCategory] = useState("Todos")

  const [type, setType] = useState("Todos")

  const filtered = opportunities.filter((op) => {
    const matchSearch =
      search === "" ||
      op.title.toLowerCase().includes(search.toLowerCase()) ||
      op.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
      op.org.toLowerCase().includes(search.toLowerCase())

    const matchCategory = category === "Todos" || op.category === category

    const matchType = type === "Todos" || op.type === type

    return matchSearch && matchCategory && matchType
  })

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo do Talento — Passo 2</p>*/}
        <h1
          className="text-3xl font-semibold text-gray-900"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Oportunidades
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {filtered.length} oportunidades encontradas
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <label htmlFor="opportunity-search" className="sr-only">
            Buscar oportunidades
          </label>
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="7"
              cy="7"
              r="5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11 11L14 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            id="opportunity-search"
            type="text"
            placeholder="Buscar por título, competência ou organização..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                category === c
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                type === t
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial opportunity board */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((op) => (
          <OpportunityCard
            key={op.id}
            organization={op.org}
            organizationType={op.orgType}
            title={op.title}
            type={op.type}
            modality={op.modality}
            description={op.description}
            skills={op.skills}
            hours={op.hours}
            deadline={op.deadline}
            featured={
              op.id === "op1" &&
              category === "Todos" &&
              type === "Todos" &&
              search === ""
            }
            onOpen={() =>
              navigate("opportunity-detail", { selectedOpportunityId: op.id })
            }
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">
            Nenhuma oportunidade encontrada para os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  )
}
