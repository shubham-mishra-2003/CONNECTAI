import { NextResponse } from "next/server";
import {auth} from "@clerk/nextjs";

const {Configuration, OpenAIApi, ChatCompletionRequestMessage} = require('openai');

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. you must answer only in markdown code snippets. use code comments for explanation."
}

export async function POST(
    req: Request
){
    try{
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        if(!configuration.apikey){
            return new NextResponse("OpenAI API key not configured", {status: 500});
        }

        if(!messages){
            return new NextResponse("Messages are required", {status: 400})
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })

        return NextResponse.json(response.data.choices[0].message);
    }
    catch(error){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Interal error", {status: 500});
    }
}