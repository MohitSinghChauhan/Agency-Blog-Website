import connect from '@/lib/db';
import Post from '@/models/PostModel';
import { NextResponse } from 'next/server';

export const GET = async (req, route) => {
	const id = route.params.id;
	try {
		await connect();
		const post = await Post.findById(id);
		return NextResponse.json(post);
	} catch (err) {
		return new NextResponse(err.message, { status: 500 });
	}
};

export const DELETE = async (request, { params }) => {
	const { id } = params;

	try {
		await connect();

		await Post.findByIdAndDelete(id);

		return new NextResponse('Post has been deleted', { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};
