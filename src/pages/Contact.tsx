import { socials } from '../data'
import { icons } from '../components/icons'

export default function Contact() {
  return (
    <section className="page">
      <h1 className="page__title">contatti</h1>
      <p className="page__lead">
        # niente email, niente social. Il codice parla da solo.
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
