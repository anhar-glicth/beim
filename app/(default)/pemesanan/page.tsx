import PemesananJasa from "@/components/pemesanan-jasa";

export const metadata = {
  title: "Pemesanan Jasa - Solusi Website Premium",
  description: "Formulir interaktif pemesanan jasa pembuatan website dan layanan digital lainnya.",
};

export default function PemesananPage() {
  return (
    <div className="pt-8 pb-12">
      <PemesananJasa />
    </div>
  );
}
