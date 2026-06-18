import { socials } from '../data'
import { icons } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <h2 className="section__title">Contatti</h2>
      <p className="contact__lead">
        Hai un progetto in mente o vuoi solo fare due chiacchiere? Scrivimi.
      </p>
      <div className="contact__links">
        {socials.map((s) => {
          const Icon = icons[s.icon]
          return (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              className="contact__link"
            >
              <Icon className="contact__icon" />
              <span>{s.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
