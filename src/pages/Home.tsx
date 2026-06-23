import { profile } from '../data'

export default function Home() {
  // Testo ripetuto per il banner scorrevole di sfondo.
  const bannerText = `${profile.name.toUpperCase()} // ${profile.role.toUpperCase()} // ${profile.handle} // `

  return (
    <section className="home">
      {/* Banner animato di sfondo */}
      <div className="home__marquee" aria-hidden="true">
        <span>{bannerText.repeat(4)}</span>
        <span>{bannerText.repeat(4)}</span>
      </div>

      <div className="home__grid">
        <div className="home__intro">
          <p className="home__eyebrow">{profile.handle}:~$ whoami</p>
          <h1 className="home__name" data-text={profile.name}>
            {profile.name}
          </h1>
          <h2 className="home__role">{profile.role}</h2>
          <p className="home__tagline">{profile.tagline}</p>
          <div className="home__actions">
            <a href="#/projects" className="btn btn--primary">
              vedi i progetti
            </a>
            <a href="#/contact" className="btn btn--ghost">
              contattami
            </a>
          </div>
        </div>

        {/* Riquadro "terminale" che sfrutta la larghezza a destra */}
        <aside className="terminal" aria-label="about">
          <div className="terminal__bar">
            <span className="terminal__dot" />
            <span className="terminal__dot" />
            <span className="terminal__dot" />
            <span className="terminal__title">about.txt</span>
          </div>
          <div className="terminal__body">
            <p>
              <span className="terminal__prompt">$</span> cat about.txt
            </p>
            <p className="terminal__out">{profile.about}</p>
            <p>
              <span className="terminal__prompt">$</span> whoami
              <span className="terminal__cursor">_</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
