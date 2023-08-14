'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import hamburgerSVG from 'public/hamburger.svg';
import crossSVG from 'public/cross.svg';
import Image from 'next/image';

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	{
		id: 2,
		title: 'Portfolio',
		url: '/portfolio',
	},
	{
		id: 3,
		title: 'Blog',
		url: '/blog',
	},
	{
		id: 4,
		title: 'About',
		url: '/about',
	},
	{
		id: 5,
		title: 'Contact',
		url: '/contact',
	},
	{
		id: 6,
		title: 'Dashboard',
		url: '/dashboard',
	},
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const session = useSession();

	const handleToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.container}>
			<Link className={styles.logoDesk} href='/'>
				The Agency Insiders
			</Link>
			<Link className={styles.logoMob} href='/'>
				😶‍🌫️ Insiders
			</Link>
			<div className={styles.links}>
				<DarkModeToggle />
				<div className={styles.hamburger} onClick={handleToggle}>
					<Image src={ isMenuOpen ? crossSVG : hamburgerSVG} alt='hamburger' className={styles.hamburgerSVG} />
				</div>
				<div className={`${styles.linkGroup} ${isMenuOpen ? '' : styles.hide}`}>
					{links.map((link) => {
						return (
							<Link href={link.url} key={link.id} className={styles.link} onClick={handleToggle}>
								{link.title}
							</Link>
						);
					})}
					{session.status === 'authenticated' && (
						<button className={styles.button} onClick={signOut}>
							Logout
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
