import { projects } from '../data'

export default function Work() {
  const count = String(projects.length).padStart(2, '0')

  return (
    <section className="section" id="work">
      <div className="section__head">
        <h2 className="section__title">Selected work</h2>
        <span className="section__meta">{count} — projects</span>
      </div>

      <div className="work__grid">
        {projects.map((p) => (
          <a
            key={p.title}
            className="card"
            href={p.href}
            target="_blank"
            rel="noopener"
          >
            <div className="card__thumb">
              {p.thumb && (
                <img
                  className="card__thumb-img"
                  src={p.thumb}
                  alt={p.title}
                  loading="lazy"
                />
              )}
              <span className="card__thumb-cap">{p.thumbCaption}</span>
            </div>
            <div className="card__titlerow">
              <span className="card__title">{p.title}</span>
              <span className="card__year">{p.year}</span>
            </div>
            <p className="card__desc">{p.description}</p>
            <ul className="card__tags">
              {p.tags.map((t) => (
                <li key={t} className="chip chip--pill">
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}
