import { profile } from '../data'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          {profile.brand}
        </a>
        <nav className="nav__links">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a
            className="nav__accent"
            href={profile.github}
            target="_blank"
            rel="noopener"
          >
            github ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
