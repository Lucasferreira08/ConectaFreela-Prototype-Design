import { Screen, UserRole } from "../App";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
  role: UserRole;
}

const entries = [
  {
    title: "Você recebeu uma nova mensagem",
    text: "LabTech UFMG quer conversar sobre a oportunidade de Front-end.",
    when: "Há 12 min",
    action: "messages",
    fresh: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M15 9a5.5 5.5 0 0 1-5.5 5.5H5L2.5 16v-4.2A5.5 5.5 0 1 1 15 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: "Sua candidatura avançou",
    text: "A candidatura para Analista de Dados foi aprovada.",
    when: "Ontem",
    action: "application-status",
    fresh: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: "Hora de avaliar a parceria",
    text: "Compartilhe sua experiência no projeto com a EJ Consulting.",
    when: "Há 2 dias",
    action: "reviews",
    fresh: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5l1.9 4.2 4.6.5-3.4 3.2.9 4.6L8 11.8l-4 2.2.9-4.6-3.4-3.2 4.6-.5L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
    ),
  },
];

export default function Notifications({ navigate }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Central de atualizações</p>
          <h1 className="text-3xl text-gray-900 mt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>Notificações</h1>
        </div>
        <button className="text-xs text-emerald-700 font-medium">Marcar todas como lidas</button>
      </div>

      <div className="space-y-3">
        {entries.map((item) => (
          <button
            key={item.title}
            onClick={() => navigate(item.action as Screen)}
            className={`w-full text-left rounded-xl border p-5 flex gap-4 transition-colors hover:border-emerald-200 ${item.fresh ? "bg-emerald-50/40 border-emerald-100" : "bg-white border-gray-100"}`}
          >
            <span className="w-10 h-10 flex-shrink-0 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">{item.icon}</span>
            <span className="flex-1">
              <span className="flex items-center justify-between gap-2">
                <strong className="text-sm text-gray-800">{item.title}</strong>
                {item.fresh && <i className="w-2 h-2 rounded-full bg-emerald-500 not-italic" />}
              </span>
              <span className="block text-sm text-gray-500 mt-1">{item.text}</span>
              <small className="block text-xs text-gray-400 mt-2">{item.when}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
