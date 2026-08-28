import { Screen, UserRole } from "../App";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  navigate: (screen: Screen, extras?: any) => void;
  role: UserRole;
  screen: Screen;
}

const talentNav = [
  { label: "Oportunidades", screen: "browse" as Screen },
  { label: "Candidaturas", screen: "my-applications" as Screen },
  { label: "Perfil", screen: "talent-profile" as Screen },
];

const orgNav = [
  { label: "Painel", screen: "org-panel" as Screen },
  { label: "Nova Oportunidade", screen: "post-opportunity" as Screen },
  { label: "Perfil", screen: "org-profile" as Screen },
];

export default function Header({ navigate, role, screen }: HeaderProps) {
  const nav = role === "org" ? orgNav : talentNav;

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => navigate("landing", { role: null })}
          className="group"
        >
          <BrandLogo />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item.screen}
              onClick={() => navigate(item.screen)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                screen === item.screen
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => navigate("messages")} aria-label="Mensagens" className="relative w-9 h-9 rounded-xl text-gray-500 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
            <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 9a5.5 5.5 0 0 1-5.5 5.5H5L2.5 16v-4.2A5.5 5.5 0 1 1 15 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </button>
          <button onClick={() => navigate("notifications")} aria-label="Notificações" className="relative w-9 h-9 rounded-xl text-gray-500 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
            <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 7.5a4 4 0 1 1 8 0c0 4.7 2 5.2 2 5.2H3s2-.5 2-5.2ZM7.2 15h3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </button>
          <button onClick={() => navigate(role === "org" ? "org-profile" : "talent-profile")} aria-label="Abrir perfil" className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-semibold hover:ring-2 hover:ring-emerald-200 transition-shadow">
            {role === "org" ? "EJ" : "MC"}
          </button>
        </div>
      </div>
    </header>
  );
}
