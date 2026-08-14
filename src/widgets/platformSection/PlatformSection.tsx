import { MarketingCard } from "@/entities/MarketingCard";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import styles from "./PlatformSection.module.css";

const cards = [
  {
    description: "Ваши компоненты, цвета и шрифты — единственный источник стиля",
    imageAlt: "Интерфейсные компоненты дизайн-системы",
    imageSrc: "./assets/images/84a4450b3827bc21.webp",
    title: "Дизайн-система — ядро платформы",
  },
  {
    description: "Правила бренда задаются один раз — работают в каждой генерации",
    imageAlt: "Модульная структура дизайн-системы",
    imageSrc: "./assets/images/process-flexible-configuration.webp",
    title: "Гибкая конфигурация",
  },
  {
    description:
      "AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам",
    imageAlt: "Слои фирменной дизайн-системы",
    imageSrc: "./assets/images/afe03eb4a67d5dfb.webp",
    title: "Соответствие по умолчанию",
  },
];

export function PlatformSection() {
  return (
    <section className={styles.section} id="platform">
      <Reveal>
        <SectionHeading
          description="Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле"
          title="Одна платформа — весь маркетинг"
        />
        <div className={styles.grid}>
          {cards.map((card) => (
            <MarketingCard key={card.title} {...card} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
