# План пяти новых секций

## 1. Цель

Тестовое задание требует добавить пять полноценных содержательных секций и встроить их в
существующий лендинг. Новые блоки должны быть самостоятельными по смыслу и структуре, но
выглядеть так, будто были частью Snapbuild с самого начала.

Это документ решений до реализации. Здесь зафиксированы содержание, место на странице,
композиция, интерактивность, responsive-поведение и критерии готовности.

## 2. Narrative страницы после расширения

Итоговая история пользователя:

```text
Hero
  -> что такое Snapbuild
Logos
  -> социальное доказательство
Platform
  -> из чего состоит продукт
Workflow (new)
  -> как получается результат
Use cases
  -> какие форматы можно создавать
Team scenarios (new)
  -> как продукт работает для разных команд
Case studies (new)
  -> какой результат получают пользователи
Comparison
  -> почему Snapbuild выбирают вместо альтернатив
Integrations (new)
  -> как встроить платформу в корпоративный контур
Security
  -> почему контур безопасен
Roadmap
  -> куда развивается продукт
Demo request (new)
  -> следующий шаг и сбор запроса
FAQ
  -> снятие возражений
Final CTA
  -> завершение конверсии
```

Новые секции не должны идти одним блоком перед финальным CTA. Они распределены по narrative:
сначала механизм продукта, затем применение и доказательства, после этого инфраструктура,
безопасность и конверсия.

## 3. Сводка секций

| ID               | Секция                             | Основная задача                 | Структурный паттерн         | Интерактивность  |
| ---------------- | ---------------------------------- | ------------------------------- | --------------------------- | ---------------- |
| `workflow`       | От идеи до готовой кампании        | Объяснить процесс               | горизонтальный process rail | reveal/stagger   |
| `team-scenarios` | Один бренд - для каждой команды    | Показать пользу по ролям        | role tabs + detail panel    | tabs             |
| `case-studies`   | Материалы, которые уже работают    | Дать социальное доказательство  | quote/metric cards          | carousel/drag    |
| `integrations`   | Встраивается в ваш контур          | Снять страх интеграции          | architecture split + chips  | раскрытие этапов |
| `demo-request`   | Покажите задачу - соберём сценарий | Конвертировать интерес в заявку | form card + success state   | форма            |

Каждая секция имеет другую геометрию: rail, tabs, cards, diagram и form. Это закрывает
требование задания о различии структуры и назначения.

## 4. `WorkflowSection` - «От идеи до готовой кампании»

### Смысл

Показать не перечень возможностей, а последовательность работы пользователя. Секция должна
объяснять продукт человеку, который ещё не видел интерфейс builder.

### Черновой контент

1. **Подключите дизайн-систему** - компоненты, цвета, шрифты и правила бренда становятся
   единым источником стиля.
2. **Опишите задачу** - документ, ссылка или короткий бриф задают контекст кампании.
3. **Соберите набор материалов** - Snapbuild генерирует сайт, изображения, видео, баннеры или
   презентацию в одном стиле.
4. **Передайте в работу** - команда редактирует результат через AI или визуальный редактор и
   экспортирует нужные форматы.

### Layout

- SectionHeading сверху.
- Под ним горизонтальный rail из четырёх numbered steps.
- Между шагами - тонкая линия с розовым progress-сегментом и круглыми markers, визуально
  связанная с roadmap оригинала.
- Под каждым marker: title, 2-3 строки description, короткая метрика/результат.
- На mobile rail становится вертикальным списком; линия остаётся слева, текст не превращается
  в горизонтальный overflow.

### Component tree

```text
WorkflowSection (widget)
  SectionHeading (brand)
  WorkflowRail (feature-local)
    WorkflowStep (entity)
    WorkflowConnector (brand/local primitive)
```

### Motion

- section reveal;
- markers появляются слева направо с задержкой 80-100ms;
- progress line раскрывается после появления markers;
- reduced motion: все steps видимы сразу, линия статична.

## 5. `TeamScenariosSection` - «Один бренд - для каждой команды»

### Смысл

Показать разные jobs-to-be-done без копирования существующей секции форматов. Текущий
`UseCasesSection` отвечает на вопрос «что создаём», новая секция отвечает «кто и зачем это
использует».

### Вкладки

- **Маркетинг** - одна кампания, десятки форматов и адаптаций;
- **Дизайн** - единые компоненты, пресеты и контроль визуального качества;
- **Продажи** - презентации и материалы под конкретную аудиторию без очереди к дизайнеру.

Каждая вкладка содержит:

- короткий lead;
- три outcome bullets;
- одну крупную metric label;
- небольшой visual accent: chip stack, mini-layout или thumbnail strip.

### Layout

- слева фиксированная вертикальная/горизонтальная группа tabs;
- справа detail panel на белой поверхности;
- active tab чёрный с белым текстом, inactive - transparent/white;
- panel не меняет общую высоту при переключении: контент резервирует минимальную высоту.

На mobile tabs остаются горизонтально scrollable в одной строке, panel всегда ниже tabs.
Пункты не переставляются и не становятся активным элементом в начале списка.

### Component tree

```text
TeamScenariosSection (widget)
  SectionHeading (brand)
  TeamScenarioTabs (feature)
    Tabs / TabsList / TabsTrigger / TabsContent (shadcn)
    TeamScenario (entity)
    OutcomeList (brand/local primitive)
```

### Motion и accessibility

- panel content cross-fade + короткий directional slide;
- active indicator переключается без layout jump;
- tabs используют `aria-selected`, `aria-controls`, keyboard arrows;
- reduced motion: только opacity или мгновенная замена.

## 6. `CaseStudiesSection` - «Материалы, которые уже работают»

### Смысл

Закрыть вопрос доверия результатами, а не дополнительным описанием функций. Формат соответствует
рекомендации задания «Отзывы»/«Кейсы использования», но остаётся в языке Snapbuild.

### Контентная модель

Каждый case содержит:

- короткую цитату клиента;
- имя и должность;
- компанию или команду;
- один measurable result;
- контекст: сайт, campaign, presentation или image system.

На первом проходе используем правдоподобные демонстрационные данные с явной пометкой в
README, что это mock content. Не выдаём вымышленные цифры за реальные подтверждённые кейсы.

### Layout

- heading + небольшой eyebrow «Результат вместо обещаний»;
- три крупные cards на desktop;
- первая карточка может быть featured и занимать две колонки;
- на tablet две колонки;
- на mobile одна карточка в viewport с горизонтальным scroll/snap или стрелками.

Карточка не превращается в длинный testimonial wall: quote ограничен 3-5 строками, metric
видна с первого взгляда.

### Component tree

```text
CaseStudiesSection (widget)
  SectionHeading (brand)
  CaseStudyCarousel (feature)
    Card (shadcn)
    CaseStudyCard (entity)
    MetricBadge (brand)
    Carousel controls (shadcn/local feature)
```

### Motion и interaction

- hover поднимает только внутренний акцент, не всю страницу;
- carousel поддерживает arrows, swipe/drag и keyboard;
- active dot/indicator синхронизирован с карточкой;
- на mobile не допускаем body-level horizontal scroll.

## 7. `IntegrationsSection` - «Встраивается в ваш контур»

### Смысл

Секция отвечает на техническое возражение: «Нам придётся менять инфраструктуру?». Она логично
стоит между сравнением и безопасностью.

### Контент

Левая сторона:

- подключение к существующей дизайн-системе;
- экспорт в React/Vue/HTML/CSS;
- GitHub/GitLab и CI/CD;
- SSO, private cloud и корпоративные политики доступа.

Правая сторона:

- компактная architecture diagram:
  `Ваши материалы -> Snapbuild -> Design System -> Каналы публикации`;
- chips/labels для Figma, GitHub, GitLab, CI/CD, SSO;
- пояснение, что конкретная интеграция зависит от контура клиента.

### Layout

- split layout 5/7 или 6/6;
- left copy block;
- right white content card с connector lines и node markers;
- на mobile сначала copy, затем diagram card;
- диаграмма не должна требовать zoom и не выходит за viewport.

### Component tree

```text
IntegrationsSection (widget)
  SectionHeading (brand)
  IntegrationOverview (feature/local composition)
    IntegrationNode (entity)
    IntegrationChip (brand primitive)
    ConnectorLine (decorative SVG/CSS)
```

### Motion

- nodes reveal по ходу линии;
- hover/focus node показывает короткое пояснение;
- connector не мерцает и не меняет геометрию при hover;
- reduced motion: статичная схема.

## 8. `DemoRequestSection` - «Покажите задачу - соберём сценарий»

### Смысл

Добавить настоящую интерактивную секцию из задания: поля заявки, базовая валидация, понятные
ошибки и состояние успешной отправки без backend.

Это не замена финальному CTA. Финальный CTA остаётся короткой конверсионной точкой, а форма
собирает контекст задачи.

### Поля

- компания;
- рабочий email;
- что нужно создавать или адаптировать;
- опционально - размер команды или тип материалов.

### States

1. `idle` - пустая форма с подсказками;
2. `focus` - видимый focus-visible;
3. `invalid` - ошибка рядом с конкретным полем, без прыжка всей секции;
4. `submitting` - disabled submit и короткий loading indicator;
5. `success` - подтверждение, summary введённой задачи и CTA на следующий шаг;
6. `error` - локальная ошибка отправки mock-flow с возможностью повторить.

### Layout

- мягкая gradient/surface shell, но не копия финального CTA;
- слева заголовок, обещание результата и privacy note;
- справа form card;
- на mobile всё вертикально, form card занимает ширину контейнера;
- submit всегда доступен без горизонтального scroll.

### Component tree

```text
DemoRequestSection (widget)
  SectionHeading / FormIntro (brand)
  DemoRequestForm (feature)
    Field (brand primitive)
      Label (shadcn)
      Input / Textarea (shadcn)
      FormMessage (brand primitive)
    Button (shadcn)
    SuccessState (feature-local)
```

### Validation

- company: required, минимум 2 символа;
- email: required, базовый email format;
- request: required, минимум 10 символов;
- ошибки появляются после blur или submit;
- все сообщения на русском и понятны без обращения к console.

## 9. Порядок реализации

Реализуем вертикальными срезами, чтобы после каждого шага страница оставалась рабочей:

1. вынести/проверить primitives `Label`, `Input`, `Textarea`, `Separator`;
2. реализовать `WorkflowSection` без сложного состояния;
3. реализовать `TeamScenariosSection` и покрыть keyboard tabs;
4. реализовать `CaseStudiesSection` и проверить drag/keyboard/mobile overflow;
5. реализовать `IntegrationsSection` с декоративной схемой;
6. реализовать `DemoRequestSection` с тестами состояний формы;
7. встроить widgets в `HomePage` в зафиксированном порядке;
8. обновить footer navigation и mobile navigation только после стабилизации ids;
9. сделать визуальное сравнение baseline/new на 1440px, 810px и 375px;
10. обновить README, тесты и GitHub Pages workflow.

## 10. Acceptance criteria

### Общие

- пять секций действительно добавлены и видны в одной странице;
- секции отличаются структурой, а не только цветом заголовка;
- текст относится к продукту Snapbuild и не использует Lorem Ipsum;
- ни одна секция не выглядит копией готового блока с другого сайта;
- новая секция использует baseline tokens, primitives и motion language.

### Responsive

- 1440px: полная desktop-композиция;
- 810px: tablet без обрезания текста и с корректным перестроением;
- 375px: мобильная вертикальная композиция;
- дополнительно проверяем 320px, 390px и 430px;
- нет горизонтального scroll у `body`;
- горизонтальный scroll, если нужен, ограничен локальным viewport.

### Quality

- `yarn lint`;
- `yarn typecheck`;
- `yarn test --run`;
- `yarn build`;
- нет console errors;
- README описывает пять секций, решения, ограничения и AI usage.
