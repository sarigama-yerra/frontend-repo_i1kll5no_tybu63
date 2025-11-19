import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#0B0C15] border-t border-cyan-400/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="text-cyan-300 font-extrabold tracking-widest">AJIRA DIGITAL</div>
            <div className="text-white font-extrabold text-lg">GATUNDU SOUTH ICT HUB</div>
            <p className="mt-3 text-slate-300/80 max-w-md">Powered by AJIRA DIGITAL GATUNDU SOUTH – Building the Digital Generation.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-slate-300/80">
              <li><a href="#home" className="hover:text-cyan-300">Home</a></li>
              <li><a href="#courses" className="hover:text-cyan-300">Courses</a></li>
              <li><a href="#enroll" className="hover:text-cyan-300">Enroll</a></li>
              <li><a href="#about" className="hover:text-cyan-300">About</a></li>
              <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-slate-300/80">
              <li>Email: info@ajiragatundusouth.ke</li>
              <li>Phone: +254 700 000 000</li>
              <li>Location: Gatundu South</li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-slate-300/80">
              <a href="#" aria-label="Facebook" className="hover:text-cyan-300"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-cyan-300"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-cyan-300"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-cyan-300"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} AJIRA DIGITAL GATUNDU SOUTH</div>
      </div>
    </footer>
  )
}

export default Footer
