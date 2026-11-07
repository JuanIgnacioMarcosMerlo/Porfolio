import { facts, reasons } from '../data/profile'
import { PanelHeader } from './PanelHeader'

export function Profile() {
  return (
    <section id="perfil" className="py-14 sm:py-20">
      <PanelHeader dataset="JUAN.PERFIL" index={1} title="Quién soy" />
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
          <p>
            Soy Juan. Estoy en el último año de la Tecnicatura Universitaria en Programación y elegí especializarme en mainframe IBM, la
            plataforma donde bancos, aseguradoras y organismos públicos corren sus procesos críticos.
          </p>
          <p>
            Me formé durante unos siete meses en COBOL, practiqué en un mainframe real y hoy busco mi{' '}
            <span className="text-white">primera oportunidad en IT</span> para trabajar en mantenimiento, procesos batch, desarrollo online y
            modernización de sistemas.
          </p>
        </div>
        <dl className="text-sm sm:text-base">
          {facts.map(([label, value]) => (
            <div key={label} className="flex flex-wrap items-baseline gap-x-2 py-1.5">
              <dt className="text-turq">{label}</dt>
              <span aria-hidden className="leader max-sm:hidden" />
              <dd className="text-green max-sm:w-full">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="mt-14 text-sm text-turq">POR QUÉ DEBERÍAS LLAMARME</h3>
      <ol className="mt-2 divide-y divide-line border-y border-line">
        {reasons.map((reason, index) => (
          <li key={reason.title} className="grid gap-1 py-4 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-4">
            <span className="text-yellow">{String(index + 1).padStart(2, '0')}</span>
            <strong className="font-semibold text-white">{reason.title}</strong>
            <span>{reason.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
