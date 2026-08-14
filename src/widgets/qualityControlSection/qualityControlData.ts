import type { ReviewPreviewData } from "@/entities/ReviewPreview";

export const qualityChecks = [
  "Типографика и иерархия",
  "Цветовая палитра",
  "Тональность сообщений",
  "Адаптации форматов",
] as const;

export const reviewPreviews: ReviewPreviewData[] = [
  {
    description: "Главная страница кампании",
    format: "Лендинг",
    index: "01",
    tone: "peach",
  },
  {
    description: "История для команды и клиента",
    format: "Презентация",
    index: "02",
    tone: "pink",
  },
  {
    description: "Комплект для рекламных каналов",
    format: "Баннеры",
    index: "03",
    tone: "violet",
  },
];
