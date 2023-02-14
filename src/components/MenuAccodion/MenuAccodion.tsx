import classNames from "classnames";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { styles } from "./MenuAccodion.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { sake_data } from "@sitedata";

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
        <AccordionTrigger>日本酒メニュー</AccordionTrigger>
        <AccordionContent>
          <div className={styles.SakeMenus}>
            {sake_data.map((i) => (
              <div key={i.id}>
                <p>{i.title}</p>
                <ul>
                  <li>{i.item1}</li>
                  {i.item2 ? <li>{i.item2}</li> : null}
                  {i.item3 ? <li>{i.item3}</li> : null}
                  {i.item4 ? <li>{i.item4}</li> : null}
                  {i.item5 ? <li>{i.item5}</li> : null}
                  {i.item6 ? <li>{i.item6}</li> : null}
                  {i.item7 ? <li>{i.item7}</li> : null}
                </ul>
              </div>
            ))}
          </div>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className={styles.AccordionItem} value="item-2">
        <AccordionTrigger>アルコールメニュー</AccordionTrigger>
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
      <Accordion.Item className={styles.AccordionItem} value="item-3">
        <AccordionTrigger>串とんメニュー</AccordionTrigger>
        <AccordionContent>
          <div className={styles.KushiTonMenus}>
            <div className={styles.KushiTonMenusHeader}>
              <p>三代目ひょうたん名物!!</p>
              <p className={styles.KushiTonMenusHeaderTitle}>
                串とん <span>メニュー</span>
              </p>
              <p>全品税込み385円</p>
            </div>
            <div className={styles.KushiTonList}>
              <span>豚バラ・</span>
              <span>豚タン・</span>
              <span>豚テッチャン・</span>
              <span>豚ハラミ・</span>
              <span>豚タン・</span>
              <span>ノド・</span>
              <span>ロース・</span>
              <span>コブクロ・</span>
              <span>カシラ・</span>
              <span>ネック・</span>
              <span>ハツ・</span>
              <span>レバー・</span>
              <span>自家製つくね・</span>
              <span>激辛ソーセージ・</span>
              <span>青トウガラシ・</span>
              <span>アスパラベーコン</span>
            </div>
          </div>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className={styles.AccordionItem} value="item-4">
        <AccordionTrigger>一品料理</AccordionTrigger>
        <AccordionContent>
          <div className={styles.SakeMenus}>
            <ul>
              <li>もつ煮込み・・・660円</li>
              <li>明太じゃがバター・・・605円</li>
              <li>スペアリブ（大）・・・660円</li>
              <li>噂のトンテキ・・・715円</li>
              <li>デカとんかつ・・・715円</li>
              <li>豚生姜焼き・・・660円</li>
              <li>豚キムチ・・・350円</li>
              <li>漬物盛り合わせ・・・440円</li>
              <li>おにぎり・・・275円</li>
            </ul>
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
