import { useState } from "react";
import { Screen, UserRole } from "../App";
import BrandLogo from "../components/BrandLogo";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
  role: UserRole;
}

export default function Onboarding({ navigate, role }: Props) {
  const [step, setStep] = useState(1);
  const currentRole = role ?? "talent";
  const total = 3;
  const finish = () => navigate(currentRole === "org" ? "org-panel" : "browse", { role: currentRole });

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <BrandLogo />
        <div className="mt-14 bg-white rounded-xl border border-gray-100 p-7 sm:p-10">
          <div className="flex items-center justify-between mb-10">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Passo {step} de {total}</span>
            <div className="flex gap-1.5">
              {Array.from({ length: total }, (_, i) => (
                <span key={i} className={`h-1.5 w-10 rounded-full ${i < step ? "bg-emerald-500" : "bg-gray-100"}`} />
              ))}
            </div>
          </div>

          {step === 1 && (
            <>
              <h1 className="text-4xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Vamos personalizar sua experiência.
              </h1>
              <p className="mt-3 text-sm text-gray-500">
                Você está entrando como <strong className="text-gray-700">{currentRole === "org" ? "organização" : "talento"}</strong>. Conte um pouco sobre você.
              </p>
              <div className="mt-8">
                <label htmlFor="onboarding-name" className="block text-xs font-medium text-gray-600 mb-1.5">
                  {currentRole === "org" ? "Nome da organização" : "Seu nome completo"}
                </label>
                <input
                  id="onboarding-name"
                  placeholder={currentRole === "org" ? "Ex: LabTech UFMG" : "Ex: Mariana Costa"}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="onboarding-area" className="block text-xs font-medium text-gray-600 mb-1.5">
                  {currentRole === "org" ? "Área de atuação" : "Área de interesse"}
                </label>
                <input
                  id="onboarding-area"
                  placeholder={currentRole === "org" ? "Ex: Tecnologia, dados ou impacto social" : "Ex: Desenvolvimento, design ou dados"}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-4xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {currentRole === "org" ? "Que tipo de projeto você publica?" : "Quais são suas competências?"}
              </h1>
              <p className="mt-3 text-sm text-gray-500">Escolha ao menos três opções para deixarmos suas conexões mais relevantes.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "Design", "Dados", "Marketing", "Pesquisa", "Impacto social"].map((item, index) => (
                  <button key={item} className={`rounded-full border px-4 py-2 text-sm ${index < 3 ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-gray-200 text-gray-600"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h1 className="text-4xl text-gray-900 mt-6" style={{ fontFamily: "'Instrument Serif', serif" }}>Tudo pronto.</h1>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Seu perfil já pode aparecer nas conexões certas. Acompanhe candidaturas, converse e construa projetos memoráveis.
              </p>
            </>
          )}

          <div className="mt-10 flex justify-between">
            <button onClick={() => (step === 1 ? navigate("landing") : setStep(step - 1))} className="px-5 py-3 text-sm font-medium text-gray-500">
              {step === 1 ? "Sair" : "Voltar"}
            </button>
            <button onClick={() => (step === total ? finish() : setStep(step + 1))} className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700">
              {step === total ? "Explorar a plataforma" : "Continuar"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
