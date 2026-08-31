import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Wind,
  Tv,
  Coffee,
  Droplets,
  Users,
  Maximize2,
  BedDouble,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import roomSuperior from "../assets/room-superior.webp";
import roomDeluxe from "../assets/room-deluxe.webp";
import roomDeluxeTwin from "../assets/room-deluxe-twin.webp";
import roomSuite from "../assets/room-junior-suite.webp";
import roomPresidenSuite from "../assets/room-presiden-suite.webp";
import roomFamily from "../assets/room-family.webp";
import grandDeluxe from "../assets/grand-deluxe.webp";

const rooms = [
  {
    id: 1,
    name: "Superior Twin",
    type: "Superior",
    // size: "20 m²",
    bed: "2 Single Bed",
    capacity: "2 Tamu",
    price: 626400,
    originalPrice: 720000,
    image: roomSuperior,
    amenities: ["AC", "WiFi", "TV", "Sarapan", "Hot Shower"],
    description:
      "Kamar nyaman dengan dua tempat tidur single, cocok untuk perjalanan bisnis atau bersama rekan kerja. Dilengkapi fasilitas modern dan pemandangan kota.",
  },
  {
    id: 2,
    name: "Deluxe Double",
    type: "Deluxe",
    // size: "24 m²",
    bed: "1 King Bed",
    capacity: "2 Tamu",
    price: 678600,
    originalPrice: 780000,
    image: roomDeluxe,
    amenities: ["AC", "WiFi", "Smart TV", "Sarapan", "Hot Shower"],
    description:
      "Kamar deluxe dengan tempat tidur king size yang luas dan nyaman. Interior elegan dengan sentuhan modern, sempurna untuk pasangan atau tamu eksekutif.",
  },
  {
    id: 3,
    name: "Deluxe Twin",
    type: "Deluxe",
    // size: "24 m²",
    bed: "2 Single Bed",
    capacity: "2 Tamu",
    price: 704700,
    originalPrice: 810000,
    image: roomDeluxeTwin,
    amenities: ["AC", "WiFi", "Smart TV", "Sarapan", "Hot Shower"],
    description:
      "Kamar deluxe luas dengan dua tempat tidur single. Ideal untuk tamu yang menginginkan kenyamanan ekstra dengan ruang yang lebih lega.",
  },
  {
    id: 4,
    name: "Grand Deluxe",
    type: "Deluxe",
    // size: "24 m²",
    bed: "1 King Bed",
    capacity: "2 Tamu",
    price: 704700,
    originalPrice: 810000,
    image: grandDeluxe,
    amenities: ["AC", "WiFi", "Smart TV", "Sarapan", "Hot Shower"],
    description:
      "Kamar deluxe luas dengan dua tempat tidur single. Ideal untuk tamu yang menginginkan kenyamanan ekstra dengan ruang yang lebih lega.",
  },
  {
    id: 5,
    name: "President Suites",
    type: "Suite",
    // size: "120 m²",
    bed: "1 King Bed",
    capacity: "6 Tamu",
    price: 3567000,
    originalPrice: 4100000,
    image: roomPresidenSuite,
    amenities: ["AC", "WiFi", "Smart TV", "Sarapan", "Bathtub", "Minibar"],
    description:
      "Pengalaman menginap premium dengan kamar yang lebih luas dan fasilitas lengkap termasuk bathtub dan minibar. Pemandangan kota yang menakjubkan.",
  },
  {
    id: 6,
    name: "Junior Suite",
    type: "Suite",
    // size: "42 m²",
    bed: "1 King Bed",
    capacity: "3 Tamu",
    price: 1740000,
    originalPrice: 2000000,
    image: roomSuite,
    amenities: [
      "AC",
      "WiFi",
      "Smart TV",
      "Sarapan",
      "Bathtub",
      "Minibar",
      "Living Area",
    ],
    description:
      "Suite mewah dengan area tamu terpisah dan tempat tidur king. Ruang yang luas untuk bekerja dan bersantai dengan pemandangan kota Palu yang spektakuler.",
  },
  {
    id: 7,
    name: "Family Room",
    type: "Family",
    // size: "67 m²",
    bed: "King + Twin",
    capacity: "4 Tamu",
    price: 2000000,
    originalPrice: 2500000,
    image: roomFamily,
    amenities: [
      "AC",
      "WiFi",
      "Smart TV",
      "Sarapan",
      "Bathtub",
      "Minibar",
      "Living Area",
      "Kitchenette",
    ],
    description:
      "Kamar keluarga terluas kami dengan ruang hidup yang nyaman. Dilengkapi tempat tidur king dan twin, sempurna untuk keluarga yang menginginkan pengalaman terbaik.",
  },
];

const amenityIcons = {
  AC: Wind,
  WiFi: Wifi,
  TV: Tv,
  "Smart TV": Tv,
  Sarapan: Coffee,
  "Hot Shower": Droplets,
  Bathtub: Droplets,
  Minibar: Coffee,
  "Living Area": Maximize2,
  Kitchenette: Coffee,
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

const typeBadgeColors = {
  Superior: "bg-slate-700",
  Deluxe: "bg-blue-700",
  Grand: "bg-purple-700",
  Suite: "bg-amber-700",
  Family: "bg-emerald-700",
};

function RoomCard({ room, index, onDetail }) {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 30 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true, margin: '-50px' }}
    //   transition={{ duration: 0.5, delay: index * 0.1 }}
    //   className="card group"
    // >
    //   {/* Image */}
    //   <div className="relative overflow-hidden aspect-[4/3]">
    //     <img
    //       src={room.image}
    //       alt={`Kamar ${room.name} - Grand Sya Hotel Palu`}
    //       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    //     {/* Badge */}
    //     <span className={`absolute top-4 left-4 ${typeBadgeColors[room.type]} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg`}>
    //       {room.type}
    //     </span>

    //     {/* Promo Badge */}
    //     {room.originalPrice > room.price && (
    //       <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-lg animate-pulse">
    //         PROMO
    //       </span>
    //     )}
    //   </div>

    //   {/* Content */}
    //   <div className="p-5 md:p-6">
    //     <div className="flex items-start justify-between mb-3">
    //       <div>
    //         <h3 className="font-heading text-xl font-bold text-slate-900">{room.name}</h3>
    //         <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
    //           <span className="flex items-center gap-1">
    //             <Maximize2 size={13} />
    //             {room.size}
    //           </span>
    //           <span className="flex items-center gap-1">
    //             <BedDouble size={13} />
    //             {room.bed}
    //           </span>
    //           <span className="flex items-center gap-1">
    //             <Users size={13} />
    //             {room.capacity}
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Amenities */}
    //     <div className="flex flex-wrap gap-2 mb-4">
    //       {room.amenities.slice(0, 5).map((amenity) => {
    //         const Icon = amenityIcons[amenity] || Wifi;
    //         return (
    //           <span
    //             key={amenity}
    //             className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg"
    //           >
    //             <Icon size={12} className="text-amber-500" />
    //             {amenity}
    //           </span>
    //         );
    //       })}
    //       {room.amenities.length > 5 && (
    //         <span className="text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg font-medium">
    //           +{room.amenities.length - 5} lagi
    //         </span>
    //       )}
    //     </div>

    //     {/* Price */}
    //     <div className="flex items-end justify-between pt-4 border-t border-slate-100">
    //       <div>
    //         {room.originalPrice > room.price && (
    //           <p className="text-sm text-slate-400 line-through">
    //             Rp {formatPrice(room.originalPrice)}
    //           </p>
    //         )}
    //         <p className="text-xl font-bold text-amber-600 font-heading">
    //           Rp {formatPrice(room.price)}
    //           <span className="text-xs font-normal text-slate-400 ml-1">/malam</span>
    //         </p>
    //       </div>
    //       <div className="flex gap-2">
    //         <button
    //           onClick={() => onDetail(room)}
    //           className="text-sm font-medium text-slate-600 hover:text-amber-700 bg-slate-100 hover:bg-amber-50 px-3.5 py-2 rounded-lg transition-all"
    //         >
    //           Detail
    //         </button>
    //         <a
    //           href={`https://wa.me/6285166829267?text=${encodeURIComponent(`Halo, saya ingin memesan kamar ${room.name} di Grand Sya Hotel Palu.\nHarga: Rp ${formatPrice(room.price)}/malam`)}`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
    //         >
    //           Pesan
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.image}
          alt={`Kamar ${room.name} - Grand Sya Hotel Palu`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <span
          className={`absolute top-4 left-4 ${typeBadgeColors[room.type]} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg`}
        >
          {room.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-slate-900">
              {room.name}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Maximize2 size={13} />
                {room.size}
              </span>
              <span className="flex items-center gap-1">
                <BedDouble size={13} />
                {room.bed}
              </span>
              <span className="flex items-center gap-1">
                <Users size={13} />
                {room.capacity}
              </span>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 5).map((amenity) => {
            const Icon = amenityIcons[amenity] || Wifi;
            return (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg"
              >
                {/* <Icon size={12} className="text-amber-500" /> */}
                {amenity}
              </span>
            );
          })}
          {room.amenities.length > 5 && (
            <span className="text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg font-medium">
              +{room.amenities.length - 5} lagi
            </span>
          )}
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex flex-col justify-center gap-2">
            <button
              onClick={() => onDetail(room)}
              className="text-sm font-medium text-slate-600 hover:text-amber-700 bg-slate-100 hover:bg-amber-50 px-3.5 py-2 rounded-lg transition-all"
            >
              Detail
            </button>
            {/* <a
              href={`https://wa.me/6285166829267?text=${encodeURIComponent(`Halo, saya ingin memesan kamar ${room.name} di Grand Sya Hotel Palu.\nHarga: Rp ${formatPrice(room.price)}/malam`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-center text-white bg-amber-600 hover:bg-amber-700 px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Pesan 
            </a> */}
            <a
              href={`https://wa.me/6285166829267?text=${encodeURIComponent(`Halo, saya ingin memesan kamar ${room.name} di Grand Sya Hotel Palu.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Pesan Melalui
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RoomDetailModal({ room, onClose }) {
  if (!room) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <X size={18} className="text-slate-600" />
          </button>

          {/* Image */}
          <div className="aspect-video overflow-hidden rounded-t-2xl">
            <img
              src={room.image}
              alt={`Kamar ${room.name}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`${typeBadgeColors[room.type]} text-white text-xs font-bold px-3 py-1 rounded-lg`}
              >
                {room.type}
              </span>
              {room.originalPrice > room.price && (
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">
                  Hemat Rp {formatPrice(room.originalPrice - room.price)}
                </span>
              )}
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              {room.name}
            </h3>

            <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Maximize2 size={14} /> {room.size}
              </span>
              <span className="flex items-center gap-1">
                <BedDouble size={14} /> {room.bed}
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} /> {room.capacity}
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              {room.description}
            </p>

            <h4 className="font-semibold text-slate-800 mb-3">
              Fasilitas Kamar
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {room.amenities.map((amenity) => {
                const Icon = amenityIcons[amenity] || Wifi;
                return (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100"
                  >
                    <Icon size={14} className="text-amber-500" />
                    {amenity}
                  </span>
                );
              })}
            </div>

            <div className="flex items-end justify-between pt-4 border-t border-slate-100">
              <div>
                {room.originalPrice > room.price && (
                  <p className="text-sm text-slate-400 line-through">
                    Rp {formatPrice(room.originalPrice)}
                  </p>
                )}
                <p className="text-2xl font-bold text-amber-600 font-heading">
                  Rp {formatPrice(room.price)}
                  <span className="text-sm font-normal text-slate-400 ml-1">
                    /malam
                  </span>
                </p>
              </div>
              <a
                href={`https://wa.me/6285166829267?text=${encodeURIComponent(`Halo, saya ingin memesan kamar ${room.name} di Grand Sya Hotel Palu.\nHarga: Rp ${formatPrice(room.price)}/malam`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Pesan via WhatsApp
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="kamar" className="section-padding bg-stone-50" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Akomodasi
            </span>
            {/* Before */}
            {/* <h2 className="section-title">
              Tipe Kamar & <span className="text-gradient italic">Tarif</span>
            </h2> */}
            {/* After */}
            <h2 className="section-title">
              Tipe <span className="text-gradient italic">Kamar</span>
            </h2>
            <p className="section-subtitle mt-4">
              Pilih kamar yang sesuai dengan kebutuhan Anda. Semua kamar
              dilengkapi fasilitas modern dan sarapan pagi.
            </p>
          </motion.div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <RoomCard
                key={room.id}
                room={room}
                index={index}
                onDetail={setSelectedRoom}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </>
  );
}
