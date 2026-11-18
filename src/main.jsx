import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X, Instagram, Facebook, MapPin, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import './style.css';

const nav = ['About us','Services','Franchise','Products','Contact us'];
const services = [
  { no:'01', name:'Hair', desc:'Cuts, colour and care that feel like you.', img:'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85' },
  { no:'02', name:'Skin', desc:'Thoughtful rituals for a healthy glow.', img:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85' },
  { no:'03', name:'Nails', desc:'The finishing touch, done beautifully.', img:'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85' },
];
function App(){
 const [menu,setMenu]=useState(false);
 const [active,setActive]=useState('Home');
 const [email,setEmail]=useState('');
 const [sent,setSent]=useState(false);
 const go=(name)=>{setActive(name);setMenu(false);const id=name.toLowerCase().replaceAll(' ','-');document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
 return <div className="site-shell">
  <div className="topline"><span>VUE SALONS</span><span>BEAUTY, WITH A DIFFERENT PERSPECTIVE</span><span>HYDERABAD · INDIA</span></div>
  <header className="header">
   <a className="brand" href="#home" onClick={()=>setActive('Home')} aria-label="VUE Salons home"><span className="brand-mark">VUE</span><small>SALONS</small></a>
   <nav className="desktop-nav">{nav.map(n=><button key={n} onClick={()=>go(n)}>{n}</button>)}</nav>
   <a className="header-cta" href="#booking">Book an appointment <ArrowUpRight size={15}/></a>
   <button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </header>
  {menu&&<nav className="mobile-nav">{nav.map(n=><button key={n} onClick={()=>go(n)}>{n}<ArrowUpRight size={16}/></button>)}</nav>}
  <main>
   <section className="hero" id="home">
    <div className="hero-image"></div>
    <div className="hero-shade"></div>
    <div className="hero-copy"><p className="eyebrow light">A NEW PERSPECTIVE ON SELF-CARE</p><h1>We groom with<br/><em>perspective.</em></h1><p className="hero-sub">A considered approach to beauty.<br/>A space to feel entirely yourself.</p><a className="pill pill-light" href="#booking">Book appointment <ArrowUpRight size={16}/></a></div>
    <div className="hero-side-note">THE VUE WAY <span>—</span> EST. FOR YOU</div>
    <div className="hero-bottom"><span>01 / 04</span><span>SCROLL TO EXPLORE ↓</span><span>DESIGNED AROUND YOU</span></div>
   </section>
   <section className="intro section-pad" id="about-us">
    <div className="intro-heading"><p className="eyebrow">A LITTLE ABOUT US</p><h2>We groom with perspective.<br/><em>That’s the VUE way.</em></h2><p className="intro-copy">More than a salon, VUE is a point of view. We bring together skilled people, considered services and a welcoming space to make every visit feel like time well spent.</p><a className="text-link" href="#story">Discover our story <ArrowUpRight size={16}/></a></div>
    <div className="intro-visual"><img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1100&q=85" alt="Warm, contemporary salon interior"/><div className="visual-caption"><span>01</span><span>YOUR SPACE. YOUR MOMENT.</span></div></div>
   </section>
   <section className="standards" id="story">
    <div className="standard-lead"><p className="eyebrow">THE VUE DIFFERENCE</p><h2>Good care.<br/><em>Good energy.</em></h2><p>Every detail has a purpose, and every experience starts with you.</p><a className="text-link" href="#booking">Meet VUE <ArrowUpRight size={16}/></a></div>
    <article className="standard-card"><span>01 / WHY VUE?</span><Sparkles/><h3>Professional<br/>standards</h3><p>Trained staff. Brand-defined consistency. Care you can count on.</p></article>
    <article className="standard-card"><span>02 / WHY VUE?</span><span className="number-icon">₹</span><h3>Affordable<br/>luxury</h3><p>Premium services made accessible, without compromising on quality.</p></article>
    <article className="standard-card"><span>03 / WHY VUE?</span><span className="number-icon">✳</span><h3>Client-centric<br/>services</h3><p>Services designed around real customer needs and individual style.</p></article>
   </section>
   <section className="services section-pad" id="services">
    <div className="section-heading"><div><p className="eyebrow">A MENU OF GOOD THINGS</p><h2>Find your <em>feel-good.</em></h2></div><a className="text-link" href="#booking">Explore all services <ArrowUpRight size={16}/></a></div>
    <div className="service-grid">{services.map(s=><article className="service-card" key={s.no}><div className="service-img"><img src={s.img} alt={s.name+' salon service'}/><span>{s.no}</span><a href="#booking" aria-label={'Book '+s.name}><ArrowUpRight/></a></div><div className="service-info"><h3>{s.name}</h3><p>{s.desc}</p></div></article>)}</div>
   </section>
   <section className="feature">
    <div className="feature-image"></div><div className="feature-copy"><p className="eyebrow light">A LITTLE EXTRA CARE</p><h2>Make room for<br/><em>your glow.</em></h2><p>Meet the treatments everyone’s talking about. Discover a fresh take on skin, with our hydrating Hydra Facial experience.</p><a className="pill pill-light" href="#services">Explore services <ArrowUpRight size={16}/></a></div>
   </section>
   <section className="discovery section-pad">
    <div className="discovery-card gift"><p className="eyebrow">GIVE A LITTLE VUE</p><h2>The art of<br/><em>giving well.</em></h2><p>Thoughtful gifts for the people who deserve a moment to themselves.</p><a className="text-link" href="#gifting">Explore gifting <ArrowUpRight size={16}/></a></div>
    <div className="discovery-card locations" id="gifting"><p className="eyebrow">COME ON IN</p><h2>Your place.<br/><em>Your VUE.</em></h2><p>Find a VUE salon and make a little time for yourself.</p><a className="text-link" href="#salons">Find a salon <ArrowUpRight size={16}/></a></div>
   </section>
   <section className="salons section-pad" id="salons"><div><p className="eyebrow">GOOD TO SEE YOU</p><h2>Find your<br/><em>nearest VUE.</em></h2><p>Come by, settle in and let us take care of the rest.</p><a className="pill pill-dark" href="#booking">Explore our salons <ArrowUpRight size={16}/></a></div><div className="salon-photo"><img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1100&q=85" alt="VUE-inspired salon interior"/></div></section>
   <section className="booking" id="booking"><div><p className="eyebrow light">YOUR TIME, YOUR VUE</p><h2>Ready for a<br/><em>fresh perspective?</em></h2><p>Make a little time for yourself. We’ll take it from here.</p></div><a className="pill pill-light" href="mailto:hello@vuesalons.com?subject=Appointment%20enquiry">Book an appointment <ArrowUpRight size={16}/></a></section>
   <section className="newsletter section-pad"><div><p className="eyebrow">A NOTE FROM VUE</p><h2>Good things,<br/><em>in your inbox.</em></h2></div><form onSubmit={e=>{e.preventDefault();setSent(true);}}><label htmlFor="email">Occasional updates, salon news and a little inspiration.</label><div className="email-field"><input id="email" type="email" required placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)}/><button aria-label="Subscribe"><ArrowRight/></button></div>{sent&&<small>Thanks for your interest! Our newsletter signup will be connected soon.</small>}</form></section>
  </main>
  <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark">VUE</span><small>SALONS</small></a><p>We groom with perspective.<br/>That’s the VUE way.</p><div className="footer-links"><a href="#about-us">About</a><a href="#services">Services</a><a href="#gifting">Gifting</a><a href="#salons">Our salons</a></div><div className="socials"><a href="#instagram" aria-label="Instagram"><Instagram/></a><a href="#facebook" aria-label="Facebook"><Facebook/></a></div></div><div className="footer-bottom"><span>© 2026 VUE SALONS</span><span>MADE WITH CARE</span><a href="#home">BACK TO TOP ↑</a></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
