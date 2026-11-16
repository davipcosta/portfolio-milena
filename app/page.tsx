import Reveal from "./components/Reveal";
import ScrollProgress from "./components/Scrollprogress";
import Parallax from "./components/Parallax";
import AreasDeCuidado from "./components/AreasDeCuidado";
import ComoComecar from "./components/ComoComecar";
import FAQ from "./components/FAQ";
import SiteHeader from "./components/SiteHeader";
import { AtSign, Clock, Link2, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "559191640888";
const WHATSAPP_MSG = encodeURIComponent(
  "Oie Milena! Gostaria de mais informações sobre a psicoterapia ☺️"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <SiteHeader whatsappLink={WHATSAPP_LINK} />

      <section className="hero">
        <div className="hero-breathe-glow" aria-hidden="true" />
        <div className="wrap">
          <div>
            <h1 className="hero-enter" style={{ animationDelay: "0.08s" }}>
              Um espaço para <span className="em-accent">ser, sentir,</span> e <span className="em-accent">se conhecer</span>
            </h1>
            <p
              className="hero-lede hero-enter"
              style={{ animationDelay: "0.22s" }}
            >
              Atendimento psicológico individual para jovens adultos, adultos e idosos, com escuta, presença e vínculo.
              Atendimentos presenciais em Belém (PA) e online para todo o mundo.
            </p>
            <div
              className="hero-actions hero-enter"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                className="btn-primary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Agendar sessão
              </a>
            </div>
          </div>
          <div
            className="hero-visual-wrap hero-enter"
            style={{ animationDelay: "0.18s" }}
          >
            <Parallax speed={0.12}>
              <div className="hero-visual-float">
                <div className="hero-arch-outline" aria-hidden="true" />
                <div className="hero-visual">
                  <img
                    className="img-reveal"
                    src="/milena2.jpeg"
                    alt="Milena Nobre"
                  />
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="sobre" id="sobre">
        <Reveal className="wrap">
          <div className="sobre-photo">
            <img
              className="img-reveal"
              src="/milena3.jpeg"
              alt="Milena Nobre"
            />
          </div>
          <div>
            <h2>Sobre mim</h2>
            <p className="sobre-bio">
              Minha trajetória de formação inclui pós-graduação em Psicologia da Saúde e em Psicologia Jurídica, além de formação
              em Abordagem Centrada na Pessoa (ACP). Atualmente, sou mestranda em Psicologia pela Universidade Federal do Pará (UFPA)
              e realizo Especialização em Sexologia e Sexualidade Humana.
            </p>
            <p className="sobre-bio">
              Atuo como psicóloga clínica, com base humanista. Acredito em uma psicoterapia construída a partir da escuta,
              da presença e do vínculo, respeitando a singularidade de cada pessoa e o seu próprio processo.
            </p>
            <p className="crp">CRP 10/10986 · Belém, Pará</p>
          </div>
        </Reveal>
      </section>

      <AreasDeCuidado />

      <ComoComecar />

      <FAQ />

      <section className="contato" id="contato">
        <Reveal className="wrap">
          <div className="contato-panel">
            <div className="contato-main">
              <h2>Vamos conversar?</h2>
              <p className="contato-lede">
                Se você sente que este pode ser um espaço para você, me chama no WhatsApp. 
                Podemos conversar, tirar suas dúvidas e entender juntos as possibilidades de iniciar um processo terapêutico.
              </p>
              <div className="contato-actions">
                <a
                  className="btn-primary btn-light"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            <dl className="contato-info">
              <div className="contato-info-item">
                <Clock size={18} className="contato-info-icon" aria-hidden="true" />
                <dt className="contato-info-label">Atendimento</dt>
                <dd>Segunda a sábado, com horários a combinar.</dd>
              </div>
              <div className="contato-info-item">
                <MapPin size={18} className="contato-info-icon" aria-hidden="true" />
                <dt className="contato-info-label">Local</dt>
                <dd>Belém, Pará — presencial ou online</dd>
              </div>
              <div className="contato-info-item">
                <AtSign size={18} className="contato-info-icon" aria-hidden="true" />
                <dt className="contato-info-label">Instagram</dt>
                <dd>
                  <a
                    href="https://www.instagram.com/psi.milenanobre/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @psi.milenanobre
                  </a>
                </dd>
              </div>
              <div className="contato-info-item">
                <Link2 size={18} className="contato-info-icon" aria-hidden="true" />
                <dt className="contato-info-label">Mais links</dt>
                <dd>
                  <a
                    href="https://linkme.bio/psi.milenanobre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkme.bio/psi.milenanobre
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <span>Milena Nobre · Psicóloga · CRP 10/10986</span>
          <a
            href="https://www.instagram.com/davipcosta_/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            feito por <span className="credit-name">davipcosta</span>
          </a>
        </div>
      </footer>
    </>
  );
}