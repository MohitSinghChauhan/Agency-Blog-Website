import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='image of people working in office'
          fill
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.textTitle}>Who Are We?</h2>
          <p className={styles.textDesc}>
            At the helm of our digital storytelling agency is our visionary CEO,
            Mohit Singh Chauhan. With a passion for creativity and a keen
            understanding of the digital landscape, Mohit leads our team of
            talented professionals to craft award-winning digital experiences.
            With a wealth of experience in the industry, Mohit&apos;s strategic
            mindset and innovative thinking drive our company&apos;s success.
            <br />
            <br />
            His leadership and guidance inspire our team to push boundaries,
            think outside the box, and deliver unparalleled digital storytelling
            solutions for our clients. Under Mohit&apos;s direction, we
            continuously strive to exceed expectations and create meaningful
            connections between brands and their audiences through our
            handcrafted digital experiences.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.textTitle}>What We Do?</h2>
          <div className={styles.textDesc}>
            <p>
              As a team of digital storytellers, we specialize in handcrafting
              exceptional digital experiences that captivate audiences and leave
              a lasting impact. Our expertise lies in:
            </p>
            <ul>
              <li className={styles.points}>
                <b>Creative Conceptualization:</b> We generate innovative ideas
                and concepts that resonate with your target audience, ensuring a
                unique and engaging digital experience.
              </li>
              <li className={styles.points}>
                <b>Strategic Execution:</b> We strategically execute each
                project, ensuring a seamless integration of content, design, and
                functionality, resulting in award-winning digital experiences
                that surpass expectations.
              </li>
            </ul>
          </div>
          <Button text='Contact Us' url='/contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
