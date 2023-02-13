import classNames from "classnames";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { styles } from "./MenuAccodion.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionForwardProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className={styles.AccordionHeader}>
    <Accordion.Trigger
      className={classNames(styles.AccordionTrigger, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionForwardProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(styles.AccordionContent, className)}
    {...props}
    ref={forwardedRef}
  >
    <div>{children}</div>
  </Accordion.Content>
));

export const MenuAccodion = () => {
  return (
    <Accordion.Root
      className={styles.AccordionRoot}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className={styles.AccordionItem} value="item-1">
        <AccordionTrigger>日本酒</AccordionTrigger>
        <AccordionContent>
          <div className={styles.SakeMenus}>
            <div>
              <p>黒竜（福島）</p>
              <ul>
                <li>純米吟醸・・・440円</li>
                <li>季節酒・・・480円</li>
                <li>大吟醸・・・850円</li>
              </ul>
            </div>
            <div>
              <p>黒竜（福島）</p>
              <ul>
                <li>純米吟醸・・・440円</li>
                <li>季節酒・・・480円</li>
                <li>大吟醸・・・850円</li>
              </ul>
            </div>
            <div>
              <p>黒竜（福島）</p>
              <ul>
                <li>純米吟醸・・・440円</li>
                <li>季節酒・・・480円</li>
                <li>大吟醸・・・850円</li>
              </ul>
            </div>
            <div>
              <p>黒竜（福島）</p>
              <ul>
                <li>純米吟醸・・・440円</li>
                <li>季節酒・・・480円</li>
                <li>大吟醸・・・850円</li>
              </ul>
            </div>
            <div>
              <p>黒竜（福島）</p>
              <ul>
                <li>純米吟醸・・・440円</li>
                <li>季節酒・・・480円</li>
                <li>大吟醸・・・850円</li>
              </ul>
            </div>
            <div>
              <p>黒竜（福島）</p>
              <p>黒竜（福島）</p>
              <p>黒竜（福島）</p>
            </div>
          </div>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};
type AccordionForwardProps = {
  children: React.ReactNode;
  className?: string;
};
