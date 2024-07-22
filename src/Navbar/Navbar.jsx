import React from "react";
import styles from "./index.module.css";
import logo from "../assets/img/Logo.png";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.menu}>
           <ul className={styles.menus}>
            <li>Vakansiyalar</li>
            <li>Kandidatlar</li>
            <li>Kompaniyalar</li>
            <li>Xizmatlar</li>
            <li>Ta’lim</li>
           </ul>
        </div>
        <div className={styles.navbar3c}>
          <select name="language" className={styles.select}>
            <option value="">O'zb</option>
            <option value="">rus</option>
            <option value="">eng</option>
          </select>
          <button className={styles.navButton}>Boshlash</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
