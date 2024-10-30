import React from "react";
import s from "./CheckUL.module.css";
import { BsCheck2Circle } from "react-icons/bs";
function CheckUL({ array, icon: Icon, color }) {
  return (
    <ul className={s.plan_offer_container}>
      {array.map((item, indx) => (
        <li key={item} className={s.feature_item}>
          {Icon ? (
            <Icon
              className={s.check_icon}
              style={{ color: color || "rgb(135, 135, 135)" }}
            />
          ) : (
            <BsCheck2Circle
              className={s.check_icon}
              style={{ color: color || "rgb(135, 135, 135)" }}
            />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CheckUL;
