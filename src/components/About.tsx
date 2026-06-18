import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">Chi sono</h2>
      <p className="about__text">{profile.about}</p>
    </section>
  )
}
