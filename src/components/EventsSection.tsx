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
        date: "September 15, 2025",
        time: "6:00 PM - 8:00 PM"
    },
    {
        id: 2,
        name: "Community Networking Night",
        date: "September 22, 2025",
        time: "7:00 PM - 9:00 PM"
    },
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
        <section className="max-w-[1450px] mx-auto my-20">
            <div className="flex flex-col justify-center md:flex-row gap-5 w-full sm:px-10"> {/* New wrapper div for padding */}
                {/* Image Container */}
                <div className="relative h-[300px] md:h-[500px] overflow-hidden shrink-0 
                                md:w-1/2 lg:w-auto lg:max-w-[500px] hidden md:flex justify-end"> {/* Added hidden md:flex */}
                    <Image
                        src="/images/events.png"
                        alt="Event 1"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-right md:object-center" 
                    />
                </div>

                {/* Events Container */}
                <div className="bg-[#310d51] text-white py-5 lg:py-10 px-10 lg:px-13 
                                flex-1 flex flex-col md:h-[500px] max-h-[700px] 
                                md:min-w-[350px] lg:w-auto max-w-[700px]"> {/* Removed md:max-w to simplify for this structure */}
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-3 min-w-[300px]">
                        <h2 className="text-[3rem] sm:text-[3.875rem]">Events</h2>
                        <button 
                            className="bg-purple-600 hover:bg-purple-700 hover:scale-105 font-semibold py-1 px-2 sm:py-2 sm:px-5 
                            rounded-lg transform transition-all duration-200 whitespace-nowrap text-lg sm:text-xl"
                            onClick={() => router.push('/events')}
                        >
                            View More
                        </button>
                    </div>

                    <div className="space-y-4 flex-1 flex flex-col min-h-0">
                        <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
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
                                    <div className="text-center">
                                        <button
                                            onClick={e => { e.stopPropagation(); handleRSVPClick(event.id, event.name); }}
                                            className="bg-purple-600 w-2/3 sm:w-full hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap tracking-wide"
                                        >
                                            RSVP
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> {/* End of new wrapper div */}
            <RSVPModal
                open={modalOpen}
                onClose={closeModal}
                eventName={modalEvent?.name || ""}
            />
        </section>
    );
}