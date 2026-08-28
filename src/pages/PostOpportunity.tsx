import { useState } from "react";
import { Screen } from "../App";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

const allSkills = ["React", "TypeScript", "Node.js", "Python", "SQL", "Figma", "Design Gráfico", "Redação", "Excel", "Power BI", "Java", "Marketing Digital"];

export default function PostOpportunity({ navigate }: Props) {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Tecnologia",
    type: "Voluntário",
    duration: "3 meses",
    hours: "10h/semana",
    deadline: "",
    description: "",
    skills: [] as string[],
  });

  const toggleSkill = (s: string) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(s) ? f.skills.filter((x) => x !== s) : [...f.skills, s],
    }));
  };

  const isValid = form.title.length > 3 && form.description.length > 20 && form.skills.length > 0;

  const handlePost = () => {
    if (!isValid) return;
    setSaved(true);
    setTimeout(() => navigate("org-panel", { role: "org" }), 1300);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-8">
        {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo da Organização — Passo 1</p>*/}
        <h1 className="text-3xl font-semibold text-gray-900 mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Publicar oportunidade
        </h1>
        <p className="text-sm text-gray-400">Descreva bem sua vaga para atrair os melhores talentos.</p>
      </div>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Título da oportunidade *</label>
          <input
            placeholder="Ex: Desenvolvedor React para plataforma educacional"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />
        </div>

        {/* Category + Type */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Categoria *</label>
            <select
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white"
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            >
              {["Tecnologia", "Design", "Dados", "Marketing", "Gestão", "Comunicação"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Tipo *</label>
            <div className="flex gap-2">
              {["Voluntário", "Remunerado"].map((t) => (
                <button
                  key={t}
                  onClick={() => setForm((f) => ({ ...f, type: t }))}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                    form.type === t
                      ? t === "Voluntário"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Duration + Hours + Deadline */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Duração</label>
            <select
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white"
              value={form.duration}
              onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
            >
              {["1 mês", "2 meses", "3 meses", "6 meses", "Contínuo"].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Carga semanal</label>
            <select
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white"
              value={form.hours}
              onChange={(e) => setForm((f) => ({ ...f, hours: e.target.value }))}
            >
              {["5h/semana", "10h/semana", "20h/semana", "40h/semana"].map((h) => (
                <option key={h}>{h}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Prazo de inscrição</label>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
              value={form.deadline}
              onChange={(e) => setForm((f) => ({ ...f, deadline: e.target.value }))}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Descrição *</label>
          <textarea
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 resize-none transition-all"
            rows={4}
            placeholder="Descreva o projeto, o que o talento vai fazer, o impacto esperado e os benefícios da participação..."
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          />
          <p className="text-xs text-gray-400 mt-1">{form.description.length}/1000</p>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Competências desejadas * <span className="text-gray-400">({form.skills.length} selecionadas)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((s) => (
              <button
                key={s}
                onClick={() => toggleSkill(s)}
                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${
                  form.skills.includes(s)
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Plan note */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <svg className="text-amber-500 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L1.5 14h13L8 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M8 6v4M8 12v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <div>
            <p className="text-xs font-medium text-amber-700">Plano Institucional</p>
            <p className="text-xs text-amber-600 mt-0.5">
              Com o plano institucional sua oportunidade aparece em destaque para mais talentos.{" "}
              <span className="underline cursor-pointer">Saiba mais</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handlePost}
          disabled={!isValid || saved}
          className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${
            saved
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : isValid
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          {saved ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Oportunidade publicada! Redirecionando...
            </>
          ) : (
            "Publicar oportunidade"
          )}
        </button>
      </div>
    </div>
  );
}
