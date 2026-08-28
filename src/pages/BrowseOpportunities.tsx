import { useState } from "react";
import { Screen } from "../App";
import { opportunities } from "../data/mock";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

const categories = ["Todos", "Tecnologia", "Design", "Dados", "Marketing"];
const types = ["Todos", "Voluntário", "Remunerado"];

export default function BrowseOpportunities({ navigate }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [type, setType] = useState("Todos");

  const filtered = opportunities.filter((op) => {
    const matchSearch =
      search === "" ||
      op.title.toLowerCase().includes(search.toLowerCase()) ||
      op.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
      op.org.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Todos" || op.category === category;
    const matchType = type === "Todos" || op.type === type;
    return matchSearch && matchCategory && matchType;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo do Talento — Passo 2</p>*/}
        <h1 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Oportunidades
        </h1>
        <p className="text-sm text-gray-400 mt-1">{filtered.length} oportunidades encontradas</p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por título, competência ou organização..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
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
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
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

      {/* Featured banner */}
      {category === "Todos" && type === "Todos" && search === "" && (
        <div className="bg-emerald-600 rounded-2xl p-6 mb-6 text-white flex items-center justify-between">
          <div>
            <p className="text-xs font-medium opacity-70 mb-1 uppercase tracking-wide">Destaque</p>
            <h2 className="text-lg font-semibold mb-0.5">Desenvolvedor Front-end React</h2>
            <p className="text-sm opacity-80">LabTech UFMG · Voluntário · 10h/semana</p>
          </div>
          <button
            onClick={() => navigate("opportunity-detail", { selectedOpportunityId: "op1" })}
            className="bg-white text-emerald-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap"
          >
            Ver vaga
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((op) => (
          <div
            key={op.id}
            onClick={() => navigate("opportunity-detail", { selectedOpportunityId: op.id })}
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-emerald-600 font-medium mb-1">
                  {op.org} · {op.orgType}
                </p>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {op.title}
                </h3>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium border flex-shrink-0 ml-3 ${
                  op.type === "Voluntário"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                    : "bg-blue-50 text-blue-700 border-blue-100"
                }`}
              >
                {op.type}
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{op.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {op.skills.map((s) => (
                <span key={s} className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-2 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <span>{op.duration}</span>
                <span>·</span>
                <span>{op.hours}</span>
              </div>
              <span>{op.applicants} candidatos</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">Nenhuma oportunidade encontrada para os filtros selecionados.</p>
        </div>
      )}
    </div>
  );
}
