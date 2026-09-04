import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Wifi, UtensilsCrossed, Users, ShieldCheck, MapPin } from 'lucide-react';
import heroImg from '../assets/hero-hotel.webp';
import swimmingPool from '../assets/swimming-pool.png';
import galleryRestaurant from '../assets/gallery-restaurant.png';
import cendanaBallroom from '../assets/cendana-ballroom.png';

const highlights = [
  {
    icon: Clock,
    title: 'Layanan 24/7',
    desc: 'Resepsionis & room service siap melayani kapan saja.',
  },
  {
    icon: Wifi,
    title: 'WiFi',
    desc: 'Koneksi internet berkecepatan tinggi di seluruh area hotel.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    desc: 'Gallery Restaurant menyajikan menu yang lezat.',
  },
  {
    icon: Users,
    title: 'Meeting Room',
    desc: 'Ruang rapat modern untuk keperluan bisnis Anda.',
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan Terjamin',
    desc: 'Sistem keamanan 24 jam & CCTV di seluruh area.',
  },
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    desc: 'Di pusat Kota Palu, dekat pusat bisnis & perbelanjaan.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tentang" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Tentang Kami
          </span>
          <h2 className="section-title text-gradient">
            <span className="italic">Grand Sya</span>
            {' '}Hotel
          </h2>
          <p className="section-subtitle mt-4">
            Hotel bintang 4 di pusat Kota Palu yang menggabungkan kenyamanan modern
            dengan kehangatan layanan khas Indonesia.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            <div className="space-y-3 md:space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={heroImg}
                  alt="Grand Sya Hotel Exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* <div className="rounded-2xl overflow-hidden aspect-square bg-amber-600 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <p className="text-4xl md:text-5xl font-heading font-bold">1+</p>
                  <p className="text-sm mt-1 text-white/80">Tahun Melayani</p>
                </div> 
              </div> */}
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src={cendanaBallroom}
                  alt="Grand Sya Hotel Exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-3 md:space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src={swimmingPool}
                  alt="Swimming Pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={galleryRestaurant}
                  alt="Gallery Restaurant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-amber-600 mb-4">
              Local Brand with Touches of{' '}
              <span className="italic">Elegance</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Grand Sya Hotel Palu merupakan hotel bintang 4 yang berlokasi strategis
              di Jalan Cik Ditiro No. 11, pusat Kota Palu, Sulawesi Tengah. Dengan
              9 lantai dan lebih dari 100 kamar, kami menyediakan pengalaman menginap
              yang menggabungkan sentuhan elegansi modern dengan kehangatan budaya lokal.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Dilengkapi fasilitas lengkap mulai dari Cendana Ballroom berkapasitas
              1000 orang, Sya Meeting Room di lantai 9 dengan pemandangan kota,
              hingga Swimming Pool kami. Grand Sya Hotel adalah
              pilihan sempurna untuk perjalanan bisnis maupun liburan keluarga di Palu.
            </p>

            {/* Vision */}
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 border border-amber-100">
              <h4 className="font-heading text-lg font-bold text-slate-900 mb-2">Visi Kami</h4>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "Menjadikan Grand Sya Hotel sebagai hotel terbaik pilihan tamu dari berbagai daerah dan
                mancanegara melalui pengalaman menginap yang mengesankan, elegan, dan penuh kehangatan."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group bg-slate-50 hover:bg-amber-50 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-md border border-transparent hover:border-amber-100 cursor-default"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 mb-3">
                  <Icon size={22} />
                </div>
                <h4 className="font-semibold text-sm text-slate-800 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
