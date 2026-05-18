import {
  BadgeCheck,
  BookOpen,
  Download,
  Flame,
  MessageCircle,
  PlayCircle,
  Share2,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users,
  Zap
} from "lucide-react";

export const site = {
  name: "Jaguar TV Parceiros",
  tagline: "Plataforma oficial para parceiros Jaguar TV no Brasil",
  whatsappNumber: "5599999999999",
  telegramUrl: "https://t.me/jaguartvparceiros",
  whatsappMessage:
    "Olá, quero ser parceiro Jaguar TV para vender durante a Copa do Mundo.",
  keywords: [
    "IPTV reseller",
    "revenda IPTV",
    "futebol ao vivo",
    "World Cup streaming",
    "IPTV parceiro",
    "IPTV afiliado",
    "canais ao vivo",
    "sports streaming"
  ]
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Tutoriais", href: "/tutorials" },
  { label: "Materiais", href: "/materials" },
  { label: "Contato", href: "/contact" }
];

export const benefits = [
  {
    icon: Trophy,
    title: "Janela da Copa",
    text: "A demanda por futebol ao vivo cresce rápido. Entre antes do pico e organize sua base de clientes."
  },
  {
    icon: Flame,
    title: "Preço para revenda",
    text: "Condições de fornecimento a partir de 40% do preço de tabela para parceiros ativos."
  },
  {
    icon: MessageCircle,
    title: "Suporte no WhatsApp",
    text: "Atendimento humano, grupo de parceiros e respostas rápidas para começar sem fricção."
  },
  {
    icon: Share2,
    title: "Conteúdo pronto",
    text: "Textos, banners, vídeos curtos e artes de futebol para divulgar em grupos e redes sociais."
  }
];

export const supportItems = [
  { icon: BookOpen, label: "Tutoriais públicos", value: "Instalação, uso e venda" },
  {
    icon: Download,
    label: "Materiais abertos",
    value: "Posts, banners e copies",
    badge: "Atualizado Diariamente"
  },
  { icon: Users, label: "Comunidade", value: "Grupo para troca e suporte" },
  { icon: ShieldCheck, label: "Marca confiável", value: "Processo simples e direto" }
];

export const tutorials = [
  {
    icon: Smartphone,
    title: "Como instalar o app Jaguar TV",
    duration: "4 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Passo a passo para Android TV, TV Box e celulares Android.",
    steps: ["Baixe o app oficial", "Instale no dispositivo", "Entre com seus dados", "Teste canais e suporte"]
  },
  {
    icon: PlayCircle,
    title: "Como usar IPTV e canais ao vivo",
    duration: "6 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Visão geral de navegação, busca por canais e organização de favoritos.",
    steps: ["Abra a lista de canais", "Use busca por nome", "Marque favoritos", "Oriente clientes com clareza"]
  },
  {
    icon: Zap,
    title: "Como começar a vender hoje",
    duration: "8 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Modelo simples para conversar, demonstrar valor e fechar os primeiros clientes.",
    steps: ["Defina seu público", "Use materiais oficiais", "Convide para teste guiado", "Finalize pelo WhatsApp"]
  },
  {
    icon: Users,
    title: "Como criar um grupo no WhatsApp",
    duration: "5 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Estrutura básica de grupo, mensagens fixadas e rotina de ofertas.",
    steps: ["Crie um grupo temático", "Fixe regras simples", "Publique jogos do dia", "Responda dúvidas rápido"]
  }
];

export const materials = [
  {
    category: "Futebol",
    title: "Pack de artes para jogos",
    format: "PNG",
    text: "Cartazes prontos para divulgar partidas, horários e chamada para teste."
  },
  {
    category: "Copa do Mundo",
    title: "Banners de campanha",
    format: "JPG",
    text: "Peças horizontais para status, grupos e páginas de venda."
  },
  {
    category: "WhatsApp",
    title: "Copies de abordagem",
    format: "TXT",
    text: "Mensagens curtas para convite, follow-up e fechamento."
  },
  {
    category: "Vídeo curto",
    title: "Roteiros para Reels",
    format: "MP4/TXT",
    text: "Ideias de vídeos rápidos para mostrar oportunidade e suporte."
  },
  {
    category: "Programação",
    title: "Posts de canais ao vivo",
    format: "PNG",
    text: "Modelos para destacar esportes, filmes, séries e conteúdo familiar."
  },
  {
    category: "Marca",
    title: "Kit visual Jaguar TV",
    format: "ZIP",
    text: "Logo, paleta, cards de benefícios e peças de CTA."
  }
];

export const faqs = [
  {
    question: "Preciso pagar para falar com a equipe?",
    answer: "Não. O primeiro contato é pelo WhatsApp e a equipe explica as condições de parceria."
  },
  {
    question: "O site tem cadastro automático?",
    answer: "Não nesta fase. O MVP prioriza contato rápido e onboarding humano para reduzir dúvidas."
  },
  {
    question: "Posso acessar tutoriais e materiais sem login?",
    answer: "Sim. Tudo é público para acelerar o início da divulgação."
  },
  {
    question: "O foco é somente Brasil?",
    answer: "Sim. A comunicação, SEO e WhatsApp foram pensados para o mercado brasileiro."
  }
];
