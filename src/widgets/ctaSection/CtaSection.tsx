import { ButtonLabel, Reveal } from "@/shared/ui/brand";
import { Button } from "@/shared/ui/primitives";

import styles from "./CtaSection.module.css";

const builderUrl =
  "https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c";

export function CtaSection() {
  return (
    <section className={styles.section} data-page-shell="cta" id="cta">
      <span aria-hidden="true" className={styles.shine} />
      <Reveal className={styles.reveal}>
        <h2>
          <span className={styles.desktopTitle}>
            Профессиональные материалы в фирменном стиле
            <br />
            за минуты, а не дни
          </span>
          <span className={styles.responsiveTitle}>
            Профессиональные материалы в фирменном стиле за минуты, а не дни
          </span>
        </h2>
        <p>
          Выстройте маркетинг в единый поток — от первой идеи до финального взаимодействия с
          клиентом.
        </p>
        <Button asChild variant="secondary">
          <a href={builderUrl}>
            <ButtonLabel>Перейти к созданию</ButtonLabel>
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
