import { WorkflowStep } from "@/entities/WorkflowStep";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { workflowSteps } from "./workflowData";

import styles from "./WorkflowSection.module.css";

export function WorkflowSection() {
  return (
    <section className={styles.section} id="workflow">
      <Reveal>
        <SectionHeading
          description="Один процесс для всей команды — от первой идеи до готового запуска."
          title="От идеи до готовой кампании"
        />
      </Reveal>
      <div className={styles.rail}>
        {workflowSteps.map((step) => (
          <WorkflowStep key={step.index} {...step} />
        ))}
      </div>
    </section>
  );
}
