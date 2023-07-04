import React from 'react';
import styles from './page.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.mainTitle}>Our Work</div>
      {children}
    </>
  );
};

export default Layout;
