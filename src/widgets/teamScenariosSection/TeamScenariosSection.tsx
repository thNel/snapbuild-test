import { Reveal, SectionHeading } from "@/shared/ui/brand";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/primitives";

import { teamScenarios } from "./teamScenarioData";

import styles from "./TeamScenariosSection.module.css";

export function TeamScenariosSection() {
  return (
    <section className={styles.section} id="team-scenarios">
      <Reveal>
        <SectionHeading
          description="У каждого отдела свой ритм — система подстраивается под задачу, а не наоборот."
          title="Один бренд — для каждой команды"
        />
      </Reveal>
      <Tabs className={styles.tabs} defaultValue={teamScenarios[0]?.id}>
        <TabsList aria-label="Сценарии для команд" className={styles.tabsList}>
          {teamScenarios.map((scenario) => (
            <TabsTrigger className={styles.tab} key={scenario.id} value={scenario.id}>
              {scenario.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {teamScenarios.map((scenario) => (
          <TabsContent className={styles.panel} key={scenario.id} value={scenario.id}>
            <div className={styles.panelCopy}>
              <span className={styles.metric}>{scenario.metric}</span>
              <p>{scenario.description}</p>
            </div>
            <ul className={styles.outcomes}>
              {scenario.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
