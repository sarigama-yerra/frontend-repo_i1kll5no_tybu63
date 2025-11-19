import React from 'react'

const posts = [
  {
    title: 'Students mastering Canva design in one week',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Top freelancing platforms for Kenyan youth',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'How ICT skills open doors to online income',
    img: 'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop',
  },
]

const News = () => {
  return (
    <section className="relative py-24 bg-[#0B0C15]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Read and Grow with the Community</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-cyan-400/10 bg-white/[0.02] shadow-2xl shadow-black/60">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300/80">Brief insights and tips from our mentors and students.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
