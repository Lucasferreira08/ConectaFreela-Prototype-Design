import { KeyboardEvent, MouseEvent, ReactNode } from "react"

type StatusTone = "green" | "amber" | "red" | "gray"

interface SecondaryAction {
  label: string
  onClick: () => void
}

interface OpportunityCardProps {
  organization: string
  organizationType?: string
  title: string
  type: string
  modality: string
  description: string
  skills: string[]
  hours: string
  deadline: string
  status?: string
  statusTone?: StatusTone
  featured?: boolean
  actionLabel?: string
  note?: string
  noteLabel?: string
  secondaryAction?: SecondaryAction
  onOpen?: () => void
  children?: ReactNode
}

const toneStyles: Record<StatusTone, {
  panel: string
  dot: string
  text: string
}> = {
  green: {
    panel: "border-emerald-200 bg-emerald-50",
    dot: "bg-emerald-500",
    text: "text-emerald-800",
  },
  amber: {
    panel: "border-amber-200 bg-amber-50",
    dot: "bg-amber-500",
    text: "text-amber-800",
  },
  red: {
    panel: "border-red-200 bg-red-50",
    dot: "bg-red-500",
    text: "text-red-700",
  },
  gray: {
    panel: "border-gray-200 bg-gray-50",
    dot: "bg-gray-400",
    text: "text-gray-700",
  },
}

export default function OpportunityCard({
  organization,
  organizationType,
  title,
  type,
  modality,
  description,
  skills,
  hours,
  deadline,
  status = "Aberta",
  statusTone = "green",
  featured = false,
  actionLabel = "Ver oportunidade →",
  note,
  noteLabel = "Mensagem enviada",
  secondaryAction,
  onOpen,
  children,
}: OpportunityCardProps) {
  const tone = toneStyles[statusTone]

  const openFromKeyboard = (event: KeyboardEvent<HTMLElement>) => {
    if (!onOpen || (event.key !== "Enter" && event.key !== " ")) return
    event.preventDefault()
    onOpen()
  }

  const runSecondaryAction = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    secondaryAction?.onClick()
  }

  return (
    <article
      onClick={onOpen}
      onKeyDown={openFromKeyboard}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-md border bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
        onOpen ? "cursor-pointer" : ""
      } ${
        featured
          ? "border-[#065f46]"
          : "border-gray-200 hover:border-emerald-400"
      }`}
    >
      {featured && (
        <div
          className="flex items-center justify-between gap-4 border-b border-emerald-200 bg-emerald-100 px-5 py-2.5"
          style={{ borderTop: "3px solid #065f46" }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#065f46]">
            Seleção da semana
          </p>
          <span
            aria-hidden="true"
            className="cf-display text-2xl leading-none text-[#065f46]"
          >
            01
          </span>
        </div>
      )}

      <header className={`border-b px-5 py-4 ${tone.panel}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#065f46]">
              {organization}
            </p>
            {organizationType && (
              <p className="mt-0.5 text-xs text-gray-500">{organizationType}</p>
            )}
          </div>

          <div className="shrink-0 text-right">
            <div
              className={`flex items-center justify-end gap-2 text-xs font-semibold ${tone.text}`}
            >
              <span className={`h-2 w-2 rounded-full ${tone.dot}`} />
              {status}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col px-5 py-5">
        <div>
          <h3 className="text-xl font-semibold leading-snug text-gray-950 transition-colors group-hover:text-[#065f46]">
            {title}
          </h3>
          <p className="mt-2 text-sm font-medium text-gray-500">
            {type} · {modality}
          </p>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>

        <div className="-mx-5 mt-5 border-y border-gray-200 bg-[#f7f8f4] px-5 py-3">
          <p className="text-xs font-semibold text-gray-400">COMPETÊNCIAS</p>
          <p className="mt-1.5 text-sm font-medium leading-5 text-gray-700">
            {skills.slice(0, 3).join(" · ")}
          </p>
        </div>

        {note && (
          <div className={`-mx-5 mt-0 border-b px-5 py-4 ${tone.panel}`}>
            <p className={`text-xs font-semibold ${tone.text}`}>{noteLabel}</p>
            <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-700">
              {note}
            </p>
          </div>
        )}

        {children && <div className="mt-auto pt-5">{children}</div>}
      </div>

      <footer className="mt-auto grid grid-cols-2 border-t border-gray-200 bg-gray-50">
        <div className="border-r border-gray-200 px-5 py-3.5">
          <p className="text-xs text-gray-400">Carga horária</p>
          <p className="mt-0.5 text-sm font-semibold text-gray-800">{hours}</p>
        </div>
        <div className="px-5 py-3.5 text-right">
          <p className="text-xs text-gray-400">Prazo</p>
          <p className="mt-0.5 text-sm font-semibold text-gray-800">
            {deadline}
          </p>
        </div>

        {(onOpen || secondaryAction) && (
          <div className="col-span-2 flex items-center justify-between gap-4 border-t border-emerald-200 bg-emerald-50 px-5 py-3.5">
            {secondaryAction ? (
              <button
                onClick={runSecondaryAction}
                className="text-xs font-medium text-gray-600 underline decoration-gray-300 underline-offset-4 hover:text-gray-900"
              >
                {secondaryAction.label}
              </button>
            ) : (
              <span />
            )}
            {onOpen && (
              <span className="text-sm font-semibold text-emerald-800">
                {actionLabel}
              </span>
            )}
          </div>
        )}
      </footer>
    </article>
  )
}
