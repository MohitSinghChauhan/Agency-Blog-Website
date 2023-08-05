import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'The Agency Insiders',
	description: 'Agency Insiders is a agency for everyone & blog for digital agency owners and marketers.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					<ThemeProvider>
						<div className='container'>
							<Navbar />
							{children}
							<Footer />
						</div>
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
