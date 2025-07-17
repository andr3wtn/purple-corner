import { NextResponse } from "next/server"
import { PrismaClient } from '../../../generated/prisma/client';
const prisma = new PrismaClient();


export async function GET() {
    try {
        const events = await prisma.event.findMany();
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ error: "Events fetching failed", details: error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const body = await req.json();
    const { name, date, startTime, endTime, desc } = body;

    if (!name || !date || !startTime) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        const newEvent = await prisma.event.create({
            data: {
                name,
                date,
                startTime,
                endTime,
                desc
            },
        });
        return NextResponse.json({ Message: "event added", event: newEvent });
    } catch (err: any) {
        console.error("Error creating event:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}

export async function PUT(req: Request) {
    // Get id from URL (e.g. "/events?id=5")
    const url = new URL(req.url);
    const idParam = url.searchParams.get("id");
    if (!idParam || isNaN(parseInt(idParam, 10)) ) {
        return NextResponse.json({message: "Missing ID"}, {status: 400});
    }

    // Parse ID and update event
    const id = parseInt(idParam, 10);
    const body = await req.json();
    const { name, date, startTime, endTime, desc } = body;

    const updatedEvent = await prisma.event.update({
        where: { id },
        data: {
            ...(name && { name }),
            ...(date && { date }),
            ...(startTime && { startTime }),
            ...(endTime && ( endTime )),
            ...(desc && { desc })
        },
    });
  return NextResponse.json({ message: "Edit Success", event: updatedEvent }, { status: 200 });
}

export async function DELETE(req: Request) {
    const url = new URL(req.url);
    const idParam = url.searchParams.get("id");

    if (!idParam) {
        return NextResponse.json({message: "Missing ID"}, {status: 400});
    }

    const id = parseInt(idParam, 10);
    const deleted = await prisma.event.delete({ where: { id } });
    return NextResponse.json({ message: "Event deleted", deleted });
}   

