"use client";

import Link from "next/link";

export default function Produk() {
  const services = [
    {
      title: "Website Company Profile",
      description: "Hadirkan identitas bisnis Anda dengan desain profesional, cepat, responsif, dan terpercaya untuk menarik lebih banyak mitra dan pelanggan.",
      price: "Rp 1.999.000",
      features: ["Desain Premium Kustom", "Responsif HP & Tablet", "Halaman Kontak & WhatsApp", "Gratis Domain & Hosting 1 Th"],
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Toko Online / E-Commerce",
      description: "Jual produk Anda secara langsung di internet dengan sistem keranjang belanja terintegrasi, pembayaran otomatis, dan panel manajemen stok.",
      price: "Rp 3.499.000",
      features: ["Sistem Payment Gateway", "Keranjang Belanja & Ongkir", "Panel Admin Kelola Produk", "Laporan Penjualan Lengkap"],
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Aplikasi Web Kustom (SaaS)",
      description: "Bangun sistem informasi manajemen, portal perusahaan kustom, dashboard internal, atau aplikasi web berbasis SaaS sesuai kebutuhan bisnis Anda.",
      price: "Hubungi Kami",
      features: ["Integrasi API Pihak Ketiga", "Keamanan Tingkat Tinggi", "Sistem Peran (Role) Pengguna", "Kinerja & Skalabilitas Tinggi"],
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Optimasi SEO & Performa",
      description: "Tingkatkan peringkat website Anda di mesin pencari Google serta optimalkan kecepatan loading website agar pengunjung merasa nyaman.",
      price: "Rp 999.000",
      features: ["Audit & Riset Keyword", "On-Page & Off-Page SEO", "Peningkatan Speed (PageSpeed)", "Laporan Analisis Bulanan"],
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="produk" className="relative py-12 md:py-20 bg-gray-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 text-center md:pb-16" data-aos="fade-up">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
            Produk & Layanan
          </div>
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
            Solusi Web Terbaik untuk Anda
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Kami menawarkan berbagai pilihan layanan pengembangan web berkualitas premium untuk mendukung ekspansi bisnis digital Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 bg-blue-50 rounded-2xl">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block">Harga</span>
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/pemesanan"
                  className="w-full btn bg-blue-600 hover:bg-blue-700 text-white shadow-xs text-sm py-2.5 flex justify-center items-center rounded-xl transition-colors font-semibold"
                >
                  Pesan Sekarang
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
