import { FunctionComponent } from "react";
import styles from "./SmallContainer.module.css";

export type SmallContainerType = {
  className?: string;
};

const SmallContainer: FunctionComponent<SmallContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.smallContainer, className].join(" ")}>
      <div className={styles.stack}>
        <div className={styles.featuresLikeCollaborationCParent}>
          <h1 className={styles.featuresLikeCollaborationContainer}>
            <p className={styles.featuresLikeCollaboration}>
              Features like collaboration,
            </p>
            <p className={styles.codeExplainersAnd}>code explainers and more</p>
          </h1>
          <div className={styles.whetherYourePart}>
            Whether you're part of a team or an individual, Glitty helps you
            supercharge your code seamlessly.
          </div>
          <div className={styles.row}>
            <button className={styles.buttonPrimary}>
              <div className={styles.getStarted}>Get started</div>
            </button>
            <button className={styles.buttonSecondary}>
              <div className={styles.watchADemo}>Watch a demo</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallContainer;
