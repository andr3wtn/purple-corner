import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { username, password } = await req.json();

    /* ------------- DEBUG MODE: ALL LOG-IN ACCEPTED ----------- */
    if (username && password) { return NextResponse.json({ success: true });}
    // if (username === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    //     // TODO: set cookie/session token


    //     return NextResponse.json({ success: true });
    // }
    // return NextResponse.json({ message: "Login failed" }, { status: 400 });
}