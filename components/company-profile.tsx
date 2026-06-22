"use client";

export default function CompanyProfile() {
  return (
    <section id="profile" className="relative bg-gray-50/50 py-12 md:py-20 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right">
            <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
              Profil Perusahaan
            </div>
            <h2 className="text-3xl font-bold md:text-4xl text-gray-900 mb-6 tracking-tight">
              Membangun Solusi Digital Terbaik untuk Bisnis Anda
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Kami adalah agensi pengembangan digital terkemuka yang berfokus pada penyediaan solusi teknologi modern, responsif, dan premium. Dengan tim yang berpengalaman, kami berkomitmen untuk mentransformasi ide bisnis Anda menjadi produk digital yang bernilai tinggi dan berdaya saing di era digital.
            </p>
            <p className="text-gray-600 mb-8">
              Mulai dari situs web profil perusahaan yang elegan, sistem e-commerce berskala besar, hingga optimasi performa dan SEO website Anda—kami siap membantu Anda mencapai audiens secara lebih luas dan efisien.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="150">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Website Selesai</div>
              <div className="text-xs text-gray-500">Proyek sukses diserahkan ke klien di berbagai sektor.</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">99%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Kepuasan Klien</div>
              <div className="text-xs text-gray-500">Komitmen kami terhadap kualitas pelayanan dan komunikasi.</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">5+ Tahun</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Pengalaman</div>
              <div className="text-xs text-gray-500">Membangun teknologi andal dengan praktik industri terbaik.</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">15+</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Ahli Profesional</div>
              <div className="text-xs text-gray-500">Tim desainer, pengembang, dan spesialis digital handal.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
