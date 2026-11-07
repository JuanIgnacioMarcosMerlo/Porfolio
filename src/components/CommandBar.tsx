import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'

export const sections = [
  { key: '1', id: 'perfil', label: 'Perfil' },
  { key: '2', id: 'proyectos', label: 'Proyectos' },
  { key: '3', id: 'stack', label: 'Stack' },
  { key: '4', id: 'bitacora', label: 'Bitácora' },
  { key: '5', id: 'contratar', label: 'Contratar' },
]

const normalize = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export function CommandBar({ active }: { active: string }) {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  function submit(event: FormEvent) {
    event.preventDefault()
    const command = normalize(value)
    setValue('')
    if (!command) return

    const section = sections.find((item) => item.key === command || normalize(item.label) === command)
    if (section) {
      document.getElementById(section.id)?.scrollIntoView()
      setMessage('')
    } else if (command === 'cv') {
      window.open(profile.cv, '_blank')
      setMessage('')
    } else if (command === 'ayuda' || command === 'help') {
      setMessage('Probá con 1 a 5, CV o CONTRATAR')
    } else {
      setMessage('COMANDO NO VÁLIDO. Escribí AYUDA')
    }
  }

  return (
    <nav aria-label="Secciones" className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-screen">
      <form onSubmit={submit} className="mx-auto hidden h-9 max-w-6xl items-center gap-2 px-6 text-sm lg:flex">
        <label htmlFor="command" className="text-turq">
          OPCIÓN ===&gt;
        </label>
        <input
          id="command"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          placeholder="escribí un número y Enter"
          className="min-w-0 flex-1 bg-transparent text-white uppercase outline-none placeholder:text-dim placeholder:normal-case"
        />
        <span aria-live="polite" className="text-yellow">
          {message}
        </span>
      </form>
      <ul className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-1 px-2 text-[11px] sm:px-5 sm:text-sm lg:justify-start lg:gap-6">
        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`block px-1 py-2 lg:py-1 ${isActive ? 'bg-turq text-screen' : 'text-turq hover:text-white'}`}
              >
                <span className="max-sm:hidden">{section.key}=</span>
                {section.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
