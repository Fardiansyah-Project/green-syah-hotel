import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, AtSign } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl. Cik Ditiro No 11, Besusu Timur,\nPalu Barat, Kota Palu,\nSulawesi Tengah 94111',
    link: 'https://maps.app.goo.gl/34HjFtYdnr7K2EUh9',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '0451-4050065',
    link: 'tel:04514050065',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 851-6682-9267',
    link: 'https://wa.me/6285166829267?text=Halo,%20saya%20ingin%20menanyakan%20informasi%20Grand%20Sya%20Hotel%20Palu.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'reservation@grandsyahotelpalu.com',
    link: 'mailto:reservation@grandsyahotelpalu.com',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Clock,
    label: 'Resepsionis',
    value: '24 Jam (Check-in: 14:00, Check-out: 12:00)',
    link: null,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function ContactMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Halo, saya ${formData.name}.\n\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    window.open(
      `https://wa.me/6285166829267?text=${encodeURIComponent(waMessage)}`,
      '_blank'
    );
  };

  return (
    <section id="kontak" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Hubungi Kami
          </span>
          <h2 className="section-title">
            Lokasi & <span className="text-gradient italic">Kontak</span>
          </h2>
          <p className="section-subtitle mt-4">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu
            merencanakan pengalaman menginap terbaik untuk Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const Wrapper = info.link ? 'a' : 'div';
              const wrapperProps = info.link
                ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <Wrapper
                  key={info.label}
                  {...wrapperProps}
                  className={`flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group ${
                    info.link ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social Media */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">
                Ikuti Kami
              </p>
              <div className="flex gap-3 px-4">
                {[
                  {
                    name: 'Instagram',
                    url: 'https://instagram.com/grandsyahotel',
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    url: 'https://facebook.com/grandsyahotel',
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'TikTok',
                    url: 'https://tiktok.com/@grandsyahotel',
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-500 hover:text-amber-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <AtSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    required
                  />
                </div>
                <textarea
                  placeholder="Pesan Anda..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 !py-2.5 !text-sm"
                >
                  <Send size={15} />
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-full min-h-[400px] lg:min-h-[600px]">
              <iframe
                title="Lokasi Grand Sya Hotel Palu"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2412.334749944745!2d119.86986582309123!3d-0.8886039171146659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bed6411a737a1%3A0xe10783dffa1d7d8f!2sGrand%20Sya%20Hotel%20Palu!5e0!3m2!1sid!2sid!4v1787743605520!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
