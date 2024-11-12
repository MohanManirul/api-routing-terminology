import { NextResponse } from 'next/server'

export async function POST(req,res) {

    return NextResponse.json({status:true,message:"Response completed"})
}