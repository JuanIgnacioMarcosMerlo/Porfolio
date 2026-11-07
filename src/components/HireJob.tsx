import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { IspfSource } from './IspfSource'
import { PanelHeader } from './PanelHeader'

type Status = 'idle' | 'running' | 'ok' | 'abend'

const jcl = [
  " //CONTRATA JOB (RRHH),'TU DECISION',CLASS=A,MSGCLASS=X",
  " //PASO010  EXEC PGM=JUANMM,PARM='ENTREVISTA'",
  ' //SYSOUT   DD SYSOUT=*',
]

const verdicts = [
  'Causa probable: error humano. Quizás el peor de tu carrera.',
  'Mismo dato, mismo ABEND. Los mainframes no se dejan convencer.',
  'Tu persistencia es admirable, pero el dato sigue siendo inválido.',
]

const subject = encodeURIComponent('Vi tu portfolio y no quiero un ABEND')

export function HireJob() {
  const [status, setStatus] = useState<Status>('idle')
  const [attempts, setAttempts] = useState(0)
  const timer = useRef<number>(undefined)
  const panel = useRef<HTMLDivElement>(null)

  // El resultado es más alto que el job: lo traemos a la vista por encima de la barra fija.
  useEffect(() => {
    if (status === 'ok' || status === 'abend') panel.current?.scrollIntoView({ block: 'end' })
  }, [status, attempts])

  function run(result: 'ok' | 'abend') {
    window.clearTimeout(timer.current)
    setStatus('running')
    timer.current = window.setTimeout(() => {
      setStatus(result)
      if (result === 'abend') setAttempts((count) => count + 1)
    }, 800)
  }

  const verdict = verdicts[Math.min(attempts - 1, verdicts.length - 1)]

  return (
    <section id="contratar" className="py-14 sm:py-20">
      <PanelHeader dataset="JUAN.JCL(CONTRATA)" index={5} title="Decisión final" />
      <p className="mb-8 max-w-3xl text-lg leading-relaxed">Este job ya está listo. Solo falta que elijas cómo termina.</p>

      <div ref={panel} key={status === 'abend' ? `abend-${attempts}` : 'job'} className={`border bg-panel ${status === 'abend' ? 'abend-shake border-red' : 'border-line'}`}>
        <div className="border-b border-line">
          <IspfSource dataset="JUAN.JCL(CONTRATA)" lines={jcl} label="Job CONTRATA" />
        </div>

        <div aria-live="polite" className="p-4 sm:p-6">
          {status === 'idle' && (
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => run('ok')} className="cursor-pointer bg-green px-5 py-3 font-semibold text-screen hover:bg-white">
                Contratar a Juan
              </button>
              <button type="button" onClick={() => run('abend')} className="cursor-pointer border border-red px-5 py-3 text-red hover:bg-red hover:text-screen">
                Dejarlo pasar
              </button>
            </div>
          )}

          {status === 'running' && (
            <p className="text-sm text-green">
              IEF403I CONTRATA - STARTED <span aria-hidden className="cursor" />
            </p>
          )}

          {status === 'ok' && (
            <div>
              <pre className="overflow-x-auto text-xs leading-relaxed text-green sm:text-sm">{'IEF403I CONTRATA - STARTED\nIEF404I CONTRATA - ENDED - RC=0000'}</pre>
              <p className="glow mt-5 font-display text-5xl leading-none text-green">Terminó sin errores.</p>
              <p className="mt-3">Excelente decisión. Solo falta el último paso: escribirme.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}?subject=${subject}`} className="bg-green px-5 py-3 font-semibold text-screen hover:bg-white">
                  Enviar email
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="border border-green px-5 py-3 text-green hover:bg-green hover:text-screen">
                  Ir a LinkedIn
                </a>
              </div>
            </div>
          )}

          {status === 'abend' && (
            <div>
              <div className="overflow-x-auto text-xs leading-relaxed whitespace-pre text-white sm:text-sm">
                <p>
                  <span className="text-red">==MSG&gt;</span> IEF403I CONTRATA - STARTED
                </p>
                <p>
                  <span className="text-red">==MSG&gt;</span> IEF450I CONTRATA PASO010 - ABEND=S0C7 U0000 REASON=00000000
                </p>
              </div>
              <p className="glow mt-5 font-display text-5xl leading-none text-red sm:text-6xl">ABEND S0C7</p>
              <p className="mt-3 max-w-2xl leading-relaxed">
                Es el error clásico de COBOL: el programa recibió un dato que no tiene sentido. El dato inválido fue{' '}
                <span className="text-white">«dejar pasar a Juan»</span>.
              </p>
              <p className="mt-2 max-w-2xl leading-relaxed text-yellow">{verdict}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" onClick={() => run('ok')} className="cursor-pointer bg-green px-5 py-3 font-semibold text-screen hover:bg-white">
                  Corregir y contratar
                </button>
                <button type="button" onClick={() => run('abend')} className="cursor-pointer border border-red px-5 py-3 text-red hover:bg-red hover:text-screen">
                  Insistir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {status === 'abend' && <div key={attempts} aria-hidden className="abend-flash pointer-events-none fixed inset-0 z-50 bg-red" />}
    </section>
  )
}
