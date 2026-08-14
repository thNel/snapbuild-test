import { cn } from "@/shared/lib/cn";

import type { OutputFormatData } from "./OutputFormat.types";

import styles from "./OutputFormat.module.css";

export function OutputFormat({ description, index, label, status, tone }: OutputFormatData) {
  return (
    <article className={cn(styles.root, styles[tone] ?? "")}>
      <div className={styles.visual} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.meta}>
        <span>{index}</span>
        <span>{status}</span>
      </div>
      <h3>{label}</h3>
      <p>{description}</p>
    </article>
  );
}
