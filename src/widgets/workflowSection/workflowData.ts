import type { OutputFormatData } from "@/entities/OutputFormat";

export const outputFormats: OutputFormatData[] = [
  {
    description: "Страница с готовой структурой и вашими компонентами.",
    index: "01",
    label: "Лендинг",
    status: "готово",
    tone: "peach",
  },
  {
    description: "История запуска в формате, который удобно показать команде.",
    index: "02",
    label: "Презентация",
    status: "готово",
    tone: "pink",
  },
  {
    description: "Набор адаптаций для каналов без ручной пересборки.",
    index: "03",
    label: "Баннеры",
    status: "готово",
    tone: "violet",
  },
  {
    description: "Визуальные материалы в том же стиле для всех точек контакта.",
    index: "04",
    label: "Изображения",
    status: "готово",
    tone: "peach",
  },
  {
    description: "Короткие форматы для социальных сетей и рекламных кампаний.",
    index: "05",
    label: "Видео",
    status: "готово",
    tone: "pink",
  },
];
