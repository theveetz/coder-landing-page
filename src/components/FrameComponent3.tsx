import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.logoTitleWrapper, className].join(" ")}>
      <div className={styles.logoTitle}>
        <div className={styles.title}>Clients Section</div>
        <div className={styles.content}>
          <div className={styles.logos}>
            <div className={styles.logoWrapper}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
            </div>
            <div className={styles.logoWrapper1}>
              <img className={styles.logoIcon1} alt="" src="/logo-1@2x.png" />
            </div>
            <div className={styles.logoWrapper2}>
              <img className={styles.logoIcon2} alt="" src="/logo-2@2x.png" />
            </div>
            <div className={styles.logoWrapper3}>
              <img className={styles.logoIcon3} alt="" src="/logo-3@2x.png" />
            </div>
            <div className={styles.logoWrapper4}>
              <img className={styles.logoIcon4} alt="" src="/logo-4@2x.png" />
            </div>
            <div className={styles.logoWrapper5}>
              <img className={styles.logoIcon5} alt="" src="/logo-5@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
