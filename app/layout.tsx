import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Jaguar TV Parceiros | Revenda IPTV Brasil",
    template: "%s | Jaguar TV Parceiros"
  },
  description:
    "Plataforma de recrutamento e suporte para parceiros Jaguar TV no Brasil: tutoriais, materiais de divulgação e contato rápido por WhatsApp.",
  keywords: site.keywords,
  openGraph: {
    title: "Jaguar TV Parceiros",
    description:
      "Comece sua operação de revenda com suporte, materiais prontos e contato direto pelo WhatsApp.",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
