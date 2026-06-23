const links = [
  { href: '#about', label: 'Chi sono' },
  { href: '#projects', label: 'Progetti' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contatti' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="navbar__brand">
        ~/on<span>_</span>
      </a>
      <nav className="navbar__nav">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
