import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import { PanelHeader } from './PanelHeader'

function Detail({ project }: { project: Project }) {
  return (
    <div className="p-4 sm:p-6">
      <p className="text-xs text-turq">
        {project.member} · {project.kind.toUpperCase()}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 text-xs text-turq">EN CRIOLLO</p>
      <p className="mt-1 leading-relaxed">{project.plain}</p>
      <p className="mt-5 text-xs text-turq">QUÉ TRABAJÉ</p>
      <ul className="mt-1 space-y-1">
        {project.tech.map((item) => (
          <li key={item} className="flex gap-2 text-green">
            <span aria-hidden>&gt;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {project.code && (
        <figure className="mt-5">
          <figcaption className="text-xs text-turq">{project.code.label}</figcaption>
          <pre tabIndex={0} className="mt-1 overflow-x-auto border border-line bg-screen p-3 text-xs leading-relaxed text-green">
            {project.code.source}
          </pre>
        </figure>
      )}
      {project.images?.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className="mt-5 w-full border border-line" />
      ))}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
        {project.stack.map((item) => (
          <li key={item} className="border border-line px-2 py-0.5 text-xs text-yellow">
            {item}
          </li>
        ))}
      </ul>
      {(project.repo || project.demo) && (
        <div className="mt-5 flex gap-4 text-sm">
          {project.demo && (
            <a className="text-green underline hover:text-white" href={project.demo} target="_blank" rel="noreferrer">
              Ver demo
            </a>
          )}
          {project.repo && (
            <a className="text-green underline hover:text-white" href={project.repo} target="_blank" rel="noreferrer">
              Ver código
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState(0)
  const row = String(selected + 1).padStart(3, '0')
  const total = String(projects.length).padStart(3, '0')

  return (
    <section id="proyectos" className="py-14 sm:py-20">
      <PanelHeader dataset="JUAN.PROYECTOS" index={2} title="Proyectos" right={`ROW ${row} OF ${total}`} />
      <p className="mb-8 max-w-3xl leading-relaxed">
        Lo que programé durante mi formación y mi práctica en z/OS. No es trabajo para clientes, y por ahora el código no está publicado. Elegí
        uno para ver qué hace.
      </p>

      <div className="grid border border-line bg-panel lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0 lg:border-r lg:border-line">
          <div aria-hidden className="grid grid-cols-[1.5rem_5.5rem_1fr] gap-2 border-b border-line px-3 py-2 text-xs text-turq sm:px-4">
            <span />
            <span>NAME</span>
            <span>DESCRIPCIÓN</span>
          </div>
          <ul>
            {projects.map((project, index) => {
              const isSelected = index === selected
              return (
                <li key={project.member} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isSelected}
                    onClick={() => setSelected(index)}
                    className={`grid w-full cursor-pointer grid-cols-[1.5rem_5.5rem_1fr] gap-2 px-3 py-3 text-left text-sm sm:px-4 ${
                      isSelected ? 'bg-green font-medium text-screen' : 'text-text hover:bg-line/50'
                    }`}
                  >
                    <span aria-hidden>{isSelected ? 'S' : ''}</span>
                    <span className={isSelected ? '' : 'text-green'}>{project.member}</span>
                    <span>{project.title}</span>
                  </button>
                  {isSelected && (
                    <div className="lg:hidden">
                      <Detail project={project} />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="hidden min-w-0 lg:block">
          <Detail project={projects[selected]} />
        </div>
      </div>
    </section>
  )
}
