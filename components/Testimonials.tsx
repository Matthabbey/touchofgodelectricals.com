import { testimonials } from "@/lib/content";
import { Icon } from "./Icons";
import { RevealGroup, RevealItem } from "./motion/Reveal";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeader
          id="testimonials-title"
          badge="Client feedback"
          tagline="Word of mouth matters"
          title="What clients say"
          subtitle="The cards below are sample text. They will be replaced with real client reviews, shared with permission."
          red
        />
        <RevealGroup className="testimonials-grid">
          {testimonials.map((t, i) => (
            <RevealItem key={i} className="reveal-cell">
              <article className="testimonial-card">
                {t.sample ? <span className="testimonial-sample-tag">Sample text</span> : null}
                <div className="testimonial-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" />
                  ))}
                </div>
                <blockquote className="testimonial-quote">{t.quote}</blockquote>
                <div className={`testimonial-author-box${i % 2 === 1 ? " author-red" : ""}`}>
                  <span className="testimonial-avatar" aria-hidden="true">
                    {t.initials}
                  </span>
                  <div className="testimonial-author-info">
                    <h3>{t.author}</h3>
                    <p>{t.role}</p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
