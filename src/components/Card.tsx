import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  excellentConversationVery?: string;
  firstAuthorAvatars?: string;
  blackMarvin?: string;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  excellentConversationVery,
  firstAuthorAvatars,
  blackMarvin,
}) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.excellentConversationVery}>
        {excellentConversationVery}
      </div>
      <div className={styles.row}>
        <img
          className={styles.firstAuthorAvatars}
          alt=""
          src={firstAuthorAvatars}
        />
        <div className={styles.stack}>
          <div className={styles.blackMarvin}>{blackMarvin}</div>
          <div className={styles.daniDev}>@dani_dev</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
