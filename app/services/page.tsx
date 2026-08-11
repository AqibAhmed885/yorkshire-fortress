import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ServiceGrid } from "../components/ServiceGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Security Services | Yorkshire Fortress Security", description: "Security guards, key holding, alarm response, door supervisors, vehicle patrol inspections and event security." };

export default function ServicesPage() {
  return <main><SiteHeader /><PageHero eyebrow="Our services" title="Protection that fits the way you operate." copy="Six focused security services, delivered individually or combined into one coordinated plan." image="/media/mobile-patrol.jpg" />
    <section className="yfs-section" id="main"><div className="yfs-section-intro"><div><p className="yfs-kicker">Built for real-world risk</p><h2>Clear services.<br />Flexible delivery.</h2></div><div><p className="lead">Every assignment begins with your people, property, hours and priorities—not a generic package.</p><p>We agree the risks, responsibilities, escalation routes and reporting you need, then shape the service around them.</p></div></div><ServiceGrid /></section>
    <section className="yfs-process"><div><p className="yfs-kicker tan">How we work</p><h2>From first conversation to confident cover.</h2></div><ol><li><span>01</span><strong>Understand</strong><p>We learn your risks, environment and service expectations.</p></li><li><span>02</span><strong>Design</strong><p>We create clear post instructions, routes and escalation plans.</p></li><li><span>03</span><strong>Mobilise</strong><p>We brief the right people and make the transition controlled.</p></li><li><span>04</span><strong>Improve</strong><p>We review performance, reports and changing requirements.</p></li></ol></section>
    <section className="yfs-assurance"><div><CheckCircle2 /><h2>Need more than one service?</h2><p>Combine guarding, key holding, alarm response and mobile patrols under one accountable security partner.</p></div><a href="#contact">Build your security plan <ArrowRight /></a></section>
    <SiteFooter />
  </main>;
}
