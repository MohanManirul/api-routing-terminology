import { NextResponse } from 'next/server'

export async function GET(req,res) {
    
    // const token =req.cookies.get('token')['name'];
    // const token =req.cookies.get('token')['value']
    const product_url =req.cookies.get('product_url')
    const token =req.cookies.get('token')
    return NextResponse.json({ product_url: product_url})
}