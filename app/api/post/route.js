import { readData } from "@/helper/util";
import { NextResponse } from "next/server";

export async function GET(request){
    const res = await readData();
    return NextResponse.json(res,{status:200})
} 