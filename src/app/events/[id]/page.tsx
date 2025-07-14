import { notFound } from "next/navigation";

// Hardcoded event data (should match your Events.tsx)
const upcomingEvents = [
  { id: 1, name: "Purple Corner Meet & Greet" },
  { id: 2, name: "Community Networking Night" },
  { id: 3, name: "Holiday Celebration" },
  { id: 4, name: "New Year's Kickoff" },
  { id: 5, name: "Winter Workshop Series" },
];

// This function tells Next.js which event IDs to statically generate
export async function generateStaticParams() {
  return upcomingEvents.map(event => ({
    id: event.id.toString(),
  }));
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const event = upcomingEvents.find(e => e.id.toString() === params.id);
  if (!event) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#310d51] text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Event Details</h1>
      <p className="text-2xl mb-2">Event ID: <span className="font-mono">{params.id}</span></p>
      <div className="bg-white/10 rounded-lg p-8 mt-6 w-full max-w-xl">
        <p className="text-lg font-bold">{event.name}</p>
        <p className="text-lg mt-4">Event details will go here.</p>
      </div>
    </div>
  );
} 