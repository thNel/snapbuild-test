import type { TeamScenarioData } from "./TeamScenario.types";

import styles from "./TeamScenarioCard.module.css";

export function TeamScenarioCard({ description, metric, outcomes, title }: TeamScenarioData) {
  return (
    <article className={styles.root}>
      <header className={styles.header}>
        <span aria-hidden="true" className={styles.icon}>
          {title.slice(0, 1)}
        </span>
        <div>
          <h3>{title}</h3>
          <span>{metric}</span>
        </div>
        <span aria-hidden="true" className={styles.arrow}>
          ↗
        </span>
      </header>
      <p>{description}</p>
      <ul>
        {outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </article>
  );
}
