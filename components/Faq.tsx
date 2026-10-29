"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { faqs } from "@/lib/content";
import { waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
import { EASE, Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import SectionHeader from "./SectionHeader";

function FaqItem({
  index,
  question,
  answer,
  open,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;

  return (
    <RevealItem className={`faq-item${open ? " active" : ""}`} y={16}>
      <h3>
        <button
          type="button"
          id={btnId}
          className="faq-question-btn"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-question-title">{question}</span>
          <m.span
            className="faq-toggle-icon"
            aria-hidden="true"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <Icon name="chevron" />
          </m.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <m.div
            key="panel"
            id={panelId}
            className="faq-answer-collapse"
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.35, ease: EASE }, opacity: { duration: 0.25 } }}
          >
            <div className="faq-answer-inner">{answer}</div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </RevealItem>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-alt" aria-labelledby="faq-title">
      <div className="container faq-container">
        <SectionHeader
          id="faq-title"
          badge="FAQ"
          tagline="Good to know"
          title="Questions we hear most"
          subtitle="Straight answers before you commit to anything."
        />
        <RevealGroup className="faq-accordion" stagger={0.06}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              index={i}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </RevealGroup>
        <Reveal className="faq-contact-prompt" y={16}>
          <p>Still have a question? We reply fastest on WhatsApp.</p>
          <a href={waLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />
            Ask on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
