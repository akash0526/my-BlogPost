import React from 'react';

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-100 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600" 
            alt="Coding Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            AKASH <span className="text-blue-500">ADHIKARI</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
            Full-Stack Developer • IT Specialist • Digital Strategist
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* --- SALES & COMMUNICATION SECTION --- */}
        <section className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 border-l-4 border-blue-600 pl-4">Sales & Client Relations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With a proven track record as a **Sales & Marketing Coordinator**, I bridge the gap between complex technology and business growth. I specialize in:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <strong>Lead Generation:</strong> Engaging potential customers through strategic social channels[cite: 14].
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <strong>Client Persuasion:</strong> Strengthening brand loyalty through high-touch communication[cite: 7, 16].
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <strong>Digital Strategy:</strong> Planning promotional campaigns to boost product visibility[cite: 15].
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" 
              alt="Client Communication" 
            />
          </div>
        </section>

        {/* --- IT & NETWORKING CAROUSEL (Simplified for Code) --- */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-10 text-center">Technical Expertise</h2>
          <div className="flex overflow-x-auto pb-10 hide-scrollbar gap-6 snap-x">
            
            {/* Slide 1: Networking */}
            <div className="min-w-[300px] md:min-w-[400px] snap-center bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400" className="h-40 w-full object-cover rounded-xl mb-6" alt="Networking"/>
              <h3 className="text-2xl font-bold mb-2">Networking</h3>
              <p className="text-sm opacity-80">LAN/Wi-Fi setup, troubleshooting, and infrastructure management[cite: 42].</p>
            </div>

            {/* Slide 2: IT Management */}
            <div className="min-w-[300px] md:min-w-[400px] snap-center bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" className="h-40 w-full object-cover rounded-xl mb-6" alt="IT Management"/>
              <h3 className="text-2xl font-bold mb-2">Systems Admin</h3>
              <p className="text-sm opacity-80">SCCM, Intune, Group Policy, and Active Directory management[cite: 41].</p>
            </div>

            {/* Slide 3: Software Dev */}
            <div className="min-w-[300px] md:min-w-[400px] snap-center bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 hover:bg-blue-600 hover:text-white transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400" className="h-40 w-full object-cover rounded-xl mb-6" alt="Development"/>
              <h3 className="text-2xl font-bold mb-2">Software Development</h3>
              <p className="text-sm opacity-80">Full-stack solutions using React, Node.js, and Odoo ERP[cite: 19, 31].</p>
            </div>

          </div>
        </section>

        {/* --- CONTACT FOOTER --- */}
        <section className="text-center py-20 bg-blue-600 rounded-3xl text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="mb-8 opacity-90">Currently based in Doha, Qatar [cite: 3, 50]</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-xl font-medium">
            <a href="mailto:akashadhikari0526@Gmail.com" className="underline decoration-2 underline-offset-4 hover:text-black transition">akashadhikari0526@Gmail.com [cite: 3]</a>
            <span className="hidden md:block">|</span>
            <span>+974 33779585 [cite: 3]</span>
          </div>
        </section>

      </div>
    </div>
  );
}