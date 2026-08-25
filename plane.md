# AI Prompt / Instruction Guide: Redesign Website Grand Sya Hotel Palu

## 1. Overview & Project Objective
Proyek ini bertujuan untuk meng-overhaul / merancang ulang (redesign) tampilan web profil dari **Grand Sya Hotel Palu** (`https://grandsyahotelpalu.com/`). 
Masalah utama pada antarmuka saat ini:
- Tampilan sangat monoton tanpa kombinasi warna yang harmonis.
- Tidak responsif di perangkat mobile / tablet (layout pecah atau terpotong).
- Tata letak (layout) dan tata letak hierarki informasi kurang tertata rapi.

**Tujuan Redesign:**
Menciptakan antarmuka web modern, *clean*, *simple*, dan *casual* (tetap elegan khas perhotelan/hospitabilitas) yang teroptimasi penuh untuk *responsive design* (Mobile First Approach).

---

## 2. Tech Stack Setup
- **Framework Frontend**: React (Vite)
- **CSS Framework**: Tailwind CSS (v3.x)
- **Icons**: Lucide React / React Icons (`lucide-react`)
- **Animations** *(Opsional)*: Framer Motion / Tailwind Animate
- **Font**: Google Fonts (Inter / Plus Jakarta Sans untuk Body, Playfair Display / Cormorant Garamond untuk Heading / Accent)

---

## 3. Visual Identity & Design System

### 3.1 Palette Warna (Modern Casual Elegance)
Beralih dari warna tunggal monoton ke kombinasi warna bertema *modern hospitality* dengan nuansa warm, welcoming, & professional:
- **Primary / Accent (Elegance Gold / Warm Amber)**:
  - `amber-600` (`#d97706`) atau `amber-700` (`#b45309`) - untuk CTA, highlight harga, & status bintang/ulasan.
- **Secondary / Neutral Dark (Slate / Charcoal)**:
  - `slate-900` (`#0f172a`) atau `slate-800` (`#1e293b`) - untuk header, footer, & teks utama.
- **Background / Surface (Soft Cream & Fresh White)**:
  - Main Background: `slate-50` (`#f8fafc`) atau warm off-white `stone-50` (`#fafaf9`).
  - Card Surface: `white` (`#ffffff`) dengan *subtle shadow* (`shadow-sm` hingga `shadow-md`).
- **Secondary Accent (Emerald / Forest Green - Opsional)**:
  - `emerald-600` - untuk indikator ketersediaan / fasilitas ramah lingkungan.

### 3.2 Tipografi
- **Headings**: Serif / Semi-serif yang elegan (misal: *Playfair Display* atau *Plus Jakarta Sans Bold*).
- **Body Text**: Sans-serif bersih (*Inter* / *Plus Jakarta Sans*).

---

## 4. Structure & Page Layout (Component Architecture)

### A. Navigation Bar (Responsive Header)
- **Desktop**:
  - Logo Grand Sya Hotel Palu di kiri.
  - Menu Navigasi Tengah: *Beranda, Tentang Kami, Tipe Kamar, Fasilitas, Galeri, Kontak*.
  - Tombol CTA Kanan: "Pesan Kamar" / "Book Now" dengan efek hover (*bg-amber-600 hover:bg-amber-700*).
- **Mobile**:
  - Top Bar ringkas dengan Logo & Hamburger Menu Icon.
  - Mobile Drawer / Slide-over menu yang halus dengan tombol CTA yang menonjol di bagian bawah drawer.

### B. Hero Section (First Impression)
- Full-width hero banner dengan gambar berkualitas tinggi dari Grand Sya Hotel Palu.
- Soft overlay gradient (`bg-gradient-to-t from-slate-900/80 to-transparent`) agar teks keterbacaan tinggi.
- Tagline menarik: *"Kenyamanan Modern & Kehangatan Layanan di Pusat Kota Palu"*.
- **Quick Booking Bar (Floating Card)**:
  - Card mengambang di bawah hero section (opsional: overlap hero & section berikutnya).
  - Input: Check-in Date, Check-out Date, Jumlah Tamu, Tipe Kamar.
  - Tombol: "Cek Ketersediaan".

### C. About Us / Highlight Section
- Layout 2 kolom (Desktop) / 1 kolom (Mobile).
- Sisi Kiri: Slider gambar / Grid foto interior hotel.
- Sisi Kanan: Deskripsi singkat keunggulan Grand Sya Hotel Palu (lokasi strategis di Palu, fasilitas modern, suasana nyaman untuk keluarga & perjalanan bisnis).
- Key Statistics / Badge Highlight (misal: 24/7 Service, WiFi Kencang, Restoran Halal, Ruang Rapat).

### D. Room Types & Rates (Kamar & Fasilitas Kamar)
- Grid Cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
- Setiap Card Kamar berisi:
  - Carousel / Foto Kamar dengan badge Tipe (Superior, Deluxe, Suite, dsb.).
  - Judul Tipe Kamar & Kapasitas Tamu.
  - Icon Fasilitas Utama (AC, WiFi, Smart TV, Sarapan, Hot Shower).
  - Harga per malam dengan *strikethrough* promo jika ada.
  - Tombol CTA: "Lihat Detail" & "Pesan".

### E. Facilities & Services (Fasilitas Hotel)
- Design Tab atau Grid Icon Card yang bersih.
- Fasilitas Utama:
  - Restoran / Cafe
  - Meeting Room / Ballroom (untuk event & bisnis di Palu)
  - Area Parkir Luas
  - Layanan Kamar 24 Jam
  - Free High-Speed WiFi

### F. Photo Gallery / Instagram Feed Layout
- Masonry / Grid Layout yang bersih untuk foto-foto spot hotel, makanan, dan suasana.
- Hover effect zoom in halus (`transition duration-300 transform hover:scale-105`).

### G. Location & Contact (Integrasi Peta Palu)
- Peta interaktif Google Maps tersemat (Embedded Maps) menyoroti lokasi Grand Sya Hotel Palu.
- Informasi Kontak Lengkap:
  - Alamat Lengkap di Palu.
  - Nomor Telepon / WhatsApp Direct Link.
  - Email & Jam Operasional Resepsionis.

### H. Footer
- Background `slate-900` dengan aksen tulisan putih & muted grey.
- Quick links, Social media icons, Copyright, dan link kebijakan privasi.

---

## 5. Mobile Responsiveness Rules (Tailwind v3)
1. **Container & Padding**: Selalu gunakan `px-4 sm:px-6 lg:px-8` pada kontainer utama.
2. **Typography Scaling**: Gunakan responsif text ukuran, misal: `text-2xl md:text-4xl lg:text-5xl`.
3. **Grid Layouts**: Gunakan mobile-first approach `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
4. **Touch Targets**: Pastikan setiap tombol / link memiliki padding minimal `py-2.5 px-4` agar mudah ditekan di layar HP.
5. **No Horizontal Scroll**: Pastikan tidak ada elemen yang memiliki fixed width melebihi viewport mobile (`max-w-full overflow-hidden`).

---

## 6. Sample Tailwind v3 Component Snippets

### Quick Booking Bar Snippet:
```jsx
<div className="max-w-6xl mx-auto -mt-12 relative z-10 px-4">
  <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end border border-slate-100">
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Check-in</label>
      <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
    </div>
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Check-out</label>
      <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
    </div>
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tamu & Kamar</label>
      <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
        <option>1 Tamu, 1 Kamar</option>
        <option>2 Tamu, 1 Kamar</option>
        <option>Keluarga / Rombongan</option>
      </select>
    </div>
    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
      Cek Ketersediaan
    </button>
  </div>
</div>
```

---

## 7. Action Items for AI Agent
1. **Setup Vite + React + Tailwind CSS v3** project structure.
2. Buat struktur folder komponen:
   - `src/components/Navbar.jsx`
   - `src/components/Hero.jsx`
   - `src/components/BookingBar.jsx`
   - `src/components/AboutUs.jsx`
   - `src/components/RoomCard.jsx`
   - `src/components/Facilities.jsx`
   - `src/components/Gallery.jsx`
   - `src/components/ContactMap.jsx`
   - `src/components/Footer.jsx`
3. Terapkan variabel warna & font pada `tailwind.config.js`.
4. Implementasikan *state* interaktif sederhana (hamburger menu toggle, modal detail kamar, form booking via WhatsApp link).