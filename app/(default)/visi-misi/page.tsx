import type { Metadata } from "next";
import VisiMisi from "@/components/visi-misi";

export const metadata: Metadata = {
  title: "Visi & Misi - Solusi Website Premium",
  description: "Arah, visi, dan komitmen agensi kami dalam melayani pelanggan.",
};

export default function VisiMisiPage() {
  return (
    <div className="pt-8 pb-12">
      <VisiMisi />
    </div>
  );
}
