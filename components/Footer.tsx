import Link from "next/link";
import { navItems, site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-black text-white">{site.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
            Plataforma pública para recrutar, orientar e apoiar parceiros Jaguar TV durante a
            temporada da Copa do Mundo no Brasil.
          </p>
          <p className="mt-4 text-xs text-white/42">
            Conteúdo sujeito às condições comerciais informadas pela equipe oficial no WhatsApp.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-white/70">
            {navItems.map((item) => (
              <Link className="hover:text-lime" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <WhatsAppButton />
        </div>
      </div>
    </footer>
  );
}
