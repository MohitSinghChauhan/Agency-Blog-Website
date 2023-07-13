import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}> {params.category} </h1>
            
			<div className={styles.item}>
				<div className={styles.content}>
					<h1>Test</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, fuga
						nemo ad vero, illum sed accusamus culpa in quibusdam voluptate rerum
						suscipit, facilis voluptatum! Molestiae ut, asperiores porro quibusdam odit
						eligendi, aperiam possimus cumque rerum eveniet ad accusantium id dolores
						omnis voluptatum! Maiores sapiente quidem a deserunt reiciendis eius
						doloribus!
					</p>
					<Button
						text='See More'
						url='google.com'
					/>
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						fill={true}
						alt='illustration'
					/>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1>Test</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, fuga
						nemo ad vero, illum sed accusamus culpa in quibusdam voluptate rerum
						suscipit, facilis voluptatum! Molestiae ut, asperiores porro quibusdam odit
						eligendi, aperiam possimus cumque rerum eveniet ad accusantium id dolores
						omnis voluptatum! Maiores sapiente quidem a deserunt reiciendis eius
						doloribus!
					</p>
					<Button
						text='See More'
						url='google.com'
					/>
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						fill={true}
						alt='illustration'
					/>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1>Test</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, fuga
						nemo ad vero, illum sed accusamus culpa in quibusdam voluptate rerum
						suscipit, facilis voluptatum! Molestiae ut, asperiores porro quibusdam odit
						eligendi, aperiam possimus cumque rerum eveniet ad accusantium id dolores
						omnis voluptatum! Maiores sapiente quidem a deserunt reiciendis eius
						doloribus!
					</p>
					<Button
						text='See More'
						url='google.com'
					/>
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						fill={true}
						alt='illustration'
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
