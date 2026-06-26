"use client";

import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpeg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";

export default function OurTeam() {
  const team = [
    {
      name: "Yasin",
      role: "CEO — Chief Executive Officer",
      avatar: Avatar01,
      bio: "Memimpin visi dan strategi perusahaan secara keseluruhan, memastikan pertumbuhan bisnis yang berkelanjutan dan berdampak bagi klien."
    },
    {
      name: "Shinta",
      role: "COO — Chief Operating Officer",
      avatar: Avatar02,
      bio: "Mengawasi operasional harian perusahaan, memastikan setiap proyek berjalan tepat waktu, terstruktur, dan memenuhi standar kualitas tertinggi."
    },
    {
      name: "Muhammad Anhar Solihin",
      role: "CTO — Chief Technology Officer",
      avatar: Avatar03,
      bio: "Memimpin arsitektur teknologi dan inovasi produk digital, memastikan solusi yang kami bangun menggunakan teknologi terkini dan terbaik."
    },
    {
      name: "Rian Hakiki",
      role: "CMO — Chief Marketing Officer",
      avatar: Avatar04,
      bio: "Merancang strategi pemasaran digital yang kreatif dan berbasis data untuk memperluas jangkauan brand serta mendatangkan pelanggan baru."
    },
  ];

  return (
    <section id="our-team" className="relative py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 text-center md:pb-16" data-aos="fade-up">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
            Tim Kami
          </div>
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
            Para Ahli di Balik Layar
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Kami adalah tim profesional kreatif yang berkomitmen tinggi untuk memberikan solusi digital inovatif dan premium kepada bisnis Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all text-center flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative mb-6">
                <Image
                  src={member.avatar}
                  width={96}
                  height={96}
                  alt={member.name}
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-blue-600 mb-4">{member.role}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">{member.bio}</p>
              
              {/* Social icons */}
              <div className="flex gap-4">
                <a href="#0" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.7-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                  </svg>
                </a>
                <a href="#0" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M0 1.143v13.714C0 15.485.515 16 1.143 16h13.714C15.485 16 16 15.485 16 14.857V1.143C16 .515 15.485 0 14.857 0H1.143C.515 0 0 .515 0 1.143zM4.937 12.8H2.88V6.229h2.057V12.8zm-1.028-7.514a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm9.063 7.514h-2.057V9.577c0-.771-.014-1.76-1.074-1.76-1.074 0-1.238.84-1.238 1.703v3.28h-2.057V6.229h1.977v.897h.028c.274-.52.946-1.069 1.949-1.069 2.086 0 2.47 1.372 2.47 3.155v4.588z" />
                  </svg>
                </a>
                <a href="#0" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="GitHub">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
