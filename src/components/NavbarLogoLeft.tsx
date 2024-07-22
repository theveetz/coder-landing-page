import { FunctionComponent } from "react";
import styles from "./NavbarLogoLeft.module.css";

export type NavbarLogoLeftType = {
  className?: string;
};

const NavbarLogoLeft: FunctionComponent<NavbarLogoLeftType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navbarLogoLeft, className].join(" ")}>
      <div className={styles.navbarcontainer}>
        <div className={styles.navbarContent}>
          <div className={styles.navbarBrand}>
            <div className={styles.logo}>
              <a className={styles.coder}>{`<coder>`}</a>
            </div>
          </div>
          <div className={styles.navbarMenu}>
            <div className={styles.navbarLink}>
              <a className={styles.about}>About</a>
            </div>
            <div className={styles.navbarLink1}>
              <a className={styles.features}>Features</a>
            </div>
            <div className={styles.navbarLink2}>
              <a className={styles.blog}>Blog</a>
            </div>
            <div className={styles.navbarLink3}>
              <a className={styles.event}>Event</a>
            </div>
            <div className={styles.navbarLink4}>
              <a className={styles.pricing}>Pricing</a>
            </div>
            <div className={styles.row}>
              <button className={styles.button}>
                <a className={styles.signUp}>Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogoLeft;
