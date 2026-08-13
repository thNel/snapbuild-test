import styles from "./IntegrationChip.module.css";

interface IntegrationChipProps {
  label: string;
}

export function IntegrationChip({ label }: IntegrationChipProps) {
  return <span className={styles.root}>{label}</span>;
}
