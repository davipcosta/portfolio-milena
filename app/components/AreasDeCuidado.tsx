"use client";

import Reveal from "./Reveal";
import {
  Brain,
  Compass,
  Sparkles,
  HeartHandshake,
  Heart,
  Feather,
} from "lucide-react";

interface AreaItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const areas: AreaItem[] = [
  {
    icon: Brain,
    title: "Ansiedade e angústia",
    description:
      "Quando algo dentro de você parece pedir atenção, seja pela preocupação, pelo excesso de pensamentos, pela sensação de inquietação ou por sentimentos que nem sempre são fáceis de compreender.",
  },
  {
    icon: Compass,
    title: "Transições de vida",
    description:
      "Mudanças e períodos de passagem, como tornar-se adulto, iniciar ou encerrar ciclos, mudar de caminhos e se adaptar ao novo.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento e autopercepção",
    description:
      "Um espaço para compreender melhor o que você sente, deseja, precisa e os sentidos que tem construído para sua própria história.",
  },
  {
    icon: HeartHandshake,
    title: "Vínculos e relacionamentos",
    description:
      "Conflitos, ciúmes e possibilidades de construir relações mais saudáveis e significativas, compreendendo diferentes modos de se relacionar consigo e com o outro.",
  },
  {
    icon: Heart,
    title: "Autoestima e autoimagem",
    description:
      "A relação que você constrói consigo, com seu corpo, suas escolhas e a forma como se percebe.",
  },
  {
    icon: Feather,
    title: "Perdas e lutos",
    description:
      "Atravessar despedidas, rupturas e diferentes experiências de perda, incluindo aquelas que nem sempre são reconhecidas como luto.",
  },
];

export default function AreasDeCuidado() {
  return (
    <section className="areas-section" id="areas">
      <Reveal className="wrap">
        <div className="section-header">
          <h2>O que podemos trabalhar em sessão</h2>
          <p className="section-subtitle">
            A psicoterapia pode ser um espaço para olhar com mais cuidado para
            diferentes questões e momentos da vida, como:
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
