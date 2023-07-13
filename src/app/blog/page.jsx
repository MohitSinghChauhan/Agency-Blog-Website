import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = async () => {
	return (
		<div className={styles.mainContainer}>
			<Link
				href={`/blog/ok`}
				className={styles.container}
			>
				<div className={styles.imageContainer}>
					<Image
						src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>Desc</p>
				</div>
			</Link>
			<Link
				href={`/blog/ok`}
				className={styles.container}
			>
				<div className={styles.imageContainer}>
					<Image
						src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>Desc</p>
				</div>
			</Link>
			<Link
				href={`/blog/ok`}
				className={styles.container}
			>
				<div className={styles.imageContainer}>
					<Image
						src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={400}
						height={250}
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>Desc</p>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
