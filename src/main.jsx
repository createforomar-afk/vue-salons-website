import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './style.css';

const links = ['About us', 'Services', 'Franchise', 'Products', 'Contact us'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="page" id="home">
    <header className="header">
      <a className="logo" href="#home" aria-label="VUE Salon"><span>VUE<sup>™</sup></span><small>S A L O N</small></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {links.map(item => <a key={item} href={'#' + item.toLowerCase().replaceAll(' ', '-')}>{item}</a>)}
        <a className="assessment" href="#assessment">Take Assessment</a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero">
      <div className="hero-photo" role="img" aria-label="VUE salon beauty portrait"></div>
      <a className="book-button" href="#appointment">Book Appointment <ArrowUpRight/></a>
      <div className="hero-right">
        <div className="hero-feature-space" aria-hidden="true"></div>
        <div className="hero-shortcuts">
          <a href="#gifting">Gifting <ArrowUpRight/></a>
          <a href="#offers">Offers <ArrowUpRight/></a>
          <a href="#salons">Our Salons <ArrowUpRight/></a>
        </div>
      </div>
    </section>

    <section className="home-grid">
      <article className="intro-card">
        <h1>We groom with<br/>perspective.<br/>That’s the VUE way.</h1>
        <div className="intro-actions"><a href="#about-us">About us</a><a className="round-arrow" href="#about-us" aria-label="About us"><ArrowUpRight/></a></div>
      </article>
      <div className="middle-stack">
        <article className="gold-card standards"><small>Why VUE?</small><h2>Professional Standards</h2><p>Trained staff.<br/>Brand-defined consistency.</p></article>
        <article className="gold-card pricing"><small>Why VUE?</small><h2>Affordable Pricing</h2><p>Premium services<br/>made affordable.</p></article>
      </div>
      <article className="gold-card client-card"><small>Why VUE?</small><h2>Client-Centric<br/>Services</h2><p>Services designed around real customer needs.</p></article>
      <article className="hydra-card" id="offers">
        <a className="see-all" href="#services">See all <span><ArrowUpRight/></span></a>
        <h2>Try our newly launched<br/>HYDRA FACIAL for hydrating skin</h2>
        <a className="explore" href="#services">Explore Services</a>
      </article>
    </section>

    <section className="below" id="about-us">
      <p>We groom with perspective. That’s the VUE way.</p>
      <h2>A salon experience shaped around you.</h2>
      <div className="below-links"><a id="services" href="#appointment">Services <ArrowUpRight/></a><a id="gifting" href="#appointment">Gifting <ArrowUpRight/></a><a id="salons" href="#appointment">Our Salons <ArrowUpRight/></a></div>
    </section>
    <section className="appointment" id="appointment"><h2>Ready for your VUE?</h2><a href="mailto:hello@vuesalons.com">Book Appointment <ArrowUpRight/></a></section>
    <span id="assessment" className="anchor"></span>
    <footer><span>VUE SALON</span><span>We groom with perspective.</span><span>© VUE SALON</span></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App/>);
