import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqs, tutorials } from "@/data/site";

export const metadata: Metadata = {
  title: "Tutoriais",
  description:
    "Tutoriais públicos Jaguar TV para instalação, uso de IPTV, vendas e grupos de WhatsApp."
};

export default function TutorialsPage() {
  return (
    <PageShell>
      <main>
        <section className="field-lines border-b border-white/10 py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase text-lime">Tutorials</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Aprenda a instalar, vender e organizar sua operação no WhatsApp.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
              Conteúdo público para reduzir o custo de onboarding e ajudar novos parceiros a
              começar sem esperar um treinamento formal.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 text-ink">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {tutorials.map((tutorial) => (
              <article className="rounded-md border border-ink/10 bg-[#f8fbf5] p-4" key={tutorial.title}>
                <div className="aspect-video overflow-hidden rounded-md bg-ink">
                  <iframe
                    className="h-full w-full"
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-5 flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-turf text-white">
                    <tutorial.icon aria-hidden="true" size={24} />
                  </span>
                  <div>
                    <div className="text-xs font-black uppercase text-turf">{tutorial.duration}</div>
                    <h2 className="mt-1 text-xl font-black text-ink">{tutorial.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink/66">{tutorial.summary}</p>
                  </div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-ink/72">
                  {tutorial.steps.map((step) => (
                    <li className="rounded-md bg-white px-3 py-2" key={step}>
                      {step}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <HelpCircle className="text-gold" size={32} aria-hidden="true" />
                <h2 className="mt-4 text-3xl font-black text-white">Perguntas frequentes</h2>
              </div>
              <div className="grid gap-3">
                {faqs.map((faq) => (
                  <details className="rounded-md border border-white/10 bg-white/6 p-4" key={faq.question}>
                    <summary className="cursor-pointer text-base font-bold text-white">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-white/64">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <WhatsAppButton label="Tirar dúvida no WhatsApp" />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
