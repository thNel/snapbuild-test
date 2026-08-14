import { cn } from "@/shared/lib/cn";

import type { ReviewPreviewData } from "./ReviewPreview.types";

import styles from "./ReviewPreview.module.css";

export function ReviewPreview({ description, format, index, tone }: ReviewPreviewData) {
  return (
    <article className={cn(styles.root, styles[tone] ?? "")}>
      <div className={styles.mock} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.footer}>
        <span>{index}</span>
        <strong>{format}</strong>
      </div>
      <p>{description}</p>
    </article>
  );
}
