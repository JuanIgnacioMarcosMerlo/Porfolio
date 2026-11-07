import type { ReactNode } from 'react'

type Props = {
  /** Nombre del dataset, como en el encabezado de ISPF. */
  dataset: string
  /** Código desde la columna 7: el primer carácter es el indicador (`*` = comentario). */
  lines: string[]
  label: string
  /** Muestra las líneas de a una, como si la pantalla se estuviera cargando. */
  animated?: boolean
}

const STEP_MS = 55

const tokens =
  /('[^']*')|\b(IDENTIFICATION|DIVISION|PROGRAM-ID|AUTHOR|DATA|WORKING-STORAGE|SECTION|PROCEDURE|PIC|VALUE|IF|END-IF|PERFORM|STOP|RUN|DISPLAY|JOB|EXEC|DD)\b|([.,=()&])/g

// Mismo criterio de colores que el resaltado de ISPF.
function highlight(code: string): ReactNode[] {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of code.matchAll(tokens)) {
    parts.push(code.slice(last, match.index))
    const color = match[1] ? 'text-white' : match[2] ? 'text-red' : 'text-yellow'
    parts.push(
      <span key={match.index} className={color}>
        {match[0]}
      </span>,
    )
    last = match.index + match[0].length
  }
  parts.push(code.slice(last))
  return parts
}

function Marker({ text }: { text: string }) {
  return (
    <span className="flex gap-[1ch] overflow-hidden whitespace-nowrap">
      <span className="text-red max-sm:hidden">******</span>
      <span aria-hidden className="min-w-0 flex-1 overflow-hidden text-blue">{'*'.repeat(80)}</span>
      <span className="text-blue">{text}</span>
      <span aria-hidden className="min-w-0 flex-1 overflow-hidden text-blue">{'*'.repeat(80)}</span>
    </span>
  )
}

export function IspfSource({ dataset, lines, label, animated = false }: Props) {
  const delay = (index: number) => (animated ? { animationDelay: `${index * STEP_MS}ms` } : undefined)
  const reveal = animated ? 'line-in' : ''

  return (
    <figure className="min-w-0">
      <figcaption className="flex flex-wrap justify-between gap-x-4 px-3 pt-3 text-xs text-turq sm:px-4 sm:text-[13px]">
        <span>VIEW&nbsp;&nbsp;{dataset} - 01.02</span>
        <span className="max-sm:hidden">
          <span className="text-green">COLUMNS</span> 00001 00072
        </span>
      </figcaption>
      <pre tabIndex={0} aria-label={label} className="overflow-x-auto px-3 pt-1 pb-3 text-[11px] leading-[1.7] text-green sm:px-4 sm:pb-4 sm:text-[13px]">
        <Marker text="TOP OF DATA" />
        {lines.map((line, index) => (
          <span key={index} className={`${reveal} block`} style={delay(index + 1)}>
            <span className="text-blue max-sm:hidden">{String(index + 1).padStart(6, '0')}</span>
            {line[0] === '*' ? <span className="text-turq">{line}</span> : highlight(line)}
          </span>
        ))}
        <span className={`${reveal} block`} style={delay(lines.length + 1)}>
          <Marker text="BOTTOM OF DATA" />
        </span>
      </pre>
    </figure>
  )
}
