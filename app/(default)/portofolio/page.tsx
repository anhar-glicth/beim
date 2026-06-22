import type { Metadata } from "next";
import Portofolio from "@/components/portofolio";

export const metadata: Metadata = {
  title: "Portofolio - Solusi Website Premium",
  description: "Proyek-proyek unggulan yang telah kami selesaikan untuk berbagai klien dari berbagai industri.",
};

export default function PortofolioPage() {
  return (
    <div className="pt-8 pb-12">
      <Portofolio />
    </div>
  );
}
