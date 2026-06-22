"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "Semua" | "Company Profile" | "E-Commerce" | "Web App" | "SEO";

const projects = [
  {
    id: 1,
    title: "PT. Maju Bersama — Company Profile",
    category: "Company Profile" as Category,
    tech: ["Next.js", "Tailwind CSS"],
    description: "Website profil perusahaan modern dengan animasi elegan dan halaman layanan yang lengkap.",
    color: "from-blue-500 to-indigo-600",
    icon: "🏢",
    year: "2024",
    link: "#",
  },
  {
    id: 2,
    title: "BatiKraft — Toko Online Batik",
    category: "E-Commerce" as Category,
    tech: ["React", "Node.js", "MongoDB"],
    description: "Platform e-commerce khusus produk batik premium dengan fitur pembayaran Midtrans & manajemen stok.",
    color: "from-orange-500 to-rose-500",
    icon: "🛍️",
    year: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "KlinikKu — Sistem Manajemen Klinik",
    category: "Web App" as Category,
    tech: ["Vue.js", "Laravel", "MySQL"],
    description: "Aplikasi web untuk manajemen jadwal dokter, rekam medis pasien, dan laporan keuangan klinik.",
    color: "from-green-500 to-teal-600",
    icon: "🏥",
    year: "2024",
    link: "#",
  },
  {
    id: 4,
    title: "TokoSegar — Grocery Delivery",
    category: "E-Commerce" as Category,
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    description: "Platform pengiriman kebutuhan dapur segar dengan fitur real-time tracking dan langganan mingguan.",
    color: "from-lime-500 to-green-500",
    icon: "🥦",
    year: "2023",
    link: "#",
  },
  {
    id: 5,
    title: "Arsitek Nusantara — Portfolio Arsitek",
    category: "Company Profile" as Category,
    tech: ["Next.js", "Framer Motion"],
    description: "Website portofolio firma arsitektur dengan galeri proyek interaktif dan formulir konsultasi.",
    color: "from-amber-500 to-yellow-500",
    icon: "🏛️",
    year: "2023",
    link: "#",
  },
  {
    id: 6,
    title: "EduPintar — Platform Belajar Online",
    category: "Web App" as Category,
    tech: ["React", "Firebase", "Stripe"],
    description: "Platform LMS dengan video streaming, kuis interaktif, sertifikat otomatis, dan dashboard progress.",
    color: "from-purple-500 to-pink-500",
    icon: "📚",
    year: "2023",
    link: "#",
  },
  {
    id: 7,
    title: "OptimalSEO — Agensi Digital Marketing",
    category: "SEO" as Category,
    tech: ["WordPress", "Yoast SEO", "GA4"],
    description: "Audit SEO menyeluruh dan optimasi konten untuk website properti — trafik naik 320% dalam 4 bulan.",
    color: "from-cyan-500 to-blue-500",
    icon: "📈",
    year: "2023",
    link: "#",
  },
  {
    id: 8,
    title: "RumahKita — Platform Properti",
    category: "Web App" as Category,
    tech: ["Next.js", "Maps API", "Supabase"],
    description: "Marketplace properti dengan filter pencarian canggih, virtual tour 360°, dan sistem pengajuan KPR.",
    color: "from-rose-500 to-pink-600",
    icon: "🏠",
    year: "2022",
    link: "#",
  },
];

const categories: Category[] = ["Semua", "Company Profile", "E-Commerce", "Web App", "SEO"];

export default function Portofolio() {
  const [active, setActive] = useState<Category>("Semua");

  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portofolio" className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="pb-10 text-center" data-aos="fade-up">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
            Portofolio
          </div>
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
            Proyek Unggulan Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Berikut adalah sebagian karya terbaik yang telah kami selesaikan bersama klien dari berbagai industri.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                active === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Card visual */}
              <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl`}>
                {project.icon}
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{project.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14" data-aos="fade-up">
          <p className="text-gray-600 mb-5">Tertarik bekerja sama dengan kami? Kami siap mewujudkan proyek Anda.</p>
          <Link
            href="/pemesanan"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Diskusikan Proyek Anda
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
