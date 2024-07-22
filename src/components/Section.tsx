import { FunctionComponent } from "react";
import PlaygroundFeatures from "./PlaygroundFeatures";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.smallContainer}>
        <div className={styles.stack}>
          <h1 className={styles.weCouldntBuild}>
            We couldn’t build this without you.
          </h1>
          <div className={styles.pricingToggle}>
            <div className={styles.monthlyToggle}>
              <div className={styles.monthly}>Monthly</div>
            </div>
            <button className={styles.annualToggle}>
              <div className={styles.annually}>Annually</div>
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.playgroundCard}>
              <div className={styles.playground}>Playground</div>
              <h1 className={styles.freeForEveryone}>Free for everyone</h1>
            </div>
            <img
              className={styles.playgroundIcon}
              alt=""
              src="/playground-icon.svg"
            />
            <PlaygroundFeatures
              unlimitedMembers="Unlimited Members"
              collaborationProjectTeam="2 Collaboration Project Team"
              aIMessagesGPT35="100 AI Messages (GPT 3.5)"
              individualSpace="Individual Space"
              globalLibrary="Global Library"
            />
            <button className={styles.buttonSecondary}>
              <div className={styles.watchADemo}>Watch a demo</div>
            </button>
          </div>
          <div className={styles.card1}>
            <div className={styles.workspaceTitle}>
              <div className={styles.workspace}>Workspace</div>
              <h1 className={styles.month}>$7 / month</h1>
              <div className={styles.workspaceUser}>
                <img
                  className={styles.person2Icon}
                  loading="lazy"
                  alt=""
                  src="/person2.svg"
                />
                <div className={styles.bestForStartups}>
                  Best for startups, etc.
                </div>
              </div>
            </div>
            <img
              className={styles.workspaceIcon}
              alt=""
              src="/playground-icon.svg"
            />
            <PlaygroundFeatures
              unlimitedMembers="Unlimited Collaboration Project Team"
              collaborationProjectTeam="Unlimited AI Messages (GPT 3.5)"
              aIMessagesGPT35="Team Space"
              individualSpace="All Integrations, APIs, webhooks"
              globalLibrary="Priority support"
            />
            <button className={styles.buttonPrimary}>
              <div className={styles.getStarted}>Get started</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
