import { useRef, useState, type PointerEvent } from "react";

import { OutputFormat } from "@/entities/OutputFormat";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { outputFormats } from "./workflowData";

import styles from "./WorkflowSection.module.css";

export function WorkflowSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    dragState.current = { active: true, startX: event.clientX, scrollLeft: viewport.scrollLeft };
    setIsDragging(true);
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport || !dragState.current.active) return;

    viewport.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.startX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    dragState.current.active = false;
    setIsDragging(false);
    viewportRef.current?.releasePointerCapture(event.pointerId);
  };

  return (
    <section className={styles.section} id="workflow">
      <Reveal>
        <SectionHeading
          description="Один контекст превращается в согласованный набор материалов для всей команды."
          title="Один запрос — весь комплект"
        />
      </Reveal>
      <Reveal className={styles.composition}>
        <div className={styles.brief}>
          <span className={styles.eyebrow}>Единый контекст</span>
          <h3>Соберите один бриф — получите всё нужное для запуска.</h3>
          <p>
            Снэпбилд удерживает задачу, стиль и ограничения в одном месте, чтобы каждый новый формат
            выглядел частью одной кампании.
          </p>
          <div className={styles.prompt}>
            <div className={styles.promptHeader}>
              <span />
              <span />
              <span />
              <small>Новый запрос</small>
            </div>
            <strong>Запустить коллекцию в новом сезоне</strong>
            <span>3 канала · 1 дизайн-система · 0 дублей</span>
          </div>
        </div>
        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <span>Результат на выходе</span>
            <strong>05 форматов</strong>
          </div>
          <div
            className={styles.outputViewport}
            data-dragging={isDragging}
            onPointerCancel={handlePointerUp}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            ref={viewportRef}
          >
            <div className={styles.outputGrid}>
              {outputFormats.map((format) => (
                <OutputFormat key={format.index} {...format} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
