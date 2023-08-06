'use client';

import { signIn } from 'next-auth/react';
import styles from './page.module.css';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

const Login = () => {
	// const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn('credentials', {email,password});
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Login to Your Account</h1>
			<h2 className={styles.subtitle}>
				Please login to see the dashboard.
			</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type='text'
					placeholder='Email'
					required
					className={styles.input}
				/>
				<input
					type='password'
					placeholder='Password'
					required
					className={styles.input}
				/>
				<button className={styles.button}>Login</button>
				{/* {error && 'Something went wrong!'} */}
			</form>

			<button className={styles.button} onClick={() => signIn('google')}>
				Sign in with Google
			</button>
		</div>
	);
};

export default Login;
