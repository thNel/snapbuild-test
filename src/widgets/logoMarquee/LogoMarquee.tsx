import { useEffect, useRef, useState } from "react";

import styles from "./LogoMarquee.module.css";

const logos = [
  { alt: "Ozon", src: "./assets/images/5cd01de0b6a5e001.svg" },
  { alt: "T2", src: "./assets/images/ee341193d7cf46d6.svg" },
  { alt: "Avito", src: "./assets/images/logo-avito.svg" },
  { alt: "ЦИАН", src: "./assets/images/logo-cian.svg" },
  { alt: "Лента", src: "./assets/images/logo-lenta.svg" },
];

export function LogoMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Клиенты Снэпбилда"
      className={styles.section}
      data-visible={isVisible}
      id="logos"
      ref={sectionRef}
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          {[false, true].map((isClone) => (
            <div aria-hidden={isClone || undefined} className={styles.group} key={String(isClone)}>
              {logos.map((logo) => (
                <img alt={isClone ? "" : logo.alt} key={logo.src} src={logo.src} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p>С платформой работают команды, для которых бренд — закон</p>
    </section>
  );
}
