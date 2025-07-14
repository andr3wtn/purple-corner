import React from "react";
import Header from "@/components/Header"

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-pink-800 mb-6">About Us</h1>
        <p className="mb-4 text-lg text-gray-700">Welcome to our About Us page!</p>
      </div>
    </>

  );
} 