import React from "react";
import { FaSearch } from 'react-icons/fa';
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SingleEvent from "@/components/SingleEvent"

export default function EventsPage() {
  // Hard-coded, saved for later
  const upcomingEvents = [
    {
        id: 1,
        name: "Purple Corner Meet & Greet",
        date: "September 15, 2025",
        time: "6:00 PM - 8:00 PM",
        desc: "asidfjausvjnfafdfgj asdfi;jas; asdfi;j ad;ifjqfbfas asidjfq qeifo dscasi qeioi sa aoeu a fiajr a"
    },
    {
        id: 2,
        name: "Community Networking Night",
        date: "September 22, 2025",
        time: "7:00 PM - 9:00 PM",
        desc: "asidfjausvjnfafdfgj asdfi;jas; asdfi;j ad;ifjqfbfas asidjfq qeifo dscasi qeioi sa aoeu a fiajr a"
    },
    {
        id: 3,
        name: "Holiday Celebration",
        date: "September 28, 2025",
        time: "5:00 PM - 10:00 PM",
        desc: "asidfjausvjnfafdfgj asdfi;jas; asdfi;j ad;ifjqfbfas asidjfq qeifo dscasi qeioi sa aoeu a fiajr a"
    },
    {
        id: 4,
        name: "New Year's Kickoff",
        date: "January 5, 2026",
        time: "6:30 PM - 11:00 PM",
        desc: "asidfjausvjnfafdfgj asdfi;jas; asdfi;j ad;ifjqfbfas asidjfq qeifo dscasi qeioi sa aoeu a fiajr a"
    },
    {
        id: 5,
        name: "Winter Workshop Series",
        date: "January 12, 2026",
        time: "2:00 PM - 5:00 PM",
        desc: "asidfjausvjnfafdfgj asdfi;jas; asdfi;j ad;ifjqfbfas asidjfq qeifo dscasi qeioi sa aoeu a fiajr a"
    }
];

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto pt-4 pb-12 px-10">
        <div className="flex gap-6 items-center mb-2 sm:mb-4">
          <h1 className="text-[3.5rem] sm:text-[3.875rem]">Events</h1>
          <nav className="subnav flex gap-2 text-xl">
            <a href="#upcoming" className="active">Upcoming Events</a>
            <a href="#past">Past Events</a>
            <a href="#galleries">Galleries</a>
          </nav>
        </div>

        <p className="mb-4 text-lg text-black">Welcome to our Events page! Here you&apos;ll find upcoming and past events organized by our feminist society. Stay tuned for updates.</p>

        <div className="mt-8 py-6 px-10 bg-pink-50 rounded shadow">
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
          {upcomingEvents.map((event) => (
            <SingleEvent 
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date}
            time={event.time}
            showsDesc={true} />)
          )}
        </div>
      </div>

      <Footer />
    </>

  );
} 