import { NextResponse } from 'next/server'

export async function GET(req,res) {

    return NextResponse.json(
        {},
        {
            status: 200,
            headers:{
                token1:"token1 header",
                token2:"token2 header"

            }
          
        }
        
    )
}


export async function POST(req,res) {

    return NextResponse.json(
        [

            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"},
            {status:true,message:"Response completed"}
        ],
        {
            status: 200,
          
        }
        
    )
}