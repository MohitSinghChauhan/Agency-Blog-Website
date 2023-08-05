import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import {notFound} from 'next/navigation'

async function getBlogData(id) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
		next: { revalidate: 10 },
	});

	if (!res.ok) {
		return notFound();
	}

	return res.json();
}


export async function generateMetadata({ params }) {
	const blog = await getBlogData(params.id);

	return {
		title: 'Blog | ' + blog.title,
	};
}

const BlogPost = async ({ params }) => {
	const blog = await getBlogData(params.id);

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{blog.title}</h1>
					<p className={styles.desc}>
						{blog.desc}
					</p>
					<div className={styles.author}>
						<Image
							src='https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							alt=''
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>{blog.username}</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src={blog.img}
						alt=''
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					{blog.content}
				</p>
			</div>
		</div>
	);
};

export default BlogPost;