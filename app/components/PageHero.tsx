import { ArrowDown } from "lucide-react";
// import { kickerTan } from "../styles";
import { Heading } from "../components/ui/Heading";

export function PageHero({  title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return (
    <section className="grid min-h-screen grid-cols-[.9fr_1.1fr] overflow-hidden bg-navy-deep text-white max-lg:grid-cols-1 max-lg:pt-[142px] max-sm:pt-[126px]" id="top">
      <div className="self-center py-[75px] pr-[6vw] pl-[max(24px,calc((100vw_-_1440px)/2))] max-lg:px-6 max-lg:py-[70px] max-sm:px-[18px] max-sm:py-[55px]">
        {/* <p className={kickerTan}>{eyebrow}</p> */}
        <Heading size="xl" tone="white">
          {title}</Heading>
        <p className="mt-5 max-w-[590px] text-[19px] text-[#dbe2ea]">{copy}</p>
        <a className="mt-7 inline-flex items-center gap-2 font-extrabold text-tan" href="#main">Explore <ArrowDown size={18} className="-rotate-90"/></a>
      </div>
      <div className="min-h-[660px] overflow-hidden rounded-l-[52%] max-lg:min-h-[480px] max-lg:rounded-t-[260px] max-lg:rounded-b-none max-sm:min-h-[360px] max-sm:rounded-t-[190px]">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
    </section>
  );
}
