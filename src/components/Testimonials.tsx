import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./Testimonials.module.css";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.smallContainer}>
        <h1 className={styles.weAreBuildingContainer}>
          <p className={styles.weAreBuilding}>
            We are building AI with feedback
          </p>
          <p className={styles.fromTheBest}>from the best devs in the world</p>
        </h1>
        <div className={styles.row}>
          <div className={styles.stack}>
            <Card
              excellentConversationVery="Excellent conversation. Very practical, logical and motivating info. Thanks for your time Kosta! Tal"
              firstAuthorAvatars="/ellipse-59-1@2x.png"
              blackMarvin="Black, Marvin"
            />
            <Card
              excellentConversationVery="Craig was awesome. He asked great discovery questions and took time to understand my challenges and "
              firstAuthorAvatars="/ellipse-59-2@2x.png"
              blackMarvin="Miles, Esther"
            />
            <Card
              excellentConversationVery="Parikshit it honestly one of my favorite grown mentors. He is a wealth of knowledge, loves teaching "
              firstAuthorAvatars="/ellipse-59-3@2x.png"
              blackMarvin="Daniel Manhattan"
            />
          </div>
          <div className={styles.stack1}>
            <Card
              excellentConversationVery="Eden is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short peri"
              firstAuthorAvatars="/ellipse-59-3@2x.png"
              blackMarvin="Flores, Juanita"
            />
            <Card
              excellentConversationVery="Great mentorship, we had really common topics on our ways of working. He gave me pretty nice insight"
              firstAuthorAvatars="/ellipse-59-5@2x.png"
              blackMarvin="Henry, Arthur"
            />
            <Card
              excellentConversationVery="Had an excellent call with Austin. He gave me a lot of ideas to test to improve my content. As a res"
              firstAuthorAvatars="/ellipse-59-5@2x.png"
              blackMarvin="Daniel Manhattan"
            />
          </div>
          <div className={styles.stack2}>
            <Card
              excellentConversationVery="Peter was amazing! He shared wonderful tips, made the most out of our call, and was very attentive a"
              firstAuthorAvatars="/ellipse-59-7@2x.png"
              blackMarvin="Cooper, Kristin"
            />
            <Card
              excellentConversationVery="Superb, invaluable advice from Barbara. The point-of-view statements are a lifesaver. Highly recomme"
              firstAuthorAvatars="/ellipse-59@2x.png"
              blackMarvin="Nguyen, Shane"
            />
            <Card
              excellentConversationVery="Kosta was fantastic to speak with and really helped me adjust my mindset and get out of my brain's e"
              firstAuthorAvatars="/ellipse-59-1@2x.png"
              blackMarvin="Daniel Manhattan"
            />
          </div>
          <div className={styles.testimonialBackground} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
