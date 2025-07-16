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

export default function AdminPage() {

    const [addFormData, setAddFormData] = useState({
        name: "",
        date: "",
        time: "",
        desc: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        console.log("Submitting");
        e.preventDefault();
        try {
            console.log("Fetching");
            const res = await fetch("/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addFormData),
            });
            console.log("Fetched");
            if (!res.ok) { throw new Error('Failed to add event'); }
            const data = await res.json();

            // Showing "submitted!" text
            setSubmitted(true);

            // Setting the input fields empty
            setAddFormData({name: "", date: "", time: "", desc: "", });

            console.debug("Event added:", data.event);

            // Hide the submitted message after 3 seconds
            setTimeout(() => setSubmitted(false), 3000);
        } catch(err) { 
            console.debug(err); 
            alert(err);
        }

    };

    const [events, setEvents] = useState<EventItem[]>([]);
    const [searchInput, setSearchInput] = useState('');

    async function fetchEvents() {
        try {
            const res = await fetch("/api/events");
            if (!res.ok) throw new Error("Events fetching failed");
            const data = await res.json();
            setEvents(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const filteredEvents = events.filter((e) =>
        e.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    /* ------------- Edit event --------------- */
    const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editFormData, setEditFormData] = useState({
        name: "",
        date: "",
        time: "",
        desc: "",
    });
    const toggleEditEvent = (event: EventItem) => {
        setEditingEvent(event);

        console.log("date: " + event.date);
        console.log("time: " + event.time);
        setEditFormData({
            name: event.name,
            date: event.date,
            time: event.time,
            desc: event.desc || "",
        });
        setIsEditing(true);
    }

    const handleEditEvent = async (id: number) => {

        const res = await fetch(`/api/events?id=${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editFormData),
        });

        if (res.ok) {
            console.log("Event edited", id);
            await fetchEvents();
            setIsEditing(false);
        } else {
            alert("Failed to edit event");
        }
        console.log("Editing event:", id);
    };

    /* ------------ Delete event -------------- */
    const handleDeleteEvent = async (id: number) => {
        if (!confirm("Are you sure you want to delete this event? Deletion can't be reversed")) return;

        const res = await fetch(`/api/events?id=${id}`, {
            method: "DELETE"
        });

        if (res.ok) {
            console.log("Event deleted:", id);
            setEvents(prev => prev.filter(ev => ev.id !== id));
            await fetchEvents();
        } else {
            alert("Failed to delete event");
        }
    };

    return (
        <div className="p-10 max-w-[1000px] mx-auto relative">
            <h1 className="text-[3.5rem]">Admin Page</h1>
            <section className="px-10 pt-5 pb-10 border rounded-lg bg-white/30 mb-5">
                <h2 className="text-[1.75rem] text-left">Add an event!</h2>
                <form className="pt-5 flex flex-col gap-3 items-center" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 justify-between sm:flex-row w-full">
                        {/* Event Title */}
                        <input 
                            placeholder="Event title"
                            value={addFormData.name}
                            onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value})}
                            className="border rounded w-full flex-1 p-2"
                            required
                        ></input>

                        {/* Event Date */}
                        <input
                            type="date"
                            value={addFormData.date}
                            onChange={(e) => setAddFormData({ ...addFormData, date: e.target.value })}
                            className="border p-2 rounded flex-1"
                            required
                        />

                        {/* Event time */}
                        <input
                            type="time"
                            value={addFormData.time}
                            onChange={(e) => setAddFormData({ ...addFormData, time: e.target.value })}
                            className="border p-2 rounded flex-1"
                            required
                        />
                    </div>

                    <textarea 
                        rows={5}
                        placeholder="Please enter the event details here"
                        value={addFormData.desc}
                        onChange={(e) => setAddFormData({...addFormData, desc: e.target.value})}
                        className="border w-full rounded p-2"
                    ></textarea>
                    
                    <button type="submit" className="border rounded-lg w-1/3 bg-purple-700 text-white">Submit</button>

                    {submitted && <p className="text-green-600 font-medium mt-2">Event submitted successfully!</p>}
                </form>
            </section>

            <section className="px-10 pt-5 pb-10 border rounded-lg bg-white/30">
                <h2 className="text-[1.75rem] text-left">Manage Events</h2>
                <div className="relative w-full py-5">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                    placeholder="Search event by name"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="border rounded-lg pl-10 pr-3 py-2 w-full"
                    />
                </div>
                {filteredEvents.map((event) => (
                        <SingleEvent
                          key={event.id}
                          id={event.id}
                          name={event.name}
                          date={event.date}
                          time={event.time}
                          desc={event.desc}
                          isAdmin={true}
                          onEdit={() => toggleEditEvent(event)}
                          onDelete={handleDeleteEvent}
                        />
                ))}
            </section>

            {isEditing && (
                <>
                    {/* BACKDROP */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-40" 
                        onClick={() => setIsEditing(false)} // clicking backdrop closes edit mode
                    />
                    <div className="fixed top-1/2 left-1/2 w-[90%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                        <h1 className="text-xl font-semibold mb-4">Edit Event</h1>
                        <form className="pt-5 flex flex-col gap-3 items-center" 
                            onSubmit={
                                (e: React.FormEvent<HTMLFormElement>) => {
                                    e.preventDefault();
                                    if (!editingEvent) return;
                                    handleEditEvent(editingEvent.id);
                                }
                            }
                        >
                            <div className="flex flex-col gap-3 justify-between sm:flex-row w-full">
                                {/* Event Title */}
                                <input 
                                    placeholder="Event title"
                                    value={editFormData.name}
                                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value})}
                                    className="border rounded w-full flex-1 p-2"
                                    required
                                ></input>

                                {/* Event Date */}
                                <input
                                    type="date"
                                    value={editFormData.date}
                                    onChange={(e) => setEditFormData({ ...editFormData, date: e.target.value })}
                                    className="border p-2 rounded flex-1"
                                    required
                                />

                                {/* Event time */}
                                <input
                                    type="time"
                                    value={editFormData.time}
                                    onChange={(e) => setEditFormData({ ...editFormData, time: e.target.value })}
                                    className="border p-2 rounded flex-1"
                                    required
                                />
                            </div>

                            <textarea 
                                rows={5}
                                placeholder="Please enter the event details here"
                                value={editFormData.desc}
                                onChange={(e) => setEditFormData({...editFormData, desc: e.target.value})}
                                className="border w-full rounded p-2"
                            ></textarea>
                            
                            <button type="submit" className="border rounded-lg w-1/3 bg-purple-700 text-white">Submit</button>
                        </form>
                    </div>
                </>
            )}
        </div>

    )
}