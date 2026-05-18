"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const experienceOptions = [
  { value: "iniciante", label: "Iniciante", helper: "Quero começar e ganhar renda extra" },
  { value: "experiente", label: "Já revendo outras marcas", helper: "Tenho operação ou clientes ativos" }
];

const volumeOptions = [
  "Estou começando agora",
  "1 a 50 clientes",
  "51 a 200 clientes",
  "Mais de 200 clientes"
];

const brandOptions = ["NexaTV", "Flixxcine", "UniTV", "NovaTV", "LupiTV"];

const challengeOptions = [
  "Preço alto",
  "Painel ruim/difícil",
  "Falta de suporte",
  "Não sei como atrair clientes"
];

export function LeadForm() {
  const [experience, setExperience] = useState("iniciante");
  const [submitted, setSubmitted] = useState(false);
  const isExperienced = experience === "experiente";

  const qualificationNote = useMemo(() => {
    if (isExperienced) {
      return "Perfil de revenda detectado: informe marcas e volume para receber prioridade comercial.";
    }

    return "Perfil iniciante: vamos indicar o pacote de entrada e o material mais simples para começar.";
  }, [isExperienced]);

  return (
    <section className="bg-white py-14 text-ink sm:py-18" id="lead-form">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-black uppercase text-ember">Formulário VIP</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Preencha o formulário abaixo para garantir sua condição VIP de Copa do Mundo!
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/68">
            Use este perfil para liberar a melhor condição, receber atendimento correto e evitar
            fila no suporte. Quanto mais claro o seu cenário, mais rápido o time consegue te
            encaixar no plano certo.
          </p>
          <div className="mt-6 rounded-md border border-turf/20 bg-[#ecf8e3] p-4 text-sm font-bold text-turf">
            {qualificationNote}
          </div>
        </div>

        <form
          className="rounded-md border border-ink/10 bg-[#f8fbf5] p-4 shadow-[0_18px_60px_rgba(16,21,20,0.08)] sm:p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-ink">
              Nome
              <input
                className="min-h-12 rounded-md border border-ink/12 bg-white px-4 text-sm font-semibold outline-none transition focus:border-turf focus:ring-2 focus:ring-turf/18"
                name="name"
                placeholder="Seu nome"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-ink">
              WhatsApp / Telegram
              <input
                className="min-h-12 rounded-md border border-ink/12 bg-white px-4 text-sm font-semibold outline-none transition focus:border-turf focus:ring-2 focus:ring-turf/18"
                name="contact"
                placeholder="+55..."
                required
              />
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-black text-ink">Qual é a sua experiência atual?</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {experienceOptions.map((option) => (
                <label
                  className={`cursor-pointer rounded-md border p-4 transition ${
                    experience === option.value
                      ? "border-turf bg-white shadow-sm"
                      : "border-ink/10 bg-white/60 hover:border-turf/40"
                  }`}
                  key={option.value}
                >
                  <input
                    checked={experience === option.value}
                    className="sr-only"
                    name="experience"
                    onChange={() => setExperience(option.value)}
                    type="radio"
                    value={option.value}
                  />
                  <span className="block text-sm font-black text-ink">{option.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-ink/60">{option.helper}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-black text-ink">
              Qual é o seu volume atual de clientes?
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {volumeOptions.map((option) => (
                <label className="flex cursor-pointer items-center gap-3 rounded-md border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink/76 hover:border-turf/40" key={option}>
                  <input className="h-4 w-4 accent-turf" name="volume" required type="radio" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          {isExperienced ? (
            <fieldset className="mt-6 rounded-md border border-gold/40 bg-gold/10 p-4">
              <legend className="px-1 text-sm font-black text-ink">
                Quais marcas você já revende ou revendeu?
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {brandOptions.map((brand) => (
                  <label className="flex cursor-pointer items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-semibold text-ink/76" key={brand}>
                    <input className="h-4 w-4 accent-turf" name="brands" type="checkbox" />
                    {brand}
                  </label>
                ))}
              </div>
              <label className="mt-3 grid gap-2 text-sm font-black text-ink">
                Outras marcas
                <input
                  className="min-h-12 rounded-md border border-ink/12 bg-white px-4 text-sm font-semibold outline-none transition focus:border-turf focus:ring-2 focus:ring-turf/18"
                  name="otherBrands"
                  placeholder="Escreva abaixo"
                />
              </label>
            </fieldset>
          ) : null}

          <fieldset className="mt-6">
            <legend className="text-sm font-black text-ink">
              Qual é o seu maior desafio hoje?
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {challengeOptions.map((option) => (
                <label className="flex cursor-pointer items-center gap-3 rounded-md border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink/76 hover:border-turf/40" key={option}>
                  <input className="h-4 w-4 accent-turf" name="challenges" type="checkbox" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-ember px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(255,91,61,0.28)] transition hover:bg-turf focus:outline-none focus:ring-2 focus:ring-ember/40"
            type="submit"
          >
            <Send aria-hidden="true" size={19} />
            Enviar e Receber Oferta
          </button>

          {submitted ? (
            <div className="mt-4 flex items-start gap-3 rounded-md border border-turf/20 bg-white p-4 text-sm leading-6 text-ink/70">
              <CheckCircle2 className="mt-1 shrink-0 text-turf" size={20} aria-hidden="true" />
              Perfil recebido nesta demonstração. Para produção, conecte este formulário ao CRM,
              Google Sheets, webhook ou atendimento oficial.
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
