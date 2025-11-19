import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0B0C15]/70 border-b border-cyan-400/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-cyan-400/40 rounded-md" />
              <div className="relative h-9 w-9 grid place-items-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,255,255,0.25)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-sm tracking-widest text-cyan-300/80">AJIRA DIGITAL</div>
              <div className="text-white font-extrabold text-[13px] sm:text-sm drop-shadow-[0_0_12px_rgba(0,255,255,0.25)]">
                GATUNDU SOUTH ICT HUB
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Courses', href: '#courses' },
              { label: 'Tools', href: '#tools' },
              { label: 'About Us', href: '#about' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-200/80 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-cyan-400 to-blue-500 transition-all" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#enroll"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0B0C15] rounded-md bg-cyan-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 animate-pulse opacity-80" />
              <span className="relative">Enroll Now</span>
            </a>
            <button className="md:hidden rounded-md p-2 text-slate-200/80 hover:text-white hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
