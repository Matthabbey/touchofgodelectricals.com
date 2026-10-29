import { trustItems } from "@/lib/content";
import { Icon } from "./Icons";

export default function TrustStrip() {
  return (
    <div className="trust-strip" role="region" aria-label="Why clients trust us">
      <div className="container">
        <ul className="trust-strip-grid" style={{ listStyle: "none" }}>
          {trustItems.map((item) => (
            <li key={item.title} className="trust-item">
              <span className="trust-icon-box" aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <div className="trust-item-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
