import type { RoadmapItemProps } from "./RoadmapItem.types";

import styles from "./RoadmapItem.module.css";

export function RoadmapItem({
  date,
  description,
  isCurrent = false,
  isReached = false,
  title,
}: RoadmapItemProps) {
  return (
    <article className={styles.card} data-current={isCurrent} data-reached={isReached}>
      <span aria-hidden="true" className={styles.dot}>
        <span className={styles.halo} />
        <span className={styles.core} />
      </span>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </article>
  );
}
