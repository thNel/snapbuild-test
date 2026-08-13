import { cn } from "@/shared/lib/cn";

import type { WorkflowStepData } from "./WorkflowStep.types";

import styles from "./WorkflowStep.module.css";

type WorkflowStepProps = WorkflowStepData & {
  className?: string;
};

export function WorkflowStep({ className, description, index, title }: WorkflowStepProps) {
  return (
    <article className={cn(styles.root, className)}>
      <span aria-hidden="true" className={styles.marker}>
        {index}
      </span>
      <div className={styles.copy}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
