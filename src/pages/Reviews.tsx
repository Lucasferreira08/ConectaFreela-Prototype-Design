import { useState } from "react";
import { Screen, UserRole } from "../App";

interface Props {
  navigate: (screen: Screen, extras?: any) => void;
  role: UserRole;
}

export default function Reviews({ navigate, role }: Props) {
  const [rating, setRating] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <button onClick={() => navigate(role === "org" ? "org-panel" : "my-applications")} className="text-sm text-gray-400 hover:text-gray-700">← Voltar</button>

      <div className="mt-8 border border-gray-100 rounded-xl p-7 sm:p-10">
        <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Projeto concluído</p>
        <h1 className="text-4xl text-gray-900 mt-2" style={{ fontFamily: "'Instrument Serif', serif" }}>Como foi trabalhar juntos?</h1>
        <p className="mt-3 text-sm text-gray-500">Sua avaliação ajuda a construir uma comunidade mais transparente e confiável.</p>

        {sent ? (
          <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-100 p-6 text-center">
            <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h2 className="mt-3 font-semibold text-emerald-800">Avaliação enviada</h2>
            <p className="text-sm text-emerald-700 mt-1">Obrigado por fortalecer a comunidade ConectaFreela.</p>
            <button onClick={() => navigate("my-applications")} className="mt-5 text-sm font-medium text-emerald-700">Voltar para candidaturas</button>
          </div>
        ) : (
          <>
            <div className="mt-8 rounded-xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-800">EJ Consulting</p>
              <p className="text-xs text-gray-500 mt-1">Analista de Dados · Projeto concluído</p>
            </div>

            <p className="mt-8 text-sm font-medium text-gray-700">Sua nota</p>
            <div className="flex gap-2 mt-3" role="radiogroup" aria-label="Nota de 1 a 5 estrelas">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  role="radio"
                  aria-checked={star === rating}
                  aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                  onClick={() => setRating(star)}
                  className={`text-3xl leading-none transition-transform hover:scale-110 ${star <= rating ? "text-amber-400" : "text-gray-200"}`}
                >
                  ★
                </button>
              ))}
            </div>

            <label htmlFor="review-comment" className="block mt-7 text-xs font-medium text-gray-600 mb-1.5">Comentário (opcional)</label>
            <textarea
              id="review-comment"
              className="w-full rounded-md border border-gray-200 p-4 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              rows={4}
              placeholder="Conte um pouco sobre a experiência"
            />
            <button disabled={!rating} onClick={() => setSent(true)} className="mt-5 w-full rounded-md bg-emerald-600 py-3 text-sm font-medium text-white disabled:opacity-40">
              Enviar avaliação
            </button>
          </>
        )}
      </div>
    </div>
  );
}
