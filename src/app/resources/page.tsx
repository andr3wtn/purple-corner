import React from "react";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto py-12 px-10">
        <h1 className="text-[3.5rem] mb-4 sm:mb-6 sm:text-[3.875rem]">Resources</h1>
        <p className="mb-4 text-lg text-black">Welcome to our Resources page! Here you&apos;ll find helpful links, articles, and materials curated by our feminist society.</p>
        {/* TODO: List of resources will go here */}
        <div className="mt-8 p-6 bg-pink-50 rounded shadow text-pink-700">No resources listed yet. Check back soon!</div>
      </div>

      <Footer />
    </>
   
  );
} 