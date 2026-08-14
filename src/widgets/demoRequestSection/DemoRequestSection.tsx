import { cn } from "@/shared/lib/cn";
import { ButtonLabel, Logo, Reveal, SectionHeading } from "@/shared/ui/brand";
import { Button } from "@/shared/ui/primitives";

import styles from "./DemoRequestSection.module.css";

const builderUrl = "https://builder.snapbuild.ru/";

const launchSteps = [
  { detail: "Цель, аудитория и формат", index: "01", title: "Бриф" },
  { detail: "Токены, шрифты и правила", index: "02", title: "Стиль" },
  { detail: "Лендинг, баннер и презентация", index: "03", title: "Материалы" },
];

const materials = [
  { label: "Лендинг", tone: "peach" },
  { label: "Презентация", tone: "pink" },
  { label: "Баннеры", tone: "blue" },
] as const;

export function DemoRequestSection() {
  return (
    <section className={styles.section} id="demo-request">
      <Reveal>
        <SectionHeading
          description="Расскажите, что хотите запустить — мы соберём короткий сценарий под вашу команду."
          title="Покажите задачу — соберём сценарий"
        />
      </Reveal>
      <Reveal className={styles.revealPanel}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Сценарий запуска</span>
          <h3>Из запроса — в готовый комплект</h3>
          <p>
            Опишите задачу один раз — команда получает согласованный набор материалов, а бренд
            остаётся узнаваемым в каждом формате.
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <a href={builderUrl}>
                <ButtonLabel tone="light">Начать сейчас</ButtonLabel>
              </a>
            </Button>
            <a className={styles.secondaryAction} href="#faq">
              Посмотреть ответы
            </a>
          </div>
        </div>

        <div aria-label="Пример сценария запуска" className={styles.preview} role="img">
          <div className={styles.previewHeader}>
            <Logo className={styles.previewLogo} />
            <span>Новый проект</span>
          </div>
          <div className={styles.previewBody}>
            <div className={styles.steps}>
              {launchSteps.map((step, index) => (
                <div className={styles.step} key={step.index}>
                  <span className={styles.stepIndex}>{step.index}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </div>
                  <span aria-hidden="true" className={styles.check}>
                    {index < 2 ? "✓" : "→"}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.materials}>
              {materials.map((material, index) => (
                <div
                  className={cn(styles.material, styles[material.tone] ?? "")}
                  key={material.label}
                >
                  <span>0{index + 1}</span>
                  <strong>{material.label}</strong>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.previewFooter}>
            <span>Готово за 5 минут</span>
            <span>3 материала</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
