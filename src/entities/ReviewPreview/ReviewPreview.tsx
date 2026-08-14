import { cn } from "@/shared/lib/cn";

import type { ReviewPreviewData } from "./ReviewPreview.types";

import styles from "./ReviewPreview.module.css";

export function ReviewPreview({ description, format, index, score, tone }: ReviewPreviewData) {
  return (
    <article className={cn(styles.root, styles[tone] ?? "")}>
      <div className={styles.cardTop}>
        <span>{index}</span>
        <span aria-label={`Проверено на ${String(score)}%`} className={styles.scoreBadge}>
          {score}%
        </span>
      </div>
      <div className={styles.mock} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.footer}>
        <strong>{format}</strong>
        <span className={styles.status} aria-label="Проверено">
          ✓
        </span>
      </div>
      <p>{description}</p>
    </article>
  );
}
