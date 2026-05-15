import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-pitch text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
