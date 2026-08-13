import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/primitives";

import { faqItems } from "./faqData";

import styles from "./FaqAccordion.module.css";

function formatAnswer(answer: string) {
  const keepShortWordsTogether = (text: string) => {
    let formattedText = text.replace(/ — /g, "\u00a0— ");

    for (let pass = 0; pass < 2; pass += 1) {
      formattedText = formattedText.replace(/ ([а-яА-Яa-zA-Z]{1,2}) /g, " $1\u00a0");
    }

    return formattedText;
  };

  return answer.split("\n\n").map((paragraph, index) => (
    <span key={`${paragraph.slice(0, 24)}-${String(index)}`}>
      {index > 0 && (
        <>
          <br />
          <br />
        </>
      )}
      {keepShortWordsTogether(paragraph)}
    </span>
  ));
}

export function FaqAccordion() {
  return (
    <Accordion className={styles.grid} type="multiple">
      {[faqItems.slice(0, 4), faqItems.slice(4)].map((column, columnIndex) => (
        <div className={styles.column} key={column[0]?.question}>
          {column.map((item, itemIndex) => {
            const index = columnIndex * 4 + itemIndex;

            return (
              <AccordionItem
                className={styles.item}
                key={item.question}
                value={`item-${String(index)}`}
              >
                <AccordionTrigger className={styles.trigger}>
                  <span>{item.question}</span>
                  <img
                    alt=""
                    aria-hidden="true"
                    className={styles.icon}
                    src="./assets/images/c2663c497fb468e1.webp"
                  />
                </AccordionTrigger>
                <AccordionContent className={styles.content} forceMount>
                  {formatAnswer(item.answer)}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      ))}
    </Accordion>
  );
}
