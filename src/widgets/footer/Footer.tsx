import { Logo } from "@/shared/ui/brand";

import styles from "./Footer.module.css";

const navigation = [
  { href: "#process", label: "Продукт" },
  { href: "#use-cases", label: "Возможности" },
  { href: "#compare", label: "Преимущества" },
  { href: "#features", label: "Безопасность" },
  { href: "#roadmap", label: "Роадмап" },
  { href: "#faq", label: "Частые вопросы" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p>Платформа, где все создается в рамках вашего бренда и дизайн-системы</p>
        </div>

        <nav aria-label="Подвал" className={styles.links}>
          <div>
            <p>Навигация</p>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <p>Документация</p>
            <a href="https://snapbuild.ru/privacy">Политика конфиденциальности</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <p>Контакты</p>
            <a href="https://t.me/ochen_darya">Запросить демо</a>
            <a href="https://t.me/snapbuild">Telegram</a>
          </div>
        </nav>

        <div className={styles.legal}>
          <p>© Сгенерировано в Снэпбилде. Все права защищены.</p>
          <a href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>
        </div>
      </div>
    </footer>
  );
}
