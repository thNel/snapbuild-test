import { UseCaseTabs } from "@/features/useCaseTabs";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./UseCasesSection.module.css";

export function UseCasesSection() {
  return (
    <section className={styles.section} id="use-cases">
      <Reveal>
        <SectionHeading
          className={styles.heading}
          title="Любой контент в фирменном стиле за считанные минуты"
        />
        <UseCaseTabs />
      </Reveal>
    </section>
  );
}
