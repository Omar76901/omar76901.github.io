import { ROUTES, useHashRoute } from '../router'
import { profile, socials } from '../data'
import { icons } from './icons'

export default function Sidebar() {
  const route = useHashRoute()

  return (
    <aside className="sidebar">
      <a href="#/" className="sidebar__brand">
        ~/{profile.handle}<span>_</span>
      </a>

      <nav className="sidebar__nav">
        {ROUTES.map((r) => {
          const active = route === r.path
          return (
            <a
              key={r.path}
              href={`#${r.path}`}
              className={active ? 'sidebar__link is-active' : 'sidebar__link'}
              aria-current={active ? 'page' : undefined}
            >
              <span className="sidebar__prompt">{active ? '>' : '#'}</span>
              {r.label}
            </a>
          )
        })}
      </nav>

      <div className="sidebar__socials">
        {socials.map((s) => {
          const Icon = icons[s.icon]
          return (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={s.label}
              className="sidebar__social"
            >
              <Icon className="sidebar__social-icon" />
            </a>
          )
        })}
      </div>
    </aside>
  )
}
