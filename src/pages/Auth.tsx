import { useState } from "react";
import { AuthMode, Screen, UserRole } from "../App";
import BrandLogo from "../components/BrandLogo";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
  initialRole: UserRole;
  initialMode: AuthMode;
}

export default function Auth({ navigate, initialRole, initialMode }: Props) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [role, setRole] = useState<"talent" | "org">(initialRole ?? "talent");
  const [recoveringPassword, setRecoveringPassword] = useState(false);
  const [recoverySent, setRecoverySent] = useState(false);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(mode === "signup" ? "onboarding" : role === "org" ? "org-panel" : "browse", { role });
  };

  const sendRecovery = (event: React.FormEvent) => {
    event.preventDefault();
    setRecoverySent(true);
  };

  const returnToLogin = () => {
    setRecoveringPassword(false);
    setRecoverySent(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 grid lg:grid-cols-2">
      <section className="hidden lg:flex flex-col justify-between p-12 bg-ink text-white relative overflow-hidden">
        <BrandLogo light />
        <div className="relative max-w-md">
          <p className="text-emerald-300 text-sm font-medium mb-4">Estudantes, laboratórios, ONGs e empresas juniores</p>
          <h1 className="text-5xl leading-[1.02]" style={{ fontFamily: "'Instrument Serif', serif" }}>Um lugar para candidaturas e projetos reais.</h1>
          <p className="mt-6 text-white/65 leading-relaxed">Veja oportunidades ativas, converse com organizações e acompanhe cada candidatura em um só painel.</p>
        </div>
        <p className="relative text-xs text-white/40">ConectaFreela · plataforma de oportunidades acadêmicas e sociais</p>
      </section>

      <section className="relative flex items-center justify-center p-6 sm:p-10">
        <button
          onClick={() => navigate("landing", { role: null, authMode: "login" })}
          className="absolute top-6 right-6 sm:top-10 sm:right-10 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-emerald-700 transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M9.5 2.5 5 7.5l4.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar ao início
        </button>

        <div className="w-full max-w-md">
          <div className="lg:hidden mb-12"><BrandLogo /></div>

          {recoveringPassword ? (
            <>
              <p className="text-sm text-emerald-600 font-medium">Acesso à sua conta</p>
              <h2 className="text-4xl text-gray-900 mt-2" style={{ fontFamily: "'Instrument Serif', serif" }}>Recupere sua senha</h2>

              {recoverySent ? (
                <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-sm font-semibold text-emerald-800">Instruções enviadas</p>
                  <p className="text-sm text-emerald-700 mt-1">Se houver uma conta com este e-mail, você receberá um link para criar uma nova senha.</p>
                </div>
              ) : (
                <form onSubmit={sendRecovery} className="mt-8 space-y-4">
                  <p className="text-sm text-gray-500 leading-relaxed">Informe seu e-mail e enviaremos as instruções para redefinir sua senha.</p>
                  <div>
                    <label htmlFor="recovery-email" className="block text-xs font-medium text-gray-600 mb-1.5">E-mail</label>
                    <input id="recovery-email" required type="email" placeholder="voce@exemplo.com" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
                  </div>
                  <button className="w-full rounded-md bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">Enviar instruções</button>
                </form>
              )}

              <button onClick={returnToLogin} className="mt-6 text-sm font-medium text-emerald-700 hover:text-emerald-800">← Voltar para entrar</button>
            </>
          ) : (
            <>
              <p className="text-sm text-emerald-600 font-medium">{mode === "login" ? "Que bom ter você de volta" : "Crie sua conta"}</p>
              <h2 className="text-4xl text-gray-900 mt-2" style={{ fontFamily: "'Instrument Serif', serif" }}>{mode === "login" ? "Entre na sua conta" : "Comece por aqui"}</h2>

              <form onSubmit={submit} className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {([ ["talent", "Sou talento"], ["org", "Sou organização"] ] as const).map(([value, label]) => (
                    <button type="button" key={value} onClick={() => setRole(value)} className={`rounded-md border p-3 text-sm font-medium transition-colors ${role === value ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>{label}</button>
                  ))}
                </div>

                {mode === "signup" && (
                  <div>
                    <label htmlFor="signup-name" className="block text-xs font-medium text-gray-600 mb-1.5">{role === "org" ? "Nome da organização" : "Nome completo"}</label>
                    <input id="signup-name" required placeholder={role === "org" ? "Ex: LabTech UFMG" : "Ex: Mariana Costa"} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
                  </div>
                )}
                <div>
                  <label htmlFor="auth-email" className="block text-xs font-medium text-gray-600 mb-1.5">E-mail</label>
                  <input id="auth-email" required type="email" placeholder="voce@exemplo.com" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
                </div>
                <div>
                  <label htmlFor="auth-password" className="block text-xs font-medium text-gray-600 mb-1.5">Senha</label>
                  <input id="auth-password" required type="password" placeholder="Mínimo 8 caracteres" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
                  {mode === "login" && <button type="button" onClick={() => setRecoveringPassword(true)} className="mt-2 text-xs font-medium text-emerald-700 hover:text-emerald-800">Esqueci minha senha</button>}
                </div>
                <button className="w-full rounded-md bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">{mode === "login" ? "Entrar" : "Criar conta"}</button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                {mode === "login" ? "Ainda não tem uma conta?" : "Já faz parte da ConectaFreela?"}{" "}
                <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="font-medium text-emerald-700">{mode === "login" ? "Cadastre-se" : "Entrar"}</button>
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
