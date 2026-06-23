import { Fragment } from 'react'
import { profile } from '../data'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        <div className="about__left">
          {profile.showAvatar && (
            <img
              className="about__avatar"
              src={profile.avatar}
              alt="Omar Nespoli"
              width={120}
              height={120}
              loading="lazy"
            />
          )}
          <p className="about__caption">
            {profile.avatarCaption.map((line, i) => (
              <Fragment key={i}>
                {line}
                {i < profile.avatarCaption.length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        </div>

        <div className="about__right">
          <h2 className="about__title">About</h2>
          <p className="about__text">{profile.about}</p>
          <p className="about__label">// stack</p>
          <ul className="about__chips">
            {profile.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
