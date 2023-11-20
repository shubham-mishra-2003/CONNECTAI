import { NextResponse } from "next/server";
import {auth} from "@clerk/nextjs";

const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request
){
    try{
        const {userId} = auth();
        const body = await req.json();
        const {prompt, amount = 1, resolution = "512x512" } = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        if(!configuration.apikey){
            return new NextResponse("OpenAI API key not configured", {status: 500});
        }

        if(!prompt){
            return new NextResponse("Prompt required !", {status: 400})
        }

        if(!amount){
            return new NextResponse("Amount value required !", {status: 400})
        }

        if(!resolution){
            return new NextResponse("Resolution value required !", {status: 400})
        }

        const response = await openai.createImage({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        })

        return NextResponse.json(response.data.data);
    }
    catch(error){
        console.log("[IMAGE_ERROR]", error);
        return new NextResponse("Interal error", {status: 500});
    }
}