import React from "react";
import Hero from "@/components/hero"

const App = () => {
  const products = [
    {
      id: 1,
      name: "Rocket Single Seater",
      price: "Rs. 25,000",
      img: "(link unavailable)",
    },
    {
      id: 2,
      name: "Side Table",
      price: "Rs. 8,000",
      img: "(link unavailable)",
    },
    {
      id: 3,
      name: "Asgaard Sofa",
      price: "Rs. 45,000",
      img: "(link unavailable)",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">
          E-Commerce Website
        </h1>
      </header>

      {/* Hero Section */}
      <section className="p-6 bg-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Rocket Single Seater
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Perfect for modern homes.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500">
              Shop Now
            </button>
          </div>
          <img
            src="(link unavailable)"
            alt="Rocket Single Seater"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      
    </div>
  );
};