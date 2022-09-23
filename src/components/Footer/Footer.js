import React from "react";
import "./Footer.css";
import { FaPhone, FaMapMarker } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import insta from "../../assets/insta.webp";
import fb from "../../assets/fb.webp";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items-container">
        <div className="footer-section">
          <ul>
            <li>
              <p>
                <FaPhone /> 2310 624577
              </p>
            </li>
            <li>
              <a href="mailto: talosfightclub@gmail.com">
                <MdOutlineEmail />
                talosfightclub@gmail.com
              </a>
            </li>
            <li>
              <p>
                <BsHouse /> Ολυμπιάδος 99
              </p>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir/40.6290432,22.9474304/%CE%9F%CE%BB%CF%85%CE%BC%CF%80%CE%B9%CE%AC%CE%B4%CE%BF%CF%82+99,+%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7+546+34/@40.6326713,22.9458043,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a839acc066c0ed:0x80f1ceed7d2bc8bc!2m2!1d22.9522096!2d40.6391684"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarker /> Βρείτε μας στον χάρτη
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section" id="socials">
          <ul>
            <li>
              <a href="https://www.instagram.com/fightclubtalos/?hl=el" target="_blank" rel="noreferrer">
                <p>Ακολούθησε μας στο Instagram</p>
                <img src={insta} className="logos" alt="instagram" width={"30"} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/FightClubTalos/" target="_blank" rel="noreferrer">
                <p>Ακολούθησε μας στο Facebook</p>
                <img className="logos" src={fb} alt="facebook" width={"30"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-section" id="copyrights">
        Talos Fight Club - MMA Team ⒸAll rights reserved - 2022
      </div>
    </div>
  );
}
