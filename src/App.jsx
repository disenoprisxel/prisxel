import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import ServiceDisenioWeb from './pages/ServiceDisenioWeb'
import ServiceRenders from './pages/ServiceRenders'
import ServiceRecorridos from './pages/ServiceRecorridos'
import ServiceMotion from './pages/ServiceMotion'
import Cotizar from './pages/Cotizar'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'
import CasoEstudio from './pages/CasoEstudio'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 57 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/quienes-somos" element={<Nosotros />} />
          <Route path="/servicios/diseno-web" element={<ServiceDisenioWeb />} />
          <Route path="/servicios/renders" element={<ServiceRenders />} />
          <Route path="/servicios/recorridos-virtuales" element={<ServiceRecorridos />} />
          <Route path="/servicios/motion-video" element={<ServiceMotion />} />
          <Route path="/cotizar" element={<Cotizar />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio/caso/:id" element={<CasoEstudio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
