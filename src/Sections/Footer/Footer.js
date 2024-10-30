import React, { useEffect } from "react";
import s from "./Footer.module.css";
import Logo from "../../Components/Logo/Logo";
import ButtonWhiteHover from "../../Components/Buttons/ButtonWhiteHover/ButtonWhiteHover";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import DividerFooter from "../../Components/Dividers/DividerFooter/DividerFooter";

function Footer() {
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const navbar = document.querySelector("#nav");
      const footer = document.querySelector("#foot");
      const scrollPosition = window.scrollY;
      const windowBottom = scrollPosition + window.innerHeight;

      // Scroll hacia abajo
      if (scrollPosition > lastScrollTop) {
        if (windowBottom - 80 >= footer.offsetTop) {
          navbar.classList.add("hidden");
          //   footer.classList.add("expanded");
          //   footer.classList.remove("hidden");
          navbar.classList.remove("expanded");
        } else {
          navbar.classList.add("expanded");
          navbar.classList.remove("hidden");
          // footer.classList.remove("expanded");
          // footer.classList.add('expanded')
        }
      }
      // Scroll hacia arriba
      else {
        if (windowBottom < footer.offsetTop) {
          navbar.classList.add("expanded");
          navbar.classList.remove("hidden");
          //   footer.classList.remove("expanded");
          //   footer.classList.add("hidden");
        } else {
          navbar.classList.add("hidden");
          //   footer.classList.add("expanded");
          // footer.classList.remove('hidden')
        }
      }

      lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Para dispositivos móviles o scroll negativo
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer id="foot" className={s.container}>
      <div className={s.logo_info_container}>
        <Logo />
        <article className={s.info}>
          <h2 className={`section_subtitle ${s.subtitle}`}>
            Sembramos juntos, cosechamos juntos.
          </h2>
          <div className={s.menu_container}>
            <ul>
              Social
              <li>
                <FaLinkedinIn className={s.icon} />
                Linkedin
              </li>
              <li>
                <FaFacebook className={s.icon} />
                Facebook
              </li>
              <li>
                <FaInstagramSquare className={s.icon} />
                Instagram
              </li>
            </ul>
            <ul>
              Menu
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Planes</li>
              <li>Nosotros</li>
            </ul>
            <ul>
              Escríbenos
              <li>info@evoluciondigital.net.ar</li>
              <li>
                <ButtonWhiteHover />
              </li>
            </ul>
          </div>
        </article>
      </div>
      <DividerFooter />
      <p className={s.text}>Evolución Digital © 2024</p>
    </footer>
  );
}

export default Footer;
