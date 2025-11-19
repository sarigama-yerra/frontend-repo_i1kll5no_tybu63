import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Plans from './components/Plans'
import Tools from './components/Tools'
import Knowledge from './components/Knowledge'
import News from './components/News'
import Safety from './components/Safety'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0B0C15] text-slate-200">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Plans />
        <Tools />
        <Knowledge />
        <News />
        <Safety />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
