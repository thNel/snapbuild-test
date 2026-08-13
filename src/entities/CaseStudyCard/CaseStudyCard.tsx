import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/primitives";

import type { CaseStudyCardData } from "./CaseStudyCard.types";

import styles from "./CaseStudyCard.module.css";

type CaseStudyCardProps = CaseStudyCardData;

export function CaseStudyCard({ company, metric, quote, result }: CaseStudyCardProps) {
  return (
    <Card className={styles.root}>
      <CardHeader className={styles.header}>
        <span className={styles.company}>{company}</span>
        <span className={styles.metric}>{metric}</span>
      </CardHeader>
      <CardContent className={styles.content}>
        <p>“{quote}”</p>
      </CardContent>
      <CardFooter className={styles.footer}>{result}</CardFooter>
    </Card>
  );
}
