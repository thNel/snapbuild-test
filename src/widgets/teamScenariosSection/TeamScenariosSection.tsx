import { TeamScenarioCard } from "@/entities/TeamScenario";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { teamScenarios } from "./teamScenarioData";

import styles from "./TeamScenariosSection.module.css";

export function TeamScenariosSection() {
  return (
    <section className={styles.section} id="team-scenarios">
      <Reveal>
        <SectionHeading
          description="Маркетинг, дизайн и продажи работают в одном пространстве — без потери контекста."
          title="Единый штаб кампании"
        />
      </Reveal>
      <Reveal className={styles.workspace}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.statusDot} />
            <span>Кампания · Осень 2026</span>
          </div>
          <div className={styles.brandMark}>
            <strong>Снэпбилд</strong>
            <span>Brand workspace</span>
          </div>
          <nav aria-label="Разделы рабочего пространства" className={styles.workspaceNav}>
            <span data-active="true">Обзор</span>
            <span>Материалы</span>
            <span>Команда</span>
          </nav>
          <div className={styles.sidebarFooter}>
            <span>3 роли в проекте</span>
            <div className={styles.avatars} aria-hidden="true">
              <span>М</span>
              <span>Д</span>
              <span>П</span>
            </div>
          </div>
        </aside>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div>
              <span>Один источник правды</span>
              <h3>Каждый видит свою задачу — бренд остаётся единым.</h3>
            </div>
            <span className={styles.liveBadge}>Live</span>
          </div>
          <div className={styles.cards}>
            {teamScenarios.map((scenario) => (
              <TeamScenarioCard key={scenario.id} {...scenario} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
