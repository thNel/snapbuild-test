import { Check } from "lucide-react";

import styles from "./ComparisonTable.module.css";

const columns = ["снэпбилд", "Claude + Figma MCP", "No-code платформы", "Cursor", "Традиционный"];

const rows: [string, ...string[]][] = [
  ["Time-to-market", "5 минут", "30–60 мин", "2–3 дня", "1–2 дня", "3–5 недель"],
  [
    "Дизайн-система",
    "100% точность",
    "Частично, из Figma",
    "Шаблоны",
    "Вручную в коде",
    "Вручную, через ревью",
  ],
  ["Визуальный редактор", "+ ИИ", "—", "Есть", "—", "—"],
  ["Требуемые навыки", "Нет", "Промпты + код", "Дизайн", "Разработка", "Полная команда"],
];

export function ComparisonTable() {
  return (
    <div className={styles.viewport}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">
              <span className={styles.mobileHiddenLabel}>Особенности</span>
            </th>
            {columns.map((column, index) => (
              <th className={index === 0 ? styles.featured : undefined} key={column} scope="col">
                {index === 0 ? <span className={styles.featuredLabel}>{column}</span> : column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...values]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {values.map((value, index) => (
                <td
                  className={index === 0 ? styles.featured : undefined}
                  key={`${label}-${columns[index] ?? value}`}
                >
                  {value === "+ ИИ" ? (
                    <span className={styles.withIcon}>
                      <Check aria-hidden="true" /> {value}
                    </span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
