import React from "react";
import s from "./Logo.module.css";
import logo from "../../Assets/evoluciondigital.png";

function Logo() {
  return (
    <figure className={s.container}>
      <a href="#about" className={s.a}>
        <img
          alt="Evolucion digital Logo, árbol digital con ramificaciones y raíces que simulan conexiones electrónicas."
          width={1322}
          height={1600}
          className={s.img}
          src={logo}
        />
        <div>
          <p>EVOLUCIÓN DIGITAL</p>
          <p className={s.title}>IMPULSÁ TU NEGOCIO</p>
        </div>
      </a>
    </figure>
  );
}

export default Logo;
