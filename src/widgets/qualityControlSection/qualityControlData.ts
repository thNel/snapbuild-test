import type { ReviewPreviewData } from "@/entities/ReviewPreview";

export const qualityChecks = [
  { label: "Типографика и иерархия", value: 100 },
  { label: "Цветовая палитра", value: 99 },
  { label: "Тональность сообщений", value: 97 },
  { label: "Адаптации форматов", value: 96 },
] as const;

export const reviewPreviews: ReviewPreviewData[] = [
  {
    description: "Главная страница кампании",
    format: "Лендинг",
    index: "01",
    score: 99,
    tone: "peach",
  },
  {
    description: "История для команды и клиента",
    format: "Презентация",
    index: "02",
    score: 98,
    tone: "pink",
  },
  {
    description: "Комплект для рекламных каналов",
    format: "Баннеры",
    index: "03",
    score: 97,
    tone: "violet",
  },
];
