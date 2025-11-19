import React, { useState } from 'react'

const faqs = [
  { q: 'What are the enrollment requirements?', a: 'Basic computer literacy is helpful but not required. Bring a valid ID and commitment to learn.' },
  { q: 'Are the lessons physical or online?', a: 'We provide blended learning — physical sessions at our hub and online modules.' },
  { q: 'Do I receive a certificate after completion?', a: 'Yes, a certificate is awarded upon successful completion of your program.' },
  { q: 'Are the courses beginner-friendly?', a: 'Absolutely. Our curriculum is designed to guide absolute beginners to confident users.' },
  { q: 'How long does each program last?', a: 'Programs range from 2 to 8 weeks depending on the path you choose.' },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">FAQ</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-cyan-400/10 bg-white/[0.02]">
              <button
                className="w-full text-left p-5 flex items-center justify-between"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-white font-semibold">{item.q}</span>
                <span className="text-cyan-300">{open === idx ? '-' : '+'}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-slate-300/90">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
