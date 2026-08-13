import { cn } from "@/shared/lib/cn";

import type { SectionHeadingProps } from "./SectionHeading.types";

import styles from "./SectionHeading.module.css";

export function SectionHeading({ className, description, title }: SectionHeadingProps) {
  return (
    <header className={cn(styles.root, className)}>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
