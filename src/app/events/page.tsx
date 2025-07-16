"use client";
import React from "react";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventList from "./components/EventList"

export default function EventsPage() {

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

        <EventList />
      </div>

      <Footer />
    </>

  );
} 