import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from './data.js';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
	return {
		title: 'Portfolio | ' + params.category.at(0).toUpperCase() + params.category.slice(1),
	};
}

const getData = (category) => {
	const data = items[category];
	if (data) {
		return data;
	}
	return notFound();
};

const Category = ({ params }) => {
	const data = getData(params.category);
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}> {params.category} </h1>
			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1>{item.title}</h1>
						<p>{item.desc}</p>
						<Button text='See More' url='google.com' />
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.img}
							src='https://source.unsplash.com/random/1200x1200'
							fill={true}
							alt={params.category}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;
