import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Images } from 'lucide-react';

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
import lobbyArea from '../assets/lobby.webp';
import laungeArea from '../assets/launge.png';
import terraceArea from '../assets/terrace-area.png';
import syaMeetingRoom from '../assets/sya-meeting-room.png'
import merantiMeetingRoom from '../assets/meranti-meeting-room.png'
import gymArea from '../assets/gym-area.webp'

const galleryItems = [
  { src: heroImg, alt: 'Hotel Lobby - Grand Entrance', category: 'Eksterior' },
  // { src: heroImg, alt: 'Hotel Night View', category: 'Eksterior' },
  // { src: heroImg, alt: 'Hotel Exterior - Grand Sya Hotel Palu', category: 'Eksterior' },
  { src: cendanaBallroom, alt: 'Cendana Ballroom - Entrance', category: 'Ballroom' },
  { src: ballRoom, alt: 'Cendana Ballroom', category: 'Ballroom' },
  { src: swimmingPool, alt: 'Swimming Pool', category: 'Eksterior' },
  { src: laungeArea, alt: 'Launge Area', category: 'Eksterior' },
  { src: terraceArea, alt: 'Terrace Area', category: 'Eksterior' },
  { src: syaMeetingRoom, alt: 'SYA Meeting Room', category: 'Meeting' },
  // { src: merantiMeetingRoom, alt: 'Meranti & Palapi Meeting Room', category: 'Meeting' },
  { src: gymArea, alt: 'Gym Area', category: 'Lainnya' },
  { src: roomDeluxe, alt: 'Deluxe Room Interior', category: 'Kamar' },
  { src: galleryRestaurant, alt: 'Gallery Restaurant', category: 'Restaurant' },
  { src: lobbyArea, alt: 'Lobby Area', category: 'Lobby' },
  { src: roomSuite, alt: 'Junior Suite - Ruang Tamu', category: 'Kamar' },
  { src: roomSuperior, alt: 'Superior Twin Room', category: 'Kamar' },
  // { src: roomFamily, alt: 'Family Room - Spacious Living', category: 'Kamar' },
  // { src: galleryRestaurant, alt: 'Dining Experience', category: 'Restaurant' },
  { src: roomDeluxe, alt: 'Room Amenities Detail', category: 'Kamar' },
  { src: roomSuite, alt: 'Suite Bathroom - Modern Design', category: 'Kamar' },
  // { src: roomFamily, alt: 'Family Living Area', category: 'Kamar' },
];

const categories = ['Semua', 'Eksterior', 'Kamar', 'Restaurant', 'Lobby', 'Ballroom', 'Meeting', 'Lainnya'];

// Jumlah slot yang ditampilkan sebelum kartu "Lihat Semua" muncul.
// Slot terakhir dari angka ini dipakai untuk kartu "Lihat Semua" (bukan gambar).
const INITIAL_VISIBLE = 10;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredItems = selectedCategory === 'Semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Reset "lihat semua" setiap kali kategori berganti
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  const hasMore = filteredItems.length > INITIAL_VISIBLE;
  const displayedItems = showAll || !hasMore
    ? filteredItems
    : filteredItems.slice(0, INITIAL_VISIBLE - 1);
  const remainingCount = filteredItems.length - (INITIAL_VISIBLE - 1);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (direction) => {
    setLightboxIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return displayedItems.length - 1;
      if (newIndex >= displayedItems.length) return 0;
      return newIndex;
    });
  };

  const hiddenClick = (idTarget) => {
    const hiddenGallery = document.getElementById(idTarget);
    if (hiddenGallery) {
      hiddenGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <section id="galeri" className="section-padding bg-white" ref={ref}>
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
            <h2 className="section-title text-gradient ">
              {/* Jelajahi {" "} */}
              <span className="italic">Galeri</span>
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
              {displayedItems.map((item, index) => (
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

              {/* Kartu "Lihat Semua" */}
              {hasMore && !showAll && (
                <motion.div
                  key="lihat-semua-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setShowAll(true)}
                  id="show-all-card"
                >
                  <div className="aspect-square" id='hidden_galerry'>
                    <img
                      src={filteredItems[INITIAL_VISIBLE - 1]?.src}
                      alt="Lihat semua foto"
                      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 blur-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-slate-900/65 group-hover:bg-slate-900/75 transition-colors duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="bg-white/15 backdrop-blur-sm p-3 rounded-full">
                      <Images size={22} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg leading-none">+{remainingCount}</span>
                    <span className="text-white/90 text-sm font-medium">Lihat Semua</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Tombol tampilkan lebih sedikit*/}
          {showAll && hasMore && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => {
                  setShowAll(false);
                  hiddenClick('galeri');
                }}
                className="mt-4 px-8 py-2 rounded-full text-sm font-medium bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-700 border border-slate-200 transition-all duration-300"
              >
                Tampilkan Lebih Sedikit
              </button>
            </div>
          )}
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
                src={displayedItems[lightboxIndex]?.src}
                alt={displayedItems[lightboxIndex]?.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white/80 text-center mt-4 text-sm">
                {displayedItems[lightboxIndex]?.alt}
                <span className="text-white/40 ml-2">
                  {lightboxIndex + 1} / {displayedItems.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}