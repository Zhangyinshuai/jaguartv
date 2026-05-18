import Link from "next/link";
import {
  BadgePercent,
  CheckCircle2,
  Clock3,
  Crown,
  Flame,
  Gem,
  Globe2,
  Layers3,
  ListPlus,
  Medal,
  Rocket,
  Send,
  Sparkles,
  Star,
  TimerReset
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { PageShell } from "@/components/PageShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { benefits, supportItems } from "@/data/site";

const offerBullets = [
  {
    title: "Lucro de até 60%",
    text: "Sistema de desconto por créditos para liberar margem real de revenda."
  },
  {
    title: "Painel Exclusivo",
    text: "Abra cartões, organize clientes e venda com mais controle."
  },
  {
    title: "Bônus de Lançamento",
    text: "Envie o formulário agora para solicitar o pacote inicial da Copa."
  }
];

const tiers = [
  {
    icon: Flame,
    name: "Afiliado Digital",
    label: "Em Breve",
    highlight: "Ganhe sem investir",
    description:
      "Comissão de 2 níveis: 20% nas suas vendas + 10% nas vendas da sua rede.",
    cta: "Entrar na Lista de Espera",
    featured: false
  },
  {
    icon: Medal,
    name: "Revendedor Prata",
    label: "10 Créditos",
    highlight: "40% OFF",
    description: "Acesse o painel de abertura, defina seu preço e comece com baixo risco.",
    cta: "Liberar Prata",
    featured: false
  },
  {
    icon: Star,
    name: "Revendedor Ouro",
    label: "50 Créditos",
    highlight: "50% OFF",
    description: "Margem maior para quem já vende ou quer escalar grupos e tráfego local.",
    cta: "Liberar Ouro",
    featured: true
  },
  {
    icon: Crown,
    name: "Sócio Diamante",
    label: "100 Créditos",
    highlight: "60% OFF",
    description:
      "Inclui landing page exclusiva e suporte técnico VIP 24h para operação de alto volume.",
    cta: "Liberar Diamante",
    featured: false
  }
];

const steps = [
  {
    icon: ListPlus,
    title: "Preencha o Perfil",
    text: "Conte sua experiência e volume para receber a política com maior chance de lucro."
  },
  {
    icon: Layers3,
    title: "Receba seu Painel",
    text: "Um especialista abre seu caminho para painel, materiais e rotina de venda."
  },
  {
    icon: Rocket,
    title: "Venda na Copa",
    text: "Use os criativos diários em WhatsApp e redes sociais para capturar a demanda por jogos."
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="stadium-hero">
          <div className="field-lines">
            <div className="mx-auto grid min-h-[calc(100vh-4.25rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-md border border-gold/45 bg-gold/12 px-3 py-2 text-xs font-black uppercase text-gold">
                  <Clock3 aria-hidden="true" size={16} />
                  Copa do Mundo: janela curta, demanda alta
                </div>
                <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-7xl">
                  A Copa é a sua chance de lucrar! Revenda Jaguar TV com até 60% de margem.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                  Preencha seu perfil, desbloqueie sua condição de revenda e receba o caminho
                  certo para vender durante o pico de futebol ao vivo.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ember px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(255,91,61,0.32)] transition hover:bg-gold hover:text-pitch focus:outline-none focus:ring-2 focus:ring-gold"
                    href="#lead-form"
                  >
                    <BadgePercent aria-hidden="true" size={20} />
                    Liberar Meu Desconto Agora
                  </Link>
                  <WhatsAppButton label="Falar com Suporte no WhatsApp" className="bg-white/10 text-white shadow-none ring-1 ring-white/16 hover:bg-lime hover:text-pitch" />
                </div>
                <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {["Perfil qualificado", "Desconto por créditos", "Painel próprio", "Copa com demanda"].map(
                    (item) => (
                      <div
                        className="rounded-md border border-white/10 bg-pitch/58 p-3 text-sm font-semibold text-white/78"
                        key={item}
                      >
                        <CheckCircle2 className="mb-2 text-lime" size={18} aria-hidden="true" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="rounded-md border border-white/12 bg-pitch/78 p-5 shadow-glow backdrop-blur">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-bold uppercase text-gold">Oferta de Copa</p>
                    <p className="mt-2 text-3xl font-black text-white">Condição VIP</p>
                  </div>
                  <Gem className="text-gold" size={44} aria-hidden="true" />
                </div>
                <div className="grid gap-4 py-5">
                  {offerBullets.map((item) => (
                    <div className="flex gap-3 text-sm leading-6 text-white/78" key={item.title}>
                      <CheckCircle2 className="mt-1 shrink-0 text-lime" size={18} aria-hidden="true" />
                      <div>
                        <strong className="block text-base text-white">{item.title}</strong>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-black text-pitch transition hover:bg-gold"
                  href="#lead-form"
                >
                  <Send aria-hidden="true" size={19} />
                  Liberar Meu Desconto Agora
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LeadForm />

        <section className="field-lines py-14 sm:py-18" id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-gold">Pricing & Tiers</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Escolha a escada de lucro certa para sua fase.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/64">
                Quanto maior o volume de créditos, maior a margem. O formulário ajuda o time a
                indicar o plano mais inteligente para seu perfil.
              </p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {tiers.map((tier) => (
                <article
                  className={`rounded-md border p-5 ${
                    tier.featured
                      ? "border-gold bg-gold/12 shadow-glow"
                      : "border-white/10 bg-white/6"
                  }`}
                  key={tier.name}
                >
                  <tier.icon className={tier.featured ? "text-gold" : "text-lime"} size={30} aria-hidden="true" />
                  <p className="mt-4 text-xs font-black uppercase text-white/54">{tier.label}</p>
                  <h3 className="mt-1 text-xl font-black text-white">{tier.name}</h3>
                  <p className="mt-3 text-3xl font-black text-gold">{tier.highlight}</p>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-white/68">{tier.description}</p>
                  <Link
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-black text-pitch transition hover:bg-lime"
                    href="#lead-form"
                  >
                    {tier.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 text-ink sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-turf">Lucro rápido em 3 passos</p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                Menos teoria, mais caminho de venda.
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <article className="rounded-md border border-ink/10 bg-[#f7faf4] p-5" key={step.title}>
                  <div className="flex items-center justify-between">
                    <step.icon className="text-turf" size={30} aria-hidden="true" />
                    <span className="text-4xl font-black text-ink/10">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{step.text}</p>
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
                  Material, painel e suporte para o parceiro vender sem travar.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/64">
                  O parceiro preenche o perfil, recebe orientação e entra com uma rotina clara de
                  divulgação para WhatsApp, status e redes sociais.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {supportItems.map((item) => (
                  <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/6 p-5" key={item.label}>
                    {"badge" in item ? (
                      <span className="absolute right-3 top-3 rounded-md bg-ember px-2 py-1 text-[10px] font-black uppercase text-white">
                        {item.badge}
                      </span>
                    ) : null}
                    <item.icon className="text-lime" size={26} aria-hidden="true" />
                    <p className="mt-4 text-sm font-bold text-white/54">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 text-ink sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-turf">Por que agora</p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                A procura por futebol ao vivo já virou conversa de grupo.
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

        <section className="bg-ember py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase text-gold">
                <TimerReset aria-hidden="true" size={18} />
                Faltam poucos dias para a Copa
              </div>
              <h2 className="mt-3 max-w-4xl text-3xl font-black">
                Seus clientes já estão procurando onde assistir. Não perca essa venda!
              </h2>
            </div>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-pitch transition hover:bg-lime"
              href="#lead-form"
            >
              <Sparkles aria-hidden="true" size={19} />
              Garantir condição VIP
            </Link>
          </div>
        </section>

        <section className="bg-turf py-12 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase text-gold">
                <Globe2 aria-hidden="true" size={18} />
                Brasil, mobile-first, português
              </div>
              <h2 className="mt-3 text-3xl font-black">Formulário primeiro, atendimento mais preciso.</h2>
            </div>
            <WhatsAppButton label="Falar com Suporte no WhatsApp" />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
