import type { Metadata } from "next";
import CompanyProfile from "@/components/company-profile";

export const metadata: Metadata = {
  title: "Profil Perusahaan - Solusi Website Premium",
  description: "Pelajari latar belakang agensi pengembangan digital kami.",
};

export default function ProfilePage() {
  return (
    <div className="pt-8 pb-12">
      <CompanyProfile />
    </div>
  );
}
