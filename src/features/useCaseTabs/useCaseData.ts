import type { UseCaseMode } from "./UseCaseTabs.types";

export const useCaseModes: UseCaseMode[] = [
  {
    id: "websites",
    label: "Сайты",
    features: [
      {
        title: "Результат за один запрос",
        description:
          "Отправляйте документ или ссылку на описание продукта — платформа собирает структуру",
        imageAlt: "Создание сайта в Снэпбилде",
        imageSrc: "./assets/images/use-cases-tab1-item1-v2.webp",
      },
      {
        title: "Страница за минуту",
        description: "В вашей дизайн-системе, с вашими шрифтами, сеткой и компонентами",
        imageAlt: "Готовая страница в дизайн-системе",
        imageSrc: "./assets/images/use-cases-tab1-item2.webp",
      },
      {
        title: "AI или визуальный редактор",
        description: "Меняйте контент через чат или редактируйте вручную",
        imageAlt: "Визуальный редактор сайта",
        imageSrc: "./assets/images/use-cases-tab1-item3.webp",
      },
      {
        title: "Адаптация под ЦА за один клик",
        description: "Версия сайта под новый сегмент без работы дизайнеров и копирайтеров",
        imageAlt: "Адаптация сайта под аудиторию",
        imageSrc: "./assets/images/use-cases-web-04.webp",
      },
    ],
  },
  {
    id: "images",
    label: "Изображения",
    features: [
      {
        title: "В стиле и цвете бренда",
        description: "Фирменные пресеты автоматически применяются к каждой новой генерации",
        imageAlt: "Редактор брендовых изображений",
        imageSrc: "./assets/images/use-cases-img-01.webp",
      },
      {
        title: "Попадание с первой генерации",
        description: "Модель понимает ваши референсы, палитру и правила композиции",
        imageAlt: "Генерация изображения по дизайн-системе",
        imageSrc: "./assets/images/use-cases-tab2-item2.webp",
      },
      {
        title: "Редактирование объектов",
        description: "Меняйте композицию и удаляйте элементы прямо на изображении",
        imageAlt: "Редактирование объектов изображения",
        imageSrc: "./assets/images/use-cases-tab2-item3.webp",
      },
      {
        title: "Любой стиль и формат",
        description: "Ресайзы и варианты для всех рекламных площадок за один проход",
        imageAlt: "Набор форматов изображения",
        imageSrc: "./assets/images/use-cases-tab2-item4.webp",
      },
    ],
  },
  {
    id: "video",
    label: "Видео",
    features: [
      {
        title: "Видео из ключевых кадров",
        description: "Соберите ролик из брендовых изображений и управляйте каждой сценой",
        imageAlt: "Редактор видео в Снэпбилде",
        imageSrc: "./assets/images/use-cases-vid-01.webp",
      },
      {
        title: "Единый визуальный язык",
        description: "Все сцены сохраняют стилистику, свет и характер вашего бренда",
        imageAlt: "Последовательные кадры видео",
        imageSrc: "./assets/images/use-cases-tab3-item2.webp",
      },
      {
        title: "Монтаж через чат",
        description: "Меняйте длительность, движение и содержание обычным текстовым запросом",
        imageAlt: "AI-монтаж видео",
        imageSrc: "./assets/images/use-cases-tab3-item3.webp",
      },
      {
        title: "Версии под площадки",
        description: "Горизонтальные, вертикальные и квадратные версии из одного проекта",
        imageAlt: "Форматы видео для площадок",
        imageSrc: "./assets/images/use-cases-tab3-item4.webp",
      },
    ],
  },
  {
    id: "banners",
    label: "Баннеры",
    features: [
      {
        title: "Мастер-баннер",
        description: "Один основной макет становится источником всей рекламной кампании",
        imageAlt: "Мастер-баннер рекламной кампании",
        imageSrc: "./assets/images/use-cases-tab4-item1.webp",
      },
      {
        title: "Автоматические адаптации",
        description: "Платформа сохраняет иерархию и смысл при любом размере плейсмента",
        imageAlt: "Адаптации рекламного баннера",
        imageSrc: "./assets/images/use-cases-tab4-item2.webp",
      },
      {
        title: "Варианты для сегментов",
        description: "Меняйте оффер и акценты без нарушения дизайн-системы",
        imageAlt: "Варианты баннеров для аудиторий",
        imageSrc: "./assets/images/use-cases-tab4-item3.webp",
      },
      {
        title: "Готово к размещению",
        description: "Экспортируйте материалы с корректными размерами и весом файлов",
        imageAlt: "Экспорт рекламных баннеров",
        imageSrc: "./assets/images/use-cases-tab4-item4.webp",
      },
    ],
  },
  {
    id: "presentations",
    label: "Презентации",
    features: [
      {
        title: "Структура из документа",
        description:
          "Загрузите исходные материалы — AI соберёт логику и последовательность слайдов",
        imageAlt: "Корпоративная презентация",
        imageSrc: "./assets/images/use-cases-pres-01.jpg",
      },
      {
        title: "Каждый слайд в системе",
        description: "Сетки, типографика и графика соответствуют правилам бренда",
        imageAlt: "Слайды в фирменной дизайн-системе",
        imageSrc: "./assets/images/use-cases-tab5-item2.webp",
      },
      {
        title: "Быстрые версии",
        description: "Адаптируйте одну презентацию под клиента, аудиторию или выступление",
        imageAlt: "Версии корпоративной презентации",
        imageSrc: "./assets/images/use-cases-tab5-item3.webp",
      },
      {
        title: "Редактирование без дизайнера",
        description: "Команда меняет содержание, а система защищает композицию",
        imageAlt: "Редактор презентаций Снэпбилд",
        imageSrc: "./assets/images/use-cases-tab5-item4.webp",
      },
    ],
  },
];
