"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/reveal";
import ScrollCue from "@/components/motion/scroll-cue";
import SplitHeading from "@/components/motion/split-heading";
import { motion } from "@/lib/gsap";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
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

function NsocArtwork() {
  return (
    <div className="project-art project-art--nsoc" aria-hidden="true">
      <span className="nsoc-orbit nsoc-orbit--one" /><span className="nsoc-orbit nsoc-orbit--two" />
      <span className="nsoc-wordmark">N<span>SOC</span></span>
      <span className="art-caption art-caption--top">WINTER EDITION / 03</span>
      <span className="art-caption art-caption--bottom">COMMUNITY · FRONTEND</span>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="devOvi home">dev<span>Ovi</span><b>.</b></a>
        <span className="header-note">FULL-STACK DEVELOPER<br />INDIA · AVAILABLE FOR WORK</span>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          id="menu-toggle"
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
          <div className="hero-meta"><Reveal as="span" className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</Reveal><Reveal as="span" className="hero-index">PORTFOLIO / 2026</Reveal></div>
          <SplitHeading as="h1" id="hero-heading" className="hero-title" variant="hero"><span>Ovesh</span><span className="hero-line-two"><span className="hero-outline">Siddiqui</span><span className="hero-period" aria-hidden="true">✳</span></span></SplitHeading>
          <div className="hero-bottom">
            <Reveal as="p" className="hero-intro"><strong>Ovesh Siddiqui</strong> — Full-Stack Developer building web applications, custom e-commerce experiences, and practical fixes for the web.</Reveal>
            <a className="round-link" href="#work"><span>EXPLORE<br />SELECTED WORK</span><span className="round-link__icon"><Arrow diagonal /></span></a>
            <span className="vertical-note">DESIGN MINDED&nbsp; / &nbsp;DETAIL DRIVEN</span>
          </div>
          <div className="hero-rule"><span>01 — 02</span><span>SCROLL TO EXPLORE</span><ScrollCue /></div>
          <div className="hero-side-mark" aria-hidden="true">O<span>V</span> / 26</div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><Reveal as="p" className="eyebrow">A FEW THINGS I’VE BUILT</Reveal><Reveal as="span" className="section-counter" delay={motion.stagger.reveal}>( 01 — 03 )</Reveal></div>
          <div className="work-heading-row"><SplitHeading as="h2" id="work-heading"><span>Selected</span><br /><span>work<span className="heading-period">.</span></span></SplitHeading><Reveal as="p" className="section-aside">Personal projects, built with care.<br />A little about what I’ve been making.</Reveal></div>

          <article className="project-card project-card--vault" id="dropvault">
            <div className="project-visual"><DropVaultArtwork /><span className="visual-number">01</span></div>
            <div className="project-details">
              <div className="project-overline"><span>CHROME EXTENSION</span><span>PERSONAL PROJECT&nbsp; / &nbsp;01</span></div>
              <div className="project-title-row"><h3>DropVault</h3><span className="project-monogram" aria-hidden="true">D<span>V</span></span></div>
              <Reveal as="p" className="project-description">A Chrome extension for dropshipping lead tracking. Save tabs with their titles, URLs, and favicons, keep the data stored locally, and delete individual saved entries.</Reveal>
              <div className="project-footer"><span className="project-tags"><span>CHROME EXTENSION</span><span>LEAD TRACKING</span></span><a className="text-link" href="#contact">Ask me about it <Arrow diagonal /></a></div>
            </div>
          </article>

          <article className="project-card project-card--restaurant" id="restaurant-ordering">
            <div className="project-visual"><RestaurantArtwork /><span className="visual-number">02</span></div>
            <div className="project-details">
              <div className="project-overline"><span>WEB APPLICATION</span><span>PERSONAL PROJECT&nbsp; / &nbsp;02</span></div>
              <div className="project-title-row"><h3>Restaurant<br />Ordering App</h3><span className="project-monogram project-monogram--menu" aria-hidden="true">R<span>O</span></span></div>
              <Reveal as="p" className="project-description">A frontend project exploring a restaurant ordering experience through a live website.</Reveal>
              <Reveal as="p" className="project-disclosure">Frontend recreation of the original application, created with the original owner&apos;s permission. This is an independent frontend project, not the official application.</Reveal>
              <div className="project-footer"><span className="project-tags"><span>FRONTEND</span><span>RESTAURANT</span></span><a className="text-link" href="https://apitos-restaurant.vercel.app/" target="_blank" rel="noreferrer">View live project <Arrow diagonal /></a></div>
            </div>
          </article>
          <article className="project-card project-card--nsoc" id="nsoc-winter-edition">
            <div className="project-visual"><NsocArtwork /><span className="visual-number">03</span></div>
            <div className="project-details">
              <div className="project-overline"><span>FRONTEND SHOWCASE</span><span>INDEPENDENT&nbsp; / &nbsp;03</span></div>
              <div className="project-title-row"><h3>NSOC<br />Winter Edition</h3><span className="project-monogram project-monogram--nsoc" aria-hidden="true">N<span>S</span></span></div>
              <Reveal as="p" className="project-description">An independent frontend implementation created for showcasing and learning purposes. Explore the live demo and source code.</Reveal>
              <div className="project-footer"><span className="project-tags"><span>FRONTEND</span><span>SHOWCASE</span></span><div className="project-links"><a className="text-link" href="https://nsoc-winter-edition-10905-ayh4-naoz920tj-null-syndicate.vercel.app/" target="_blank" rel="noopener noreferrer">View live <Arrow diagonal /></a><a className="text-link" href="https://github.com/abhinav10905/nsoc-winter-edition-10905" target="_blank" rel="noopener noreferrer">Repository <Arrow diagonal /></a></div></div>
            </div>
          </article>
          <div className="work-endnote"><span>END OF SELECTION</span><span>MORE TO COME&nbsp; ↗</span></div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-heading">
          <div className="section-heading"><Reveal as="p" className="eyebrow">A LITTLE ABOUT ME</Reveal><Reveal as="span" className="section-counter" delay={motion.stagger.reveal}>( 02 — 02 )</Reveal></div>
          <div className="about-grid">
            <SplitHeading as="h2" id="about-heading">Ovesh<br /><span>Siddiqui.</span></SplitHeading>
            <div className="about-copy"><Reveal as="p" className="about-lede">Full-Stack Developer</Reveal><Reveal as="p">I build and improve web applications, from responsive interfaces to the integrations that connect them. I also help with Shopify customization, e-commerce support, debugging, and responsive design fixes.</Reveal><Reveal as="p">I value clear communication, considered details, and practical solutions shaped around each project.</Reveal></div>
          </div>
          <div className="about-endmark"><span>BUILD WITH INTENTION</span><span className="endmark-symbol">⌁</span><span>LEARN AS I GO</span></div>
        </section>

        <section className="services section-shell" id="services" aria-labelledby="services-heading">
          <div className="section-heading"><Reveal as="p" className="eyebrow">WAYS I CAN HELP</Reveal><Reveal as="span" className="section-counter" delay={motion.stagger.reveal}>( 03 — 06 )</Reveal></div>
          <div className="services-heading-row"><SplitHeading as="h2" id="services-heading">Services<span>.</span></SplitHeading><Reveal as="p">Practical development and support for your next web project.</Reveal></div>
          <ul className="services-list">
            <li><span className="service-index">01</span><div><h3>Full-Stack Development</h3><Reveal as="p">Web application development from interface through application integrations.</Reveal></div><Arrow diagonal /></li>
            <li><span className="service-index">02</span><div><h3>Shopify Customization</h3><Reveal as="p">Theme and storefront adjustments shaped to your store’s needs.</Reveal></div><Arrow diagonal /></li>
            <li><span className="service-index">03</span><div><h3>E-commerce Support</h3><Reveal as="p">Hands-on help improving and maintaining an e-commerce experience.</Reveal></div><Arrow diagonal /></li>
            <li><span className="service-index">04</span><div><h3>Website Debugging</h3><Reveal as="p">Investigating and resolving issues affecting your website.</Reveal></div><Arrow diagonal /></li>
            <li><span className="service-index">05</span><div><h3>Responsive Design Fixes</h3><Reveal as="p">Refining layouts so pages work across mobile, tablet, and desktop.</Reveal></div><Arrow diagonal /></li>
            <li><span className="service-index">06</span><div><h3>API Integrations</h3><Reveal as="p">Connecting web applications with the services and APIs they need.</Reveal></div><Arrow diagonal /></li>
          </ul>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-heading">
          <div className="contact-inner"><Reveal as="div" className="contact-label"><span className="status-dot" /> HAVE SOMETHING IN MIND?</Reveal><SplitHeading as="h2" id="contact-heading">Hire<br /><span>Ovesh.</span></SplitHeading><Reveal as="p">Need a web application, Shopify customization, or help fixing an existing site? Tell me what you’re looking to build or improve.</Reveal>
            <form className="inquiry-form" onSubmit={(event) => { event.preventDefault(); setContactStatus("Your details are ready, but email delivery is not connected yet. Please check back soon."); }}>
              <div className="form-field"><label htmlFor="inquiry-name">Name <span aria-hidden="true">*</span></label><input id="inquiry-name" name="name" autoComplete="name" required /></div>
              <div className="form-field"><label htmlFor="inquiry-email">Email address <span aria-hidden="true">*</span></label><input id="inquiry-email" name="email" type="email" autoComplete="email" required /></div>
              <div className="form-field"><label htmlFor="inquiry-type">Project type <span className="optional-label">OPTIONAL</span></label><select id="inquiry-type" name="projectType" defaultValue=""><option value="">Choose a project type</option><option>Full-Stack Development</option><option>Shopify</option><option>Bug Fixing</option><option>E-commerce</option><option>API Integration</option><option>Other</option></select></div>
              <div className="form-field"><label htmlFor="inquiry-budget">Budget <span className="optional-label">OPTIONAL</span></label><input id="inquiry-budget" name="budget" autoComplete="off" placeholder="e.g. ₹50,000–₹1,00,000" /></div>
              <div className="form-field form-field--full"><label htmlFor="inquiry-message">Message <span aria-hidden="true">*</span></label><textarea id="inquiry-message" name="message" rows={4} required /></div>
              <div className="form-submit"><button className="submit-button" type="submit">Send Project Inquiry <Arrow diagonal /></button><Reveal as="p" className="privacy-note">Your information will only be used to respond to your inquiry.</Reveal></div>
              <p className="form-status" role="status" aria-live="polite">{contactStatus}</p>
            </form>
            <div className="contact-notice" id="contact-details"><span className="contact-link__arrow" aria-hidden="true"><Arrow diagonal /></span><span><strong>Email contact is being confirmed</strong><small>The form is ready, but it cannot deliver messages until an email service is connected.</small></span></div>
          </div>
          <div className="contact-side-note">GOOD WORK STARTS<br />WITH A CONVERSATION.</div>
        </section>
      </main>

      <footer className="site-footer section-shell"><a className="wordmark footer-wordmark" href="#home">dev<span>Ovi</span><b>.</b></a><span className="footer-note">BUILT WITH CARE, ONE DETAIL AT A TIME.</span><a className="back-top" href="#home">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} devOvi</span></footer>
    </>
  );
}
