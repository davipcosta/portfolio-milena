"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "E se eu travar ou não souber exatamente o que falar?",
    answer:
      "Fique totalmente tranquilo(a). Não existe certo ou errado na terapia, nem a obrigação de falar de tudo logo de início. Meu papel é justamente criar um ambiente acolhedor e te ajudar a organizar os pensamentos e sentimentos com calma, no seu próprio ritmo.",
  },
  {
    question: "Tudo o que eu disser em sessão é realmente protegido por sigilo?",
    answer:
      "Sim, de forma absoluta. O sigilo profissional é rigorosamente protegido pelo Código de Ética do Psicólogo (CFP). Nada do que conversamos é compartilhado com terceiros. É um espaço 100% confidencial, seguro e livre de julgamentos.",
  },
  {
    question: "O que eu preciso providenciar para a sessão online?",
    answer:
      "Apenas uma boa conexão à internet, fones de ouvido para maior privacidade e nitidez de áudio, e um espaço reservado e silencioso onde você se sinta confortável para falar livremente sem interrupções.",
  },
  {
    question: "Quanto tempo costuma durar um processo terapêutico?",
    answer:
      "A psicoterapia não tem um prazo fixo pré-determinado, pois cada pessoa vivencia processos, demandas e transformações singulares. A frequência e o momento de encerramento são sempre construídos e decididos em conjunto com você ao longo da caminhada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <Reveal className="wrap">
        <div className="section-header">
          <h2>Dúvidas frequentes</h2>
          <p className="section-subtitle">
            Iniciar a psicoterapia pode gerar algumas incertezas. Aqui estão as
            respostas para as perguntas mais comuns:
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon-wrap">
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? "rotate" : ""}`}
                    />
                  </span>
                </button>
                <div className={`faq-content ${isOpen ? "open" : ""}`}>
                  <div className="faq-content-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
