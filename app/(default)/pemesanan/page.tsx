import type { Metadata } from "next";
import PemesananJasa from "@/components/pemesanan-jasa";

export const metadata: Metadata = {
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
