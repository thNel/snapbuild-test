import { FaqAccordion } from "@/features/faqAccordion";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./FaqSection.module.css";

export function FaqSection() {
  return (
    <section className={styles.section} id="faq">
      <Reveal>
        <SectionHeading
          description="Ответы, которые помогут вам принять решение уверенно — без рисков для бренда и безопасности"
          title="Часто задаваемые вопросы"
        />
        <FaqAccordion />
      </Reveal>
    </section>
  );
}
