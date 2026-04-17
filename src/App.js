import React from 'react';

function App() {
  return (
    <div className="App">
      {/* =========================
          HERO / HEADER PRINCIPALE
          ========================= */}
      <header className="hero">
        <nav className="topbar">
          <div className="brand">Cristian Alemanno</div>

          <div className="topbar-links">
            <a href="#about">Chi sono</a>
            <a href="#projects">Progetti</a>
            <a href="#contact">Contatti</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Developer Portfolio</p>

          <h1>
            Ciao, sono <span className="name">Cristian Alemanno</span>
          </h1>

          <p className="subtitle">
            Studente di informatica, sviluppatore web e appassionato di fisica,
            intelligenza artificiale, simulazioni, Unreal Engine e progetti
            digitali evoluti.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              Esplora i progetti
            </a>

            <a
              href="https://tenutaalexandra.cristianalemanno.it"
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sito azienda agricola
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* =========================
            SEZIONE PROFILO / ABOUT
            ========================= */}
        <section id="about" className="section about">
          <div className="section-header">
            <p className="section-tag">Profilo</p>
            <h2>Chi sono</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Formazione</h3>
              <p>
                Frequento il quinto anno all&apos;
                <strong> IIS Meucci di Casarano</strong>, indirizzo informatico,
                con un forte interesse per sviluppo software, sistemi digitali e
                architetture moderne.
              </p>
            </div>

            <div className="about-card">
              <h3>Aree di interesse</h3>
              <p>
                Mi concentro soprattutto su <strong>AI</strong>, sviluppo web,
                simulazioni, logica dei sistemi, esperienze 3D e Unreal Engine,
                con attenzione sia alla parte tecnica sia alla progettazione.
              </p>
            </div>

            <div className="about-card">
              <h3>Obiettivo</h3>
              <p>
                Costruire progetti concreti, eleganti e ambiziosi, capaci di
                unire interfacce moderne, backend solidi e idee ad alto
                contenuto tecnico.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            SEZIONE PROGETTI
            Tutte le card devono stare
            dentro project-grid
            ========================= */}
        <section id="projects" className="section projects">
          <div className="section-header">
            <p className="section-tag">Lavori e sviluppo</p>
            <h2>Progetti principali</h2>
          </div>

          <div className="project-grid">
            {/* Progetto ARCHON */}
            <article className="project-card featured">
              <div className="project-badge">Project</div>

              <h3>ARCHON</h3>

              <p>
                Simulatore multiverso gerarchico con frontend React, backend
                Python/FastAPI e componenti visuali avanzati. Un progetto
                orientato a simulazione, struttura dati e interazione.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>FastAPI</span>
                <span>Three.js</span>
                <span>AI</span>
              </div>

              <a
                href="https://archon.cristianalemanno.it"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apri ARCHON →
              </a>
            </article>

            {/* Progetto Tenuta Alexandra */}
            <article className="project-card">
              <div className="project-badge">Live Site</div>

              <h3>Tenuta Alexandra</h3>

              <p>
                Sito web per azienda agricola biologica con catalogo prodotti,
                disponibilità giornaliera, ordini, area clienti e gestione
                amministrativa.
              </p>

              <div className="project-tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>Render</span>
                <span>Neon</span>
                <span>Cloudflare</span>
              </div>

              <a
                href="https://tenutaalexandra.cristianalemanno.it"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visita il sito →
              </a>
            </article>

            {/* Simulatore fisico interattivo */}
            <article className="project-card featured">
              <div className="project-badge">Live Demo</div>

              <h3>Wave Physics Simulator</h3>

              <p>
                Simulatore interattivo 3D di fenomeni fisici: onde sinusoidali,
                oceano realistico, pozzi gravitazionali e buco nero con
                gravitational lensing e disco di accrescimento. Costruito con
                Three.js, shader GLSL e rendering fisicamente basato.
              </p>

              <div className="project-tags">
                <span>Three.js</span>
                <span>GLSL</span>
                <span>WebGL</span>
                <span>Physics</span>
                <span>Vite</span>
              </div>

              <a
                href="https://simulator.cristianalemanno.it"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apri il simulatore →
              </a>
            </article>

                       {/* Volume 1 della collana "Dal quaderno alla realtà" */}
            <article className="project-card">
              <div className="project-badge">Libro</div>
            
              <h3>Dal quaderno alla realtà — Volume 1</h3>
            
              <p>
                Dalla crisi della fisica classica alla rivoluzione einsteiniana: un
                percorso chiaro e rigoroso nella relatività ristretta e generale, senza
                salti logici, con formule derivate passo dopo passo e supporto visivo.
              </p>
            
              <div className="project-tags">
                <span>Fisica</span>
                <span>Relatività</span>
                <span>Einstein</span>
                <span>Volume 1</span>
              </div>
            
              <a
                href="https://amzn.eu/d/05FvZCk7"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scopri il volume su Amazon →
              </a>
            </article>


              {/* Volume 2 in fase di scrittura */}
            <article className="project-card">
              <div className="project-badge">In scrittura</div>
            
              <h3>Dal quaderno alla realtà — Volume 2</h3>
            
              <p>
                Un viaggio nella cosmologia relativistica e negli oggetti più estremi
                dell’universo, tra espansione cosmica, buchi neri, wormhole e geometria
                dello spazio-tempo.
              </p>
            
              <div className="project-tags">
                <span>Relatività generale</span>
                <span>Cosmologia</span>
                <span>Buchi neri</span>
                <span>Volume 2</span>
              </div>
            
              <span className="project-link disabled">In fase di scrittura</span>
            </article>




            {/* Pagina download dedicata al progetto UE5 */}
            <article className="project-card featured">
              <div className="project-badge">Download</div>

              <h3>Medieval Landscape UE5</h3>

              <p>
                Ambiente medievale realizzato in Unreal Engine 5 con castello,
                paesaggio naturale e atmosfera cinematografica. Demo disponibile
                tramite pagina download dedicata.
              </p>

              <div className="project-tags">
                <span>Unreal Engine 5</span>
                <span>Level Design</span>
                <span>Environment Art</span>
                <span>Windows Build</span>
              </div>

              <a
                href="https://download.cristianalemanno.it/"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apri pagina download →
              </a>
            </article>
          </div>
        </section>

        {/* =========================
            SEZIONE VISIONE
            ========================= */}
        <section className="section vision">
          <div className="vision-box">
            <p className="section-tag">Visione</p>

            <h2>Costruisco progetti con una direzione precisa</h2>

            <p>
              Mi interessa creare prodotti che non siano solo “funzionanti”, ma
              anche coerenti, ambiziosi e ben strutturati: dal portfolio
              personale a sistemi più complessi come piattaforme, simulatori e
              architetture AI-oriented.
            </p>
          </div>
        </section>

        {/* =========================
            SEZIONE CONTATTI
            ========================= */}
        <section id="contact" className="section contact">
          <div className="section-header">
            <p className="section-tag">Contatti</p>
            <h2>Resta in contatto</h2>
          </div>

          <div className="contact-grid">
            <a
              href="https://github.com/Crew200408"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">🐙</span>
              <div>
                <strong>GitHub</strong>
                <p>Crew200408</p>
              </div>
            </a>

            <a
              href="mailto:cristian.alemanno008@gmail.com"
              className="contact-card"
            >
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>cristian.alemanno008@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/cristian-alemanno-20213a363/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">💼</span>
              <div>
                <strong>LinkedIn</strong>
                <p>Profilo professionale</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
