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
];

export default function Header({ navigate, role, screen }: HeaderProps) {
  const nav = role === "org" ? orgNav : talentNav;

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate("landing", { role: null })}
          className="group"
        >
          <BrandLogo />
        </button>

        <nav className="flex items-center gap-1">
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

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-semibold">
            {role === "org" ? "EJ" : "MC"}
          </div>
        </div>
      </div>
    </header>
  );
}
