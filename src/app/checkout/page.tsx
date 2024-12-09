import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Billing Details */}
          <div className="col-span-2 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="col-span-1 sm:col-span-2 border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="col-span-1 sm:col-span-2 border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Postcode / ZIP"
                className="border p-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="col-span-1 sm:col-span-2 border p-2 rounded w-full"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Product</span>
                <span>Price</span>
              </li>
              <li className="flex justify-between">
                <span>Item Name</span>
                <span>₹250,000</span>
              </li>
              <li className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹250,000</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
              Place Order
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
