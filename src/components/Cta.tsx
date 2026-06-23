import { profile } from '../data'

export default function Cta() {
  return (
    <section className="cta">
      <h2 className="cta__title">{profile.ctaTitle}</h2>
      <p className="cta__sub">{profile.ctaSubtitle}</p>
      <a
        className="btn btn--accent"
        href={profile.github}
        target="_blank"
        rel="noopener"
      >
        github ↗
      </a>
    </section>
  )
}
