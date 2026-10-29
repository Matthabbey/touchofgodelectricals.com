"use client";

import { useEffect, useRef, useState } from "react";
import { faqs } from "@/lib/content";
import { waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
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
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    setMaxHeight(open ? `${el.scrollHeight}px` : "0px");
  }, [open]);

  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;

  return (
    <div className={`faq-item${open ? " active" : ""}`}>
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
          <span className="faq-toggle-icon" aria-hidden="true">
            <Icon name="chevron" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        ref={panelRef}
        className="faq-answer-collapse"
        role="region"
        aria-labelledby={btnId}
        style={{ maxHeight }}
      >
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
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
        <div className="faq-accordion">
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
        </div>
        <div className="faq-contact-prompt">
          <p>Still have a question? We reply fastest on WhatsApp.</p>
          <a href={waLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
