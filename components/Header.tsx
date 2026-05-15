import Link from "next/link";
import { Menu, MonitorPlay } from "lucide-react";
import { navItems, site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-pitch/88 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Jaguar TV Parceiros">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-lime text-pitch">
            <MonitorPlay aria-hidden="true" size={24} />
          </span>
          <span>
            <strong className="block text-sm font-black uppercase tracking-wide text-white">
              {site.name}
            </strong>
            <span className="hidden text-xs text-white/62 sm:block">Brasil Partner Hub</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/72 md:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-lime" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <WhatsAppButton label="WhatsApp" className="min-h-10 px-4 py-2" />
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/12 text-white md:hidden"
          aria-label="Abrir menu"
          type="button"
        >
          <Menu aria-hidden="true" size={22} />
        </button>
      </div>
    </header>
  );
}
