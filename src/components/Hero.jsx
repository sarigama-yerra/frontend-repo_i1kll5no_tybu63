import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 isolate bg-[#0B0C15]">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Spline 3D asset */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C15]/40 via-[#0B0C15]/60 to-[#0B0C15] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] grid items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(0,255,255,0.25)]">
              AJIRA DIGITAL GATUNDU SOUTH ICT HUB
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-200/90">
              Empowering the Next Generation of Digital Innovators.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#courses" className="relative inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-[#0B0C15] bg-cyan-300">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 opacity-90" />
                <span className="relative">Start Learning</span>
              </a>
              <a href="#enroll" className="group inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-cyan-300 ring-1 ring-cyan-400/40 hover:ring-cyan-300/70 transition">
                <span className="relative">Join the Hub</span>
                <span className="ml-2 inline-block h-1 w-6 bg-gradient-to-r from-cyan-300 to-blue-500 group-hover:w-8 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
