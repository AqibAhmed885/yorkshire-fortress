import { BellRing, Building2, Castle, KeyRound, ShieldCheck, TicketCheck } from "lucide-react";

const icons = {
  shield: ShieldCheck,
  key: KeyRound,
  bell: BellRing,
  badge: Castle,
  building: Building2,
  event: TicketCheck,
};

export function ServiceIcon({ name, size = 24 }: { name: keyof typeof icons; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} />;
}
