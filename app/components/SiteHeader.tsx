"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { services } from "../data";
import Link from "next/link";

const links = [
    { href: "/sectors", label: "Sectors" },
    { href: "/insights", label: "Insights & news" },
    { href: "/contact", label: "Contact" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const updateHeader = () => setSticky(window.scrollY > 160);
        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
        return () => window.removeEventListener("scroll", updateHeader);
    }, []);

    const headerPosition = sticky
        ? "animate-header-in fixed inset-x-0 top-0 z-50 bg-navy shadow-[0_10px_35px_rgba(0,0,0,.2)]"
        : solid
          ? "relative z-50 bg-navy"
          : "absolute inset-x-0 top-0 z-50";
    const navHeight = sticky ? "h-[78px]" : "h-[104px]";
    const mobileTop = sticky ? "top-[78px]" : "top-[142px]";

    return (
        <header className={`${headerPosition} text-white`}>
            {!sticky && (
                <div className="flex h-[38px] items-center justify-between bg-onyx/95 px-[max(24px,calc((100vw_-_1440px)/2))] text-[11px] font-semibold tracking-[.05em] max-sm:hidden">
                    <span>Protecting Yorkshire. Supporting the UK.</span>
                    <a className="flex items-center gap-2 text-tan" href="/contact">
                        <Phone size={14} /> Request a callback
                    </a>
                </div>
            )}
            <nav
                className={`flex ${navHeight} items-center justify-between px-[max(24px,calc((100vw_-_1440px)/2))] transition-all max-sm:h-[88px] max-sm:px-[18px] ${!solid && !sticky ? "bg-linear-to-b from-black/50 to-transparent" : ""}`}
                aria-label="Main navigation"
            >
                <Link
                    className="relative z-10 block w-[245px] max-sm:w-[205px]"
                    href="/"
                    aria-label="Yorkshire Fortress Security home"
                >
                    <img src="/brand/logo-light.png" alt="Yorkshire Fortress Security" />
                </Link>
                <div className="flex items-center gap-[clamp(20px,2.2vw,38px)] text-base font-semibold max-lg:hidden">
                    <Link className="transition-colors  hover:text-tan" href="/about">
                        About us
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        onBlur={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget))
                                setServicesOpen(false);
                        }}
                    >
                        <button
                            className="flex items-center gap-1.5 bg-transparent py-8 font-semibold transition-colors hover:text-tan"
                            aria-haspopup="true"
                            aria-expanded={servicesOpen}
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services{" "}
                            <ChevronDown
                                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                size={15}
                            />
                        </button>
                        {servicesOpen && (
                            <div className="absolute top-full left-1/2 w-[650px] -translate-x-1/2 border-t-4 border-tan bg-white p-7 text-onyx shadow-[0_22px_55px_rgba(0,0,0,.25)]">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-xs font-extrabold uppercase tracking-[.16em] text-navy">
                                        Our services
                                    </span>
                                    <Link
                                        className="flex items-center gap-2 text-xs font-extrabold text-navy"
                                        href="/services"
                                    >
                                        View all <ArrowRight size={16} />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-px bg-line">
                                    {services.map((service) => (
                                        <Link
                                            className="group grid grid-cols-[28px_1fr_auto] items-center gap-2.5 bg-white px-4 py-[18px] transition-colors hover:bg-paper"
                                            href={`/services/${service.slug}`}
                                            key={service.slug}
                                        >
                                            <strong className="text-[14px] text-nowrap text-navy">
                                                {service.shortTitle}
                                            </strong>
                                            <ArrowUpRight
                                                className="text-tan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                size={17}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    {links.map((link) => (
                        <a
                            className="transition-colors hover:text-tan"
                            key={link.href}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        className="flex items-center gap-2.5 border border-tan bg-tan px-[17px] py-3 text-onyx transition-colors hover:bg-white"
                        href="/contact"
                    >
                        Talk to our team <ArrowRight size={17} />
                    </a>
                </div>
                <button
                    className="hidden size-11 place-items-center border border-white/35 bg-transparent max-lg:grid"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </nav>
            {open && (
                <div
                    className={`absolute ${mobileTop} inset-x-0 max-h-[calc(100vh_-_78px)] overflow-y-auto border-t border-white/15 bg-navy px-6 py-4 shadow-2xl lg:hidden`}
                >
                    <a
                        className="flex items-center justify-between border-b border-white/15 py-4 font-bold"
                        href="/about"
                    >
                        About us
                        <ArrowRight size={18} />
                    </a>
                    <button
                        className="flex w-full items-center justify-between border-b border-white/15 bg-transparent py-4 text-left font-bold"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen(!servicesOpen)}
                    >
                        Services
                        <ChevronDown
                            className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                            size={18}
                        />
                    </button>
                    {servicesOpen && (
                        <div className="bg-navy-deep px-4">
                            {services.map((service) => (
                                <a
                                    className="flex items-center justify-between border-b border-white/10 py-3.5 text-sm text-[#dce2e8]"
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                >
                                    {service.shortTitle}
                                    <ArrowRight size={16} />
                                </a>
                            ))}
                        </div>
                    )}
                    {links.map((link) => (
                        <a
                            className="flex items-center justify-between border-b border-white/15 py-4 font-bold"
                            key={link.href}
                            href={link.href}
                        >
                            {link.label}
                            <ArrowRight size={18} />
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
