"use client";

import { useState } from "react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow arrow--diagonal" : "arrow"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.75 10h12.5m-5-5 5 5-5 5" />
    </svg>
  );
}

function DropVaultArtwork() {
  return (
    <div className="project-art project-art--vault" aria-hidden="true">
      <div className="vault-orbit vault-orbit--one" />
      <div className="vault-orbit vault-orbit--two" />
      <div className="vault-glyph">D<span>V</span></div>
      <span className="art-caption art-caption--top">LEAD TRACKING / 01</span>
      <span className="art-caption art-caption--bottom">DROPVAULT®</span>
      <span className="vault-coordinate">DV—01</span>
    </div>
  );
}

function RestaurantArtwork() {
  return (
    <div className="project-art project-art--restaurant" aria-hidden="true">
      <div className="menu-sheet">
        <div className="menu-sheet__top"><span>THE DAILY TABLE</span><span>MENU — 01</span></div>
        <div className="menu-sheet__title">Good food.<br /><i>Good mood.</i></div>
        <div className="menu-sheet__dish"><span>01</span><span>Something fresh</span><span>· · ·</span></div>
        <div className="menu-sheet__dish"><span>02</span><span>Something warm</span><span>· · ·</span></div>
        <div className="menu-sheet__dish"><span>03</span><span>Something sweet</span><span>· · ·</span></div>
        <div className="menu-sheet__bottom"><span>MADE TO ORDER</span><span>EST. TODAY</span></div>
      </div>
      <span className="art-caption art-caption--top">RESTAURANT / 02</span>
      <span className="art-caption art-caption--bottom">ORDER SOMETHING GOOD.</span>
      <span className="restaurant-stamp">A<br />T</span>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="devOvi home">dev<span>Ovi</span><b>.</b></a>
        <span className="header-note">INDEPENDENT DEVELOPER<br />INDIA · AVAILABLE FOR WORK</span>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? "navigation navigation--open" : "navigation"} aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <span className="nav-index">0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-heading">
          <div className="hero-meta"><span className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</span><span className="hero-index">PORTFOLIO / 2026</span></div>
          <h1 id="hero-heading"><span>Thoughtful</span><span className="hero-line-two"><span className="hero-outline">interfaces.</span><span className="hero-period">✳</span></span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I’m <strong>Ovi</strong> — a frontend developer shaping small ideas into clear, considered experiences for the web.</p>
            <a className="round-link" href="#work"><span>EXPLORE<br />SELECTED WORK</span><span className="round-link__icon"><Arrow diagonal /></span></a>
            <span className="vertical-note">DESIGN MINDED&nbsp; / &nbsp;DETAIL DRIVEN</span>
          </div>
          <div className="hero-rule"><span>01 — 02</span><span>SCROLL TO EXPLORE</span><span>↓</span></div>
          <div className="hero-side-mark" aria-hidden="true">O<span>V</span> / 26</div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><p className="eyebrow">A FEW THINGS I’VE BUILT</p><span className="section-counter">( 01 — 02 )</span></div>
          <div className="work-heading-row"><h2 id="work-heading">Selected<br /><span>work<span className="heading-period">.</span></span></h2><p className="section-aside">Personal projects, built with care.<br />A little about what I’ve been making.</p></div>

          <article className="project-card project-card--vault" id="dropvault">
            <div className="project-visual"><DropVaultArtwork /><span className="visual-number">01</span></div>
            <div className="project-details">
              <div className="project-overline"><span>CHROME EXTENSION</span><span>PERSONAL PROJECT&nbsp; / &nbsp;01</span></div>
              <div className="project-title-row"><h3>DropVault</h3><span className="project-monogram" aria-hidden="true">D<span>V</span></span></div>
              <p className="project-description">A Chrome extension concept for keeping dropshipping leads in one place. Built around a simple idea: make the work of tracking opportunities feel a little more organised.</p>
              <div className="project-footer"><span className="project-tags"><span>CHROME EXTENSION</span><span>LEAD TRACKING</span></span><a className="text-link" href="#contact">Ask me about it <Arrow diagonal /></a></div>
            </div>
          </article>

          <article className="project-card project-card--restaurant" id="restaurant-ordering">
            <div className="project-visual"><RestaurantArtwork /><span className="visual-number">02</span></div>
            <div className="project-details">
              <div className="project-overline"><span>WEB APPLICATION</span><span>PERSONAL PROJECT&nbsp; / &nbsp;02</span></div>
              <div className="project-title-row"><h3>Restaurant<br />Ordering App</h3><span className="project-monogram project-monogram--menu" aria-hidden="true">R<span>O</span></span></div>
              <p className="project-description">A restaurant ordering experience with its own live home on the web. Explore the project as it exists today.</p>
              <div className="project-footer"><span className="project-tags"><span>RESTAURANT</span><span>ORDERING EXPERIENCE</span></span><a className="text-link" href="https://apitos-restaurant.vercel.app/" target="_blank" rel="noreferrer">View live project <Arrow diagonal /></a></div>
            </div>
          </article>
          <div className="work-endnote"><span>END OF SELECTION</span><span>MORE TO COME&nbsp; ↗</span></div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-heading">
          <div className="section-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="section-counter">( 02 — 02 )</span></div>
          <div className="about-grid">
            <h2 id="about-heading">Curiosity<br />meets <span>craft.</span></h2>
            <div className="about-copy"><p className="about-lede">I care about how things work — and just as much about how they feel.</p><p>I’m an early-career developer with a frontend foundation, currently stretching into full-stack development. I like thoughtful details, clear interfaces, and learning by building real things.</p><div className="skills-block"><p className="eyebrow">WHAT I’M WORKING WITH</p><ul className="skill-list"><li>Frontend development</li><li>React</li><li>Interface design</li><li>Full-stack development</li></ul><p className="skills-note">My toolkit grows as my projects do.</p></div></div>
          </div>
          <div className="about-endmark"><span>BUILD WITH INTENTION</span><span className="endmark-symbol">⌁</span><span>LEARN AS I GO</span></div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-heading">
          <div className="contact-inner"><div className="contact-label"><span className="status-dot" /> HAVE SOMETHING IN MIND?</div><h2 id="contact-heading">Let’s make<br /><span>it matter.</span></h2><p>Open to frontend opportunities and thoughtful freelance work. If you have a project or a role in mind, I’d love to hear about it.</p><a className="contact-link" href="#work"><span>EXPLORE SELECTED WORK</span><span className="contact-link__arrow"><Arrow diagonal /></span></a></div>
          <div className="contact-side-note">GOOD WORK STARTS<br />WITH A CONVERSATION.</div>
        </section>
      </main>

      <footer className="site-footer section-shell"><a className="wordmark footer-wordmark" href="#home">dev<span>Ovi</span><b>.</b></a><span className="footer-note">BUILT WITH CARE, ONE DETAIL AT A TIME.</span><a className="back-top" href="#home">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} devOvi</span></footer>
    </>
  );
}
