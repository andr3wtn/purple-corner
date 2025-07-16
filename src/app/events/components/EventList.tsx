"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SingleEvent from "@/components/SingleEvent";

interface EventItem {
  id: number;
  name: string;
  date: string;
  time: string;
  desc?: string;
}

export default function EventsList() {
  const [searchInput, setSearchInput] = useState("");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Events fetching failed");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="mt-8 py-6 px-10 bg-pink-50 rounded shadow">
      {/* Search Bar */}
      <form
        className="mb-5 flex gap-5 justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full sm:w-2/3 md:max-w-[500px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Search event by name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border rounded-lg pl-10 pr-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="border rounded-lg text-white py-1 px-3 bg-purple-600 hidden sm:block"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center">Loading events...</p>}

      {/* Empty State */}
      {!loading && filteredEvents.length === 0 && (
        <p className="text-center text-gray-600">No events found.</p>
      )}

      {/* Event List */}
      {filteredEvents.map((event) => (
        <SingleEvent
          key={event.id}
          id={event.id}
          name={event.name}
          date={event.date}
          time={event.time}
          showsDesc={true}
        />
      ))}
    </div>
  );
}
