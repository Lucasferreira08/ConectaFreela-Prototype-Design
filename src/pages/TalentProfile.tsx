import { useState } from "react";
import { Screen } from "../App";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

const allSkills = ["React", "TypeScript", "Node.js", "Python", "SQL", "Figma", "Design Gráfico", "Redação", "Excel", "Power BI", "Vue.js", "Java"];

export default function TalentProfile({ navigate }: Props) {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Reyna Bjorn",
    area: "Engenharia da Computação",
    university: "UNIVASF — 6º semestre",
    bio: "Desenvolvedora front-end apaixonada por interfaces e dados. Busco projetos que combinem tecnologia e impacto social.",
    skills: ["React", "TypeScript", "Node.js"],
    availability: "10h/semana",
    portfolio1: "github.com/Reyna",
    portfolio2: "Reyna.dev",
  });

  const toggleSkill = (s: string) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(s) ? f.skills.filter((x) => x !== s) : [...f.skills, s],
    }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      navigate("browse", { role: "talent" });
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-8">
        {/*<p className="text-xs text-emerald-600 font-medium tracking-wide uppercase mb-2">Fluxo do Talento — Passo 1</p>*/}
        <h1 className="text-3xl font-semibold text-gray-900 mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Crie seu perfil
        </h1>
        <p className="text-sm text-gray-400">Suas informações serão exibidas para organizações ao se candidatar.</p>
      </div>

      <div className="space-y-6">
        {/* Avatar area */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center text-2xl font-semibold text-emerald-700">
            MC
          </div>
          <div>
            <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
              Alterar foto
            </button>
            <p className="text-xs text-gray-400 mt-0.5">PNG ou JPG · máx 2 MB</p>
          </div>
        </div>

        {/* Name + Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Nome completo</label>
            <input
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Área de atuação</label>
            <select
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white"
              value={form.area}
              onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}
            >
              {["Ciência da Computação", "Engenharia de Software", "Design", "Administração", "Marketing", "Dados"].map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>

        {/* University + Availability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Universidade / Semestre</label>
            <input
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
              value={form.university}
              onChange={(e) => setForm((f) => ({ ...f, university: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Disponibilidade semanal</label>
            <select
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all bg-white"
              value={form.availability}
              onChange={(e) => setForm((f) => ({ ...f, availability: e.target.value }))}
            >
              {["Até 5h/semana", "10h/semana", "20h/semana", "Período integral"].map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Mini bio</label>
          <textarea
            className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all resize-none"
            rows={3}
            value={form.bio}
            onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
          />
          <p className="text-xs text-gray-400 mt-1">{form.bio.length}/300 caracteres</p>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">Competências</label>
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

        {/* Portfolio */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Links do portfólio</label>
          <div className="space-y-2">
            <input
              placeholder="github.com/seuusuario"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
              value={form.portfolio1}
              onChange={(e) => setForm((f) => ({ ...f, portfolio1: e.target.value }))}
            />
            <input
              placeholder="seu-portfolio.dev (opcional)"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all"
              value={form.portfolio2}
              onChange={(e) => setForm((f) => ({ ...f, portfolio2: e.target.value }))}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleSave}
            className={`flex-1 py-3.5 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 ${
              saved
                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                : "bg-emerald-600 text-white hover:bg-emerald-700"
            }`}
          >
            {saved ? (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Perfil salvo! Redirecionando...
              </>
            ) : (
              "Salvar perfil e buscar oportunidades"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
