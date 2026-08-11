"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { services } from "../data";

const links = [
  { href: "/about", label: "About us" },
  { href: "/sectors", label: "Sectors" },
  { href: "/insights", label: "Insights & news" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const servicesMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeader = () => setSticky(window.scrollY > 160);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`yfs-header ${solid ? "solid" : ""} ${sticky ? "is-sticky" : ""}`}>
      <div className="yfs-utility">
        <span>Protecting Yorkshire. Supporting the UK.</span>
        <a href="#contact"><Phone size={14} /> Request a callback</a>
      </div>
      <nav className="yfs-nav" aria-label="Main navigation">
        <a href="/" className="yfs-logo" aria-label="Yorkshire Fortress Security home">
          <img src="/brand/logo-light.png" alt="Yorkshire Fortress Security" />
        </a>
        <div className="yfs-desktop-nav">
          <a href="/about">About us</a>
          <div
            className="yfs-services-menu"
            ref={servicesMenu}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}
          >
            <button className="yfs-services-trigger" aria-haspopup="true" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown size={15} />
            </button>
            {servicesOpen && <div className="yfs-services-dropdown">
              <div className="yfs-dropdown-heading"><span>Our services</span><a href="/services">View all <ArrowRight size={16} /></a></div>
              <div className="yfs-dropdown-grid">{services.map((service, index) => <a href={`/services/${service.slug}`} key={service.slug}><span>0{index + 1}</span><strong>{service.shortTitle}</strong><ArrowUpRight size={17} /></a>)}</div>
            </div>}
          </div>
          {links.slice(1).map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="yfs-nav-cta" href="#contact">Talk to our team <ArrowRight size={17} /></a>
        </div>
        <button className="yfs-menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="yfs-mobile-nav">
        <a href="/about">About us<ArrowRight size={18} /></a>
        <button className="yfs-mobile-services-trigger" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>Services<ChevronDown className={servicesOpen ? "open" : ""} size={18} /></button>
        {servicesOpen && <div className="yfs-mobile-services"><a href="/services"><strong>All services</strong><ArrowRight size={17} /></a>{services.map((service) => <a key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}<ArrowRight size={16} /></a>)}</div>}
        {links.slice(1).map((link) => <a key={link.href} href={link.href}>{link.label}<ArrowRight size={18} /></a>)}
        <a href="#contact">Talk to our team<ArrowRight size={18} /></a>
      </div>}
    </header>
  );
}
