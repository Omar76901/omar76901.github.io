import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© 2026 Omar Nespoli</span>
        <a href={profile.github} target="_blank" rel="noopener">
          {profile.githubLabel}
        </a>
      </div>
    </footer>
  )
}
