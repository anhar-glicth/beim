"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "Semua" | "Company Profile" | "E-Commerce" | "Web App" | "SEO";

const projects = [
  {
    id: 1,
    title: "EstateLux — Agen Properti Mewah",
    category: "Web App" as Category,
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    description: "Platform pencarian & pemasaran properti eksklusif dengan kalkulator KPR pintar, peta lokasi interaktif, dan visual hunian premium.",
    color: "from-amber-600 to-yellow-500",
    icon: "🏠",
    year: "2026",
    link: "https://properti-x4q3.vercel.app/",
    image: "/images/portfolio/estatelux.png",
  },
  {
    id: 2,
    title: "NusaTech Solutions — Agensi IT & Cloud",
    category: "Company Profile" as Category,
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    description: "Landing page agensi IT modern dengan dark mode, visual dashboard glassmorphism, dan informasi layanan transformasi digital lengkap.",
    color: "from-purple-600 to-indigo-600",
    icon: "💻",
    year: "2026",
    link: "https://comany.vercel.app/",
    image: "/images/portfolio/nusatech.png",
  },
  {
    id: 3,
    title: "OrangeCode Academy — Belajar Coding Interaktif",
    category: "Web App" as Category,
    tech: ["Node.js", "Express", "Vue.js", "MongoDB"],
    description: "Platform e-learning coding untuk pemula dengan kurikulum HTML/CSS/JS terstruktur, playground editor langsung, dan kuis interaktif.",
    color: "from-orange-500 to-amber-500",
    icon: "📚",
    year: "2026",
    link: "https://belajar-hazel.vercel.app/",
    image: "/images/portfolio/orangecode.png",
  },
  {
    id: 4,
    title: "Batik Nusantara — Galeri Budaya Digital",
    category: "Web App" as Category,
    tech: ["Vue.js", "Laravel", "Tailwind CSS", "MySQL"],
    description: "Situs eksplorasi budaya Batik Indonesia dengan lini masa sejarah, galeri ragam motif daerah, dan filosofi spiritual di balik setiap corak.",
    color: "from-amber-800 to-yellow-600",
    icon: "👑",
    year: "2026",
    link: "https://batik-steel.vercel.app/",
    image: "/images/portfolio/batik-nusantara.png",
  },
  {
    id: 5,
    title: "BudgetCal — Student Calorie Tracker",
    category: "Web App" as Category,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    description: "Aplikasi pelacak kalori harian mahasiswa dengan rekomendasi menu sehat di bawah Rp 30.000, keranjang belanja hemat, dan kalkulator BMR.",
    color: "from-emerald-500 to-teal-600",
    icon: "🥗",
    year: "2026",
    link: "https://calorisan.vercel.app/",
    image: "/images/portfolio/budgetcal.png",
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
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Card visual */}
              <div className="h-44 overflow-hidden relative bg-gray-50 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl`}>
                    {project.icon}
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl shadow-lg transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Lihat Demo ↗
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
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
