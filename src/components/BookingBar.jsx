import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Search } from 'lucide-react';

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1 Tamu, 1 Kamar');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo, saya ingin melakukan reservasi kamar di Grand Sya Hotel Palu.\n\nCheck-in: ${checkIn || 'Belum ditentukan'}\nCheck-out: ${checkOut || 'Belum ditentukan'}\nTamu: ${guests}`;
    const waUrl = `https://wa.me/6285166829267?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 md:-mt-12">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-slate-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Check-in */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <CalendarDays size={14} className="text-amber-500" />
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
          </div>

          {/* Check-out */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <CalendarDays size={14} className="text-amber-500" />
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <Users size={14} className="text-amber-500" />
              Tamu & Kamar
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none cursor-pointer"
            >
              <option>1 Tamu, 1 Kamar</option>
              <option>2 Tamu, 1 Kamar</option>
              <option>3 Tamu, 1 Kamar</option>
              <option>4 Tamu, 2 Kamar</option>
              <option>Keluarga / Rombongan</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-primary !py-3 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Search size={18} />
            Cek Ketersediaan
          </button>
        </div>
      </motion.form>
    </div>
  );
}
