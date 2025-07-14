import React from "react";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EventsPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-pink-800 mb-6">Events</h1>
        <p className="mb-4 text-lg text-gray-700">Welcome to our Events page! Here you&apos;ll find upcoming and past events organized by our feminist society. Stay tuned for updates.</p>
        {/* TODO: List of events will go here */}
        <div className="mt-8 p-6 bg-pink-50 rounded shadow text-pink-700">No events listed yet. Check back soon!</div>
      </div>

      <Footer />
    </>

  );
} 