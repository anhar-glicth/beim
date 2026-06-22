"use client";

import { useState } from "react";

export default function PemesananJasa() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    perusahaan: "",
    paket: "company-profile",
    detail: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const packages = [
    { id: "company-profile", label: "Website Company Profile (Mulai Rp 1.999.000)" },
    { id: "ecommerce", label: "Toko Online / E-Commerce (Mulai Rp 3.499.000)" },
    { id: "custom-web", label: "Aplikasi Web Kustom / SaaS (Hubungi Kami)" },
    { id: "seo-optimasi", label: "Optimasi SEO & Performa (Mulai Rp 999.000)" }
  ];

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.nama.trim()) tempErrors.nama = "Nama lengkap wajib diisi.";
    if (!formData.email.trim()) {
      tempErrors.email = "Alamat email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid.";
    }
    if (!formData.whatsapp.trim()) {
      tempErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    } else if (!/^[0-9+ ]{8,15}$/.test(formData.whatsapp.trim())) {
      tempErrors.whatsapp = "Nomor WhatsApp tidak valid (minimal 8-15 angka).";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedId = `ORD-${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, "0")}${new Date().getDate().toString().padStart(2, "0")}-${Math.floor(100 + Math.random() * 900)}`;
      setOrderId(generatedId);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      nama: "",
      email: "",
      whatsapp: "",
      perusahaan: "",
      paket: "company-profile",
      detail: ""
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="pemesanan" className="relative py-12 md:py-20 bg-gray-50/50 border-b border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="pb-12 text-center" data-aos="fade-up">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
            Form Pemesanan
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Pemesanan Jasa Pembuatan Website
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lengkapi formulir di bawah ini untuk memesan jasa pembuatan website. Tim kami akan segera menghubungi Anda melalui WhatsApp dalam waktu 1x24 jam.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100/80" data-aos="fade-up" data-aos-delay="100">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold text-gray-950 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.nama ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'} focus:outline-hidden focus:ring-2`}
                    placeholder="Nama Lengkap Anda"
                  />
                  {errors.nama && <p className="text-xs text-red-500 mt-1">{errors.nama}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-950 mb-2">
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'} focus:outline-hidden focus:ring-2`}
                    placeholder="nama@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-950 mb-2">
                    Nomor WhatsApp / Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.whatsapp ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'} focus:outline-hidden focus:ring-2`}
                    placeholder="Contoh: 081234567890"
                  />
                  {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
                </div>

                {/* Nama Perusahaan */}
                <div>
                  <label htmlFor="perusahaan" className="block text-sm font-semibold text-gray-950 mb-2">
                    Nama Perusahaan / Organisasi <span className="text-gray-400">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    id="perusahaan"
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:outline-hidden focus:ring-2"
                    placeholder="Nama Perusahaan Anda"
                  />
                </div>
              </div>

              {/* Paket Jasa */}
              <div>
                <label htmlFor="paket" className="block text-sm font-semibold text-gray-950 mb-2">
                  Pilih Paket Website <span className="text-red-500">*</span>
                </label>
                <select
                  id="paket"
                  name="paket"
                  value={formData.paket}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:outline-hidden focus:ring-2 bg-white"
                >
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Detail Kebutuhan */}
              <div>
                <label htmlFor="detail" className="block text-sm font-semibold text-gray-950 mb-2">
                  Detail Kebutuhan / Keterangan Lainnya
                </label>
                <textarea
                  id="detail"
                  name="detail"
                  rows={4}
                  value={formData.detail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:outline-hidden focus:ring-2"
                  placeholder="Ceritakan gambaran website yang Anda inginkan (misal: jumlah halaman, referensi desain, dsb.)"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center gap-2 cursor-pointer disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirimkan Permintaan...
                    </>
                  ) : (
                    "Kirim Formulir Pemesanan"
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-8 space-y-6" data-aos="zoom-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Terima Kasih, Pemesanan Berhasil!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Permintaan pemesanan Anda telah kami terima. ID Pesanan Anda adalah:
                </p>
                <div className="mt-3 inline-block bg-gray-100 px-4 py-2 rounded-lg font-mono font-bold text-gray-800 text-lg border border-gray-200">
                  {orderId}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-2xl max-w-md mx-auto text-left space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-500">Nama Pemesan:</span>
                  <span className="font-semibold text-gray-900">{formData.nama}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-500">Email:</span>
                  <span className="font-semibold text-gray-900">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-500">WhatsApp:</span>
                  <span className="font-semibold text-gray-900">{formData.whatsapp}</span>
                </div>
                {formData.perusahaan && (
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Perusahaan:</span>
                    <span className="font-semibold text-gray-900">{formData.perusahaan}</span>
                  </div>
                )}
                <div className="flex justify-between pb-1">
                  <span className="font-semibold text-gray-500">Paket Dipilih:</span>
                  <span className="font-semibold text-blue-600">
                    {packages.find(p => p.id === formData.paket)?.label.split(" (")[0]}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs text-gray-500 mb-6">
                  *Salinan detail pesanan juga telah dikirim ke alamat email Anda.
                </p>
                <button
                  onClick={handleReset}
                  className="btn bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-6 rounded-xl transition-colors cursor-pointer"
                >
                  Buat Pesanan Baru
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
