import { ReviewPreview } from "@/entities/ReviewPreview";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { qualityChecks, reviewPreviews } from "./qualityControlData";

import styles from "./QualityControlSection.module.css";

export function QualityControlSection() {
  const qualityScore = Math.round(
    qualityChecks.reduce((total, check) => total + check.value, 0) / qualityChecks.length,
  );

  return (
    <section className={styles.section} id="quality-control">
      <Reveal>
        <SectionHeading
          description="Каждый материал проходит через понятные брендовые правила — до того, как его увидит клиент."
          title="Качество видно до публикации"
        />
      </Reveal>
      <Reveal className={styles.board}>
        <aside className={styles.summary}>
          <div className={styles.summaryHeader}>
            <span className={styles.eyebrow}>Brand check</span>
            <span>24.06.2026</span>
          </div>
          <div className={styles.score}>
            <strong>{qualityScore}</strong>
            <span>%</span>
          </div>
          <p>соответствие правилам бренда</p>
          <div
            aria-label={`Среднее соответствие ${String(qualityScore)}%`}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={qualityScore}
            className={styles.progress}
            role="progressbar"
          >
            <span data-score={qualityScore} />
          </div>
          <ul className={styles.checks}>
            {qualityChecks.map((check) => (
              <li key={check.label}>
                <span aria-hidden="true">✓</span>
                <span>{check.label}</span>
                <strong>{check.value}%</strong>
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles.canvas}>
          <div className={styles.canvasHeader}>
            <div>
              <span>Кампания / Новая коллекция</span>
              <strong>Проверка материалов</strong>
            </div>
            <span className={styles.approved}>Проверено</span>
          </div>
          <div className={styles.previews}>
            {reviewPreviews.map((preview) => (
              <ReviewPreview key={preview.index} {...preview} />
            ))}
          </div>
          <div className={styles.canvasFooter}>
            <span>18 правил проверено автоматически</span>
            <span>Можно публиковать ↗</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
