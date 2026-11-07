import { skills } from '../data/profile'
import { PanelHeader } from './PanelHeader'

export function Skills() {
  return (
    <section id="stack" className="py-14 sm:py-20">
      <PanelHeader dataset="JUAN.STACK" index={3} title="Stack, en criollo" />
      <p className="mb-8 max-w-3xl leading-relaxed">Si nunca escuchaste estas siglas, esta tabla es para vos.</p>
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((skill) => (
          <div key={skill.name} className="grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-6">
            <dt className={skill.group === 'Mainframe' ? 'font-semibold text-green' : 'text-dim'}>{skill.name}</dt>
            <dd>{skill.plain}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
