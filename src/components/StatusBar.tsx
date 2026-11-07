import { profile } from '../data/profile'

export function StatusBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-line bg-screen">
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between gap-4 px-4 text-xs sm:px-6 sm:text-sm">
        <a href="#top" className="truncate text-turq hover:text-white">JUAN.MM.PORTFOLIO</a>
        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden text-green sm:inline">ESTADO: DISPONIBLE</span>
          <a href={profile.cv} download className="bg-green px-2 py-0.5 font-semibold text-screen hover:bg-white">
            DESCARGAR CV
          </a>
        </div>
      </div>
    </div>
  )
}
