import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone, Star } from 'lucide-react';
import logoGrandSya from '../assets/logo-grand-sya.png';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Tipe Kamar', href: '#kamar' },
  { name: 'Fasilitas', href: '#fasilitas' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const scrollwindowArea = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center gap-1">
              {/* {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={`${scrolled ? 'text-amber-500' : 'text-amber-400'} fill-current transition-colors`}
                />
              ))} */}
            </div>
            <div className="flex flex-col leading-none">
              {/* <span
                className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                  scrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                Grand Sya
              </span> */}
              <img src={logoGrandSya} alt="Logo" className="h-12 md:h-20" />
              {/* <span
                className={`text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  scrolled ? 'text-slate-400' : 'text-white/70'
                }`}
              >
                Hotel Palu
              </span> */}
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled
                    ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:04514050065"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-500 hover:text-amber-700' : 'text-white/70 hover:text-white'
              }`}
            >
              <Phone size={14} />
              <span className="hidden xl:inline">0451-4050065</span>
            </a>
            <a
              href="https://wa.me/6285166829267?text=Halo,%20saya%20ingin%20melakukan%20reservasi%20kamar%20di%20Grand%20Sya%20Hotel%20Palu."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 !text-sm flex items-center gap-2"
            >
              Pesan Kamar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {createPortal(
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isOpen ? 'visible' : 'invisible'
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  {/* <div className="flex items-center gap-0.5">
                    {[...Array(2)].map((_, i) => (
                      <Star key={i} size={8} className="text-amber-500 fill-current" />
                    ))}
                  </div>
                  <span className="font-heading text-lg font-bold text-slate-900">Grand Sya</span> */}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-4 px-3">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center px-4 py-3.5 rounded-xl text-slate-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-slate-100 space-y-3">
                <a
                  href="tel:04514050065"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-700 font-medium transition-all"
                >
                  <Phone size={16} />
                  0451-4050065
                </a>
                <a
                  href="https://wa.me/6285166829267?text=Halo,%20saya%20ingin%20melakukan%20reservasi%20kamar%20di%20Grand%20Sya%20Hotel%20Palu."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Pesan Kamar
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
