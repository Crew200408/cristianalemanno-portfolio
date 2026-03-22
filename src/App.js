import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Ciao, sono <span className="name">Cristian Alemanno</span></h1>
        <p className="subtitle">
          Developer | AI | Unreal Engine | IIS Meucci Casarano
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">I miei progetti</a>
          <a href="#contact" className="btn secondary">Contattami</a>
        </div>
      </header>

      <section id="about" className="about">
        <h2>Chi sono</h2>
        <p>
          Studente al quinto anno IIS Meucci Casarano, appassionato di 
          <strong>Intelligenza Artificiale</strong>, VR/AR, Unreal Engine e 
          simulazioni cosmiche. In fase di sviluppo di <strong>ARCHON</strong>, 
          un simulatore multiverso con rete neurale.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Progetti</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>🌌 ARCHON</h3>
            <p>Simulatore multiverso gerarchico con FastAPI + React + Three.js</p>
            <a href="https://archon.cristianalemanno.it" className="project-link">
              Vai al progetto →
            </a>
          </div>
          <div className="project-card">
            <h3>🎮 Unreal Engine</h3>
            <p>Esperimenti 3D e VR con Meta Quest 3</p>
           <button className="project-link" onClick={() => alert('Progetto in sviluppo!')}>
              In sviluppo
          </button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contattami</h2>
        <div className="contact-links">
          <a href="https://github.com/Crew200408">🐙 GitHub</a>
          <a href="mailto:cristian.alemanno008@gmail.com">✉️ Email</a>
          <a href="https://www.linkedin.com/in/cristian-alemanno-20213a363/">💼 LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default App;
