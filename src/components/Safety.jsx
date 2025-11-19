import React from 'react'

const Safety = () => {
  return (
    <section className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0">
        <div className="h-full w-full" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12
        }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Stay Safe in the Digital World</h2>
          <p className="mt-3 text-slate-300">Learn to identify and avoid online scams, fake jobs, and unsafe links.</p>
        </div>
      </div>
    </section>
  )
}

export default Safety
