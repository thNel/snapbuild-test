import { OutputFormat } from "@/entities/OutputFormat";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { outputFormats } from "./workflowData";

import styles from "./WorkflowSection.module.css";

export function WorkflowSection() {
  return (
    <section className={styles.section} id="workflow">
      <Reveal>
        <SectionHeading
          description="Один контекст превращается в согласованный набор материалов для всей команды."
          title="Один запрос — весь комплект"
        />
      </Reveal>
      <Reveal className={styles.composition}>
        <div className={styles.brief}>
          <span className={styles.eyebrow}>Единый контекст</span>
          <h3>Соберите один бриф — получите всё нужное для запуска.</h3>
          <p>
            Снэпбилд удерживает задачу, стиль и ограничения в одном месте, чтобы каждый новый
            формат выглядел частью одной кампании.
          </p>
          <div className={styles.prompt}>
            <div className={styles.promptHeader}>
              <span />
              <span />
              <span />
              <small>Новый запрос</small>
            </div>
            <strong>Запустить коллекцию в новом сезоне</strong>
            <span>3 канала · 1 дизайн-система · 0 дублей</span>
          </div>
        </div>
        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <span>Результат на выходе</span>
            <strong>03 формата</strong>
          </div>
          <div className={styles.outputGrid}>
            {outputFormats.map((format) => (
              <OutputFormat key={format.index} {...format} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
