import { ArrowUpRight } from "lucide-react";
import { services } from "../data";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceGrid() {
  return <div className="yfs-service-grid">{services.map((service, index) => (
    <a href={`/services/${service.slug}`} className="yfs-service-card" key={service.slug}>
      <img src={service.image} alt="" />
      <span className="yfs-card-overlay" />
      <span className="yfs-card-no">0{index + 1}</span>
      <span className="yfs-card-icon"><ServiceIcon name={service.icon} /></span>
      <span className="yfs-card-copy"><strong>{service.shortTitle}</strong><small>{service.summary}</small></span>
      <ArrowUpRight className="yfs-card-arrow" />
    </a>
  ))}</div>;
}
