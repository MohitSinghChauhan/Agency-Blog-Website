import connect from '@/utils/db';
import Post from '@/models/PostModel';
import { NextResponse } from 'next/server';

export const GET = async (re,route) => {
	const id  = route.params.id;  
	try {
		await connect();
		// console.log(params);
		const post = await Post.findById(id);
		return NextResponse.json(post);
	} catch (err) {
		return new NextResponse(err.message, { status: 500 });
	}
};
