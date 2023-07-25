import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectTitle}>Choose the Gallery</div>
      <div className={styles.items}>
        <Link href='portfolio/illustrations' className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href='portfolio/applications' className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
        <Link href='portfolio/websites' className={styles.item}>
          <span className={styles.title}>Website</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
