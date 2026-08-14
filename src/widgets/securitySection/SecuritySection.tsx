import { SecurityCard } from "@/entities/SecurityCard";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./SecuritySection.module.css";

const cards = [
  {
    description:
      "Работаем только с российскими и локализованными моделями, без экспортных ограничений",
    imageAlt: "Защищённая AI-модель",
    imageSrc: "./assets/images/security-approved-models.webp",
    mobileImageSrc: "./assets/images/security-approved-models-mobile-v2.jpg",
    title: "Только одобренные модели",
  },
  {
    description:
      "Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренними ИБ-требованиями",
    imageAlt: "Частное корпоративное облако",
    imageSrc: "./assets/images/security-private-cloud.webp",
    mobileImageSrc: "./assets/images/security-private-cloud-mobile-v2.jpg",
    title: "Ваш контур, ваша юрисдикция",
  },
  {
    description: "Вы сами определяете модели, хранилища, доступы и цепочки валидации",
    imageAlt: "Собственный технологический стек",
    imageSrc: "./assets/images/security-ai-stack.webp",
    mobileImageSrc: "./assets/images/security-ai-stack-mobile-v2.jpg",
    title: "Собственный AI-стек",
  },
];

export function SecuritySection() {
  return (
    <section className={styles.section} id="security">
      <Reveal>
        <SectionHeading title="Безопасность без компромиссов" />
        <div className={styles.grid}>
          {cards.map((card) => (
            <SecurityCard key={card.title} {...card} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
