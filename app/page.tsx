import Reveal from "./components/Reveal";
import ScrollProgress from "./components/Scrollprogress";
import Parallax from "./components/Parallax";
import AreasDeCuidado from "./components/AreasDeCuidado";
import ComoComecar from "./components/ComoComecar";
import FAQ from "./components/FAQ";

const WHATSAPP_NUMBER = "559191640888";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, Milena! Gostaria de agendar uma conversa."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <header className="nav nav-enter">
        <div className="wrap nav-wrap">
          <a href="#" className="nav-name">
            Milena Nobre
          </a>

          <nav className="nav-links">
            <a href="#sobre" className="nav-link">
              Sobre mim
            </a>
            <a href="#areas" className="nav-link">
              O que atendo
            </a>
            <a href="#como-comecar" className="nav-link">
              Como começar
            </a>
            <a href="#faq" className="nav-link">
              Dúvidas
            </a>
          </nav>

          <a
            className="nav-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar conversa
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-breathe-glow" aria-hidden="true" />
        <div className="wrap">
          <div>
            <h1 className="hero-enter" style={{ animationDelay: "0.08s" }}>
              Uma <span className="em-accent">pausa</span>, antes de
              continuar.
            </h1>
            <p
              className="hero-lede hero-enter"
              style={{ animationDelay: "0.22s" }}
            >
              Atendimento psicológico individual para adultos, com escuta,
              presença e vínculo. Presencial em Belém ou online, onde for
              melhor para você.
            </p>
            <div
              className="hero-actions hero-enter"
              style={{ animationDelay: "0.35s" }}
            >
              <a className="btn-primary" href={WHATSAPP_LINK} target="_blank">
                Agendar conversa
              </a>
            </div>
          </div>
          <div
            className="hero-visual-wrap hero-enter"
            style={{ animationDelay: "0.18s" }}
          >
            <Parallax speed={0.12}>
              <div className="hero-visual-float">
                <div className="hero-visual-offset" />
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
          <div className="sobre-photo sobre-photo-tilt">
            <img
              className="img-reveal"
              src="/milena3.jpeg"
              alt="Milena Nobre"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "18px",
              }}
            />
          </div>
          <div>
            <h2>Sobre mim</h2>
            <p className="sobre-bio">
              Sou psicóloga de abordagem humanista — acredito numa terapia
              feita de escuta, presença e vínculo, onde você pode chegar
              inteiro, com suas dúvidas e contradições, e sair um pouco mais
              perto de si mesmo.
            </p>
            <p className="sobre-bio">
              Sou mestranda em Psicologia pela UFPA e atendo em Belém (PA) e
              online, construindo junto com cada pessoa caminhos possíveis
              para lidar com ansiedade, relacionamentos, autoconhecimento e
              momentos de transição de vida.
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
          <div>
            <h2>Vamos conversar?</h2>
            <p className="contato-lede">
              Me chama no WhatsApp para tirar dúvidas ou agendar sua primeira
              sessão. Costumo responder em até um dia útil.
            </p>
            <div className="contato-actions">
              <a className="btn-primary" href={WHATSAPP_LINK} target="_blank">
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="contato-info">
            <div>
              <div className="contato-info-label">Atendimento</div>
              <div>Segunda a sexta, 9h às 18h</div>
            </div>
            <div>
              <div className="contato-info-label">Local</div>
              <div>Belém, Pará — presencial ou online</div>
            </div>
            <div>
              <div className="contato-info-label">Instagram</div>
              <a
                href="https://www.instagram.com/psi.milenanobre/"
                target="_blank"
              >
                @psi.milenanobre
              </a>
            </div>
            <div>
              <div className="contato-info-label">Mais links</div>
              <a href="https://linkme.bio/psi.milenanobre" target="_blank">
                linkme.bio/psi.milenanobre
              </a>
            </div>
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