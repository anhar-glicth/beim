"use client";

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="relative py-12 md:py-20 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 text-center md:pb-16" data-aos="fade-up">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
            Visi & Misi
          </div>
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900 tracking-tight">
            Arah dan Komitmen Kami
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Kami dipandu oleh visi yang kuat dan misi terarah untuk menghadirkan kualitas terbaik bagi setiap mitra bisnis kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Vision (Visi) */}
          <div className="flex flex-col justify-between bg-linear-to-tr from-blue-600 to-indigo-600 text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden" data-aos="fade-right">
            {/* Background decoration */}
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none"></div>

            <div className="relative">
              <span className="text-sm uppercase tracking-widest font-semibold text-blue-200">Visi Kami</span>
              <h3 className="text-3xl md:text-4xl font-extrabold mt-6 mb-8 leading-tight">
                "Menjadi mitra teknologi terpercaya yang membantu bisnis bertransformasi digital secara global dengan solusi website inovatif, premium, dan berkinerja tinggi."
              </h3>
            </div>
            
            <div className="relative border-t border-white/20 pt-6">
              <p className="text-sm text-blue-100 font-medium">
                — Direksi & Tim Utama Agensi
              </p>
            </div>
          </div>

          {/* Mission (Misi) */}
          <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-delay="150">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Misi Kami</h4>
            
            {/* Misi 1 */}
            <div className="flex gap-4 p-5 bg-gray-50 hover:bg-gray-100/70 rounded-2xl border border-gray-100 transition-colors">
              <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                1
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Inovasi Kualitas Produk</h5>
                <p className="text-sm text-gray-600">
                  Menghasilkan produk digital berkualitas tinggi dengan performa optimal, desain modern, serta standar keamanan terdepan.
                </p>
              </div>
            </div>

            {/* Misi 2 */}
            <div className="flex gap-4 p-5 bg-gray-50 hover:bg-gray-100/70 rounded-2xl border border-gray-100 transition-colors">
              <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                2
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Kepuasan & Kepercayaan Klien</h5>
                <p className="text-sm text-gray-600">
                  Memberikan layanan profesional yang ramah, responsif, komunikatif, dan sepenuhnya berorientasi pada kesuksesan jangka panjang klien.
                </p>
              </div>
            </div>

            {/* Misi 3 */}
            <div className="flex gap-4 p-5 bg-gray-50 hover:bg-gray-100/70 rounded-2xl border border-gray-100 transition-colors">
              <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                3
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Evolusi Teknologi Berkelanjutan</h5>
                <p className="text-sm text-gray-600">
                  Terus beradaptasi dan menerapkan tren teknologi web terbaru untuk memberikan keunggulan kompetitif bagi bisnis klien kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
