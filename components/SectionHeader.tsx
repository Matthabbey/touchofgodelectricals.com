import { Icon } from "./Icons";

interface SectionHeaderProps {
  id: string;
  badge: string;
  title: string;
  tagline?: string;
  subtitle?: string;
  red?: boolean;
}

export default function SectionHeader({ id, badge, title, tagline, subtitle, red = false }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className={`section-badge${red ? " red-badge" : ""}`}>
        <Icon name="bolt" />
        {badge}
      </span>
      {tagline ? <p className="section-tagline-script">{tagline}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      <div className="lightning-divider" aria-hidden="true">
        <span className="divider-line" />
        <Icon name="bolt" className="divider-bolt" />
        <span className="divider-line right" />
      </div>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
