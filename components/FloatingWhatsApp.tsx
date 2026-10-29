import { waLink } from "@/lib/site-config";
import { Icon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp-widget">
      <span className="floating-whatsapp-pill" aria-hidden="true">
        <span className="whatsapp-pill-dot" />
        Chat with us
      </span>
      <a
        href={waLink()}
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon name="whatsapp" />
      </a>
    </div>
  );
}
