import { useEffect, useRef, useState } from "react";

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/primitives";

import { useCaseModes } from "./useCaseData";

import styles from "./UseCaseTabs.module.css";

export function UseCaseTabs() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState(useCaseModes[0]?.id ?? "websites");
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { threshold: 0.35 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeoutId = window.setTimeout(() => {
      const modeIndex = useCaseModes.findIndex((mode) => mode.id === activeMode);
      const mode = useCaseModes[modeIndex];

      if (!mode) return;

      if (activeFeature < mode.features.length - 1) {
        setActiveFeature(activeFeature + 1);
        return;
      }

      const nextMode = useCaseModes[(modeIndex + 1) % useCaseModes.length];

      if (!nextMode) return;

      setActiveMode(nextMode.id);
      setActiveFeature(0);
    }, 8000);

    return () => window.clearTimeout(timeoutId);
  }, [activeFeature, activeMode, isVisible]);

  const handleModeChange = (value: string) => {
    setActiveMode(value);
    setActiveFeature(0);
  };

  return (
    <Tabs
      className={styles.root}
      data-visible={isVisible}
      onValueChange={handleModeChange}
      ref={rootRef}
      value={activeMode}
    >
      <TabsList aria-label="Форматы материалов" className={styles.tabsList}>
        {useCaseModes.map((mode) => (
          <TabsTrigger className={styles.tab} key={mode.id} value={mode.id}>
            {mode.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {useCaseModes.map((mode) => {
        const selectedFeature = mode.features[activeFeature] ?? mode.features[0];

        if (!selectedFeature) return null;

        return (
          <TabsContent className={styles.panel} key={mode.id} value={mode.id}>
            <div className={styles.features}>
              {mode.features.map((feature, index) => (
                <Button
                  className={styles.feature}
                  data-active={activeFeature === index}
                  key={feature.title}
                  onClick={() => setActiveFeature(index)}
                  variant="ghost"
                >
                  <span className={styles.title}>{feature.title}</span>
                  <small className={styles.description}>
                    <span>{feature.description}</span>
                  </small>
                  <span aria-hidden="true" className={styles.progress}>
                    <span className={styles.progressFill} />
                  </span>
                </Button>
              ))}
            </div>

            <div className={styles.media}>
              {mode.features.map((feature, index) => (
                <img
                  alt={feature.imageAlt}
                  data-active={activeFeature === index}
                  key={feature.imageSrc}
                  src={feature.imageSrc}
                />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
