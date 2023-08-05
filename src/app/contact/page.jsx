import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

export const metadata = {
	title: 'Contact Us',
	description: 'Contact us for any query or feedback.',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Lets Get in Touch.
      </h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            height={425} width={425}
            className={styles.contactImage}
            alt='contact image'
          />
        </div>
        <div className={styles.info}>
          <form className={styles.form}>
            <input type='text' className={styles.input} placeholder='Your Good Name 🙃' />
            <input type='email' autoComplete='off' className={styles.input} placeholder='Your Professional E-Mail address' />
            <textarea placeholder='Your Message' className={styles.textArea} />
          </form>
          <Button text='Send Message' url='/send'/>
        </div>
      </div>
    </div>
  );
};


export default Contact;
