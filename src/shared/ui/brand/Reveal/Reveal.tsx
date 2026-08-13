import { useEffect, useRef, useState } from "react";

import { cn } from "@/shared/lib/cn";

import type { RevealProps } from "./Reveal.types";

import styles from "./Reveal.module.css";

export function Reveal({ children, className }: RevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn(styles.root, className)} data-visible={isVisible} ref={rootRef}>
      {children}
    </div>
  );
}
