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
      "Fique à vontade. Não existe certo ou errado na terapia, nem obrigação de falar sobre tudo logo de início. Meu papel é justamente criar um ambiente acolhedor e te ajudar a organizar os seus pensamentos e sentimentos com calma, respeitando o seu próprio ritmo.",
  },
  {
    question: "Tudo o que eu disser em sessão é realmente protegido por sigilo?",
    answer:
      "Sim, o sigilo profissional é um dos princípios fundamentais da psicologia. As informações compartilhadas durante o processo terapêutico são preservadas e não são compartilhadas com outras pessoas. Existem situações excepcionais, previstas pelas normas profissionais e pela legislação, como situações que envolvam risco à vida ou à integridade da pessoa atendida ou de terceiros, em que o sigilo pode precisar ser relativizado. Nesses casos, os limites éticos são considerados com cuidado, buscando preservar a pessoa atendida.",
  },
  {
    question: "O que eu preciso providenciar para a sessão online?",
    answer:
      "Você não precisa ter um ambiente perfeito. O mais importante é encontrar, dentro do possível, um espaço em que tenha privacidade e consiga se sentir à vontade durante a sessão. Uma boa conexão com a internet e, se preferir, o uso de fones de ouvido também podem ajudar. O atendimento é realizado através do Google Meet.",
  },
  {
    question: "O que preciso providenciar para a sessão presencial?",
    answer:
      "Não é preciso nenhum preparo especial. O mais importante é chegar no horário combinado e reservar aquele momento para você. Como trânsito e chuva podem fazer parte da rotina em Belém, vale considerar esses imprevistos ao se organizar para a sessão.",
  },
  {
    question: "Quanto tempo dura uma sessão e quanto tempo costuma durar todo o processo terapêutico?",
    answer:
      "Cada sessão tem duração média de 50 minutos. Já o processo terapêutico não tem um prazo fechado. Cada pessoa tem seu próprio percurso, e a duração pode variar de acordo com suas necessidades, questões e objetivos. Ao longo do acompanhamento, vamos percebendo os caminhos do processo e conversando sobre suas necessidades e os próximos passos.",
  },
  {
    question: "E se eu precisar cancelar ou remarcar uma sessão?",
    answer:
      "Estabelecemos um combinado de aviso prévio para cancelamentos e remarcações, para que seja possível reorganizar o horário da sessão da melhor forma. Imprevistos fazem parte da rotina e são considerados; por isso, sempre que precisar fazer alguma alteração, o ideal é me avisar assim que possível. Assim, conseguimos conversar e encontrar a melhor forma de reorganizar o atendimento."
  },
  {
    question: "Como sei se a terapia é para mim?",
    answer:
      "Você não precisa estar passando por um grande problema, trauma ou situação específica para começar a terapia. A psicoterapia também é um espaço de acolhimento, escuta e cuidado. Às vezes, o que nos leva a buscar esse espaço é simplesmente a vontade de compreender melhor o que estamos vivendo, nossos sentimentos, escolhas e relações."
  }
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
