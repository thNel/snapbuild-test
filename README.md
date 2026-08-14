# Snapbuild — тестовое задание

Локальная компонентная реконструкция лендинга [snapbuild.ru](https://snapbuild.ru/) с пятью
новыми секциями. Исходная страница сохранена как единый сценарий: новые блоки встроены между
существующими секциями и используют тот же визуальный язык.

## Локальный запуск

```bash
yarn install
yarn dev
```

Production-сборка:

```bash
yarn build
```

Полная проверка качества:

```bash
yarn check
```

## Стек

- React 19;
- Vite;
- TypeScript strict;
- Yarn 4;
- shadcn/ui primitives на базе Radix UI;
- Tailwind CSS 4;
- CSS Modules;
- Vitest и Testing Library.

## Пять новых секций

1. **Один запрос — весь комплект** (`WorkflowSection`) — бриф кампании и горизонтальная
   draggable-лента из пяти готовых форматов: лендинг, презентация, баннеры, изображения и видео.
2. **Согласованный результат вместо разрозненных файлов** (`BrandConsistencySection`) —
   before/after-композиция про единый контекст кампании.
3. **Единый штаб кампании** (`TeamScenariosSection`) — карточки маркетинга, дизайна и продаж
   рядом с workspace-навигацией.
4. **Материалы, которые уже работают** (`CaseStudiesSection`) — горизонтальная лента mock-кейсов
   с drag/swipe.
5. **Качество видно до публикации** (`QualityControlSection`) — brand-check score, чек-лист и
   review board с процентами готовности.

Новые секции намеренно различаются по композиции: output rail, before/after board, workspace,
case-study rail и review board.

## Что воспроизведено из исходной страницы

- фиксированный стеклянный header и мобильное меню с burger/close-состояниями;
- hero с фирменным градиентом и интерфейсным preview;
- последовательное появление клиентских логотипов;
- платформа и карточки продуктовых возможностей;
- вкладки форматов материалов с autoplay, progress и ручным переключением;
- сравнительная таблица;
- блок безопасности;
- горизонтальный roadmap с drag/swipe;
- FAQ с Radix accordion и анимацией раскрытия;
- финальный CTA и footer;
- cookie consent popup с двумя ссылками и сохранением состояния.

## Анализ стилистики

Сопоставлены desktop, tablet и mobile версии исходного сайта. Зафиксированы TT Commons Pro,
светло-серый фон, крупная типографика, свободная сетка, чёрные primary controls, белые
поверхности, радиусы по ролям, фирменный градиент и motion-паттерны. Локальные изображения и
шрифты сохранены в `public/assets`, чтобы страница не зависела от внешнего CDN.

Подробные токены, правила декомпозиции, состояния и motion описаны в
[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md). Содержание и композиции новых секций зафиксированы в
[NEW_SECTIONS.md](./NEW_SECTIONS.md).

## Архитектура

Компоненты строятся по спирали:

```text
shadcn primitive -> brand primitive -> entity -> feature -> widget -> page
```

Правила именования, декомпозиции и работы со стилями находятся в [CODE_STYLE.md](./CODE_STYLE.md).

## Интерактивность и доступность

- FAQ, tabs и mobile menu доступны с клавиатуры;
- у состояний меню и accordion есть ARIA-атрибуты;
- drag-rails ограничены собственными viewport и не создают page-level horizontal overflow;
- hover/focus-visible/active-состояния заданы для controls;
- предусмотрен `prefers-reduced-motion` для анимаций и переходов;
- декоративные изображения имеют пустой `alt`, содержательные — описательный.

## Ограничения текущей локальной версии

- case-study и output rails используют drag/swipe без отдельных стрелочных контролов;
- mock-кейсы демонстрационные и не являются подтверждёнными клиентскими результатами;
- GitHub Pages workflow и публичная ссылка ещё не настроены в этом локальном репозитории.

## Публикация

Публикация на GitHub Pages — следующий release-шаг. Перед сдачей нужно добавить публичный
GitHub remote и workflow, затем проверить страницу без авторизации по адресу вида:

```text
https://<username>.github.io/<project-name>/
```

## Проверки

```bash
yarn lint
yarn typecheck
yarn test
yarn build
```

`yarn check` объединяет эти проверки с Prettier и Knip.

## AI-инструменты

Codex использовался для анализа PDF и исходного интерфейса, декомпозиции компонентов,
реализации, responsive-проверки, визуального сравнения и технического QA. Сгенерированный код
проверяется TypeScript, ESLint, Vitest и production build.
