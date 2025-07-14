import React from "react";
import Header from "@/components/Header"

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-pink-800 mb-6">Resources</h1>
        <p className="mb-4 text-lg text-gray-700">Welcome to our Resources page! Here you&apos;ll find helpful links, articles, and materials curated by our feminist society.</p>
        {/* TODO: List of resources will go here */}
      <div className="mt-8 p-6 bg-pink-50 rounded shadow text-pink-700">No resources listed yet. Check back soon!</div>
    </div>
    </>
   
  );
} 