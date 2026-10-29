"use client";

import { Icon } from "./Icons";

export const PRESELECT_EVENT = "tog:preselect-service";

/** "Get a quote" link on a service card: pre-selects the service in the contact form. */
export default function ServiceQuoteButton({ service }: { service: string }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent(PRESELECT_EVENT, { detail: service }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button type="button" className="service-card-action" onClick={handleClick}>
      Get a quote for this
      <Icon name="arrow" />
    </button>
  );
}
