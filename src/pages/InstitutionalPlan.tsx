import { useState } from "react";
import { Screen } from "../App";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
}

const freeFeatures = [
  "Até 2 oportunidades ativas",
  "Gestão de candidatos e mensagens",
  "Perfil institucional básico",
];

const institutionalFeatures = [
  "Até 10 oportunidades ativas",
  "Destaques mensais para suas vagas",
  "Métricas de visualização e candidaturas",
  "Equipe com permissões de acesso",
  "Selo de organização verificada",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0 text-emerald-600">
      <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InstitutionalPlan({ navigate }: Props) {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [checkout, setCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const price = billing === "annual" ? "79" : "99";

  if (confirmed) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="w-14 h-14 mx-auto rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <p className="mt-6 text-xs font-medium text-emerald-600 uppercase tracking-widest">Solicitação registrada</p>
        <h1 className="mt-2 text-4xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>Plano Institucional solicitado.</h1>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">Este é um protótipo: nenhuma cobrança foi efetuada. Em produção, esta etapa seguirá para a confirmação de pagamento.</p>
        <button onClick={() => navigate("org-panel")} className="mt-8 rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700">Voltar ao painel</button>
      </div>
    );
  }

  if (checkout) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10">
        <button onClick={() => setCheckout(false)} className="text-sm text-gray-400 hover:text-gray-700">← Voltar aos planos</button>
        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-7 sm:p-10">
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Contratar plano</p>
          <h1 className="mt-2 text-3xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>Plano Institucional</h1>

          <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-100 p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-800">Cobrança {billing === "annual" ? "anual" : "mensal"}</p>
              <p className="text-xs text-emerald-700 mt-1">EJ Consulting · até 10 oportunidades ativas</p>
            </div>
            <p className="text-xl font-semibold text-emerald-800">R$ {price}<span className="text-xs font-normal">/mês</span></p>
          </div>

          <form onSubmit={(event) => { event.preventDefault(); setConfirmed(true); }} className="mt-6 space-y-4">
            <div>
              <label htmlFor="billing-name" className="block text-xs font-medium text-gray-600 mb-1.5">Nome do responsável financeiro</label>
              <input id="billing-name" required placeholder="Ex: Ana Paula Ribeiro" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
            </div>
            <div>
              <label htmlFor="billing-email" className="block text-xs font-medium text-gray-600 mb-1.5">E-mail para cobrança</label>
              <input id="billing-email" required type="email" placeholder="financeiro@suaorganizacao.org" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="billing-cnpj" className="block text-xs font-medium text-gray-600 mb-1.5">CNPJ</label>
                <input id="billing-cnpj" required placeholder="00.000.000/0001-00" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div>
                <label htmlFor="billing-cep" className="block text-xs font-medium text-gray-600 mb-1.5">CEP</label>
                <input id="billing-cep" required placeholder="00000-000" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
            </div>
            <button className="w-full rounded-md bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700">Confirmar solicitação</button>
          </form>
          <p className="mt-3 text-center text-xs text-gray-400">Ambiente demonstrativo · nenhum pagamento será processado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs font-medium text-emerald-600 uppercase tracking-widest">Planos para organizações</p>
        <h1 className="mt-2 text-4xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>Mais alcance para os seus projetos.</h1>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">Escolha o plano que acompanha a fase da sua organização. Você pode continuar no plano gratuito ou ganhar mais visibilidade com o Institucional.</p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="rounded-md bg-gray-100 p-1 flex text-sm">
          <button onClick={() => setBilling("monthly")} className={`rounded-md px-4 py-2 font-medium transition-colors ${billing === "monthly" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500"}`}>Mensal</button>
          <button onClick={() => setBilling("annual")} className={`rounded-md px-4 py-2 font-medium transition-colors ${billing === "annual" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500"}`}>Anual <span className="text-emerald-600">-20%</span></button>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <article className="rounded-xl border border-gray-100 p-7">
          <p className="text-sm font-semibold text-gray-800">Gratuito</p>
          <p className="mt-4 text-3xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>R$ 0</p>
          <p className="mt-2 text-sm text-gray-500">Para organizações começarem a criar conexões.</p>
          <ul className="mt-7 space-y-3">
            {freeFeatures.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-gray-600"><CheckIcon />{feature}</li>
            ))}
          </ul>
          <button onClick={() => navigate("org-panel")} className="mt-8 w-full rounded-md border border-gray-200 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">Plano atual</button>
        </article>

        <article className="rounded-xl border-2 border-emerald-500 bg-emerald-50/40 p-7 relative overflow-hidden">
          <span className="absolute top-4 right-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">Mais escolhido</span>
          <p className="text-sm font-semibold text-emerald-800">Institucional</p>
          <p className="mt-4 text-3xl text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>R$ {price}<span className="text-base text-gray-500">/mês</span></p>
          <p className="mt-2 text-sm text-gray-500">Para organizações que querem contratar melhor e crescer com consistência.</p>
          <ul className="mt-7 space-y-3">
            {institutionalFeatures.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-gray-700"><CheckIcon />{feature}</li>
            ))}
          </ul>
          <button onClick={() => setCheckout(true)} className="mt-8 w-full rounded-md bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700">Contratar Plano Institucional</button>
        </article>
      </div>
      <p className="text-center mt-7 text-xs text-gray-400">Precisa de um plano para uma rede de organizações? Fale com a equipe ConectaFreela.</p>
    </div>
  );
}
