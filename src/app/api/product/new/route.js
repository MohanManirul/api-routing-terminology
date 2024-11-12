import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { headers } from 'next/headers'

// NextResponse , NextRequest = nextjs er built in property
// headers = nextjs headers maintain korar jonno use hoi
// req, res = parameters request
// NextResponse , NextRequest , headers , req, res ei 5 ti diye  
   

// usning NextRequest
// 1.   ekta request k kivabe grip korte hoi ,
// 2.   ekta request er againt e response generate korte hoi , 
// 3.   url parameter manage korte hoi
// 4.   body manage korte hoi
// 5.   form data manage korte hoi
// 6.   cookie manage korte hoi

// usning NextResponse
// json object , json array , response status code , response cookie, redirect




export async function GET( req, res ) {

  
    const token =req.cookies.get('token')
    return NextResponse.json({ token: token})
}



export async function POST( req, res  ) {
    
    return NextResponse.json({ status:true, message:"From POST response"})
}



export async function PUT( req, res  ) {

    return NextResponse.json({ status:true, message:"From PUT response"})
}



export async function PATCH( req, res  ) {

    return NextResponse.json({ status:true, message:"From PATCH response"})
}



export async function DELETE(  req, res ) {

    return NextResponse.json({ status:true, message:"From DELETE response"})
}