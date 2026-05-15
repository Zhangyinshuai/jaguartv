import Link from "next/link";
import { ArrowRight, BadgePercent, CheckCircle2, Clock3, Globe2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { benefits, supportItems } from "@/data/site";

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="stadium-hero">
          <div className="field-lines">
            <div className="mx-auto grid min-h-[calc(100vh-4.25rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-md border border-lime/40 bg-lime/10 px-3 py-2 text-xs font-black uppercase text-lime">
                  <Clock3 aria-hidden="true" size={16} />
                  Copa do Mundo: janela de crescimento aberta
                </div>
                <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-7xl">
                  Seja parceiro Jaguar TV e venda para o público que quer futebol ao vivo.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                  Uma plataforma simples para entrar em contato, receber orientação, acessar
                  tutoriais e começar a divulgar Jaguar TV no Brasil com materiais prontos.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton label="Quero ser parceiro agora" />
                  <Link
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/16 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-lime/60 hover:text-lime"
                    href="/materials"
                  >
                    Ver materiais
                    <ArrowRight aria-hidden="true" size={18} />
                  </Link>
                </div>
                <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {["WhatsApp direto", "Tutoriais abertos", "Materiais prontos", "Sem cadastro"].map(
                    (item) => (
                      <div
                        className="rounded-md border border-white/10 bg-pitch/58 p-3 text-sm font-semibold text-white/76"
                        key={item}
                      >
                        <CheckCircle2 className="mb-2 text-lime" size={18} aria-hidden="true" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="rounded-md border border-white/12 bg-pitch/74 p-5 shadow-glow backdrop-blur">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-bold uppercase text-lime">Oferta de parceiro</p>
                    <p className="mt-2 text-3xl font-black text-white">Até 60% off</p>
                  </div>
                  <BadgePercent className="text-gold" size={44} aria-hidden="true" />
                </div>
                <div className="grid gap-4 py-5">
                  {[
                    "Fornecimento com preço especial para revenda",
                    "Grupo de suporte para parceiros no WhatsApp",
                    "Roteiros e artes para acelerar divulgação",
                    "Onboarding simples com atendimento humano"
                  ].map((item) => (
                    <div className="flex gap-3 text-sm leading-6 text-white/76" key={item}>
                      <CheckCircle2 className="mt-1 shrink-0 text-lime" size={18} aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
                <WhatsAppButton className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 text-ink sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-turf">Por que agora</p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                O MVP foca no que converte: WhatsApp Leads.
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {benefits.map((benefit) => (
                <article className="rounded-md border border-ink/10 bg-[#f7faf4] p-5" key={benefit.title}>
                  <benefit.icon className="text-turf" size={28} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="field-lines py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase text-gold">Suporte oficial</p>
                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Menos dúvida, mais velocidade para começar.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/64">
                  O parceiro entra pelo WhatsApp, recebe orientação, acessa conteúdo público e
                  começa a promover com uma rotina simples para grupos, status e redes sociais.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {supportItems.map((item) => (
                  <div className="rounded-md border border-white/10 bg-white/6 p-5" key={item.label}>
                    <item.icon className="text-lime" size={26} aria-hidden="true" />
                    <p className="mt-4 text-sm font-bold text-white/54">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-turf py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase text-gold">
                <Globe2 aria-hidden="true" size={18} />
                Brasil, mobile-first, português
              </div>
              <h2 className="mt-3 text-3xl font-black">Pronto para captar parceiros pela Copa.</h2>
            </div>
            <WhatsAppButton label="Falar com equipe oficial" />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
