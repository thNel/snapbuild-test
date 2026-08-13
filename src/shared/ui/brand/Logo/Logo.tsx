import { cn } from "@/shared/lib/cn";

import type { LogoProps } from "./Logo.types";

import styles from "./Logo.module.css";

export function Logo({ className }: LogoProps) {
  return (
    <a aria-label="Снэпбилд" className={cn(styles.logo, className)} href="#hero">
      <img alt="Снэпбилд" src="./assets/images/582db07d8ccd60da.svg" />
    </a>
  );
}
