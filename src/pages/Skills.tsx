import { skills } from '../data'

export default function Skills() {
  return (
    <section className="page">
      <h1 className="page__title">skills</h1>
      <p className="page__lead"># stack e strumenti con cui lavoro</p>

      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="tag tag--lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
