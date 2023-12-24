import { readData } from "@/helper/util";
import { NextResponse } from "next/server";

export async function GET(request){
    const res = await readData();
    return NextResponse.json({message:"hey data",status:200,data:res})
} 