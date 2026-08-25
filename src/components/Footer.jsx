import { Star, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Tipe Kamar', href: '#kamar' },
  { name: 'Fasilitas', href: '#fasilitas' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' },
];

const services = [
  'Meeting Room',
  'Cendana Ballroom',
  'Gallery Restaurant',
  'Nava Lounge',
  'Swimming Pool',
  'Fitness Center',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-600 hover:bg-amber-700 text-white w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1 - About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold">Grand Sya</span>
                <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">
                  Hotel Palu
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Hotel bintang 4 di pusat Kota Palu yang menggabungkan kenyamanan
              modern dengan kehangatan layanan khas Indonesia. Local Brand with
              Touches of Elegance.
            </p>
            {/* Social Media */}
            <div className="flex gap-2">
              {[
                {
                  name: 'Instagram',
                  url: 'https://instagram.com/grandsyahotel',
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  url: 'https://facebook.com/grandsyahotel',
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  name: 'TikTok',
                  url: 'https://tiktok.com/@grandsyahotel',
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  title={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-lg">Navigasi</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 hover:pl-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-lg">Layanan</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-lg">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Grand+Sya+Hotel+Palu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors group"
                >
                  <MapPin size={15} className="flex-shrink-0 mt-0.5 group-hover:text-amber-400" />
                  <span>Jl. Cik Ditiro No 11, Besusu Timur, Palu, Sulawesi Tengah</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:04514050065"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone size={15} />
                  0451-4050065
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservation@grandsyahotelpalu.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors break-all"
                >
                  <Mail size={15} className="flex-shrink-0" />
                  reservation@grandsyahotelpalu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Grand Sya Hotel Palu. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Kebijakan Privasi
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
