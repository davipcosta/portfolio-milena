"use client";

import Reveal from "./Reveal";
import { MessageCircle, CalendarDays, HeartHandshake } from "lucide-react";

interface StepItem {
  number: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Primeiro contato",
    description:
      "Você pode entrar em contato pelo WhatsApp para tirar suas dúvidas e conhecermos um pouco melhor sobre o que você busca. Nesse primeiro contato, também envio meu portfólio, com informações sobre as modalidades de atendimento, valores, funcionamento e localização.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Alinhamento",
    description:
      "Conversamos sobre a modalidade de atendimento e definimos um agendamento que faça sentido na sua rotina para o início do processo terapêutico.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Início do processo",
    description:
      "Na primeira sessão, teremos um momento para nos conhecermos e começarmos a construir juntos essa caminhada.",
  },
];

export default function ComoComecar() {
  return (
    <section className="passos-section" id="como-comecar">
      <Reveal className="wrap">
        <div className="section-header">
          <h2>Como começar seu processo</h2>
          <p className="section-subtitle">
            Iniciar a terapia não precisa ser burocrático ou intimidante. Veja como
            funciona a nossa jornada desde o primeiro contato:
          </p>
        </div>

        <ol className="passos-track">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="passo">
                <div className="passo-node">
                  <span className="passo-number">{step.number}</span>
                </div>
                <div className="passo-body">
                  <h3 className="passo-title">
                    <Icon size={18} className="passo-icon" aria-hidden="true" />
                    {step.title}
                  </h3>
                  <p className="passo-desc">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}
