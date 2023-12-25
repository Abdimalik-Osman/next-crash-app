import { readData,writeData } from "@/helper/util";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'; // defaults to auto

// POST method to create a new post
export async function POST(request) {
    const posts = await readData();
    const { title, body } = await request.json();
    const newPost = { id: posts.length + 1, title, body };
    posts.push(newPost);
    await writeData(posts);

    return NextResponse.json(posts, { status: 200 });
}
export async function GET(request){
    const res = await readData();
    return NextResponse.json(res,{status:200})
} 