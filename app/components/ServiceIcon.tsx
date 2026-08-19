import { BellRing, CarFront, Castle, KeyRound, ShieldCheck, TicketCheck } from "lucide-react";

const icons = {
  shield: ShieldCheck,
  key: KeyRound,
  bell: BellRing,
  badge: Castle,
  car: CarFront,
  event: TicketCheck,
};

export function ServiceIcon({ name, size = 24 }: { name: keyof typeof icons; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} />;
}
