import React from 'react'
import { BadgeCheck, Layers, Palette, Rocket, Globe, Briefcase } from 'lucide-react'

const items = [
  {
    title: 'Computer Packages',
    desc: 'Learn MS Word, Excel, PowerPoint, Access, Publisher',
    icon: Layers,
  },
  {
    title: 'Graphic Design',
    desc: 'Learn Canva, PosterMyWall, Photoshop, Premiere Pro',
    icon: Palette,
  },
  {
    title: 'Digital Marketing',
    desc: 'Build brands and campaigns online',
    icon: Rocket,
  },
  {
    title: 'Affiliate Marketing & Online Business',
    desc: 'Learn how to earn ethically online',
    icon: Globe,
  },
  {
    title: 'Web Design Basics',
    desc: 'Create websites and digital portfolios',
    icon: BadgeCheck,
  },
  {
    title: 'Freelancing Opportunities',
    desc: 'Build a digital career from anywhere',
    icon: Briefcase,
  },
]

const Courses = () => {
  return (
    <section id="courses" className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Master the Language of Digital Technology</h2>
          <p className="mt-3 text-slate-300">Practical, hands-on training to help you succeed in today’s digital economy.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group relative rounded-xl border border-cyan-400/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 overflow-hidden shadow-2xl shadow-black/50">
              <div className="absolute inset-px rounded-[10px] ring-1 ring-white/5" />
              <div className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,255,255,0.15), transparent 60%)'}} />
              <div className="relative flex items-start gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-md bg-gradient-to-br from-cyan-500/20 to-blue-700/10 text-cyan-300 ring-1 ring-cyan-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300/80">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
