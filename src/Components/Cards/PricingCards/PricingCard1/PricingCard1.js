import React from "react";
import s from "./PricingCard1.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import Button1 from "../../../Buttons/Button1/Button1";
import Divider from "../../../Dividers/Divider";
import StarBadge from "../../../DiscountBadge/Star/StarBadge";

function PricingCard1({ price, title }) {
  return (
    <article className={s.container}>
      {/* <StarBadge /> */}
      <div className={s.container_content}>
        <header className={s.header_container}>
          <div className={s.title_container}>
            <h2 className={s.title}>{title}</h2>
          </div>
          <div className={s.price_section}>
            <h3 className={s.title_price_section}>
              {price} <span className={s.subtitle}>/ mes</span>
            </h3>
          </div>
        </header>
        <section className={s.plan_offer_section_container}>
          <ul className={s.plan_offer_container}>
            <li className={s.feature_item}>
              <BsCheck2Circle className={s.check_icon} />
              Página web
            </li>
            <li className={s.feature_item}>
              <BsCheck2Circle className={s.check_icon} />
              Hosting gratuito
            </li>
            <li className={s.feature_item}>
              <BsCheck2Circle className={s.check_icon} />
              Difusión diaria en redes
            </li>
            <li className={s.feature_item}>
              <BsCheck2Circle className={s.check_icon} />
              Alta en buscadores
            </li>
            <li className={s.feature_item}>
              <BsCheck2Circle className={s.check_icon} />
              Analíticas de google
            </li>
            <li className={s.feature_item}>
              <BsCheck2Circle className={s.check_icon} />
              1 modificación mensual
            </li>
          </ul>
        </section>
        <Divider />
        <footer className={s.footer_container}>
          <Button1 text={"MÁS INFO"} />
        </footer>
      </div>
    </article>
  );
}

export default PricingCard1;
