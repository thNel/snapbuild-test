import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./BrandConsistencySection.module.css";

const fragmentedMaterials = ["Презентация_final_v7", "Баннеры_new", "Правки в чате"];

const unifiedMaterials = [
  { label: "Лендинг", status: "Готово" },
  { label: "Презентация", status: "Готово" },
  { label: "Баннеры", status: "Готово" },
];

export function BrandConsistencySection() {
  return (
    <section className={styles.section} id="brand-consistency">
      <Reveal>
        <SectionHeading
          description="Снэпбилд собирает материалы в одном контексте — команда видит, что уже готово и что можно публиковать."
          title="Согласованный результат вместо разрозненных файлов"
        />
      </Reveal>

      <Reveal className={styles.comparison}>
        <article className={styles.before}>
          <div className={styles.panelHeader}>
            <span>До Снэпбилда</span>
            <span className={styles.neutralBadge}>Разрознено</span>
          </div>
          <h3>Каждый формат живёт отдельно</h3>
          <div className={styles.fileStack}>
            {fragmentedMaterials.map((material) => (
              <div className={styles.file} key={material}>
                <span aria-hidden="true" className={styles.fileIcon} />
                <span>{material}</span>
              </div>
            ))}
          </div>
          <p className={styles.panelNote}>Три места для согласования и ручной пересборки.</p>
        </article>

        <div aria-hidden="true" className={styles.connector}>
          <span>Один контекст</span>
          <strong>→</strong>
        </div>

        <article className={styles.after}>
          <div className={styles.panelHeader}>
            <span>В Снэпбилде</span>
            <span className={styles.approvedBadge}>Согласовано</span>
          </div>
          <h3>Один набор правил работает везде</h3>
          <div className={styles.workspace}>
            <div className={styles.workspaceHeader}>
              <span className={styles.statusDot} />
              <span>Новая коллекция</span>
              <span className={styles.workspaceMeta}>3 материала</span>
            </div>
            <div className={styles.materialList}>
              {unifiedMaterials.map((material) => (
                <div className={styles.material} key={material.label}>
                  <span>{material.label}</span>
                  <strong>{material.status}</strong>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.panelNote}>Единый источник стиля для всей команды.</p>
        </article>
      </Reveal>
    </section>
  );
}
