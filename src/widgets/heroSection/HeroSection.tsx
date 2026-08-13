import { ButtonLabel } from "@/shared/ui/brand";
import { Button } from "@/shared/ui/primitives";

import styles from "./HeroSection.module.css";

const builderUrl =
  "https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c";

export function HeroSection() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.surface}>
        <div className={styles.copy}>
          <h1>Платформа, где все создается в рамках вашего бренда и дизайн-системы</h1>
          <p>
            Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать
            профессиональные материалы в фирменном стиле за минуты, а не дни.
          </p>
          <Button asChild className={styles.cta} variant="secondary">
            <a href={builderUrl}>
              <ButtonLabel>Начать сейчас</ButtonLabel>
            </a>
          </Button>
        </div>

        <div className={styles.media}>
          <img
            alt="Интерфейс платформы Снэпбилд"
            fetchPriority="high"
            src="./assets/images/hero-snapbuild-2026-08-07-v2.webp"
          />
        </div>
      </div>
    </section>
  );
}
