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
    summary:
      "Professional security officers who protect your people, premises and assets with confidence and care.",
    intro:
      "A trained security presence remains one of the most effective ways to deter risk, manage access and respond quickly when something is not right. Our officers become a dependable extension of your organisation.",
    image: "/media/security-guard.jpeg",
    icon: "shield",
    features: [
      "Uniformed security officers",
      "Access and visitor control",
      "Reception and concierge support",
      "Site patrols and incident reporting",
      "Client-branded officer options",
      "Site-specific operating procedures",
    ],
    suitableFor: [
      "Commercial offices and business parks",
      "Construction and infrastructure sites",
      "Warehouses and distribution facilities",
      "Retail, leisure and public-facing premises",
      "Vacant or high-value property",
    ],
    clientReceives: [
      "A site-specific assignment plan",
      "Defined patrols, access and escalation duties",
      "Shift logs and incident records",
      "A clear management and communication route",
    ],
    sections: [
      {
        title: "The right people for your environment",
        copy: "We match officers to the culture, risk profile and daily rhythm of your site. Every assignment begins with clear post instructions and role-specific preparation, helping our teams protect without disrupting your operation.",
      },
      {
        title: "Trained, accountable and ready",
        copy: "Our officers are selected for professionalism, judgement and communication. Ongoing supervision, clear reporting and continuous development keep standards high from mobilisation onward.",
      },
      {
        title: "A visible deterrent with practical duties",
        copy: "A guarding plan can include reception support, visitor verification, contractor checks, delivery control, internal and external patrols, opening and closing routines, asset protection and first response to incidents. Duties are agreed before deployment so the officer knows where attention matters most and your team knows exactly what to expect.",
      },
      {
        title: "Reporting that helps you manage risk",
        copy: "Good guarding should produce more than a physical presence. Officers maintain a clear record of patrols, access issues, safety observations and incidents. Significant findings follow an agreed escalation route, giving responsible managers timely information and an auditable picture of activity on site.",
      },
    ],
  },
  {
    slug: "key-holding",
    title: "Key Holding",
    shortTitle: "Key Holding",
    eyebrow: "Secure access, 24/7",
    summary:
      "Secure key custody and dependable out-of-hours access, without placing your employees at unnecessary risk.",
    intro:
      "When an incident, alarm or emergency happens, reliable access matters. Our key holding service keeps a controlled set of keys available to authorised response officers, ready to attend your premises day or night.",
    image: "/media/keyholder.jpg",
    icon: "key",
    features: [
      "Secure off-site key custody",
      "Scheduled lock and unlock",
      "Emergency premises access",
      "Contractor access support",
      "Site-specific escalation plans",
      "Clear attendance reports",
    ],
    suitableFor: [
      "Offices and business premises",
      "Schools, colleges and community buildings",
      "Retail and hospitality locations",
      "Vacant or intermittently occupied property",
      "Multi-site property portfolios",
    ],
    clientReceives: [
      "Controlled key or access-device records",
      "Documented access instructions",
      "Named escalation contacts",
      "Attendance and action reports after callouts",
    ],
    sections: [
      {
        title: "Key holding shaped around your site",
        copy: "We begin by documenting your premises, access points and escalation requirements. That means every callout follows an agreed process designed for your building, people and operational priorities.",
      },
      {
        title: "Peace of mind outside business hours",
        copy: "Our response officers can unlock, inspect and re-secure your property, reducing risk for lone workers and removing the burden of late-night attendance from your team.",
      },
      {
        title: "Controlled access, not casual key storage",
        copy: "Key holding covers the controlled custody of physical keys, fobs or other devices used to operate a lock. Access information is handled on a need-to-know basis, with clear authorisation and handover procedures designed to protect both the premises and the integrity of the key set.",
      },
      {
        title: "Useful for planned and unplanned access",
        copy: "As well as supporting alarm response, a key holder can facilitate agreed lock and unlock visits, provide authorised access for emergency contractors and help re-secure a property after an incident. Every use follows the site instructions and is recorded for the client.",
      },
    ],
  },
  {
    slug: "alarm-response",
    title: "Alarm Response",
    shortTitle: "Alarm Response",
    eyebrow: "Rapid incident attendance",
    summary: "A calm, professional response to alarm activations—24 hours a day, 365 days a year.",
    intro:
      "An alarm only protects your property when the response is fast and effective. Our trained officers attend activations, inspect the premises, identify signs of intrusion or damage and follow your agreed escalation procedure.",
    image: "/media/alarm.jpeg",
    icon: "bell",
    features: [
      "24/7/365 response cover",
      "Interior and perimeter checks",
      "False-alarm investigation",
      "Emergency service liaison",
      "Alarm reset and re-securing",
      "Detailed incident reporting",
    ],
    suitableFor: [
      "Intruder and security alarm activations",
      "Commercial and industrial premises",
      "Education and community sites",
      "Retail units and hospitality venues",
      "Vacant and vulnerable buildings",
    ],
    clientReceives: [
      "A site response and escalation plan",
      "Professional attendance by a response officer",
      "Checks matched to the activation and site risk",
      "A report of findings, actions and follow-up needs",
    ],
    sections: [
      {
        title: "Experienced in alarm procedures",
        copy: "Response officers are briefed on your alarm system, site risks and nominated contacts. They assess activations safely, look for the cause and take the right next step without exposing your employees to danger.",
      },
      {
        title: "A complete response, not just attendance",
        copy: "Where safe to do so, we reset systems, secure vulnerable access points and remain on site until your premises is protected. You receive a clear record of the activation, findings and actions taken.",
      },
      {
        title: "A proportionate check of the premises",
        copy: "On arrival, the officer considers the alarm information available, checks for obvious signs of forced entry, damage, fire, flooding or other hazards, and follows the agreed inspection route. They do not take unnecessary risks: suspicious circumstances are escalated to the appropriate emergency service and nominated client contacts.",
      },
      {
        title: "Closing the incident properly",
        copy: "The response continues until the agreed safe outcome is reached. This may include supporting police or contractors, isolating an affected area, arranging temporary protection, resetting an alarm where authorised or remaining until the building can be secured. The client receives a useful account of what happened and what may need attention next.",
      },
    ],
  },
  {
    slug: "door-supervisors",
    title: "Door Supervisors",
    shortTitle: "Door Supervisors",
    eyebrow: "Confident front-of-house security",
    summary:
      "Licensed door supervisors who balance firm access control with a professional customer experience.",
    intro:
      "The best door supervision is calm, observant and proportionate. Our SIA-licensed teams help venues manage entry, protect guests and staff, prevent disorder and respond professionally to challenging situations.",
    image: "/media/door-supervisors.jpeg",
    icon: "badge",
    features: [
      "SIA-licensed personnel",
      "Entry and ID checks",
      "Queue and capacity management",
      "Conflict de-escalation",
      "Welfare and safeguarding support",
      "Venue incident reporting",
    ],
    suitableFor: [
      "Licensed bars, pubs and clubs",
      "Hotels and hospitality venues",
      "Live entertainment and private functions",
      "Ticketed and high-footfall venues",
      "Temporary licensed events",
    ],
    clientReceives: [
      "A venue and admissions briefing",
      "Clearly allocated front-of-house roles",
      "Entry, refusal and incident records",
      "Supervisor communication with venue management",
    ],
    sections: [
      {
        title: "Security that reflects your venue",
        copy: "Every team is briefed on your admissions policy, customer profile, licensing conditions and brand standards. Our supervisors stay approachable while maintaining clear, consistent control.",
      },
      {
        title: "Prepared for pressure",
        copy: "Strong communication and early intervention are central to our approach. Our teams monitor behaviour, defuse tension and coordinate with venue management or emergency services when required.",
      },
      {
        title: "Consistent control at the point of entry",
        copy: "Door supervisors can support age and identification checks, search policies, guest lists, ticket or accreditation checks, capacity control and management of refusals. Procedures are applied fairly and in line with the venue’s agreed policy, helping protect the premises from unauthorised access, theft, damage and disorder.",
      },
      {
        title: "Welfare, observation and early intervention",
        copy: "Effective door teams continue to monitor the venue after admission. They watch crowd behaviour, circulation routes and welfare concerns, communicate developing issues and use calm, proportionate intervention before a situation escalates. Where an incident occurs, the response and relevant details are recorded for venue management.",
      },
    ],
  },
  {
    slug: "vehicle-patrol-inspections",
    title: "VPI — Vehicle Patrol Inspections",
    shortTitle: "Vehicle Patrol Inspections",
    eyebrow: "Mobile patrol protection",
    summary:
      "Scheduled or random mobile inspections that provide a visible deterrent and a reliable record of every visit.",
    intro:
      "Vehicle Patrol Inspections give organisations flexible protection without the cost of a permanently stationed officer. Our mobile teams visit your site, complete agreed checks and respond to anything out of place.",
    image: "/media/vehicle-patrol.jpeg",
    icon: "car",
    features: [
      "Scheduled and random patrols",
      "Perimeter and access checks",
      "Lock and unlock support",
      "Visible security deterrence",
      "Hazard and damage identification",
      "Time-stamped patrol reports",
    ],
    suitableFor: [
      "Construction and development sites",
      "Business parks and industrial estates",
      "Vacant property and remote locations",
      "Schools and community premises",
      "Organisations with several nearby sites",
    ],
    clientReceives: [
      "A patrol route and check schedule",
      "Site-specific inspection checkpoints",
      "Time-stamped visit records",
      "Escalation of exceptions and urgent findings",
    ],
    sections: [
      {
        title: "Proactive checks, clear evidence",
        copy: "Officers inspect doors, windows, gates, equipment and vulnerable areas according to your site plan. Each visit is recorded, with exceptions escalated immediately and actions documented.",
      },
      {
        title: "Flexible protection across multiple sites",
        copy: "Routes can cover offices, construction sites, schools, residential blocks and vacant property. Visit frequency and checklists are adjusted as your risks, operating hours or portfolio change.",
      },
      {
        title: "Visible patrols at less predictable times",
        copy: "Visits can be scheduled, varied or combined according to the risk profile. A liveried or clearly identifiable patrol presence helps deter opportunistic trespass, theft and antisocial behaviour, while giving the client evidence that vulnerable points are being checked outside normal operating hours.",
      },
      {
        title: "More than a drive-by inspection",
        copy: "The patrol task is defined in advance and may include perimeter walks, gate and boundary checks, doors and windows, plant or compound observations, lighting, signs of occupation, water leaks, fire indicators and other site-specific exceptions. If something is wrong, the officer follows the agreed escalation and securing procedure.",
      },
    ],
  },
  {
    slug: "event-security",
    title: "Event Security",
    shortTitle: "Event Security",
    eyebrow: "Safe, welcoming events",
    summary:
      "Experienced event security teams who protect people, venues and reputations from arrival to close.",
    intro:
      "From a private function to a busy public event, security must work seamlessly with the guest experience. We plan and deploy a proportionate team to manage access, movement, welfare and incidents throughout your event.",
    image: "/media/event.jpeg",
    icon: "event",
    features: [
      "Pre-event security planning",
      "Ingress and egress control",
      "Guest and accreditation checks",
      "Crowd and queue management",
      "Backstage and asset protection",
      "Emergency procedure support",
    ],
    suitableFor: [
      "Corporate and private events",
      "Concerts and live entertainment",
      "Community and outdoor events",
      "Sporting and hospitality occasions",
      "Temporary and ticketed venues",
    ],
    clientReceives: [
      "A role-based event deployment plan",
      "Supervisor and communication structure",
      "Access, crowd and restricted-area coverage",
      "Incident records and a post-event summary",
    ],
    sections: [
      {
        title: "Planned around your event",
        copy: "We review the venue, audience, schedule, capacities and known risks before deployment. Roles and communication lines are agreed in advance so the team arrives ready and integrated.",
      },
      {
        title: "Professional from first arrival to final exit",
        copy: "Our personnel remain alert and approachable, supporting guests while protecting restricted areas and key assets. Supervisors coordinate the team and provide a clear post-event report.",
      },
      {
        title: "The right roles in the right places",
        copy: "A proportionate deployment may cover entrances, queues, ticket or accreditation points, front-of-stage areas, backstage access, bars, service gates, control points and exits. We distinguish between security and stewarding duties so each position is allocated to appropriately briefed personnel and the command structure remains clear.",
      },
      {
        title: "Security integrated with the event plan",
        copy: "The team works to the event schedule, venue rules and agreed emergency arrangements. Briefings cover communications, prohibited items, lost children or vulnerable guests, evacuation routes, incident escalation and liaison with organisers or emergency services. This helps security support the experience instead of becoming separate from it.",
      },
    ],
  },
];

export const sectors = [
  {
    title: "Construction",
    copy: "Protect active sites, plant and materials with guarding, access control and mobile patrols.",
    image: "/media/construction-night.jpg",
  },
  {
    title: "Commercial & offices",
    copy: "A professional security presence that protects workplaces while supporting staff and visitors.",
    image: "/media/security.jpeg",
  },
  {
    title: "Education",
    copy: "Reassuring, safeguarding-aware security for schools, colleges, campuses and events.",
    image: "/media/school.jpg",
  },
  {
    title: "Retail & leisure",
    copy: "Customer-aware protection for shops, venues and high-footfall destinations.",
    image: "/media/mall-security.jpg",
  },
  {
    title: "Events & hospitality",
    copy: "Proportionate crowd, access and venue security delivered with a welcoming approach.",
    image: "/media/event.jpeg",
  },
  {
    title: "Vacant property",
    copy: "Flexible key holding, response and inspection plans for unoccupied or changing sites.",
    image: "/media/keyholder.jpg",
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  copy: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  takeaways: string[];
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: "choosing-the-right-guarding-model",
    category: "Security planning",
    title: "How to choose the right guarding model for your site",
    copy: "A practical way to balance visible presence, patrol coverage and out-of-hours response.",
    image: "/media/security-guard.jpg",
    date: "8 August 2026",
    readTime: "7 min read",
    author: "Yorkshire Fortress Security",
    takeaways: [
      "Start with the risks and operating pattern, not a predetermined number of officers.",
      "Combine static guarding, patrols and response when different hours require different cover.",
      "Write measurable duties and review the evidence regularly.",
    ],
    content: [
      "Choosing a guarding model is not simply a decision about whether to place an officer at the front door. The right arrangement reflects how a site operates, when people and assets are most exposed, and what a successful security outcome looks like. A busy office, an active construction site and a vacant warehouse may all need a visible deterrent, but the duties, timings and level of interaction will be very different.",
      "Begin with a practical risk review. Consider access points, operating hours, lone working, deliveries, valuable equipment, previous incidents and the movement of employees, contractors and visitors. This gives you a clear picture of when a permanent presence adds value and when a mobile or responsive service may be more proportionate. It also prevents security expenditure from being concentrated in low-risk periods while important gaps remain elsewhere.",
      "Static guarding works best where continuous observation, access control or immediate intervention is required. A dedicated officer can verify visitors, manage keys, support reception, patrol vulnerable areas and respond to issues as they develop. The officer should have site-specific instructions rather than a generic list of duties, with clear priorities for routine activity, unusual situations and escalation.",
      "Mobile patrol inspections provide a flexible alternative for premises that do not need continuous cover. Scheduled or varied visits can check boundaries, doors, windows, lighting, compounds and other vulnerable points. They are particularly effective across several nearby properties or during quieter periods, but only when every patrol has a defined route, meaningful checkpoints and reliable evidence of attendance.",
      "Key holding and alarm response complete the out-of-hours picture. They give an authorised professional the means to attend activations, inspect the premises, liaise with emergency services and re-secure the site without placing employees at unnecessary risk. For many organisations, the strongest model combines daytime guarding with mobile checks and a dependable response plan overnight.",
      "Whichever model you choose, define how performance will be measured. Useful indicators include completed patrols, access exceptions, response times, incident quality, recurring vulnerabilities and the accuracy of shift records. Reports should help managers make decisions, not simply confirm that an officer was present. Regular communication between the client, officers and security management keeps instructions relevant as the site changes.",
      "A good guarding model is therefore a designed service rather than a headcount. Start with the outcome, assign the right form of protection to each period of risk, and review the evidence after mobilisation. Yorkshire Fortress Security can assess a single location or a wider portfolio and build a joined-up plan using guarding, patrols, key holding and response in the proportions your organisation actually needs.",
    ],
  },
  {
    slug: "why-employees-should-not-attend-alarms-alone",
    category: "Key holding",
    title: "Why employees should not attend alarm activations alone",
    copy: "The hidden risks of out-of-hours callouts—and how professional response cover protects your people.",
    image: "/media/key-holding.jpg",
    date: "31 July 2026",
    readTime: "6 min read",
    author: "Yorkshire Fortress Security",
    takeaways: [
      "An alarm activation is an unknown situation until the premises has been assessed.",
      "A documented professional response removes pressure from employees and lone workers.",
      "Key holding is strongest when access, escalation and reporting are agreed in advance.",
    ],
    content: [
      "An alarm call in the middle of the night often creates an immediate operational problem: someone needs to attend, but nobody yet knows what they will find. Asking a manager or employee to drive to the premises may appear convenient, especially when most activations prove harmless. The difficulty is that every genuine incident initially looks much the same as a false alarm, and an untrained lone attendee can arrive before the risks are understood.",
      "The hazards extend beyond confronting an intruder. An activation may be linked to forced entry, fire, flooding, damaged glazing, unsafe electrics, antisocial behaviour or a person still inside the building. Fatigue, poor weather and the pressure to respond quickly can also affect driving and decision-making. Employees may feel obliged to attend even when they are uncomfortable, because the organisation has not provided a safer alternative.",
      "Professional key holding transfers that responsibility to trained response personnel. A controlled set of keys or access devices is held securely, with the site address and access information separated according to agreed procedures. When an activation occurs, a response officer attends with clear instructions, conducts an external assessment and proceeds only when it is safe and authorised to do so.",
      "The response plan should describe more than how to unlock the door. It needs nominated contacts, alarm zones, vulnerable areas, emergency service arrangements, reset authority and instructions for temporary repairs or additional guarding. These details allow the officer to act decisively while respecting the limits of the assignment. They also reduce delays caused by trying to find the right manager during an incident.",
      "Professional attendance provides a better record of what happened. The officer can document arrival time, observed damage, checks completed, people contacted and the condition in which the premises was left. If an engineer, police officer or client representative attends, that handover can also be recorded. Consistent reports help identify repeated false alarms, physical weaknesses and maintenance issues that deserve attention.",
      "Removing employees from the primary callout rota does not mean excluding them from important decisions. The escalation plan can specify exactly when a manager must be contacted and which situations require their attendance. The difference is that they receive information from someone already assessing the scene rather than arriving alone with no reliable picture of the risk.",
      "A well-designed key holding and alarm response service protects people as much as property. It replaces an informal expectation with a controlled process, reduces lone-working exposure and gives the organisation evidence that activations are handled consistently. Yorkshire Fortress Security can document the site, secure the access arrangements and provide a response plan shaped around your building and operating priorities.",
    ],
  },
  {
    slug: "vehicle-patrol-inspection-checklist",
    category: "Mobile patrols",
    title: "What a useful vehicle patrol inspection should include",
    copy: "From perimeter checks to time-stamped reporting, here is what a robust visit looks like.",
    image: "/media/mobile-patrol.jpg",
    date: "22 July 2026",
    readTime: "7 min read",
    author: "Yorkshire Fortress Security",
    takeaways: [
      "Every patrol needs site-specific checkpoints and an agreed purpose.",
      "Officers should inspect, record and escalate—not merely drive past the premises.",
      "Varied timing and trend reviews make patrols a stronger deterrent.",
    ],
    content: [
      "A mobile patrol is valuable when it creates a visible deterrent and produces reliable evidence that vulnerable areas have been checked. A vehicle passing the entrance is not enough. The officer needs a defined task, safe access, meaningful inspection points and instructions for what to do when something is wrong. Without those elements, the client receives activity but very little assurance.",
      "The patrol plan should begin at the perimeter. Boundary fencing, walls, gates and vehicle entrances can reveal early signs of trespass, damage or attempted access. Officers should know which defects require immediate escalation and which can be included in a routine report. At larger premises, the route should identify specific high-risk stretches rather than relying on a general visual sweep from the vehicle.",
      "Doors, windows, shutters and other access points should be checked in a consistent sequence. The task may also cover compounds, plant, fuel storage, loading bays, roof access, external lighting and parked assets. A good checklist reflects the real layout of the property and changes when construction phases, tenants, stock levels or operating hours alter the risk.",
      "Patrols can also identify non-security problems before they become expensive incidents. Water leaks, fire indicators, damaged lighting, open windows, unusual smells, power failures and storm damage may all be visible during an inspection. Officers need a clear boundary between observing and intervening, together with contacts for facilities, maintenance or emergency support when urgent action is required.",
      "Timing matters. Predictable visits may reassure the client but are easier for an observer to anticipate. A blend of scheduled requirements and varied arrival times usually provides a stronger deterrent while ensuring important checks still occur. The frequency should be based on exposure and operating patterns, with additional visits available during shutdowns, incidents or periods of heightened risk.",
      "Every visit should leave useful evidence. Time-stamped checkpoints, concise observations, photographs where appropriate and a record of escalation give managers confidence that the route was completed properly. Reports should distinguish between a normal inspection and an exception requiring attention. Reviewing several weeks of reports can reveal repeated issues that a single visit would not show.",
      "The best vehicle patrol inspection is therefore a small, repeatable risk review rather than a drive-by. It combines visible presence, disciplined checking and a response process that turns observations into action. Yorkshire Fortress Security designs patrol routes around each site and can coordinate them with lock and unlock duties, key holding, alarm response or temporary guarding when a problem cannot be resolved during the visit.",
    ],
  },
  {
    slug: "building-safety-into-the-guest-experience",
    category: "Event security",
    title: "Building safety into the guest experience",
    copy: "Why early planning and good communication matter as much as the number of officers on site.",
    image: "/media/event-security.jpg",
    date: "14 July 2026",
    readTime: "7 min read",
    author: "Yorkshire Fortress Security",
    takeaways: [
      "Security planning should follow the complete guest journey from arrival to departure.",
      "Clear roles and communications help teams intervene early and proportionately.",
      "Professional security can protect the atmosphere as well as the venue.",
    ],
    content: [
      "Guests rarely separate security from the rest of an event experience. The queue, welcome, ticket check, search process and first interaction with staff all shape how organised and reassuring the occasion feels. Effective event security protects people and restricted areas while helping movement remain calm. That balance begins in the planning stage, not when the doors open.",
      "Start by mapping the guest journey. Consider transport arrival points, queues, ticket or accreditation checks, entrances, circulation routes, bars, toilets, viewing areas and exits. Each location creates different pressures at different times. A deployment based only on total attendance can miss short periods of intense demand, such as the opening rush, a headline performance or the final departure.",
      "Roles must be matched to the task. Licensed security personnel may be required for searches, refusal of entry, restricted-area protection and response to disorder, while stewards can support information, wayfinding and audience movement. Supervisors need a clear span of control, and every person should understand who can make decisions when the situation changes.",
      "Communication is the structure that connects those roles. Briefings should cover radio channels, call signs, escalation language, lost children or vulnerable guests, medical support, evacuation routes and liaison with organisers or emergency services. Short, accurate messages help a control point build a reliable picture and move resources before a minor problem becomes disruptive.",
      "Professional interaction is also a security measure. Calm explanations, consistent admissions policies and respectful de-escalation reduce frustration at busy entrances. Officers who remain observant while appearing approachable are more likely to receive useful information from guests and venue staff. Firm boundaries are still essential, but they can be applied without creating unnecessary confrontation.",
      "Plans should account for welfare as well as deliberate threats. Crowd density, heat, weather, intoxication, fatigue and separated groups can all generate incidents. Teams need to recognise early warning signs, protect access for medical staff and understand when an area should be slowed, paused or redirected. Good observation across the venue supports both safety and the continuity of the event.",
      "When security is integrated properly, guests experience confidence rather than restriction. The visible team knows the venue, communicates consistently and acts proportionately from first arrival to final exit. Yorkshire Fortress Security can support risk review, role-based deployment, supervisor structure and post-event reporting for private functions, live entertainment, community occasions and larger public events.",
    ],
  },
  {
    slug: "warning-signs-security-plan-needs-review",
    category: "Risk management",
    title: "Six warning signs your site security plan needs a review",
    copy: "Small operational changes can create new gaps. These are the indicators to watch.",
    image: "/media/alarm-response.jpg",
    date: "6 July 2026",
    readTime: "8 min read",
    author: "Yorkshire Fortress Security",
    takeaways: [
      "Operational changes can make an old security plan inaccurate without creating an obvious failure.",
      "Recurring exceptions and weak reporting are signals to investigate, not background noise.",
      "Review responsibilities, instructions and escalation routes after every material change.",
    ],
    content: [
      "A security plan can become outdated while appearing to operate normally. Officers still attend, alarms still set and reports still arrive, but the environment around those activities may have changed. New tenants, altered opening hours, construction work, staff turnover or different stock can introduce exposure that the original instructions never considered. Regular review is how an organisation finds those gaps before an incident does.",
      "The first warning sign is repeated exception reporting. The same unsecured door, failed light, damaged fence or access-control problem appearing across several shifts indicates a control weakness rather than an isolated observation. Reports should be reviewed for patterns, assigned to an owner and followed through to closure. If recurring issues disappear into a logbook, the reporting process is not reducing risk.",
      "A second sign is that people work around the agreed access process. Shared passes, propped doors, informal contractor entry and unrecorded key use often develop when procedures no longer fit operations. These shortcuts can become normal very quickly. A review should determine why staff bypass the process and redesign the control so it remains secure without creating unnecessary friction.",
      "Third, the site may have changed physically. Temporary cabins, scaffolding, new storage areas, landscaping, vacant units and relocated equipment can affect sightlines and create different approaches to the property. Patrol routes and camera coverage should be checked whenever the layout changes. A route that once covered every vulnerable point may now leave important areas unseen.",
      "Fourth and fifth warning signs are unclear escalation and inconsistent records. Officers need current contacts, authority limits and instructions for alarms, damage, trespass, welfare concerns and emergencies. Managers also need reports that explain what was observed and what action followed. If teams rely on personal knowledge or provide vague entries, the service becomes fragile when experienced individuals are absent.",
      "The sixth sign is a mismatch between cover and operating hours. Extended shifts, weekend activity, remote working, seasonal shutdowns or increased deliveries may expose the site at times previously considered low risk. The answer is not always more static guarding. Adjusted patrol schedules, key holding, alarm response or short targeted periods of additional presence may solve the new requirement more proportionately.",
      "A review should end with practical decisions: updated responsibilities, revised post instructions, new checkpoints, confirmed contacts and a date to evaluate the changes. Yorkshire Fortress Security can examine the physical environment, operating pattern and available incident evidence, then recommend a balanced plan across guarding, mobile patrol, key holding and response services.",
    ],
  },
  {
    slug: "modern-door-supervision",
    category: "Door supervision",
    title: "Firm, fair and welcoming: modern door supervision",
    copy: "How professional teams protect venues while preserving the right atmosphere for guests.",
    image: "/media/door-supervisors.jpg",
    date: "28 June 2026",
    readTime: "7 min read",
    author: "Yorkshire Fortress Security",
    takeaways: [
      "The door team represents the venue from the first moment of the guest experience.",
      "Consistent policies and early communication reduce avoidable conflict.",
      "Observation, welfare awareness and accurate records continue after admission.",
    ],
    content: [
      "Modern door supervision is built on judgement and communication as much as physical presence. A door team protects the licence, staff, guests and reputation of a venue, often while managing queues and making rapid decisions in a public setting. The strongest supervisors remain approachable and calm while applying clear boundaries consistently.",
      "Preparation begins with the venue policy. The team needs to understand admissions criteria, identification requirements, search procedures, prohibited items, dress expectations, guest lists, ticketing and capacity limits. When the rules are vague or communicated differently by each person, guests experience unfairness and supervisors inherit avoidable conflict at the entrance.",
      "A professional welcome is compatible with effective control. Clear queue information, respectful greetings and brief explanations help people understand what is expected before they reach the door. Officers can remain observant throughout the interaction, assessing behaviour, group dynamics and welfare without making every guest feel suspected. This supports the atmosphere the venue wants to create.",
      "Refusals require particular care. The reason should be lawful, consistent with policy and communicated without humiliation or unnecessary argument. Body position, tone of voice and support from colleagues can prevent a disagreement becoming confrontational. Supervisors should know when to disengage, when to involve venue management and when a situation requires police or medical assistance.",
      "The role continues inside the premises. Door supervisors may monitor crowd movement, restricted areas, bars, exits and emerging behaviour while remaining available to staff and guests. Early intervention is usually quieter and safer than waiting for an obvious incident. Welfare awareness is equally important, especially where intoxication, vulnerable people or separated groups are involved.",
      "Accurate records protect both the venue and the team. Refusals, ejections, searches, seizures, welfare interventions and significant incidents should be documented according to the assignment. Supervisors need a clear route for preserving relevant details and escalating concerns to management. Reviewing those records can reveal recurring times, locations or operating decisions that deserve attention.",
      "Firm, fair and welcoming supervision comes from matching the right people to the venue, briefing them properly and supporting them with visible leadership. Yorkshire Fortress Security provides SIA-licensed door supervisors and can build a role-based plan around your admissions policy, customer profile, licensing conditions and operating environment.",
    ],
  },
];
