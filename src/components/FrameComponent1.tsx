import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameGroup}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv} />
        <div className={styles.frameChild1} />
      </div>
      <textarea className={styles.frameTextarea} rows={4} cols={9} />
      <div className={styles.frameChild2} />
      <div className={styles.imgLogo}>
        <div className={styles.logo} />
      </div>
    </div>
  );
};

export default FrameComponent1;
