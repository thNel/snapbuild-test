import { useEffect, useState } from "react";

import { cn } from "@/shared/lib/cn";
import { ButtonLabel } from "@/shared/ui/brand";
import { Button } from "@/shared/ui/primitives";

import styles from "./CookieConsent.module.css";

const consentStorageKey = "snapbuild-cookie-consent";

type ConsentState = "dismissed" | "hidden" | "visible";

function hasAcceptedCookies() {
  try {
    return window.localStorage.getItem(consentStorageKey) === "accepted";
  } catch {
    return false;
  }
}

export function CookieConsent() {
  const [consentState, setConsentState] = useState<ConsentState>(() =>
    hasAcceptedCookies() ? "dismissed" : "hidden",
  );

  useEffect(() => {
    if (consentState !== "hidden") {
      return;
    }

    const showTimer = window.setTimeout(() => setConsentState("visible"), 80);

    return () => window.clearTimeout(showTimer);
  }, [consentState]);

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(consentStorageKey, "accepted");
    } catch {
      // Consent still applies for the current page when storage is unavailable.
    }

    setConsentState("hidden");
    window.setTimeout(() => setConsentState("dismissed"), 300);
  };

  if (consentState === "dismissed") {
    return null;
  }

  return (
    <aside
      aria-label="Использование файлов cookie"
      className={cn(styles.root, consentState === "visible" && styles.visible)}
    >
      <p className={styles.text}>
        Мы используем файлы cookie, чтобы сделать наш сайт лучше. Используя сайт, вы принимаете нашу{" "}
        <a
          className={styles.link}
          href="https://snapbuild.ru/privacy"
          rel="noopener noreferrer"
          target="_blank"
        >
          политику конфиденциальности
        </a>{" "}
        и{" "}
        <a
          className={styles.link}
          href="https://snapbuild.ru/agreement"
          rel="noopener noreferrer"
          target="_blank"
        >
          соглашение на обработку персональных данных.
        </a>
      </p>

      <div className={styles.actions}>
        <Button className={styles.button} onClick={acceptCookies}>
          <ButtonLabel tone="light">Принять</ButtonLabel>
        </Button>
      </div>
    </aside>
  );
}
