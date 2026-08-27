import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import heroImg from '../assets/hero-hotel.webp';
import roomSuperior from '../assets/room-superior.webp';
import roomDeluxe from '../assets/room-deluxe.webp';
import roomDeluxeTwin from '../assets/room-deluxe-twin.webp';
import roomSuite from '../assets/room-junior-suite.webp';
import roomFamily from '../assets/room-family.webp';
import galleryRestaurant from '../assets/gallery-restaurant.png';
import ballRoom from '../assets/ballroom.png';
import cendanaBallroom from '../assets/cendana-ballroom.png';
import swimmingPool from '../assets/swimming-pool.png';
import lobbyArea from '../assets/lobby.png';
import laungeArea from '../assets/launge.png';
import terraceArea from '../assets/terrace-area.png';
import syaMeetingRoom from '../assets/sya-meeting-room.png'
import merantiMeetingRoom from '../assets/meranti-meeting-room.png'

const galleryItems = [
  { src: heroImg, alt: 'Hotel Night View', category: 'Eksterior' },
  // { src: heroImg, alt: 'Hotel Exterior - Grand Sya Hotel Palu', category: 'Eksterior' },
  { src: cendanaBallroom, alt: 'Cendana Ballroom - Entrance', category: 'Ballroom' },
  { src: ballRoom, alt: 'Cendana Ballroom', category: 'Ballroom' },
  { src: swimmingPool, alt: 'Swimming Pool', category: 'Eksterior' },
  { src: laungeArea, alt: 'Launge Area', category: 'Eksterior' },
  { src: terraceArea, alt: 'Terrace Area', category: 'Eksterior' },
  { src: syaMeetingRoom, alt: 'SYA Meeting Room', category: 'Meeting' },
  { src: merantiMeetingRoom, alt: 'Meranti & Palapi Meeting Room', category: 'Meeting' },
  { src: roomDeluxe, alt: 'Deluxe Room Interior', category: 'Kamar' },
  { src: galleryRestaurant, alt: 'Gallery Restaurant', category: 'Restaurant' },
  { src: lobbyArea, alt: 'Lobby Area', category: 'Lobby' },
  { src: heroImg, alt: 'Hotel Lobby - Grand Entrance', category: 'Lobby' },
  { src: roomSuite, alt: 'Junior Suite - Ruang Tamu', category: 'Kamar' },
  { src: roomSuperior, alt: 'Superior Twin Room', category: 'Kamar' },
  // { src: roomFamily, alt: 'Family Room - Spacious Living', category: 'Kamar' },
  // { src: galleryRestaurant, alt: 'Dining Experience', category: 'Restaurant' },
  { src: roomDeluxe, alt: 'Room Amenities Detail', category: 'Kamar' },
  { src: roomSuite, alt: 'Suite Bathroom - Modern Design', category: 'Kamar' },
  { src: roomFamily, alt: 'Family Living Area', category: 'Kamar' },
];

const categories = ['Semua', 'Eksterior', 'Kamar', 'Restaurant', 'Lobby', 'Ballroom', 'Meeting'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredItems = selectedCategory === 'Semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (direction) => {
    setLightboxIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return filteredItems.length - 1;
      if (newIndex >= filteredItems.length) return 0;
      return newIndex;
    });
  };

  return (
    <>
      <section id="galeri" className="section-padding bg-stone-50" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Galeri Foto
            </span>
            <h2 className="section-title">
              Jelajahi <span className="text-gradient italic">Grand Sya</span>
            </h2>
            <p className="section-subtitle mt-4">
              Lihat keindahan interior, fasilitas, dan suasana Grand Sya Hotel Palu
              melalui galeri foto kami.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.alt}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <div className={`${index === 0 || index === 5 ? 'aspect-square' : 'aspect-square'}`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </div>
                    <p className="text-white text-sm font-medium text-center">{item.alt}</p>
                    <span className="text-white/60 text-xs mt-1">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex]?.src}
                alt={filteredItems[lightboxIndex]?.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white/80 text-center mt-4 text-sm">
                {filteredItems[lightboxIndex]?.alt}
                <span className="text-white/40 ml-2">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
