import { useEffect, useState } from 'react'
import { CommandBar, sections } from './components/CommandBar'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HireJob } from './components/HireJob'
import { Path } from './components/Path'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { StatusBar } from './components/StatusBar'

export default function App() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const { id } of sections) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#perfil" className="sr-only focus:not-sr-only focus:fixed focus:top-12 focus:left-4 focus:z-50 focus:bg-yellow focus:px-3 focus:py-2 focus:text-screen">
        Saltar al contenido
      </a>
      <StatusBar />
      <main className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6">
        <Hero />
        <Profile />
        <Projects />
        <Skills />
        <Path />
        <HireJob />
      </main>
      <Footer />
      <CommandBar active={active} />
    </>
  )
}
