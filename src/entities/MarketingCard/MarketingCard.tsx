import { Card, CardContent } from "@/shared/ui/primitives";

import type { MarketingCardProps } from "./MarketingCard.types";

import styles from "./MarketingCard.module.css";

export function MarketingCard({ description, imageAlt, imageSrc, title }: MarketingCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.media}>
        <img alt={imageAlt} loading="lazy" src={imageSrc} />
      </div>
      <CardContent className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
