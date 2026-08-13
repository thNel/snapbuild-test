import { IntegrationChip } from "@/entities/IntegrationChip";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { integrationGroups } from "./integrationData";

import styles from "./IntegrationsSection.module.css";

export function IntegrationsSection() {
  return (
    <section className={styles.section} id="integrations">
      <Reveal>
        <SectionHeading
          description="Сохраняйте привычный стек, а управление брендом и контентом собирайте в одном слое."
          title="Встраивается в ваш контур"
        />
      </Reveal>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Без замены процессов</span>
          <p>
            Снэпбилд соединяет дизайн-систему, команды и публикацию — так, чтобы материалы двигались
            по вашему текущему маршруту.
          </p>
        </div>
        <div className={styles.diagram} aria-label="Схема интеграций" role="img">
          <div className={styles.core}>Снэпбилд</div>
          <div className={styles.groups}>
            {integrationGroups.map((group) => (
              <div className={styles.group} key={group.label}>
                <span className={styles.groupLabel}>{group.label}</span>
                <div className={styles.chips}>
                  {group.items.map((item) => (
                    <IntegrationChip key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
