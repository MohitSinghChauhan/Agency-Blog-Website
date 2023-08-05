import connect from '@/utils/db';
import Post from '@/models/PostModel';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		await connect();
		const posts = await Post.find();
		return NextResponse.json(posts);
	} catch (err) {
		return new NextResponse(err.message, { status: 500 });
	}
};
