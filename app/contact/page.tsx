import type { Metadata } from "next";
import { MessageCircle, Send, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe Jaguar TV pelo WhatsApp e entre no fluxo de parceiros."
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="field-lines py-14 sm:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-lime">Contato oficial</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Fale com a equipe e entre no grupo de parceiros.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                O atendimento é humano para explicar preços, condições, materiais, uso dos
                tutoriais e próximos passos para comprar card e começar a divulgar.
              </p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/7 p-5">
              <div className="grid gap-4">
                <div className="rounded-md bg-white p-5 text-ink">
                  <MessageCircle className="text-turf" size={30} aria-hidden="true" />
                  <h2 className="mt-4 text-2xl font-black">WhatsApp</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/66">
                    Canal principal para leads, onboarding e entrada na comunidade.
                  </p>
                  <div className="mt-5">
                    <WhatsAppButton className="w-full" />
                  </div>
                </div>
                <a
                  className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-pitch p-5 text-white transition hover:border-lime/60"
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="block text-sm font-black uppercase text-gold">Opcional</span>
                    <span className="mt-1 block text-lg font-black">Telegram</span>
                  </span>
                  <Send aria-hidden="true" size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-ink">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["1", "Contato", "Clique no WhatsApp e fale com a equipe oficial."],
                ["2", "Onboarding", "Receba explicação de oferta, materiais e grupo."],
                ["3", "Venda", "Use os tutoriais e divulgue para sua rede local."]
              ].map(([step, title, text]) => (
                <article className="rounded-md border border-ink/10 bg-[#f8fbf5] p-5" key={step}>
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-turf text-lg font-black text-white">
                    {step}
                  </div>
                  <h2 className="mt-5 text-xl font-black">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/66">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-md bg-ink p-5 text-white">
              <ShieldCheck className="mt-1 shrink-0 text-lime" size={24} aria-hidden="true" />
              <p className="text-sm leading-6 text-white/70">
                Este MVP não faz pagamento, cadastro automático, KYC, estoque ou comissão. O objetivo
                é concentrar leads qualificados e acelerar a conversa no WhatsApp.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
