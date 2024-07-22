import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameChild} />
        <textarea className={styles.frameItem} rows={4} cols={9} />
        <textarea className={styles.frameInner} rows={4} cols={9} />
        <textarea className={styles.frameTextarea} rows={4} cols={9} />
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent1}>
          <div className={styles.frameChild1} />
          <div className={styles.frameParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
          </div>
          <textarea className={styles.frameChild4} rows={4} cols={9} />
          <div className={styles.frameParent3}>
            <div className={styles.frameChild5} />
            <div className={styles.frameChild6} />
          </div>
          <div className={styles.frameChild7} />
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameChild8} />
          <textarea className={styles.frameChild9} rows={4} cols={9} />
          <textarea className={styles.frameChild10} rows={4} cols={9} />
          <textarea className={styles.frameChild11} rows={4} cols={9} />
          <div className={styles.frameChild12} />
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameChild13} />
        <textarea className={styles.frameChild14} rows={4} cols={9} />
        <div className={styles.frameParent6}>
          <input className={styles.frameInput} type="text" />
          <div className={styles.frameChild15} />
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.frameChild16} />
          <div className={styles.frameChild17} />
        </div>
        <div className={styles.frameChild18} />
      </div>
    </div>
  );
};

export default FrameComponent;
