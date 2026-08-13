import { Card, CardContent } from "@/shared/ui/primitives";

import type { SecurityCardProps } from "./SecurityCard.types";

import styles from "./SecurityCard.module.css";

export function SecurityCard({
  description,
  imageAlt,
  imageSrc,
  mobileImageSrc,
  title,
}: SecurityCardProps) {
  return (
    <Card className={styles.card}>
      <picture className={styles.media}>
        <source media="(max-width: 767px)" srcSet={mobileImageSrc} />
        <img alt={imageAlt} loading="lazy" src={imageSrc} />
      </picture>
      <CardContent className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
