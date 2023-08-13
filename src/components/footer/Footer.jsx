import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div>©️ The Agency Insider 2023</div>
      <div className={styles.socialContainer}>
        <Image src='/twitter-icon.png' width={16} height={16} className={styles.icon} alt='twitter-handle of admin'/>
        <Image src='/insta-icon.png' width={16} height={16} className={styles.icon} alt='insta-handle of admin'/>
        <Image src='/yt-icon.png' width={16} height={16} className={styles.icon} alt='yt-handle of admin'/>
      </div>
    </div>
  );
}

export default Footer;
