import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

const Button = ({ url, text, customStyles }) => {
	return (
		<Link href={url}>
			<button className={styles.button} style={customStyles}>
				{text}
			</button>
		</Link>
	);
};

export default Button;
