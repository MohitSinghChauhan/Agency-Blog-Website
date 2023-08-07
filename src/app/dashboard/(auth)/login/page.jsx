'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.css';
import LoadingSkeleton from '@/components/LoadingSkeleton/LoadingSkeleton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// import { useState } from 'react';

const Login = () => {
	// const [error, setError] = useState(null);
	const session = useSession();
	const router = useRouter();
	
	if(session.status === 'loading') return <LoadingSkeleton />;
	if(session.status === 'authenticated') {
		router?.push('/dashboard');
		return <LoadingSkeleton />;
	}

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
			<span className={styles.or}>- OR -</span>
			<Link className={styles.link} href='/dashboard/signup'>
				Register an account
			</Link>
		</div>
	);
};

export default Login;
