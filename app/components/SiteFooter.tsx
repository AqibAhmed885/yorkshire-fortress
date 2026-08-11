import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="yfs-footer" id="contact">
      <div className="yfs-contact-band">
        <div><p className="yfs-kicker tan">Start a conversation</p><h2>Let’s make your people and places safer.</h2></div>
        <a href="mailto:info@yorkshirefortresssecurity.co.uk">Request a security review <ArrowUpRight /></a>
      </div>
      <div className="yfs-footer-main">
        <div className="yfs-footer-brand"><img src="/brand/logo-light.png" alt="Yorkshire Fortress Security" /><p>Professional guarding, patrol and response services designed around your organisation.</p></div>
        <div><h3>Explore</h3><a href="/about">About us</a><a href="/services">Services</a><a href="/sectors">Sectors</a><a href="/insights">Insights & news</a></div>
        <div><h3>Contact</h3><a href="mailto:info@yorkshirefortresssecurity.co.uk"><Mail /> info@yorkshirefortresssecurity.co.uk</a><span><MapPin /> Yorkshire, United Kingdom</span><a href="#contact"><Phone /> Request a callback</a></div>
      </div>
      <div className="yfs-footer-bottom"><span>© 2026 Yorkshire Fortress Security</span><span>Professional • Vigilant • Dependable</span><a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Media: Pexels</a><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
