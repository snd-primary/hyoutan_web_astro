import classNames from "classnames";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { styles } from "./MenuAccodion.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { sake_data } from "@/sitedata/index";
import { sprinkles } from "../../styles/sprinkles.css";
import { CheckboxIcon } from "@radix-ui/react-icons";
import { ReactComponent as HIGAWARILOGO } from "./higawari.svg";

const HigawariLogo = () => {
  return <HIGAWARILOGO />;
};

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
        <AccordionContent className={styles.AccordionContent}>
          <div>
            <div className={styles.SakeMenus}>
              {sake_data.map((i) => (
                <div key={i.id}>
                  <div
                    className={sprinkles({
                      display: "flex",
                      alignContent: "baseline",
                    })}
                  >
                    {i.ruby ? (
                      <ruby>
                        {i.title} <rp>(</rp>
                        <rt>{i.ruby}</rt>
                        <rp>)</rp>
                      </ruby>
                    ) : (
                      <ruby>
                        {i.title} <rp>(</rp>
                        <rt>&nbsp;</rt>
                        <rp>)</rp>
                      </ruby>
                    )}
                    <span
                      className={sprinkles({
                        paddingTop: "sm",
                      })}
                    >
                      {i.prfacture}
                    </span>
                  </div>

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
            <div className={styles.SakeMenuAnnotation}>
              <p>
                <CheckboxIcon />
                飲酒運転は固くお断りします。
              </p>
              <p>
                <CheckboxIcon />
                1杯につき90ccのご提供となります。
              </p>
            </div>
          </div>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className={styles.AccordionItem} value="item-2">
        <AccordionTrigger>アルコールメニュー</AccordionTrigger>
        <AccordionContent>
          <div>
            <div
              className={sprinkles({
                display: "grid",
                placeItems: "center",
                placeContent: "center",
                fontSize: "lg",
                padding: "xl",
              })}
            >
              <p>- 編集中... -</p>
            </div>
          </div>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className={styles.AccordionItem} value="item-3">
        <AccordionTrigger>串とんメニュー</AccordionTrigger>
        <AccordionContent>
          <div className={styles.KushiTonMenus}>
            <picture>
              <source srcSet="/images/kushiton.webp" />
              <img src="/images/kushiton.png" alt="串とんメニューの紹介" />
            </picture>
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
          <div className={styles.FoodMenu}>
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
            <div className={styles.Higawari}>
              <HigawariLogo />
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
