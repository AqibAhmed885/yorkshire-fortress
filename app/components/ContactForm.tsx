"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "../data";
import { kicker, navyButton } from "../styles";

const inputClass =
  "w-full border border-line bg-white px-4 py-3.5 text-[15px] text-onyx outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    setStatus("submitting");
    setStatusMessage("Sending your enquiry securely…");

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await result.json().catch(() => null)) as { message?: string } | null;

      if (!result.ok) {
        throw new Error(data?.message || "We could not send your enquiry. Please try again.");
      }

      formElement.reset();
      setStatus("success");
      setStatusMessage(data?.message || "Thank you. Your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again or call our team.",
      );
    }
  }

  const field = (label: string, control: React.ReactNode, full = false) => (
    <label className={`grid gap-2 ${full ? "col-span-2 max-sm:col-span-1" : ""}`}>
      <span className="text-[13px] font-extrabold text-navy">{label}</span>
      {control}
    </label>
  );

  return (
    <div className="border-t-[7px] border-tan bg-paper p-12 shadow-[0_18px_55px_rgba(19,36,60,.12)] max-sm:p-6">
      <div className="mb-8">
        <p className={kicker}>Tell us what you need</p>
        <h2 className="m-0 text-[clamp(34px,4vw,48px)] leading-[1.05] tracking-[-.035em] text-navy">
          Request a security review.
        </h2>
        <p className="mb-0 text-muted">
          Share a few details and we’ll send your enquiry securely to our team.
        </p>
      </div>
      <form
        className="relative grid grid-cols-2 gap-x-5 gap-y-6 max-sm:grid-cols-1"
        onSubmit={sendEnquiry}
      >
        <label className="absolute -left-[10000px]" aria-hidden="true">
          Website
          <input name="website" type="text" autoComplete="off" tabIndex={-1} />
        </label>
        {field(
          "Your name *",
          <input
            className={inputClass}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            required
          />,
        )}
        {field(
          "Work email *",
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.co.uk"
            required
          />,
        )}
        {field(
          "Phone number",
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your contact number"
          />,
        )}
        {field(
          "Organisation",
          <input
            className={inputClass}
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder="Company or venue"
          />,
        )}
        {field(
          "Service required *",
          <select className={inputClass} name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Multiple services">Multiple services</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>,
        )}
        {field(
          "Site location",
          <input
            className={inputClass}
            name="location"
            type="text"
            autoComplete="postal-code"
            placeholder="Town, city or postcode"
          />,
        )}
        {field(
          "Tell us about your requirements *",
          <textarea
            className={inputClass}
            name="message"
            rows={6}
            placeholder="Site type, cover needed, dates, operating hours and any known risks..."
            required
          />,
          true,
        )}
        <div className="col-span-2 flex items-center justify-between gap-5 max-sm:col-span-1 max-sm:flex-col max-sm:items-start">
          <button
            className={`${navyButton} disabled:cursor-not-allowed disabled:opacity-60`}
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending enquiry…" : "Send my enquiry"}
            <ArrowRight size={19} />
          </button>
          <p className="m-0 flex items-center gap-2 text-xs text-muted">
            <CheckCircle2 size={16} /> We only use your details to respond to this enquiry.
          </p>
        </div>
        {status !== "idle" && (
          <p
            className={`col-span-2 m-0 border-l-4 bg-white p-3 text-sm font-bold max-sm:col-span-1 ${
              status === "error" ? "border-red-600 text-red-800" : "border-tan text-navy"
            }`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}
