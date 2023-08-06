import UserModel from '@/models/UserModel';
import connect from '@/utils/db';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			id: 'credentials',
			async authorize(credentials) {
				try {
					await connect();

					//Check if user exists
					const user = await UserModel.findOne({
						email: credentials.email,
					});
					if (user) {
						const isPasswordMatch = await bcrypt.compare(
							credentials.password,
							user.password
						);
						if (isPasswordMatch) {
							return user;
						} else {
							throw new Error('Invalid Credentials');
						}
					} else {
						throw new Error('User does not exist');
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		}),
	],
	pages: {
		error: '/dashboard/login',
	},
});

export { handler as GET, handler as POST };
