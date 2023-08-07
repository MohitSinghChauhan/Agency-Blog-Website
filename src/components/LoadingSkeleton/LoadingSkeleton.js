'use client';
import styles from './loadingskeleton.module.css';

const LoadingSkeleton = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader}>
				<div className={`${styles.cell} ${styles['d-0']}`}></div>
				<div className={`${styles.cell} ${styles['d-1']}`}></div>
				<div className={`${styles.cell} ${styles['d-2']}`}></div>

				<div className={`${styles.cell} ${styles['d-1']}`}></div>
				<div className={`${styles.cell} ${styles['d-2']}`}></div>

				<div className={`${styles.cell} ${styles['d-2']}`}></div>
				<div className={`${styles.cell} ${styles['d-3']}`}></div>

				<div className={`${styles.cell} ${styles['d-3']}`}></div>
				<div className={`${styles.cell} ${styles['d-4']}`}></div>
			</div>
		</div>
	);
};

export default LoadingSkeleton;
