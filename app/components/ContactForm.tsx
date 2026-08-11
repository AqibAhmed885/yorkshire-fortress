"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "../data";

const enquiryEmail = "info@yorkshirefortresssecurity.co.uk";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "Not provided");
    const organisation = String(form.get("organisation") ?? "Not provided");
    const service = String(form.get("service") ?? "General security enquiry");
    const location = String(form.get("location") ?? "Not provided");
    const message = String(form.get("message") ?? "");
    const subject = `Security enquiry — ${service}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Service: ${service}`,
      `Site location: ${location || "Not provided"}`,
      "",
      "Requirements:",
      message,
    ].join("\n");

    setStatus("Your email app should open with your enquiry ready to send.");
    window.location.href = `mailto:${enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="yfs-contact-form-shell">
      <div className="yfs-contact-form-heading">
        <p className="yfs-kicker">Tell us what you need</p>
        <h2>Request a security review.</h2>
        <p>Share a few details and we’ll prepare your enquiry for our team.</p>
      </div>
      <form className="yfs-contact-form" onSubmit={prepareEmail}>
        <label>
          <span>Your name *</span>
          <input name="name" type="text" autoComplete="name" placeholder="Full name" required />
        </label>
        <label>
          <span>Work email *</span>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.co.uk" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" />
        </label>
        <label>
          <span>Organisation</span>
          <input name="organisation" type="text" autoComplete="organization" placeholder="Company or venue" />
        </label>
        <label>
          <span>Service required *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            <option value="Multiple services">Multiple services</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label>
          <span>Site location</span>
          <input name="location" type="text" autoComplete="postal-code" placeholder="Town, city or postcode" />
        </label>
        <label className="yfs-form-full">
          <span>Tell us about your requirements *</span>
          <textarea name="message" rows={6} placeholder="Site type, cover needed, dates, operating hours and any known risks..." required />
        </label>
        <div className="yfs-form-full yfs-form-action">
          <button type="submit">Prepare my enquiry <ArrowRight size={19} /></button>
          <p><CheckCircle2 size={16} /> We only use your details to respond to this enquiry.</p>
        </div>
        {status && <p className="yfs-form-status yfs-form-full" role="status">{status}</p>}
      </form>
    </div>
  );
}
