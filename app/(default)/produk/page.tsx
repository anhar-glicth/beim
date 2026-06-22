import Produk from "@/components/produk";

export const metadata = {
  title: "Produk & Layanan - Solusi Website Premium",
  description: "Daftar layanan pembuatan website, toko online, custom web app, dan SEO.",
};

export default function ProdukPage() {
  return (
    <div className="pt-8 pb-12">
      <Produk />
    </div>
  );
}
