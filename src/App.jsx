import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const vendors = [
    { name: 'Fandango', url: 'https://www.fandango.com/' },
    { name: 'AMC Theatres', url: 'https://www.amctheatres.com/movies' },
    { name: 'Regal', url: 'https://www.regmovies.com/' },
    { name: 'Alamo Drafthouse', url: 'https://drafthouse.com/' },
    { name: 'Atom Tickets', url: 'https://www.atomtickets.com/' },
    { name: 'Cinemark', url: 'https://www.cinemark.com/movies' },
  ]

  const releaseDate = 'December 12, 2025'

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Nav */}
      <header className="w-full sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <div>
              <p className="text-sm uppercase tracking-widest text-white/60">Feature Film</p>
              <h1 className="text-lg font-semibold">The Holographic Ticket</h1>
            </div>
          </div>
          <a
            href="#vendors"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-semibold hover:bg-cyan-300 transition-colors"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Subtle vignette/gradient overlays (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-10 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-24 md:py-28 flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs md:text-sm tracking-wide mb-4">
            New Release
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            A Futuristic, Holographic Journey
          </h2>
          <p className="mt-4 max-w-2xl text-white/80 text-base md:text-lg">
            Step into an immersive world where an "ADMIT ONE" ticket unlocks a digital odyssey. Feel the glow, hear the hum, and get ready for an unforgettable night at the movies.
          </p>

          {/* Release date prominently */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-sm md:text-base">
              Theatrical Release: <span className="font-semibold">{releaseDate}</span>
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#vendors"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-base md:text-lg font-bold shadow-lg shadow-cyan-500/20 hover:bg-cyan-300 transition-colors"
            >
              Book Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base md:text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Vendors / Theaters */}
      <section id="vendors" className="relative z-10 py-16 md:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Get Your Tickets</h3>
            <p className="text-white/70 mt-2">Direct links to trusted vendors and theaters.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {vendors.map((v) => (
              <a
                key={v.name}
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors p-5 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold">{v.name}</p>
                  <p className="text-sm text-white/60">Opens in a new tab</p>
                </div>
                <span className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black group-hover:bg-cyan-300 transition-colors">→</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">
            Availability may vary by region. Check your preferred theater for showtimes.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-14 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold">About the Film</h4>
            <p className="mt-3 text-white/80">
              Designed for the big screen, The Holographic Ticket blends cutting-edge visuals with a pulsing, synth-driven score. Bring your friends and experience the future of cinema together.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-white/80 text-sm">
              <li><span className="text-white">Format:</span> Theatrical Release</li>
              <li><span className="text-white">Rating:</span> PG-13</li>
              <li><span className="text-white">Runtime:</span> 2h 4m</li>
              <li><span className="text-white">Genre:</span> Sci‑Fi, Adventure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="mt-2 text-white/70 text-sm">
              Email: hello@holographicticket.com
            </p>
            <p className="text-white/70 text-sm">Phone: +1 (555) 012-3456</p>
            <p className="text-white/70 text-sm">Address: 123 Neon Ave, Los Angeles, CA</p>
          </div>
          <div>
            <h5 className="font-semibold">Legal</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="text-white/70 hover:text-white" href="#">Terms & Conditions</a></li>
              <li><a className="text-white/70 hover:text-white" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Follow</h5>
            <div className="mt-2 flex items-center gap-3">
              <a className="text-white/70 hover:text-white" href="#" aria-label="Twitter">Twitter</a>
              <span className="text-white/20">•</span>
              <a className="text-white/70 hover:text-white" href="#" aria-label="Instagram">Instagram</a>
              <span className="text-white/20">•</span>
              <a className="text-white/70 hover:text-white" href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-white/50">
            © {new Date().getFullYear()} Holographic Ticket. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
