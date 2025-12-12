import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LandingPage = () => {
  const [tripType, setTripType] = useState("one-way");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* NAVBAR */}
      <header className="bg-white/80 backdrop-blur-lg shadow-md fixed w-full z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-blue-700 cursor-pointer">
            Fly<span className="text-gray-900">WithUs</span> ✈️
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-700">
            <a href="#destinations" className="hover:text-blue-600 transition">
              Destinations
            </a>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
            <a href="#reviews" className="hover:text-blue-600 transition">
              Reviews
            </a>
          </nav>

          {/* Buttons Desktop */}
          <div className="hidden md:flex space-x-3">
            <Link to="/login">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-black shadow transition">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {dropdownOpen && (
          <div className="md:hidden bg-blue-600 text-white text-center py-4 space-y-4">
            <a href="#destinations" className="block hover:bg-blue-700 py-2">
              Destinations
            </a>
            <a href="#features" className="block hover:bg-blue-700 py-2">
              Features
            </a>
            <a href="#pricing" className="block hover:bg-blue-700 py-2">
              Pricing
            </a>
            <a href="#reviews" className="block hover:bg-blue-700 py-2">
              Reviews
            </a>

            <div className="flex justify-center space-x-4 mt-4">
              <Link to="/login">
                <button className="px-5 py-2 bg-black text-white rounded-lg">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2 bg-white text-blue-700 rounded-lg font-semibold">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="pt-28 bg-gradient-to-br from-blue-100 to-blue-300 pb-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg">
            Book Flights, Travel the World
          </h1>
          <p className="mt-4 text-gray-700 text-xl max-w-2xl mx-auto">
            Experience comfort, speed, and the best deals at your fingertips.
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-xl mx-auto mt-12 bg-white/60 backdrop-blur-xl shadow-xl border border-white/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
            Search Flights
          </h2>

          {/* FORM */}
          <div className="space-y-5">
            {/* Trip Type */}
            <div>
              <label className="font-medium text-gray-700">Trip Type</label>
              <select
                onChange={(e) => setTripType(e.target.value)}
                className="w-full mt-2 p-3 bg-white border rounded-lg shadow-sm"
              >
                <option value="one-way">One Way</option>
                <option value="round-trip">Round Trip</option>
              </select>
            </div>

            {/* Destination Inputs */}
            <div>
              <label className="font-medium text-gray-700">Departure</label>
              <input
                type="text"
                placeholder="From"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Destination</label>
              <input
                type="text"
                placeholder="To"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* Dates */}
            <div>
              <label className="font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {tripType === "round-trip" && (
              <div>
                <label className="font-medium text-gray-700">Return Date</label>
                <input
                  type="date"
                  className="w-full mt-2 p-3 border rounded-lg"
                />
              </div>
            )}

            {/* Passengers */}
            <div>
              <label className="font-medium text-gray-700">Passengers</label>
              <input
                type="number"
                min="1"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* Class */}
            <div>
              <label className="font-medium text-gray-700">Class</label>
              <select className="w-full mt-2 p-3 border rounded-lg">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            {/* Buttons */}
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-md transition">
              Search Flights
            </button>

            <button
              onClick={() =>
                (window.location.href = "https://rzp.io/rzp/6kGIP6Ur")
              }
              className="w-full py-3 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-900 shadow-md transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Top Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
                title: "Paris",
              },
              {
                img: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892",
                title: "New York",
              },
              {
                img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
                title: "Tokyo",
              },
            ].map((city, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-white shadow-lg hover:scale-[1.03] transition cursor-pointer"
              >
                <img src={city.img} className="w-full h-60 object-cover" />
                <h3 className="text-xl font-bold p-4 text-gray-800">
                  {city.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Premium Comfort",
                desc: "Experience luxury seating & meals.",
              },
              {
                title: "Real-Time Tracking",
                desc: "Track flights live from anywhere.",
              },
              {
                title: "Fast Check-In",
                desc: "Skip queues with online check-in.",
              },
              { title: "24/7 Support", desc: "We’re here to help anytime." },
              {
                title: "Flexible Booking",
                desc: "Easy modification and cancellation.",
              },
              {
                title: "Exclusive Deals",
                desc: "Special discounts and offers.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 bg-gray-100 rounded-xl shadow hover:scale-[1.02] transition"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                plan: "Basic",
                price: "$100",
                features: [
                  "Economy Seating",
                  "Standard Meals",
                  "Popular Routes",
                ],
              },
              {
                plan: "Premium",
                price: "$250",
                features: [
                  "Premium Seating",
                  "Gourmet Meals",
                  "Exclusive Routes",
                ],
              },
              {
                plan: "VIP",
                price: "$500",
                features: [
                  "First Class",
                  "Luxury Lounges",
                  "Personal Concierge",
                ],
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white p-8 shadow-xl rounded-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-2xl font-bold text-blue-600">{p.plan}</h3>
                <p className="text-gray-800 mt-3 text-xl font-semibold">
                  {p.price}/month
                </p>

                <ul className="text-left mt-4 space-y-2 text-gray-700">
                  {p.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>

                <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">
            Customer Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "John D (AUS)",
                text: "Amazing comfort and perfect service!",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                name: "Jane S (USA)",
                text: "Great experience from booking to landing.",
                img: "https://randomuser.me/api/portraits/women/76.jpg",
              },
              {
                name: "Michael L (UK)",
                text: "Perfect for family travel. Highly recommended!",
                img: "https://randomuser.me/api/portraits/men/77.jpg",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow hover:scale-[1.02] transition"
              >
                <img src={r.img} className="w-16 h-16 mx-auto rounded-full" />
                <h3 className="text-xl font-bold mt-3">{r.name}</h3>
                <p className="text-gray-700 mt-2">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">FlyWithUs</h2>
            <p className="text-gray-400">
              Your comfort, safety & luxury—our priority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#destinations" className="hover:text-white">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: panchaldarshil145@gmail.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Ahmedabad, India</p>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} FlyWithUs — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
