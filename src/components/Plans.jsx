import React from 'react'
import { Rocket, Zap, ShieldCheck } from 'lucide-react'

const plans = [
  {
    name: 'Beginner Plan',
    price: 'Ksh 1500',
    details: ['Learn Computer Packages'],
    icon: ShieldCheck,
  },
  {
    name: 'Intermediate Plan',
    price: 'Ksh 3000',
    details: ['Adds Graphic Design', 'Digital Marketing'],
    icon: Zap,
  },
  {
    name: 'Advanced Plan',
    price: 'Ksh 5000',
    details: ['Affiliate Marketing', 'Online Business'],
    icon: Rocket,
  },
]

const Plans = () => {
  return (
    <section id="enroll" className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_0%,rgba(0,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Choose Your Learning Path</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map(({ name, price, details, icon: Icon }) => (
            <div key={name} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c1122] to-[#0a0f1c] border border-cyan-400/10 shadow-2xl shadow-black/60">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,255,255,0.15), transparent 40%)'}} />
              <div className="relative p-8">
                <div className="h-12 w-12 grid place-items-center rounded-lg bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{name}</h3>
                <p className="mt-2 text-cyan-300 font-semibold">{price}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-300/80">
                  {details.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="relative inline-flex items-center justify-center w-full rounded-md px-4 py-2 font-semibold text-[#0B0C15] bg-cyan-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 opacity-90" />
                    <span className="relative">Start Learning</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
