import React from 'react';
import styles from './page.module.css';

export const metadata = {
	title: 'Our Work',
	description: 'Check out our work.',
};

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.mainTitle}>Our Work</div>
      {children}
    </>
  );
};

export default Layout;
