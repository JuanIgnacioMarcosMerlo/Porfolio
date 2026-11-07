import { profile } from '../data/profile'

const links = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'CV', href: profile.cv },
]

export function Footer() {
  return (
    <footer className="border-t border-line pb-12 lg:pb-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm sm:px-6">
        <p className="text-dim">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-5">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-green underline hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
