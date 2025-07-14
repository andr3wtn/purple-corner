"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RSVPModal from "./RSVPModal";

// Hardcoded event data
const upcomingEvents = [
    {
        id: 1,
        name: "Purple Corner Meet & Greet",
        date: "December 15, 2024",
        time: "6:00 PM - 8:00 PM"
    },
    {
        id: 2,
        name: "Community Networking Night",
        date: "December 22, 2024",
        time: "7:00 PM - 9:00 PM"
    },
    {
        id: 3,
        name: "Holiday Celebration",
        date: "December 28, 2024",
        time: "5:00 PM - 10:00 PM"
    },
    {
        id: 4,
        name: "New Year's Kickoff",
        date: "January 5, 2025",
        time: "6:30 PM - 11:00 PM"
    },
    {
        id: 5,
        name: "Winter Workshop Series",
        date: "January 12, 2025",
        time: "2:00 PM - 5:00 PM"
    }
];

export default function Events() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEvent, setModalEvent] = useState<{ id: number; name: string } | null>(null);
    const router = useRouter();

    const handleCardClick = (eventId: number) => {
        router.push(`/events/${eventId}`);
    };

    const handleRSVPClick = (eventId: number, eventName: string) => {
        setModalEvent({ id: eventId, name: eventName });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalEvent(null);
    };

    return (
        <section className="min-h-screen px-10 py-10 flex justify-center items-center flex-col lg:flex-row gap-5">
            <div className="w-[500px] shrink-0">
                <Image
                src="/images/events.png"
                alt="Event 1"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                />
            </div>
            <div className="bg-[#310d51] text-white py-10 px-15 flex-1 grow-1 text-left sm:h-100 sm:w-100 md:h-125 md:w-125 lg:w-auto flex flex-col h-[600px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl mb-4 text-[3.875rem]">Events</h2>
                    <button 
                        className="bg-purple-600 hover:bg-purple-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap"
                        onClick={() => router.push('/events')}
                    >
                        View More About Events
                    </button>
                </div>

                <div className="space-y-4 flex-1 flex flex-col min-h-0">
                    <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
                    <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-4">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white/10 rounded-lg px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-white/15 transition-colors cursor-pointer"
                                onClick={() => handleCardClick(event.id)}
                            >
                                <div className="flex-1">
                                    <h4 className="text-xl font-semibold mb-2">{event.name}</h4>
                                    <div className="text-gray-300">
                                        <p className="text-lg">{event.date}</p>
                                        <p className="text-sm">{event.time}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={e => { e.stopPropagation(); handleRSVPClick(event.id, event.name); }}
                                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap"
                                >
                                    RSVP
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <RSVPModal
                open={modalOpen}
                onClose={closeModal}
                eventName={modalEvent?.name || ""}
            />
        </section>
    );
}