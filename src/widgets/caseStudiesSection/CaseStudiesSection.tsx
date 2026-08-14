import { useRef, useState, type PointerEvent } from "react";

import { CaseStudyCard } from "@/entities/CaseStudyCard";
import { Reveal, SectionHeading } from "@/shared/ui/brand";

import { caseStudies } from "./caseStudyData";

import styles from "./CaseStudiesSection.module.css";

export function CaseStudiesSection() {
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
    <section className={styles.section} id="case-studies">
      <Reveal>
        <SectionHeading
          description="Примеры сценариев, в которых дизайн-система превращается в измеримый результат."
          title="Материалы, которые уже работают"
        />
      </Reveal>
      <div
        className={styles.viewport}
        data-dragging={isDragging}
        onPointerCancel={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        ref={viewportRef}
      >
        <div className={styles.grid}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.company} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
