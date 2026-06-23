import { projects } from '../data'

export default function Projects() {
  return (
    <section className="page">
      <h1 className="page__title">progetti</h1>
      <p className="page__lead"># una selezione di cose che ho costruito</p>

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
                  codice ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
