import { NextResponse } from 'next/server'

export async function POST(req,res) {
    // const token =req.cookies.get('token')['name'];
    // const token =req.cookies.get('token')['value']
    const token =req.cookies.get('token')
    return NextResponse.json({ token: token})
}


