import { Icon } from "./Icons";
import { RevealGroup, RevealItem } from "./motion/Reveal";

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
    <RevealGroup className="section-header" stagger={0.06}>
      <RevealItem as="span" className={`section-badge${red ? " red-badge" : ""}`} y={12}>
        <Icon name="bolt" />
        {badge}
      </RevealItem>
      {tagline ? (
        <RevealItem as="p" className="section-tagline-script" y={12}>
          {tagline}
        </RevealItem>
      ) : null}
      <RevealItem as="h2" id={id} className="section-title" y={12}>
        {title}
      </RevealItem>
      <RevealItem className="lightning-divider" y={8} ariaHidden>
        <span className="divider-line" />
        <Icon name="bolt" className="divider-bolt" />
        <span className="divider-line right" />
      </RevealItem>
      {subtitle ? (
        <RevealItem as="p" className="section-subtitle" y={12}>
          {subtitle}
        </RevealItem>
      ) : null}
    </RevealGroup>
  );
}
