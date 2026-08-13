import { useRef, useState, type PointerEvent } from "react";

import { RoadmapItem } from "@/entities/RoadmapItem";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { roadmapItems } from "./roadmapData";

import styles from "./RoadmapSection.module.css";

export function RoadmapSection() {
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
    <section className={styles.section} id="roadmap">
      <Reveal>
        <SectionHeading
          description="Приоритизируем бэклог для ваших целей"
          title="Каждый день — новый релиз"
        />
        <div
          className={styles.viewport}
          data-dragging={isDragging}
          onPointerCancel={handlePointerUp}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          ref={viewportRef}
        >
          <div className={styles.track}>
            {roadmapItems.map((item, index) => (
              <RoadmapItem key={item.date} {...item} isReached={index < 9} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
