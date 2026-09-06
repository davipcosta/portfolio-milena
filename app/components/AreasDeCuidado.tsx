"use client";

import Reveal from "./Reveal";
import {
  Compass,
  Sparkles,
  HeartHandshake,
  Brain,
  BatteryLow,
  SunMedium,
} from "lucide-react";

interface AreaItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const areas: AreaItem[] = [
  {
    icon: Brain,
    title: "Ansiedade e Angústia",
    description:
      "Quando os pensamentos se aceleram, o peito aperta e a rotina parece pesada demais para carregar sozinho.",
  },
  {
    icon: Compass,
    title: "Transições de Vida",
    description:
      "Mudanças de carreira, términos de ciclos, mudanças de cidade e fases que exigem reconstruir caminhos.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento & Autoestima",
    description:
      "Reconectar-se com a sua essência para além das expectativas alheias, acolhendo sua própria história.",
  },
  {
    icon: HeartHandshake,
    title: "Relações e Vínculos",
    description:
      "Construção de limites saudáveis, comunicação mais sincera e compreensão dos padrões nos seus relacionamentos.",
  },
  {
    icon: BatteryLow,
    title: "Sobrecarga e Esgotamento",
    description:
      "A sensação constante de dar conta de tudo e se deixar em último lugar. Um espaço para reencontrar o próprio ritmo.",
  },
  {
    icon: SunMedium,
    title: "Luto e Processos de Perda",
    description:
      "Acolhimento da dor de perder alguém querido, um projeto significativo ou fases importantes da vida.",
  },
];

export default function AreasDeCuidado() {
  return (
    <section className="areas-section" id="areas">
      <Reveal className="wrap">
        <div className="section-header">
          <h2>O que podemos trabalhar em sessão</h2>
          <p className="section-subtitle">
            Cada pessoa traz uma história única. Abaixo estão algumas das
            questões mais presentes nos atendimentos:
          </p>
        </div>

        <div className="areas-grid">
          {areas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="area-card"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="area-icon-wrap">
                  <Icon size={22} className="area-icon" />
                </div>
                <h3 className="area-title">{item.title}</h3>
                <p className="area-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
