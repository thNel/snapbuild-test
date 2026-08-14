import { fullNavigation } from "@/shared/config/siteNavigation";
import { Logo } from "@/shared/ui/brand";

import styles from "./Footer.module.css";

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
            {fullNavigation.map((item) => (
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
            <a href="mailto:hey@snapbuild.ru">Написать нам</a>
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
