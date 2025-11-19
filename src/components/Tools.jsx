import React from 'react'
import { Keyboard, Code2, BookOpen, Compass, Award, Briefcase } from 'lucide-react'

const tools = [
  { title: 'Typing Practice Tool', icon: Keyboard },
  { title: 'Online Coding & Testing Sandbox', icon: Code2 },
  { title: 'Resource Library (E-books, Templates, Tutorials)', icon: BookOpen },
  { title: 'Career Guidance Portal', icon: Compass },
  { title: 'Certificate Download Area', icon: Award },
  { title: 'Job Board or Internship Zone', icon: Briefcase },
]

const Tools = () => {
  return (
    <section id="tools" className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(0,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Use Our Digital Learning Tools</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(({ title, icon: Icon }) => (
            <div key={title} className="group relative rounded-xl border border-cyan-400/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 overflow-hidden shadow-2xl shadow-black/50">
              <div className="absolute inset-px rounded-[10px] ring-1 ring-white/5" />
              <div className="relative flex items-start gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-md bg-gradient-to-br from-cyan-500/20 to-blue-700/10 text-cyan-300 ring-1 ring-cyan-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
