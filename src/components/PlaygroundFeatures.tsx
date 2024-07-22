import { FunctionComponent } from "react";
import styles from "./PlaygroundFeatures.module.css";

export type PlaygroundFeaturesType = {
  className?: string;
  unlimitedMembers?: string;
  collaborationProjectTeam?: string;
  aIMessagesGPT35?: string;
  individualSpace?: string;
  globalLibrary?: string;
};

const PlaygroundFeatures: FunctionComponent<PlaygroundFeaturesType> = ({
  className = "",
  unlimitedMembers,
  collaborationProjectTeam,
  aIMessagesGPT35,
  individualSpace,
  globalLibrary,
}) => {
  return (
    <div className={[styles.playgroundFeatures, className].join(" ")}>
      <div className={styles.playgroundFeatureList}>
        <img
          className={styles.checkmarkIcon}
          loading="lazy"
          alt=""
          src="/checkmark.svg"
        />
        <div className={styles.unlimitedMembers}>{unlimitedMembers}</div>
      </div>
      <div className={styles.playgroundFeatureList1}>
        <img className={styles.checkmarkIcon1} alt="" src="/checkmark.svg" />
        <div className={styles.collaborationProjectTeam}>
          {collaborationProjectTeam}
        </div>
      </div>
      <div className={styles.playgroundFeatureList2}>
        <img className={styles.checkmarkIcon2} alt="" src="/checkmark.svg" />
        <div className={styles.aiMessagesGpt}>{aIMessagesGPT35}</div>
      </div>
      <div className={styles.playgroundFeatureList3}>
        <img className={styles.checkmarkIcon3} alt="" src="/checkmark.svg" />
        <div className={styles.individualSpace}>{individualSpace}</div>
      </div>
      <div className={styles.playgroundFeatureList4}>
        <img className={styles.checkmarkIcon4} alt="" src="/checkmark.svg" />
        <div className={styles.globalLibrary}>{globalLibrary}</div>
      </div>
    </div>
  );
};

export default PlaygroundFeatures;
