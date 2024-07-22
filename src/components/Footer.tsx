import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <h2 className={styles.coderOgveetz}>
                <p className={styles.coder}>{`<coder>`}</p>
                <p className={styles.ogveetz}>ogveetz</p>
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.smallColumns}>
          <div className={styles.column1}>
            <div className={styles.content}>
              <div className={styles.company}>COMPANY</div>
              <div className={styles.footerLinks}>
                <div className={styles.link}>How it works</div>
                <div className={styles.link1}>Pricing</div>
                <div className={styles.link2}>Demo</div>
              </div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.content1}>
              <div className={styles.resources}>RESOURCES</div>
              <div className={styles.footerLinks1}>
                <div className={styles.link3}>Blog post name goes here</div>
                <div className={styles.link4}>Blog post name goes here</div>
                <div className={styles.link5}>Blog post name goes here</div>
                <div className={styles.link6}>See all resources</div>
              </div>
            </div>
          </div>
          <div className={styles.column3}>
            <div className={styles.content2}>
              <div className={styles.about}>ABOUT</div>
              <div className={styles.footerLinks2}>
                <div className={styles.link7}>{`Terms & Conditions`}</div>
                <a className={styles.link8}>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.text}>{`Copyright © 2024 <coder>`}</div>
      </div>
    </footer>
  );
};

export default Footer;
