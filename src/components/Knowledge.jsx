import React from 'react'

const Knowledge = () => {
  return (
    <section className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0">
        <div className="h-full w-full" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18
        }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-2xl md:text-3xl text-slate-100 font-semibold drop-shadow-[0_0_25px_rgba(0,255,255,0.15)]">
          “Digital Skills Are More Powerful Than Degrees — Learn, Create, and Lead.”
        </blockquote>
      </div>
    </section>
  )
}

export default Knowledge
