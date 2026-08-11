import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { insights } from "../data";

export const metadata: Metadata = { title: "Insights & News | Yorkshire Fortress Security", description: "Practical security guidance for safer people, places and operations." };

export default function InsightsPage() { return <main><SiteHeader /><PageHero eyebrow="Insights & news" title="Practical guidance for safer places." copy="Clear thinking on guarding, response, patrols, events and the risks security leaders face every day." image="/media/alarm-response.jpg" />
  <section className="yfs-section" id="main"><div className="yfs-title-row"><div><p className="yfs-kicker">Latest thinking</p><h2>Useful, considered and ready to apply.</h2></div></div><div className="yfs-news-grid full">{insights.map((item) => <article key={item.title}><a href="#contact" className="yfs-news-image"><img src={item.image} alt="" /><span>{item.category}</span></a><div><small>{item.date}</small><h3>{item.title}</h3><p>{item.copy}</p><a href="#contact">Read insight <ArrowRight size={17} /></a></div></article>)}</div></section>
  <section className="yfs-subscribe"><Mail /><div><p className="yfs-kicker tan">Stay informed</p><h2>Security insight, without the noise.</h2><p>Occasional practical guidance for people responsible for sites, teams and operations.</p></div><a href="mailto:info@yorkshirefortresssecurity.co.uk">Join the update list <ArrowRight /></a></section><SiteFooter /></main>; }
