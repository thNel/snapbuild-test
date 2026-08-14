import { Reveal, SectionHeading } from "@/shared/ui/brand";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/primitives";

import styles from "./BrandConsistencySection.module.css";

export function BrandConsistencySection() {
  return (
    <section className={styles.section} id="brand-consistency">
      <Reveal>
        <SectionHeading
          description="Правила бренда живут рядом с материалами — команда не ищет нужный токен в старых макетах."
          title="Дизайн-система, которая работает за вас"
        />
      </Reveal>

      <Reveal className={styles.lab}>
        <div className={styles.labHeader}>
          <div>
            <span className={styles.eyebrow}>Brand library</span>
            <strong>Осень 2026 / Снэпбилд</strong>
          </div>
          <span className={styles.synced}>Синхронизировано</span>
        </div>

        <Tabs defaultValue="colors" className={styles.tabs}>
          <TabsList aria-label="Разделы дизайн-системы" className={styles.tabsList}>
            <TabsTrigger className={styles.tab} value="colors">
              Цвета
            </TabsTrigger>
            <TabsTrigger className={styles.tab} value="type">
              Типографика
            </TabsTrigger>
            <TabsTrigger className={styles.tab} value="components">
              Компоненты
            </TabsTrigger>
          </TabsList>

          <TabsContent className={styles.panel} value="colors">
            <div className={styles.tokenColumn}>
              <span className={styles.tokenLabel}>Палитра кампании</span>
              <div className={styles.swatches}>
                <div className={styles.swatch} data-color="apricot">
                  <span>Apricot</span>
                  <small>#FFCDB8</small>
                </div>
                <div className={styles.swatch} data-color="pink">
                  <span>Pink</span>
                  <small>#FF9FC4</small>
                </div>
                <div className={styles.swatch} data-color="violet">
                  <span>Violet</span>
                  <small>#C9B8FF</small>
                </div>
              </div>
            </div>
            <div className={styles.preview}>
              <span className={styles.previewEyebrow}>Запуск кампании</span>
              <h3>Один стиль для каждого касания.</h3>
              <button type="button">Собрать материалы</button>
            </div>
          </TabsContent>

          <TabsContent className={styles.panel} value="type">
            <div className={styles.typeScale}>
              <span className={styles.tokenLabel}>Иерархия заголовков</span>
              <div className={styles.typeRow}>
                <strong>Display</strong>
                <span>56 / 0.96</span>
              </div>
              <div className={styles.typeRow}>
                <strong>Heading</strong>
                <span>32 / 1.08</span>
              </div>
              <div className={styles.typeRow}>
                <strong>Body</strong>
                <span>18 / 1.4</span>
              </div>
            </div>
            <div className={styles.typePreview}>
              <span>Превью материала</span>
              <h3>Собирайте быстрее.</h3>
              <p>Размеры и ритм уже согласованы с брендом.</p>
            </div>
          </TabsContent>

          <TabsContent className={styles.panel} value="components">
            <div className={styles.componentList}>
              <span className={styles.tokenLabel}>Готовые элементы</span>
              <div className={styles.componentRow}>
                <button type="button">Начать сейчас</button>
                <span>Primary CTA</span>
              </div>
              <div className={styles.componentRow}>
                <span className={styles.pill}>Проверено</span>
                <span>Status badge</span>
              </div>
              <div className={styles.componentRow}>
                <span className={styles.line} />
                <span>Divider</span>
              </div>
            </div>
            <div className={styles.componentPreview}>
              <span className={styles.previewEyebrow}>Компонентная библиотека</span>
              <h3>Собирайте новые страницы из проверенных блоков.</h3>
              <div className={styles.previewFooter}>
                <span>12 компонентов</span>
                <span>Все токены на месте</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Reveal>
    </section>
  );
}
