import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Heart, PartyPopper, ArrowRight } from "lucide-react";

import syaMeetingRoom from "../assets/sya-meeting-room.webp";
import ballRoom from "../assets/ballroom.png";
import terraceArea from "../assets/launge.png";

const eventPackages = [
  {
    icon: Users,
    image: syaMeetingRoom,
    title: "Meeting & Corporate",
    description:
      "Ruang meeting representatif dengan fasilitas lengkap, cocok untuk rapat, seminar, hingga pelatihan perusahaan Anda.",
  },
  {
    icon: Heart,
    image: ballRoom,
    title: "Wedding & Pernikahan",
    description:
      "Cendana Ballroom yang elegan siap menjadi saksi hari bahagia Anda, lengkap dengan dekorasi dan pelayanan penuh perhatian.",
  },
  {
    icon: PartyPopper,
    image: terraceArea,
    title: "Gathering & Family Event",
    description:
      "Suasana hangat di Terrace Area, ideal untuk family gathering, ulang tahun, hingga acara komunitas.",
  },
];

export default function MeetingEvent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="acara" className="section-padding bg-stone-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Event Hotel
          </span>
          {/* <h2 className="section-title">
            Ruang Sempurna untuk{" "}
            <span className="text-gradient italic">Setiap Momen</span>
          </h2> */}
          {/* <h2 className="section-title text-gradient">
            Meeting <span className="italic"> & Event</span>
          </h2> */}
          <p className="section-subtitle mt-4">
            Dari rapat korporat hingga hari pernikahan, Grand Sya Hotel Palu
            menghadirkan ruang dan layanan yang disesuaikan untuk membuat acara
            Anda berkesan.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {eventPackages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full">
                    <Icon size={20} className="text-amber-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {pkg.description}
                  </p>
                  <a
                    href={`https://wa.me/6285166829267?text=${encodeURIComponent(`Halo, saya ingin memesan paket ${pkg.title} di Grand Sya Hotel Palu.`)}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors"
                  >
                    Hubungi Kami
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
