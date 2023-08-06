import userModel from "@/models/UserModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    const { name, email, password } = await req.json();
    console.log(req.body);

    if (!name || !email || !password) {
        return new NextResponse('Missing fields', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        await connect();
        await userModel.create({
            name,
            email,
            password: hashedPassword,
        });
        return new NextResponse("User has been created!", { status: 201 });
    } catch (err) {
        return new NextResponse(err.message, { status: 500 });
    }
}