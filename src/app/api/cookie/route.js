import { NextResponse } from 'next/server'


export async function GET( req, res ) {
 
    const token =req.cookies.get('token')
    // const token =req.cookies.get('token')['name']
    // const token =req.cookies.get('token')['value']
    return NextResponse.json({ token: token})
}
