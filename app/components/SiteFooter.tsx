import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { kickerTan, primaryButton, sectionHeading } from "../styles";

export function SiteFooter({ hideContactBand = false }: { hideContactBand?: boolean }) {
  const footerLink = "flex items-start gap-2 text-sm text-[#c8c8c8] hover:text-white [&>svg]:w-[17px] [&>svg]:shrink-0 [&>svg]:text-tan";
  return (
    <footer className="bg-onyx text-white" id="contact">
      {!hideContactBand && (
        <div className="flex min-h-[260px] items-center justify-between gap-10 bg-navy px-[max(24px,calc((100vw_-_1240px)/2))] py-[60px] max-lg:flex-col max-lg:items-start max-sm:px-[18px] max-sm:py-[65px]">
          <div><p className={kickerTan}>Start a conversation</p><h2 className={`${sectionHeading} max-w-[810px] !text-white`}>Let’s make your people and places safer.</h2></div>
          <Link className={`${primaryButton} shrink-0`} href="/contact">Request a security review <ArrowUpRight /></Link>
        </div>
      )}
      <div className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1440px] grid-cols-[1.5fr_.7fr_1.2fr] gap-[8vw] py-[75px] max-lg:grid-cols-2 max-sm:w-[calc(100%_-_32px)] max-sm:grid-cols-1">
        <div className="max-lg:col-span-2 max-sm:col-span-1">
          <img className="w-[260px]" src="/brand/logo-light.png" alt="Yorkshire Fortress Security" />
          <p className="max-w-[380px] text-sm text-[#aaa]">Professional guarding, patrol and response services designed around your organisation.</p>
        </div>
        <div className="flex flex-col gap-3"><h3 className="mb-1.5 text-[13px] font-extrabold uppercase tracking-[.13em] text-tan">Explore</h3>
          <Link className={footerLink} href="/about">About us</Link>
          <Link className={footerLink} href="/services">Services</Link>
          <Link className={footerLink} href="/sectors">Sectors</Link>
          <Link className={footerLink} href="/insights">Insights & news</Link>
          <Link className={footerLink} href="/contact">Contact</Link></div>
        <div className="flex flex-col gap-3"><h3 className="mb-1.5 text-[13px] font-extrabold uppercase tracking-[.13em] text-tan">Contact</h3><a className={footerLink} href="mailto:info@yorkshirefortresssecurity.co.uk"><Mail /> info@yorkshirefortresssecurity.co.uk</a><span className={footerLink}><MapPin /> Yorkshire, United Kingdom</span><Link className={footerLink} href="/contact"><Phone /> Request a callback</Link></div>
      </div>
      <div className="flex gap-[30px] border-t border-[#333] px-[max(24px,calc((100vw_-_1240px)/2))] py-[18px] text-[11px] text-[#848484] max-sm:flex-wrap max-sm:gap-x-5 max-sm:gap-y-2">
        <span>© 2026 Yorkshire Fortress Security</span><span>Professional • Vigilant • Dependable</span><a className="ml-auto max-sm:ml-0" href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Media: Pexels</a><a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
