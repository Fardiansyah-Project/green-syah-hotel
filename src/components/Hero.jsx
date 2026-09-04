import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg1 from '../assets/hero-hotel.webp';
import heroImg2 from '../assets/lobby.webp'; // Diubah variabelnya agar tidak bentrok
import heroImg3 from '../assets/hero-image-deluxe.webp'

// Daftarkan semua gambar background ke dalam sebuah array
const BACKGROUND_IMAGES = [heroImg1, heroImg2, heroImg3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 untuk kanan, -1 untuk kiri

  // Efek auto-play berganti sendiri setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  // Varian animasi untuk transisi gambar
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={BACKGROUND_IMAGES[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            alt={`Grand Sya Hotel Palu - Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent z-10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/30 to-transparent z-10" />

      {/* Kontrol Navigasi Geser Manual (Kiri & Kanan) */}
      <button 
        onClick={handlePrev}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md border border-white/10 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">Hotel</span>
            <span className="text-white/40">|</span>
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-white/70" />
              <span className="text-white/70 text-sm">Palu, Sulawesi Tengah</span>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-heading text-white/75 mb-8 leading-relaxed font-light"
          >
            Local Brand with Touches of Elegance and Spirit where Heritage meets <span className="text-amber-400 italic">Modern Comfort</span> 
            <br/>Pusat Kota Palu.
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/6285166829267?text=Halo,%20saya%20ingin%20melakukan%20reservasi%20kamar%20di%20Grand%20Sya%20Hotel%20Palu."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-4 !px-8 text-base md:text-lg inline-flex items-center justify-center gap-2"
            >
              Reservasi
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
            </a>
            <a
              href="#kamar"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#kamar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-base md:text-lg inline-flex items-center justify-center gap-2"
            >
              Lihat Kamar
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#tentang"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          {/* <span className="text-xs font-medium tracking-widest uppercase">Jelajahi</span> */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
