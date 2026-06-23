import { useEffect, type ComponentType } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { useHashRoute } from './router'

const PAGES: Record<string, ComponentType> = {
  '/': Home,
  '/projects': Projects,
  '/skills': Skills,
  '/contact': Contact,
}

export default function App() {
  const route = useHashRoute()
  const Page = PAGES[route] ?? Home

  // Riporta in cima l'area contenuti a ogni cambio pagina.
  useEffect(() => {
    const main = document.querySelector('.content')
    main?.scrollTo({ top: 0 })
  }, [route])

  return (
    <div className="app">
      <div className="bg-glow" aria-hidden />
      <Sidebar />
      <main className="content">
        <div className="content__inner">
          <Page />
        </div>
        <Footer />
      </main>
    </div>
  )
}
