import { useState } from "react";
import { Screen } from "../App";
import BrandLogo from "../components/BrandLogo";

interface Props { navigate: (screen: Screen, extras?: any) => void; }

export default function Auth({ navigate }: Props) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<"talent" | "org">("talent");
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(mode === "signup" ? "onboarding" : role === "org" ? "org-panel" : "browse", { role });
  };
  return <main className="min-h-screen bg-[#f7faf8] grid lg:grid-cols-2">
    <section className="hidden lg:flex flex-col justify-between p-12 bg-[#0a1a12] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <BrandLogo light />
      <div className="relative max-w-md">
        <p className="text-emerald-300 text-sm font-medium mb-4">Talento encontra impacto</p>
        <h1 className="text-5xl leading-[1.02]" style={{ fontFamily: "'Instrument Serif', serif" }}>Boas conexões começam com uma conversa.</h1>
        <p className="mt-6 text-white/65 leading-relaxed">Encontre projetos que combinam com seu momento e construa experiências que ficam no portfólio.</p>
      </div>
      <p className="relative text-xs text-white/40">ConectaFreela · oportunidades que movimentam ideias</p>
    </section>
    <section className="flex items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-md">
        <button onClick={() => navigate("landing")} className="lg:hidden mb-12"><BrandLogo /></button>
        <p className="text-sm text-emerald-600 font-medium">{mode === "login" ? "Que bom ter você de volta" : "Crie sua conta"}</p>
        <h2 className="text-4xl text-gray-900 mt-2" style={{ fontFamily: "'Instrument Serif', serif" }}>{mode === "login" ? "Entre na sua conta" : "Comece por aqui"}</h2>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {([ ["talent", "Sou talento"], ["org", "Sou organização"] ] as const).map(([value, label]) => <button type="button" key={value} onClick={() => setRole(value)} className={`rounded-xl border p-3 text-sm font-medium transition-colors ${role === value ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>{label}</button>)}
          </div>
          {mode === "signup" && <input required placeholder="Seu nome ou organização" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />}
          <input required type="email" placeholder="E-mail" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
          <input required type="password" placeholder="Senha" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
          <button className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">{mode === "login" ? "Entrar" : "Criar conta"}</button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">{mode === "login" ? "Ainda não tem uma conta?" : "Já faz parte da ConectaFreela?"} <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="font-medium text-emerald-700">{mode === "login" ? "Cadastre-se" : "Entrar"}</button></p>
      </div>
    </section>
  </main>;
}
