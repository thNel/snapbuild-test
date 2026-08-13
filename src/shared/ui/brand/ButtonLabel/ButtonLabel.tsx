import { cn } from "@/shared/lib/cn";

import type { ButtonLabelProps } from "./ButtonLabel.types";

import styles from "./ButtonLabel.module.css";

export function ButtonLabel({ className, tone = "gradient", ...props }: ButtonLabelProps) {
  return <span className={cn(styles.root, styles[tone], className)} {...props} />;
}
