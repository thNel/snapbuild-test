import { CaseStudyCard } from "@/entities/CaseStudyCard";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { caseStudies } from "./caseStudyData";

import styles from "./CaseStudiesSection.module.css";

export function CaseStudiesSection() {
  return (
    <section className={styles.section} id="case-studies">
      <Reveal>
        <SectionHeading
          description="Примеры сценариев, в которых дизайн-система превращается в измеримый результат."
          title="Материалы, которые уже работают"
        />
      </Reveal>
      <div className={styles.grid}>
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.company} {...study} />
        ))}
      </div>
    </section>
  );
}
