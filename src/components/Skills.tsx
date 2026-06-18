import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills &amp; Tech</h2>
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
