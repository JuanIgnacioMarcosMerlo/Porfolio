type Props = { dataset: string; index: number; title: string; right?: string }

export function PanelHeader({ dataset, index, title, right }: Props) {
  return (
    <header className="mb-8 sm:mb-10">
      <div className="flex items-center gap-[1ch] text-xs sm:text-sm">
        <span aria-hidden className="text-red">******</span>
        <span className="shrink-0 text-turq">{dataset}</span>
        <span aria-hidden className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-blue">{'*'.repeat(140)}</span>
        <span className="shrink-0 text-dim">{right ?? `PANEL ${index} DE 5`}</span>
      </div>
      <h2 className="glow mt-3 font-display text-5xl leading-none text-turq sm:text-6xl">{title}</h2>
    </header>
  )
}
