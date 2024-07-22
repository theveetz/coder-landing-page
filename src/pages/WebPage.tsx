import { FunctionComponent } from "react";
import NavbarLogoLeft from "../components/NavbarLogoLeft";
import HeroNoImage from "../components/HeroNoImage";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import CodeExamples from "../components/CodeExamples";
import Testimonials from "../components/Testimonials";
import Section from "../components/Section";
import SmallContainer from "../components/SmallContainer";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./WebPage.module.css";

const WebPage: FunctionComponent = () => {
  return (
    <div className={styles.webPage}>
      <NavbarLogoLeft />
      <HeroNoImage />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <FrameComponent3 />
      <section className={styles.smallContainerWrapper}>
        <div className={styles.smallContainer}>
          <div className={styles.unlikeAnyCodingToolYouveParent}>
            <h1 className={styles.unlikeAnyCodingContainer}>
              <p className={styles.unlikeAnyCoding}>Unlike any coding tool</p>
              <p className={styles.youveEverEncountered}>
                you've ever encountered
              </p>
            </h1>
            <div className={styles.actuallyWereNotContainer}>
              <p className={styles.actuallyWereNot}>
                Actually, we're not so different from other coding platforms.
              </p>
              <p className={styles.butWithAi}>
                But with AI, do you catch our drift? Exactly, that's the point.
              </p>
            </div>
          </div>
          <FrameComponent2 />
          <CodeExamples />
        </div>
      </section>
      <Testimonials />
      <Section />
      <section className={styles.section}>
        <SmallContainer />
        <div className={styles.img}>
          <div className={styles.frameParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv} />
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameChild2} />
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.frameChild4} />
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameChild5} />
              <div className={styles.frameParent4}>
                <div className={styles.frameChild6} />
                <div className={styles.frameChild7} />
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.frameChild8} />
                <div className={styles.frameChild9} />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameChild10} />
                <div className={styles.frameChild11} />
              </div>
              <div className={styles.frameChild12} />
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameChild13} />
              <div className={styles.frameParent8}>
                <div className={styles.frameChild14} />
                <div className={styles.frameChild15} />
              </div>
              <textarea className={styles.frameTextarea} rows={4} cols={9} />
              <textarea className={styles.frameChild16} rows={4} cols={9} />
              <div className={styles.frameChild17} />
            </div>
          </div>
          <FrameComponent1 />
          <FrameComponent />
          <div className={styles.imgChild} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WebPage;
