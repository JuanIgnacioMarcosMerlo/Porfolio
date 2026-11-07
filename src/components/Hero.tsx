import { profile } from '../data/profile'
import { IspfSource } from './IspfSource'

const program = [
  ' IDENTIFICATION DIVISION.',
  ' PROGRAM-ID.    JUANMM.',
  ' AUTHOR.        J I MARCOS MERLO.',
  '*---------------------------------------------',
  ' DATA DIVISION.',
  ' WORKING-STORAGE SECTION.',
  ' 01  WS-CANDIDATO.',
  "     05 WS-ROL     PIC X(18) VALUE 'COBOL MAINFRAME JR'.",
  "     05 WS-ZONA    PIC X(09) VALUE 'TEMPERLEY'.",
  "     05 WS-JORNADA PIC X(09) VALUE 'FULL TIME'.",
  "     05 WS-LIBRE   PIC X     VALUE 'S'.",
  '*---------------------------------------------',
  ' PROCEDURE DIVISION.',
  ' 0000-PRINCIPAL.',
  "     IF WS-LIBRE = 'S'",
  '        PERFORM 1000-ENTREVISTAR',
  '     END-IF.',
  '     STOP RUN.',
  ' 1000-ENTREVISTAR.',
  "     DISPLAY 'HABLEMOS.'.",
]

export function Hero() {
  return (
    <section id="top" className="grid min-h-[calc(100svh-6rem)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <div>
        <p className="text-lg font-semibold text-white sm:text-xl">{profile.name}</p>
        <p className="mt-1 text-sm text-turq sm:text-base">{profile.role}</p>
        <h1 className="glow mt-8 font-display text-[3.6rem] leading-[0.92] text-green sm:text-7xl xl:text-[5.5rem]">
          Hay código más viejo que yo moviendo tu plata.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-white sm:text-xl">Yo quiero ser quien lo cuide.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#contratar" className="bg-green px-5 py-3 font-semibold text-screen hover:bg-white">
            Ejecutar CONTRATA
          </a>
          <a href="#proyectos" className="border border-green px-5 py-3 text-green hover:bg-green hover:text-screen">
            Ver proyectos
          </a>
        </div>
      </div>

      <div className="min-w-0 border border-line">
        <IspfSource dataset="JUAN.COBOL(JUANMM)" lines={program} label="Mi perfil escrito como un programa COBOL" animated />
      </div>
    </section>
  )
}
