export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  icon: "shield" | "key" | "bell" | "badge" | "car" | "event";
  features: string[];
  suitableFor: string[];
  clientReceives: string[];
  sections: { title: string; copy: string }[];
};

export const services: Service[] = [
  {
    slug: "security-guards",
    title: "Security Guards",
    shortTitle: "Security Guards",
    eyebrow: "Visible protection",
    summary: "Professional security officers who protect your people, premises and assets with confidence and care.",
    intro: "A trained security presence remains one of the most effective ways to deter risk, manage access and respond quickly when something is not right. Our officers become a dependable extension of your organisation.",
    image: "/media/security-guard.jpg",
    icon: "shield",
    features: ["Uniformed security officers", "Access and visitor control", "Reception and concierge support", "Site patrols and incident reporting", "Client-branded officer options", "Site-specific operating procedures"],
    suitableFor: ["Commercial offices and business parks", "Construction and infrastructure sites", "Warehouses and distribution facilities", "Retail, leisure and public-facing premises", "Vacant or high-value property"],
    clientReceives: ["A site-specific assignment plan", "Defined patrols, access and escalation duties", "Shift logs and incident records", "A clear management and communication route"],
    sections: [
      { title: "The right people for your environment", copy: "We match officers to the culture, risk profile and daily rhythm of your site. Every assignment begins with clear post instructions and role-specific preparation, helping our teams protect without disrupting your operation." },
      { title: "Trained, accountable and ready", copy: "Our officers are selected for professionalism, judgement and communication. Ongoing supervision, clear reporting and continuous development keep standards high from mobilisation onward." },
      { title: "A visible deterrent with practical duties", copy: "A guarding plan can include reception support, visitor verification, contractor checks, delivery control, internal and external patrols, opening and closing routines, asset protection and first response to incidents. Duties are agreed before deployment so the officer knows where attention matters most and your team knows exactly what to expect." },
      { title: "Reporting that helps you manage risk", copy: "Good guarding should produce more than a physical presence. Officers maintain a clear record of patrols, access issues, safety observations and incidents. Significant findings follow an agreed escalation route, giving responsible managers timely information and an auditable picture of activity on site." },
    ],
  },
  {
    slug: "key-holding",
    title: "Key Holding",
    shortTitle: "Key Holding",
    eyebrow: "Secure access, 24/7",
    summary: "Secure key custody and dependable out-of-hours access, without placing your employees at unnecessary risk.",
    intro: "When an incident, alarm or emergency happens, reliable access matters. Our key holding service keeps a controlled set of keys available to authorised response officers, ready to attend your premises day or night.",
    image: "/media/key-holding.jpg",
    icon: "key",
    features: ["Secure off-site key custody", "Scheduled lock and unlock", "Emergency premises access", "Contractor access support", "Site-specific escalation plans", "Clear attendance reports"],
    suitableFor: ["Offices and business premises", "Schools, colleges and community buildings", "Retail and hospitality locations", "Vacant or intermittently occupied property", "Multi-site property portfolios"],
    clientReceives: ["Controlled key or access-device records", "Documented access instructions", "Named escalation contacts", "Attendance and action reports after callouts"],
    sections: [
      { title: "Key holding shaped around your site", copy: "We begin by documenting your premises, access points and escalation requirements. That means every callout follows an agreed process designed for your building, people and operational priorities." },
      { title: "Peace of mind outside business hours", copy: "Our response officers can unlock, inspect and re-secure your property, reducing risk for lone workers and removing the burden of late-night attendance from your team." },
      { title: "Controlled access, not casual key storage", copy: "Key holding covers the controlled custody of physical keys, fobs or other devices used to operate a lock. Access information is handled on a need-to-know basis, with clear authorisation and handover procedures designed to protect both the premises and the integrity of the key set." },
      { title: "Useful for planned and unplanned access", copy: "As well as supporting alarm response, a key holder can facilitate agreed lock and unlock visits, provide authorised access for emergency contractors and help re-secure a property after an incident. Every use follows the site instructions and is recorded for the client." },
    ],
  },
  {
    slug: "alarm-response",
    title: "Alarm Response",
    shortTitle: "Alarm Response",
    eyebrow: "Rapid incident attendance",
    summary: "A calm, professional response to alarm activations—24 hours a day, 365 days a year.",
    intro: "An alarm only protects your property when the response is fast and effective. Our trained officers attend activations, inspect the premises, identify signs of intrusion or damage and follow your agreed escalation procedure.",
    image: "/media/alarm-response.jpg",
    icon: "bell",
    features: ["24/7/365 response cover", "Interior and perimeter checks", "False-alarm investigation", "Emergency service liaison", "Alarm reset and re-securing", "Detailed incident reporting"],
    suitableFor: ["Intruder and security alarm activations", "Commercial and industrial premises", "Education and community sites", "Retail units and hospitality venues", "Vacant and vulnerable buildings"],
    clientReceives: ["A site response and escalation plan", "Professional attendance by a response officer", "Checks matched to the activation and site risk", "A report of findings, actions and follow-up needs"],
    sections: [
      { title: "Experienced in alarm procedures", copy: "Response officers are briefed on your alarm system, site risks and nominated contacts. They assess activations safely, look for the cause and take the right next step without exposing your employees to danger." },
      { title: "A complete response, not just attendance", copy: "Where safe to do so, we reset systems, secure vulnerable access points and remain on site until your premises is protected. You receive a clear record of the activation, findings and actions taken." },
      { title: "A proportionate check of the premises", copy: "On arrival, the officer considers the alarm information available, checks for obvious signs of forced entry, damage, fire, flooding or other hazards, and follows the agreed inspection route. They do not take unnecessary risks: suspicious circumstances are escalated to the appropriate emergency service and nominated client contacts." },
      { title: "Closing the incident properly", copy: "The response continues until the agreed safe outcome is reached. This may include supporting police or contractors, isolating an affected area, arranging temporary protection, resetting an alarm where authorised or remaining until the building can be secured. The client receives a useful account of what happened and what may need attention next." },
    ],
  },
  {
    slug: "door-supervisors",
    title: "Door Supervisors",
    shortTitle: "Door Supervisors",
    eyebrow: "Confident front-of-house security",
    summary: "Licensed door supervisors who balance firm access control with a professional customer experience.",
    intro: "The best door supervision is calm, observant and proportionate. Our SIA-licensed teams help venues manage entry, protect guests and staff, prevent disorder and respond professionally to challenging situations.",
    image: "/media/door-supervisors.jpg",
    icon: "badge",
    features: ["SIA-licensed personnel", "Entry and ID checks", "Queue and capacity management", "Conflict de-escalation", "Welfare and safeguarding support", "Venue incident reporting"],
    suitableFor: ["Licensed bars, pubs and clubs", "Hotels and hospitality venues", "Live entertainment and private functions", "Ticketed and high-footfall venues", "Temporary licensed events"],
    clientReceives: ["A venue and admissions briefing", "Clearly allocated front-of-house roles", "Entry, refusal and incident records", "Supervisor communication with venue management"],
    sections: [
      { title: "Security that reflects your venue", copy: "Every team is briefed on your admissions policy, customer profile, licensing conditions and brand standards. Our supervisors stay approachable while maintaining clear, consistent control." },
      { title: "Prepared for pressure", copy: "Strong communication and early intervention are central to our approach. Our teams monitor behaviour, defuse tension and coordinate with venue management or emergency services when required." },
      { title: "Consistent control at the point of entry", copy: "Door supervisors can support age and identification checks, search policies, guest lists, ticket or accreditation checks, capacity control and management of refusals. Procedures are applied fairly and in line with the venue’s agreed policy, helping protect the premises from unauthorised access, theft, damage and disorder." },
      { title: "Welfare, observation and early intervention", copy: "Effective door teams continue to monitor the venue after admission. They watch crowd behaviour, circulation routes and welfare concerns, communicate developing issues and use calm, proportionate intervention before a situation escalates. Where an incident occurs, the response and relevant details are recorded for venue management." },
    ],
  },
  {
    slug: "vehicle-patrol-inspections",
    title: "VPI — Vehicle Patrol Inspections",
    shortTitle: "Vehicle Patrol Inspections",
    eyebrow: "Mobile patrol protection",
    summary: "Scheduled or random mobile inspections that provide a visible deterrent and a reliable record of every visit.",
    intro: "Vehicle Patrol Inspections give organisations flexible protection without the cost of a permanently stationed officer. Our mobile teams visit your site, complete agreed checks and respond to anything out of place.",
    image: "/media/mobile-patrol.jpg",
    icon: "car",
    features: ["Scheduled and random patrols", "Perimeter and access checks", "Lock and unlock support", "Visible security deterrence", "Hazard and damage identification", "Time-stamped patrol reports"],
    suitableFor: ["Construction and development sites", "Business parks and industrial estates", "Vacant property and remote locations", "Schools and community premises", "Organisations with several nearby sites"],
    clientReceives: ["A patrol route and check schedule", "Site-specific inspection checkpoints", "Time-stamped visit records", "Escalation of exceptions and urgent findings"],
    sections: [
      { title: "Proactive checks, clear evidence", copy: "Officers inspect doors, windows, gates, equipment and vulnerable areas according to your site plan. Each visit is recorded, with exceptions escalated immediately and actions documented." },
      { title: "Flexible protection across multiple sites", copy: "Routes can cover offices, construction sites, schools, residential blocks and vacant property. Visit frequency and checklists are adjusted as your risks, operating hours or portfolio change." },
      { title: "Visible patrols at less predictable times", copy: "Visits can be scheduled, varied or combined according to the risk profile. A liveried or clearly identifiable patrol presence helps deter opportunistic trespass, theft and antisocial behaviour, while giving the client evidence that vulnerable points are being checked outside normal operating hours." },
      { title: "More than a drive-by inspection", copy: "The patrol task is defined in advance and may include perimeter walks, gate and boundary checks, doors and windows, plant or compound observations, lighting, signs of occupation, water leaks, fire indicators and other site-specific exceptions. If something is wrong, the officer follows the agreed escalation and securing procedure." },
    ],
  },
  {
    slug: "event-security",
    title: "Event Security",
    shortTitle: "Event Security",
    eyebrow: "Safe, welcoming events",
    summary: "Experienced event security teams who protect people, venues and reputations from arrival to close.",
    intro: "From a private function to a busy public event, security must work seamlessly with the guest experience. We plan and deploy a proportionate team to manage access, movement, welfare and incidents throughout your event.",
    image: "/media/event-security.jpg",
    icon: "event",
    features: ["Pre-event security planning", "Ingress and egress control", "Guest and accreditation checks", "Crowd and queue management", "Backstage and asset protection", "Emergency procedure support"],
    suitableFor: ["Corporate and private events", "Concerts and live entertainment", "Community and outdoor events", "Sporting and hospitality occasions", "Temporary and ticketed venues"],
    clientReceives: ["A role-based event deployment plan", "Supervisor and communication structure", "Access, crowd and restricted-area coverage", "Incident records and a post-event summary"],
    sections: [
      { title: "Planned around your event", copy: "We review the venue, audience, schedule, capacities and known risks before deployment. Roles and communication lines are agreed in advance so the team arrives ready and integrated." },
      { title: "Professional from first arrival to final exit", copy: "Our personnel remain alert and approachable, supporting guests while protecting restricted areas and key assets. Supervisors coordinate the team and provide a clear post-event report." },
      { title: "The right roles in the right places", copy: "A proportionate deployment may cover entrances, queues, ticket or accreditation points, front-of-stage areas, backstage access, bars, service gates, control points and exits. We distinguish between security and stewarding duties so each position is allocated to appropriately briefed personnel and the command structure remains clear." },
      { title: "Security integrated with the event plan", copy: "The team works to the event schedule, venue rules and agreed emergency arrangements. Briefings cover communications, prohibited items, lost children or vulnerable guests, evacuation routes, incident escalation and liaison with organisers or emergency services. This helps security support the experience instead of becoming separate from it." },
    ],
  },
];

export const sectors = [
  { title: "Construction", copy: "Protect active sites, plant and materials with guarding, access control and mobile patrols.", image: "/media/construction-night.jpg" },
  { title: "Commercial & offices", copy: "A professional security presence that protects workplaces while supporting staff and visitors.", image: "/media/security-guard.jpg" },
  { title: "Education", copy: "Reassuring, safeguarding-aware security for schools, colleges, campuses and events.", image: "/media/mobile-patrol.jpg" },
  { title: "Retail & leisure", copy: "Customer-aware protection for shops, venues and high-footfall destinations.", image: "/media/door-supervisors.jpg" },
  { title: "Events & hospitality", copy: "Proportionate crowd, access and venue security delivered with a welcoming approach.", image: "/media/event-security.jpg" },
  { title: "Vacant property", copy: "Flexible key holding, response and inspection plans for unoccupied or changing sites.", image: "/media/key-holding.jpg" },
];

export const insights = [
  { category: "Security planning", title: "How to choose the right guarding model for your site", copy: "A practical way to balance visible presence, patrol coverage and out-of-hours response.", image: "/media/security-guard.jpg", date: "8 August 2026" },
  { category: "Key holding", title: "Why employees should not attend alarm activations alone", copy: "The hidden risks of out-of-hours callouts—and how professional response cover protects your people.", image: "/media/key-holding.jpg", date: "31 July 2026" },
  { category: "Mobile patrols", title: "What a useful vehicle patrol inspection should include", copy: "From perimeter checks to time-stamped reporting, here is what a robust visit looks like.", image: "/media/mobile-patrol.jpg", date: "22 July 2026" },
  { category: "Event security", title: "Building safety into the guest experience", copy: "Why early planning and good communication matter as much as the number of officers on site.", image: "/media/event-security.jpg", date: "14 July 2026" },
  { category: "Risk management", title: "Six warning signs your site security plan needs a review", copy: "Small operational changes can create new gaps. These are the indicators to watch.", image: "/media/alarm-response.jpg", date: "6 July 2026" },
  { category: "Door supervision", title: "Firm, fair and welcoming: modern door supervision", copy: "How professional teams protect venues while preserving the right atmosphere for guests.", image: "/media/door-supervisors.jpg", date: "28 June 2026" },
];
