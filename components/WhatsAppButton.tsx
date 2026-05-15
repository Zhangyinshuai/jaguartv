import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
};

export function WhatsAppButton({
  label = "Fale Conosco no WhatsApp",
  className = ""
}: WhatsAppButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-extrabold text-pitch shadow-glow transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-cta"
    >
      <MessageCircle aria-hidden="true" size={20} />
      {label}
    </a>
  );
}
