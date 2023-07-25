import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getBlogsData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: { revalidate: 10 },
	});
	if (!res.ok) {
		return notFound();
	}
	return res.json();
}

const Blog = async () => {
	const blogs = await getBlogsData();
	return (
		<div className={styles.mainContainer}>
			{blogs.map((blog) => (
				<Link
					href={`/blog/${blog.id}`}
					className={styles.container}
					key={blog.id}>
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
						<h1 className={styles.title}>{blog.title}</h1>
						<p className={styles.desc}>{blog.body}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
