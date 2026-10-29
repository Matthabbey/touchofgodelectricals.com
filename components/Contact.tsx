"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { serviceOptions } from "@/lib/content";
import { isPlaceholder, mailLink, siteConfig, telLink, waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
import SectionHeader from "./SectionHeader";
import { PRESELECT_EVENT } from "./ServiceQuoteButton";

interface FormState {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = { name: "", phone: "", service: "", location: "", message: "" };

// Accepts Nigerian numbers (0801..., +234801...) and generic international numbers.
const PHONE_RE = /^(?:\+?234|0)?[789][01]\d{8}$|^\+?[0-9]{10,14}$/;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  const phoneClean = form.phone.replace(/[\s\-()]/g, "");
  if (!phoneClean || !PHONE_RE.test(phoneClean)) {
    errors.phone = "Please enter a valid phone number, e.g. 0801 234 5678 or +234...";
  }
  if (!form.service) errors.service = "Please choose the service you need.";
  return errors;
}

function buildSummary(form: FormState, ref?: string): string {
  const lines = [
    "Hello Touch of God Electrical,",
    "",
    ref ? `Quote request from your website (Ref: ${ref}):` : "I would like a quote for my project:",
    `• Name: ${form.name.trim()}`,
    `• Phone: ${form.phone.trim()}`,
    `• Service: ${form.service}`,
    `• Location: ${form.location.trim() || "Not specified"}`,
    `• Details: ${form.message.trim() || "None"}`,
    "",
    "Please let me know when you can carry out a site inspection.",
  ];
  return lines.join("\n");
}

function Placeholder({ value }: { value: string }) {
  return isPlaceholder(value) ? <span className="placeholder-tag">placeholder</span> : null;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<{ form: FormState; ref: string } | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);

  // Pre-select a service when a service card's "Get a quote" button is clicked
  useEffect(() => {
    const onPreselect = (e: Event) => {
      const service = (e as CustomEvent<string>).detail;
      if (serviceOptions.includes(service)) {
        setForm((f) => ({ ...f, service }));
        setErrors((er) => ({ ...er, service: undefined }));
      }
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener(PRESELECT_EVENT, onPreselect);
    return () => window.removeEventListener(PRESELECT_EVENT, onPreselect);
  }, []);

  // Success modal: lock scroll, Esc to close, focus close button
  useEffect(() => {
    if (!submitted) return;
    document.body.classList.add("no-scroll");
    modalCloseRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSubmitted(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKey);
    };
  }, [submitted]);

  const update = (field: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const runValidation = (): boolean => {
    const next = validate(form);
    setErrors(next);
    const firstError = (Object.keys(next) as (keyof FormState)[])[0];
    if (firstError) document.getElementById(`${firstError}-field`)?.focus();
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!runValidation()) return;
    const ref = `TOG-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmitted({ form, ref });
    setForm(emptyForm);
  };

  const onWhatsAppSend = () => {
    if (!runValidation()) return;
    window.open(waLink(buildSummary(form)), "_blank", "noopener,noreferrer");
  };

  const invalidProps = (field: keyof FormState) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    className: `${field === "service" ? "form-select" : field === "message" ? "form-textarea" : "form-input"}${errors[field] ? " is-invalid" : ""}`,
  });

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact-title"
          badge="Get in touch"
          tagline="Let's talk about your project"
          title="Request a free quote"
          subtitle="Tell us what you need and where. We will confirm an inspection time and send an itemised quote."
          red
        />

        <div className="contact-grid">
          <div className="quote-form-card">
            <span className="form-header-badge">
              <Icon name="bolt" />
              Free quote
            </span>
            <h3 className="quote-form-title">Tell us about the job</h3>
            <p className="quote-form-subtitle">Fields marked <span className="form-required">*</span> are required.</p>

            <form id="quote-form" noValidate onSubmit={onSubmit}>
              <div className="form-row form-row-2">
                <div className="form-group">
                  <label htmlFor="name-field" className="form-label">
                    Full name <span className="form-required">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="name-field"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    {...invalidProps("name")}
                  />
                  {errors.name ? <p id="name-error" className="form-error-msg" role="alert">{errors.name}</p> : null}
                </div>
                <div className="form-group">
                  <label htmlFor="phone-field" className="form-label">
                    Phone / WhatsApp number <span className="form-required">*</span>
                  </label>
                  <input
                    id="phone-field"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="0801 234 5678"
                    value={form.phone}
                    onChange={update("phone")}
                    {...invalidProps("phone")}
                  />
                  {errors.phone ? <p id="phone-error" className="form-error-msg" role="alert">{errors.phone}</p> : null}
                </div>
              </div>

              <div className="form-row form-row-2">
                <div className="form-group">
                  <label htmlFor="service-field" className="form-label">
                    Service needed <span className="form-required">*</span>
                  </label>
                  <select id="service-field" value={form.service} onChange={update("service")} {...invalidProps("service")}>
                    <option value="">Choose a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <p id="service-error" className="form-error-msg" role="alert">{errors.service}</p> : null}
                </div>
                <div className="form-group">
                  <label htmlFor="location-field" className="form-label">
                    Project location
                  </label>
                  <input
                    id="location-field"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Area or address"
                    value={form.location}
                    onChange={update("location")}
                    {...invalidProps("location")}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message-field" className="form-label">
                    Tell us more
                  </label>
                  <textarea
                    id="message-field"
                    rows={4}
                    placeholder="What do you need done? Property type, number of rooms, what you want to power..."
                    value={form.message}
                    onChange={update("message")}
                    {...invalidProps("message")}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-red btn-lg">
                  Request a Quote
                  <Icon name="arrow" />
                </button>
                <button type="button" className="btn btn-whatsapp btn-lg" onClick={onWhatsAppSend}>
                  <Icon name="whatsapp" />
                  Send via WhatsApp
                </button>
              </div>
              <p className="form-note">
                Your details are only used to prepare your quote. For the fastest reply, use the WhatsApp button.
              </p>
            </form>
          </div>

          <div className="contact-info-panel">
            <div className="contact-card-box">
              <h3>Contact details</h3>
              <ul className="contact-channels-list" style={{ listStyle: "none" }}>
                <li className="contact-channel-item">
                  <span className="channel-icon-wrap" aria-hidden="true">
                    <Icon name="phone" />
                  </span>
                  <div className="channel-details">
                    <h4>
                      Call us <Placeholder value={siteConfig.phoneDisplay} />
                    </h4>
                    <a href={telLink()}>{siteConfig.phoneDisplay}</a>
                  </div>
                </li>
                <li className="contact-channel-item">
                  <span className="channel-icon-wrap green-channel" aria-hidden="true">
                    <Icon name="whatsapp" />
                  </span>
                  <div className="channel-details">
                    <h4>
                      WhatsApp <Placeholder value={siteConfig.whatsappNumber} />
                    </h4>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer">
                      +{siteConfig.whatsappNumber}
                    </a>
                  </div>
                </li>
                <li className="contact-channel-item">
                  <span className="channel-icon-wrap red-channel" aria-hidden="true">
                    <Icon name="mail" />
                  </span>
                  <div className="channel-details">
                    <h4>
                      Email <Placeholder value={siteConfig.email} />
                    </h4>
                    <a href={mailLink()}>{siteConfig.email}</a>
                  </div>
                </li>
                <li className="contact-channel-item">
                  <span className="channel-icon-wrap" aria-hidden="true">
                    <Icon name="pin" />
                  </span>
                  <div className="channel-details">
                    <h4>
                      Address <Placeholder value={siteConfig.address} />
                    </h4>
                    <p>{siteConfig.address}</p>
                  </div>
                </li>
                <li className="contact-channel-item">
                  <span className="channel-icon-wrap" aria-hidden="true">
                    <Icon name="map" />
                  </span>
                  <div className="channel-details">
                    <h4>Service areas</h4>
                    <p>{siteConfig.serviceAreas}</p>
                  </div>
                </li>
                <li className="contact-channel-item">
                  <span className="channel-icon-wrap" aria-hidden="true">
                    <Icon name="clock" />
                  </span>
                  <div className="channel-details">
                    <h4>
                      Working hours <Placeholder value={siteConfig.workingHours} />
                    </h4>
                    <p>{siteConfig.workingHours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="map-placeholder-card" role="img" aria-label="Map placeholder showing the business location in Lagos">
              <div className="map-visual-area">
                <span className="map-pin-pulse" aria-hidden="true">
                  <Icon name="pin" />
                </span>
                <span className="map-location-tag">{siteConfig.addressLocality}, Nigeria</span>
                <span className="map-sub-tag">Interactive map placeholder. Add a Google Maps embed here.</span>
              </div>
              <div className="map-footer-bar">
                <span>Directions</span>
                <a href={siteConfig.mapsUrl} target={isPlaceholder(siteConfig.mapsUrl) ? undefined : "_blank"} rel="noopener noreferrer">
                  Open in Google Maps
                  <Icon name="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {submitted ? (
        <div
          className="form-success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSubmitted(null);
          }}
        >
          <div className="success-modal-card">
            <span className="success-icon-wrap" aria-hidden="true">
              <Icon name="check" />
            </span>
            <h3 id="success-title" className="success-title">
              Request received
            </h3>
            <p className="success-message">
              Thanks, {submitted.form.name.trim()}. Tap the WhatsApp button below to send this summary to our team so we
              can confirm an inspection time. The website form itself does not send email.
            </p>
            <div className="success-details-box">
              <p>
                <strong>Reference:</strong> <span className="ref">{submitted.ref}</span>
              </p>
              <p>
                <strong>Phone:</strong> {submitted.form.phone}
              </p>
              <p>
                <strong>Service:</strong> {submitted.form.service}
              </p>
              <p>
                <strong>Location:</strong> {submitted.form.location.trim() || "Not specified"}
              </p>
              {submitted.form.message.trim() ? (
                <p>
                  <strong>Details:</strong> {submitted.form.message}
                </p>
              ) : null}
            </div>
            <div className="success-modal-actions">
              <a
                href={waLink(buildSummary(submitted.form, submitted.ref))}
                className="btn btn-whatsapp btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" />
                Send on WhatsApp
              </a>
              <button ref={modalCloseRef} type="button" className="btn btn-outline-blue" onClick={() => setSubmitted(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
