import { FunctionComponent } from "react";
import styles from "./CodeExamples.module.css";

export type CodeExamplesType = {
  className?: string;
};

const CodeExamples: FunctionComponent<CodeExamplesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.codeExamples, className].join(" ")}>
      <div className={styles.card}>
        <div className={styles.firstExample}>
          <div className={styles.stack}>
            <div className={styles.row}>
              <div className={styles.stack1}>
                <h2 className={styles.fileNamejsx}>file-name.jsx</h2>
                <div className={styles.saved32Seconds}>
                  Saved 32 seconds ago
                </div>
              </div>
              <button className={styles.buttonPrimary}>
                <div className={styles.getStarted}>Get started</div>
              </button>
            </div>
            <div className={styles.stack2}>
              <div className={styles.stck}>
                <h2 className={styles.scripts}>Scripts</h2>
                <div className={styles.addThisScript}>
                  Add this script to your page or project footer code. It will
                  load your production script on your custom domain.
                </div>
                <div className={styles.row1}>
                  <div
                    className={styles.glittyapp123Script}
                  >{`<!-- Glitty.app/123 -- ><script src=”defer.your_domain”> `}</div>
                  <button className={styles.copy06Parent}>
                    <input className={styles.copy06} type="checkbox" />
                    <div className={styles.copy}>Copy</div>
                  </button>
                </div>
                <img
                  className={styles.stckChild}
                  alt=""
                  src="/vector-2-3.svg"
                />
                <div className={styles.stack3}>
                  <div className={styles.productionScript}>
                    Production Script
                  </div>
                  <div className={styles.row2}>
                    <div
                      className={styles.glittyapp123Script1}
                    >{`<!-- Glitty.app/123 -- ><script src=”prod.your_domain”> `}</div>
                    <button className={styles.button}>
                      <input className={styles.copy061} type="checkbox" />
                      <div className={styles.copy1}>Copy</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exampleDividers} />
        </div>
        <div className={styles.exampleUse}>
          <h1 className={styles.publishToStaging}>
            Publish to staging or production
          </h1>
          <div className={styles.notYetReady}>
            Not yet ready to publish the code to your actual website? Then
            publish it to staging only using the staging script with Glitty.
            Your production Javascript file will always be available 👍🏻
          </div>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.stack4}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.groupWrapper}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
                <h2 className={styles.library}>Library</h2>
              </div>
              <img
                className={styles.plusIcon}
                loading="lazy"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className={styles.stack5}>
              <div className={styles.row3}>
                <div className={styles.createVueApp}>Create Vue App</div>
                <img
                  className={styles.chevrondownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.row4}>
                <div className={styles.createVueApp1}>Create Vue App</div>
                <img
                  className={styles.chevrondownIcon1}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.row5}>
                <div className={styles.createVueApp2}>Create Vue App</div>
                <img
                  className={styles.chevrondownIcon2}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.row6}>
                <div className={styles.createVueApp3}>Create Vue App</div>
                <img
                  className={styles.chevrondownIcon3}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.row7}>
                <div className={styles.createVueApp4}>Create Vue App</div>
                <img
                  className={styles.chevrondownIcon4}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.row8}>
                <div className={styles.createVueApp5}>Create Vue App</div>
                <img
                  className={styles.chevrondownIcon5}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.stackChild} />
        </div>
        <div className={styles.codeLibraryParent}>
          <h1 className={styles.codeLibrary}>Code Library</h1>
          <div className={styles.saveYourFavorite}>
            Save your favorite code solutions for easy reuse. Drag and drop code
            you have saved into any of your projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExamples;
