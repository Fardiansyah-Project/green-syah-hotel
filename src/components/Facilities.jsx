import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UtensilsCrossed, Waves, Dumbbell, Mic2, Building2,
  Wine, Car, Wifi, BellRing, Sparkles, ShieldCheck, Baby
} from 'lucide-react';

const facilities = [
  {
    icon: UtensilsCrossed,
    name: 'Gallery Restaurant',
    desc: 'Restoran hotel menyajikan menu Indonesia, Asia, dan Western dengan sertifikasi halal.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Waves,
    name: 'Swimming Pool',
    desc: 'Kolam renang outdoor dengan suasana tropis yang menyegarkan untuk relaksasi.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Dumbbell,
    name: 'Fitness Center',
    desc: 'Pusat kebugaran dengan peralatan modern untuk menjaga rutinitas olahraga Anda.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Mic2,
    name: 'Cendana Ballroom',
    desc: 'Ballroom megah seluas 2.000 m² dengan kapasitas hingga 1.000 tamu undangan.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Building2,
    name: 'SYA Meeting Room',
    desc: 'Ruang rapat di lantai 9 dengan pemandangan kota Palu, ideal untuk MICE.',
    color: 'from-slate-500 to-slate-700',
  },
  {
    icon: Wine,
    name: 'Nava Lounge',
    desc: 'Rooftop bar & lounge di lantai 9 — tempat sempurna menikmati sunset Palu.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Car,
    name: 'Parking Area',
    desc: 'Area parkir luas dan aman untuk kendaraan tamu hotel.',
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: Wifi,
    name: 'High-Speed WiFi',
    desc: 'Koneksi internet kecepatan tinggi tersedia gratis di seluruh area hotel.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: BellRing,
    name: '24-Hour Service',
    desc: 'Layanan kamar dan resepsionis tersedia sepanjang waktu untuk kenyamanan Anda.',
    color: 'from-amber-600 to-yellow-600',
  },
  {
    icon: Sparkles,
    name: 'Laundry Service',
    desc: 'Layanan laundry dan dry cleaning profesional untuk kemudahan tamu.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: ShieldCheck,
    name: 'Keamanan 24 Jam',
    desc: 'Sistem keamanan terpadu dengan CCTV dan petugas keamanan profesional.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Baby,
    name: 'Family Friendly',
    desc: 'Fasilitas ramah keluarga termasuk tempat tidur bayi dan area bermain anak.',
    color: 'from-pink-400 to-rose-500',
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="fasilitas" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Fasilitas Hotel
          </span>
          <h2 className="section-title">
            Fasilitas & <span className="text-gradient italic">Layanan</span>
          </h2>
          <p className="section-subtitle mt-4">
            Lengkapi pengalaman menginap Anda dengan berbagai fasilitas premium
            yang kami sediakan di Grand Sya Hotel Palu.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 transition-all duration-400 hover:shadow-lg border border-transparent hover:border-slate-200 cursor-default overflow-hidden"
              >
                {/* Gradient decoration on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${facility.color} text-white shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Butuh Ruang untuk Event Anda?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
              Cendana Ballroom kami siap menampung hingga 1.000 tamu undangan.
              Sempurna untuk pernikahan, seminar, dan acara korporat di Palu.
            </p>
            <a
              href="https://wa.me/6285166829267?text=Halo,%20saya%20ingin%20menanyakan%20informasi%20Cendana%20Ballroom%20untuk%20acara%20di%20Grand%20Sya%20Hotel%20Palu."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Hubungi Kami untuk MICE
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
