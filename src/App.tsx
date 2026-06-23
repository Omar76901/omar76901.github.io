import type { CSSProperties } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Cta from './components/Cta'
import Footer from './components/Footer'
import { ACCENT } from './data'

// Un solo valore tematizza tutto (dot, link, bottoni, anni): --accent.
const themeStyle = { '--accent': ACCENT } as unknown as CSSProperties

export default function App() {
  return (
    <div className="site" style={themeStyle}>
      <Nav />
      <Hero />
      <main className="container">
        <Work />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
