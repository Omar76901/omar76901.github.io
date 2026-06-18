import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">Ciao, sono</p>
      <h1 className="hero__name">{profile.name}</h1>
      <h2 className="hero__role">{profile.role}</h2>
      <p className="hero__tagline">{profile.tagline}</p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">
          Guarda i progetti
        </a>
        <a href="#contact" className="btn btn--ghost">
          Contattami
        </a>
      </div>
    </section>
  )
}
