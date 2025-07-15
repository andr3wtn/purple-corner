import React from "react";
import { FaSearch } from 'react-icons/fa';
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EventsPage() {
  // Hard-coded, saved for later
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

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto py-12 px-10">
        <h1 className="text-[3.5rem] mb-4 sm:mb-6 sm:text-[3.875rem]">Events</h1>
        <p className="mb-4 text-lg text-black">Welcome to our Events page! Here you&apos;ll find upcoming and past events organized by our feminist society. Stay tuned for updates.</p>

        <div className="mt-8 p-6 bg-pink-50 rounded shadow">
          <form className="mb-5 flex gap-5 justify-center">
            <div className="relative w-full sm:w-2/3 md:max-w-[500px]">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                placeholder="Search event by name"
                className="border rounded-lg pl-10 pr-3 py-2 w-full"
              />
            </div>
            <button type="submit" className="border rounded-lg text-white py-1 px-3 bg-purple-600 hidden sm:block">Search</button>
          </form>
          {upcomingEvents.map((event) => {
            return (
              <div
                  key={event.id}
                  className="bg-purple-800/10 rounded-lg mb-5 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-purple-700/5 transition-colors cursor-pointer"
              >
                  <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{event.name}</h4>
                      <div className="text-gray-900">
                          <p className="text-lg">{event.date}</p>
                          <p className="text-sm">{event.time}</p>
                      </div>
                  </div>
                  <div className="text-center">
                      <button
                      
                          className="bg-purple-600 w-2/3 sm:w-full hover:bg-purple-700 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap tracking-wide"
                      >
                          RSVP
                      </button>
                  </div>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </>

  );
} 