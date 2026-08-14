import { useEffect, useRef, useState } from "react";

import { fullNavigation } from "@/shared/config/siteNavigation";
import { ButtonLabel, Logo } from "@/shared/ui/brand";
import { Button } from "@/shared/ui/primitives";

import styles from "./Header.module.css";

const builderUrl = "https://builder.snapbuild.ru/";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 0);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer, true);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer, true);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle("mobile-menu-open", isMenuOpen);

    return () => document.documentElement.classList.remove("mobile-menu-open");
  }, [isMenuOpen]);

  return (
    <header
      className={styles.header}
      data-menu-open={isMenuOpen}
      data-scrolled={isScrolled}
      ref={headerRef}
    >
      <div className={styles.bar}>
        <Logo />

        <nav aria-label="Основная навигация" className={styles.navigation}>
          {fullNavigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button asChild className={styles.cta} size="sm">
            <a href={builderUrl}>
              <ButtonLabel tone="light">Начать сейчас</ButtonLabel>
            </a>
          </Button>

          <Button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            size="icon"
            variant="ghost"
          >
            <span aria-hidden="true" className={styles.menuIcon} />
          </Button>
        </div>
      </div>

      <nav
        aria-hidden={!isMenuOpen}
        aria-label="Мобильная навигация"
        className={styles.mobileMenu}
        data-open={isMenuOpen}
        id="mobile-navigation"
      >
        <div className={styles.mobileMenuLinks}>
          {fullNavigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
        <Button asChild className={styles.mobileCta}>
          <a href={builderUrl} onClick={() => setIsMenuOpen(false)}>
            <ButtonLabel tone="light">Начать сейчас</ButtonLabel>
          </a>
        </Button>
      </nav>
    </header>
  );
}
