import type { Metadata } from "next";
import { Download, FileText, Image as ImageIcon, Video } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { materials } from "@/data/site";

export const metadata: Metadata = {
  title: "Materiais",
  description:
    "Materiais públicos Jaguar TV para divulgação: artes de futebol, banners, textos para WhatsApp e roteiros de vídeos."
};

const formatIcons = {
  PNG: ImageIcon,
  JPG: ImageIcon,
  TXT: FileText,
  "MP4/TXT": Video,
  ZIP: Download
};

export default function MaterialsPage() {
  return (
    <PageShell>
      <main>
        <section className="field-lines py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase text-gold">Materials</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Materiais prontos para acelerar sua divulgação.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
              Packs públicos para usar em status, grupos, páginas, anúncios e conversas de venda
              durante a Copa do Mundo.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 text-ink">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {materials.map((material) => {
                const Icon = formatIcons[material.format as keyof typeof formatIcons] ?? Download;
                return (
                  <article
                    className="rounded-md border border-ink/10 bg-[#f8fbf5] p-5"
                    key={material.title}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-md bg-turf px-3 py-1 text-xs font-black uppercase text-white">
                        {material.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-black text-turf">
                        <Icon aria-hidden="true" size={16} />
                        {material.format}
                      </span>
                    </div>
                    <h2 className="mt-5 text-xl font-black text-ink">{material.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink/66">{material.text}</p>
                    <a
                      className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink/12 px-4 py-2 text-sm font-black text-ink transition hover:border-turf hover:text-turf"
                      href="#download"
                    >
                      <Download aria-hidden="true" size={18} />
                      Baixar pack
                    </a>
                  </article>
                );
              })}
            </div>
            <div
              className="mt-8 rounded-md border border-turf/18 bg-[#eaf7df] p-5 text-sm leading-6 text-ink/72"
              id="download"
            >
              Os arquivos finais podem ser adicionados em uma pasta estática depois. Neste MVP, a
              página já deixa os packs indexáveis e organiza a demanda para contato via WhatsApp.
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-lime">Precisa do pack completo?</p>
              <h2 className="mt-2 text-3xl font-black text-white">Peça acesso pelo WhatsApp.</h2>
            </div>
            <WhatsAppButton label="Receber materiais" />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
