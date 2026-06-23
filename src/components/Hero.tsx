import { Fragment } from 'react'
import { profile, marquee } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Marquee animato di sfondo (solo outline) */}
      <div className="hero__marquee" aria-hidden="true">
        <div className="marquee">
          <div className="marquee__track marquee__track--left">
            <span>{marquee.row1}</span>
            <span>{marquee.row1}</span>
          </div>
        </div>
        <div className="marquee">
          <div className="marquee__track marquee__track--right marquee__track--accent">
            <span>{marquee.row2}</span>
            <span>{marquee.row2}</span>
          </div>
        </div>
      </div>

      <div className="container hero__content">
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          {profile.statusLine}
        </p>
        <h1 className="hero__title">{profile.headline}</h1>
        <p className="hero__intro">
          {profile.intro.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < profile.intro.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
        <div className="hero__actions">
          <a className="btn btn--accent" href="#work">
            view projects →
          </a>
          <a className="btn btn--ghost" href="#about">
            about me
          </a>
        </div>
      </div>
    </section>
  )
}
