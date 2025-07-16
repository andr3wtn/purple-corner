import { NextResponse } from "next/server"

// let events: any[] = [];

/* --------- Hard-coded events --------
    TODO: REPLACE WITH DB LATER 
*/
let events = [
  { id: 1, name: "Purple Corner Meet & Greet", date: "September 15, 2025", time: "6:00 PM - 8:00 PM" },
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

    const newEvent = {
        id: Date.now(),
        name,
        date,
        time,
        description
    }

    events.push(newEvent);

    return NextResponse.json({ Message: "event added", event: newEvent })
}

