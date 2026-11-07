import { timeline } from '../data/profile'
import { PanelHeader } from './PanelHeader'

export function Path() {
  return (
    <section id="bitacora" className="py-14 sm:py-20">
      <PanelHeader dataset="JUAN.SYSLOG" index={4} title="Bitácora" />
      <ol className="divide-y divide-line border-y border-line">
        {timeline.map((entry) => (
          <li key={entry.title} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_6.5rem_1fr] sm:gap-4">
            <span className="text-yellow">{entry.when}</span>
            <span className="text-turq">{entry.tag}</span>
            <div>
              <h3 className="font-semibold text-white">{entry.title}</h3>
              <p className="mt-1 leading-relaxed">{entry.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
