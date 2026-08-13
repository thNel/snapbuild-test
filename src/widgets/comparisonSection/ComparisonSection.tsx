import { ComparisonTable } from "@/entities/ComparisonTable";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./ComparisonSection.module.css";

export function ComparisonSection() {
  return (
    <section className={styles.section} id="compare">
      <Reveal>
        <SectionHeading
          description="Вы получаете не редактор, а результат: готовые маркетинговые материалы без проблем с настройками"
          title="Почему команды выбирают Снэпбилд"
        />
        <ComparisonTable />
      </Reveal>
    </section>
  );
}
