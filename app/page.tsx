import Reveal from "./components/Reveal";
import ScrollProgress from "./components/Scrollprogress";
import Parallax from "./components/Parallax";
import AreasDeCuidado from "./components/AreasDeCuidado";
import ComoComecar from "./components/ComoComecar";
import FAQ from "./components/FAQ";

const WHATSAPP_NUMBER = "559191640888";
const WHATSAPP_MSG = encodeURIComponent(
  "Oie Milena! Gostaria de mais informações sobre a psicoterapia ☺️"
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
              <a className="btn-primary" href={WHATSAPP_LINK} target="_blank">
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
          <div>
            <h2>Vamos conversar?</h2>
            <p className="contato-lede">
              Se você sente que este pode ser um espaço para você, me chama no WhatsApp. 
              Podemos conversar, tirar suas dúvidas e entender juntos as possibilidades de iniciar um processo terapêutico.
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
              <div>Segunda a sábado, com horários a combinar.</div>
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