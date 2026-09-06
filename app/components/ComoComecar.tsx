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
      "Você me envia uma mensagem no WhatsApp. É uma conversa inicial sem compromisso para tirar dúvidas, saber sobre horários disponíveis e entender se faz sentido para você.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Alinhamento de horários",
    description:
      "Definimos o formato mais conveniente, presencial em Belém (PA) ou online por videochamada, e escolhemos um horário que se encaixe na sua rotina semanal.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Primeira sessão de acolhimento",
    description:
      "Nosso primeiro encontro de 50 minutos. Um espaço seguro e sem julgamentos para você chegar como está, sem necessidade de preparar nada com antecedência.",
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

        <div className="passos-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="passo-card">
                <div className="passo-top">
                  <span className="passo-number">{step.number}</span>
                  <div className="passo-icon-wrap">
                    <Icon size={20} className="passo-icon" />
                  </div>
                </div>
                <h3 className="passo-title">{step.title}</h3>
                <p className="passo-desc">{step.description}</p>
                
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
