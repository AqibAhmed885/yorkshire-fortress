import { ArrowUpRight } from "lucide-react";
import { services } from "../data";
import { ServiceIcon } from "./ServiceIcon";
import Link from "next/link";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {services.map((service) => (
        <Link
          href={`/services/${service.slug}`}
          key={service.slug}
          className="group relative isolate min-h-[420px] overflow-hidden text-white max-sm:min-h-[390px]"
        >
          <img
            className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.055]"
            src={service.image}
            alt=""
          />
          <span className="absolute inset-0 -z-10 bg-linear-to-b from-black/5 to-black/85" />
          {/* <span className="absolute top-5 left-[22px] text-[11px] tracking-[.18em] text-gray-200">0{index + 1}</span> */}
          <span className="absolute bottom-[145px] left-[22px] grid size-12 place-items-center border border-white/55 text-tan duration-400 group-hover:translate-x-[780%]  transition-transform">
            <ServiceIcon name={service.icon} />
          </span>
          <span className="absolute right-[52px] bottom-6 left-[22px]">
            <strong className="mb-2 block text-[23px] leading-[1.15]">{service.shortTitle}</strong>
            <small className="block text-[13px] leading-[1.35] text-[#dce1e5]">
              {service.summary}
            </small>
          </span>
          <ArrowUpRight className="absolute right-5 bottom-[25px] text-tan" />
        </Link>
      ))}
    </div>
  );
}
