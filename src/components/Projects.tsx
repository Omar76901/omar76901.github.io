import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Progetti</h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3 className="card__title">{p.title}</h3>
            <p className="card__desc">{p.description}</p>
            <ul className="card__tags">
              {p.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <div className="card__links">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer">
                  Codice ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
