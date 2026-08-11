import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { sectors } from "../data";

export const metadata: Metadata = { title: "Sectors | Yorkshire Fortress Security", description: "Security for construction, commercial property, education, retail, events and vacant premises." };

export default function SectorsPage() { return <main><SiteHeader /><PageHero eyebrow="Sectors" title="Security that fits your environment." copy="The risks are different. The standard should never be. We adapt our people and procedures to the setting." image="/media/construction-night.jpg" />
  <section className="yfs-section" id="main"><div className="yfs-section-intro"><div><p className="yfs-kicker">Sector experience</p><h2>Prepared for the way your site really works.</h2></div><div><p className="lead">Security is more effective when the team understands the environment, the people using it and the operational pressures behind it.</p><p>We design each deployment around your opening hours, access patterns, risk profile and customer experience.</p></div></div><div className="yfs-sector-grid">{sectors.map((sector, index) => <article key={sector.title}><img src={sector.image} alt="" /><span>0{index + 1}</span><div><h2>{sector.title}</h2><p>{sector.copy}</p><a href="#contact">Discuss this sector <ArrowRight /></a></div></article>)}</div></section>
  <section className="yfs-assurance"><div><h2>Not sure which services fit your site?</h2><p>We can review your environment and recommend a proportionate mix of people, patrols and response cover.</p></div><a href="#contact">Request a security review <ArrowRight /></a></section><SiteFooter /></main>; }
