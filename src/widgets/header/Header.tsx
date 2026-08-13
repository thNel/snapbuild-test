import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import { ButtonLabel, Logo } from "@/shared/ui/brand";
import { Button, Sheet, SheetClose, SheetContent, SheetTrigger } from "@/shared/ui/primitives";

import styles from "./Header.module.css";

const navigation = [
  { href: "#process", label: "Продукт" },
  { href: "#use-cases", label: "Возможности" },
  { href: "#features", label: "Безопасность" },
  { href: "#faq", label: "FAQ" },
];

const builderUrl = "https://builder.snapbuild.ru/";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 0);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  return (
    <header className={styles.header} data-scrolled={isScrolled}>
      <div className={styles.bar}>
        <Logo />

        <nav aria-label="Основная навигация" className={styles.navigation}>
          {navigation.map((item) => (
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

          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-label="Открыть меню"
                className={styles.menuButton}
                size="icon"
                variant="ghost"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className={styles.sheet} side="right">
              <nav aria-label="Мобильная навигация" className={styles.mobileNavigation}>
                {navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild className={styles.mobileCta}>
                <a href={builderUrl}>
                  <ButtonLabel tone="light">Начать сейчас</ButtonLabel>
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
