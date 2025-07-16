import { NextResponse } from "next/server"

// let events: any[] = [];

/* --------- Hard-coded events --------
    TODO: REPLACE WITH DB LATER 
*/
let events = [
  { id: 1, name: "Purple Corner Meet & Greet", date: "2025-09-15", time: "6:00 PM - 8:00 PM", desc: "description" },
    { id: 2, name: "Community Networking Night", date: "September 22, 2025", time: "7:00 PM - 9:00 PM" },
    {
        id: 3,
        name: "Holiday Celebration",
        date: "September 28, 2025",
        time: "5:00 PM - 10:00 PM"
    },
    {
        id: 4,
        name: "New Year's Kickoff",
        date: "January 5, 2026",
        time: "6:30 PM - 11:00 PM"
    },
    {
        id: 5,
        name: "Winter Workshop Series",
        date: "January 12, 2026",
        time: "2:00 PM - 5:00 PM"
    }
];


export async function GET() {
    return NextResponse.json(events);
}

export async function POST(req: Request) {
    const body = await req.json();
    const { name, date, time, description } = body;

    if (!name || !date || !time) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newEvent = {
        id: Date.now(),
        name,
        date,
        time,
        desc: description || ""
    }

    events.push(newEvent);

    return NextResponse.json({ Message: "event added", event: newEvent })
}

export async function PUT(req: Request) {
    // Get id from URL (e.g. "/events?id=5")
    const url = new URL(req.url);
    const idParam = url.searchParams.get("id");
    if (!idParam || isNaN(parseInt(idParam, 10)) ) {
        return NextResponse.json({message: "Missing ID"}, {status: 400});
    }

    // Parse ID and get corresponding event's index
    const id = parseInt(idParam, 10);
    const index = events.findIndex((e) => e.id == id);
    if (index === -1) {
        return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    // Parse request info
    const body = await req.json();
    const { name, date, time, desc } = body;

    // Edit event info
    events[index] = {
    ...events[index],
    ...(name && { name }),
    ...(date && { date }),
    ...(time && { time }),
    ...(desc && { desc })
  };

    return NextResponse.json({ message:"Edit Success", event: events[index] }, { status: 200 });
}

export async function DELETE(req: Request) {
    const url = new URL(req.url);
    const idParam = url.searchParams.get("id");

    if (!idParam) {
        return NextResponse.json({message: "Missing ID"}, {status: 400});
    }

    const id = parseInt(idParam, 10);
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) {
        return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    const deleted = events[index];
    events.splice(index, 1);

    return NextResponse.json({message: "Event deleted", deleted});
}   

