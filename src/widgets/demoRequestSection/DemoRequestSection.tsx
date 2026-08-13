import { DemoRequestForm } from "@/features/demoRequestForm";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./DemoRequestSection.module.css";

export function DemoRequestSection() {
  return (
    <section className={styles.section} id="demo-request">
      <Reveal>
        <SectionHeading
          description="Расскажите, что хотите запустить — мы соберём короткий сценарий под вашу команду."
          title="Покажите задачу — соберём сценарий"
        />
      </Reveal>
      <DemoRequestForm />
    </section>
  );
}
