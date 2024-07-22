import { FunctionComponent } from "react";
import styles from "./HeroNoImage.module.css";

export type HeroNoImageType = {
  className?: string;
};

const HeroNoImage: FunctionComponent<HeroNoImageType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.heroNoImage, className].join(" ")}>
      <div className={styles.heroGridParent}>
        <div className={styles.heroGrid}>
          <div className={styles.contentGrid}>
            <div className={styles.contentGridItem}>
              <div className={styles.contentGridItem1}>
                <div className={styles.contentGridItem2} />
                <div className={styles.contentGridItem3}>
                  <div className={styles.contentGridItem4} />
                  <div className={styles.contentGridItem5} />
                </div>
                <div className={styles.contentGridItem6}>
                  <div className={styles.contentGridItem7} />
                  <div className={styles.contentGridItem8} />
                </div>
                <div className={styles.contentGridItem9}>
                  <div className={styles.contentGridItem10} />
                  <div className={styles.contentGridItem11} />
                </div>
                <div className={styles.contentGridItem12} />
              </div>
              <div className={styles.contentGridItem13}>
                <div className={styles.contentGridItemChild} />
                <div className={styles.frameParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameDiv} />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.contentGridItemItem} />
              </div>
              <div className={styles.contentGridItem14}>
                <div className={styles.contentGridItemInner} />
                <div className={styles.frameParent1}>
                  <div className={styles.frameChild3} />
                  <div className={styles.frameChild4} />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameChild5} />
                  <div className={styles.frameChild6} />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild8} />
                </div>
                <div className={styles.contentGridItemChild1} />
              </div>
              <div className={styles.contentGridItem15}>
                <div className={styles.contentGridItemChild2} />
                <div className={styles.frameParent4}>
                  <div className={styles.frameChild9} />
                  <div className={styles.frameChild10} />
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.frameChild11} />
                  <div className={styles.frameChild12} />
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.frameChild13} />
                  <div className={styles.frameChild14} />
                </div>
                <div className={styles.contentGridItemChild3} />
              </div>
              <div className={styles.contentGridItem16}>
                <div className={styles.contentGridItemChild4} />
                <div className={styles.frameParent7}>
                  <div className={styles.frameChild15} />
                  <div className={styles.frameChild16} />
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameChild17} />
                  <div className={styles.frameChild18} />
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.frameChild19} />
                  <div className={styles.frameChild20} />
                </div>
                <div className={styles.contentGridItemChild5} />
              </div>
              <div className={styles.smallContainer}>
                <div className={styles.content}>
                  <h1 className={styles.codingFascinatesUsHoweverContainer}>
                    <p className={styles.codingFascinatesUs}>
                      Coding fascinates us.
                    </p>
                    <p className={styles.howeverImagineThere}>
                      However, imagine there also being
                    </p>
                    <p className={styles.anAiTo}>
                      an AI to assist with your coding?
                    </p>
                  </h1>
                  <div className={styles.notReallyActuallyWrapper}>
                    <div className={styles.notReallyActually}>
                      Not really actually...
                    </div>
                  </div>
                  <div className={styles.hahWrapper}>
                    <div className={styles.hah}>Hah...</div>
                  </div>
                  <div className={styles.transformYourCodeContainer}>
                    <p className={styles.transformYourCode}>
                      Transform your code into no-code while ensuring it's
                      clean-code, making it comprehensible to others.
                    </p>
                    <p className={styles.soundsStraightforwardDoesn}>
                      Sounds straightforward, doesn't it? Meet Glitty, the
                      AI-Driven Coding Platform.
                    </p>
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
          </div>
          <div className={styles.heroGridItem}>
            <div className={styles.heroGridItem1} />
            <div className={styles.heroGridItem2}>
              <div className={styles.heroGridItem3} />
              <div className={styles.heroGridItem4} />
            </div>
            <div className={styles.heroGridItem5}>
              <div className={styles.heroGridItem6} />
              <div className={styles.heroGridItem7} />
            </div>
            <div className={styles.heroGridItem8}>
              <div className={styles.heroGridItem9} />
              <div className={styles.heroGridItem10} />
            </div>
            <div className={styles.heroGridItem11} />
          </div>
          <div className={styles.heroGridItem12}>
            <div className={styles.heroGridItemChild} />
            <div className={styles.frameParent10}>
              <div className={styles.frameChild21} />
              <div className={styles.frameChild22} />
            </div>
            <textarea className={styles.heroGridItemItem} rows={4} cols={9} />
            <div className={styles.frameParent11}>
              <div className={styles.frameChild23} />
              <div className={styles.frameChild24} />
            </div>
            <div className={styles.heroGridItemInner} />
          </div>
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent12}>
            <div className={styles.frameChild25} />
            <div className={styles.frameParent13}>
              <div className={styles.frameChild26} />
              <div className={styles.frameChild27} />
            </div>
            <div className={styles.frameParent14}>
              <div className={styles.frameChild28} />
              <div className={styles.frameChild29} />
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.frameChild30} />
              <div className={styles.frameChild31} />
            </div>
            <div className={styles.frameChild32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNoImage;
