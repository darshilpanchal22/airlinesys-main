import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link


const LandingPage = () => {
  const [tripType, setTripType] = useState('one-way');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = () => {
    console.log({
      tripType,
      departure,
      destination,
      departureDate,
      returnDate: tripType === 'round-trip' ? returnDate : null,
      passengers,
      travelClass,
    });
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen bg-gray-50 m-0 p-0">
      {/* Header with Stylish Navbar */}
      <header className="bg-transparent fixed w-full z-10 top-0 left-0">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-bold text-black-600">
            <span className="text-black-800">Fly</span>WithUs
          </div>

          {/* Navbar Links */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-700">
            <a
              href="#features"
              className="hover:text-blue-600 transition duration-300"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition duration-300"
            >
              Pricing
            </a>
            <a
              href="#reviews"
              className="hover:text-blue-600 transition duration-300"
            >
              Reviews
            </a>
            <a
              href="#footer"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </nav>
                    {/* Login and Sign Up Buttons */}
                    <div className="flex space-x-2">
      <Link to="/login">
        <button className="text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out py-1 px-4 rounded-md shadow-sm transform hover:scale-105">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out py-1 px-4 rounded-md shadow-sm transform hover:scale-105">
          Sign Up
        </button>
      </Link>
    </div>



          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden text-gray-700">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdownOpen && (
          <div className="md:hidden bg-blue-800 text-white space-y-4 py-4">
            <a href="#features" className="block text-center hover:bg-blue-600">
              Features
            </a>
            <a href="#pricing" className="block text-center hover:bg-blue-600">
              Pricing
            </a>
            <a href="#reviews" className="block text-center hover:bg-blue-600">
              Reviews
            </a>
            <a href="#footer" className="block text-center hover:bg-blue-600">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {" "}
        {/* Added padding-top to avoid navbar overlap */}
        {/* City Images Before Flight Search */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8 text-blue-800">
              Explore Top Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://travelingwolf.com/assets/images/format2x3/paris-photo-spots.jpg"
                  alt="Paris"
                  className="w-full h-48 object-cover"
                />
                <p className="text-lg font-semibold p-4 text-gray-800">Paris</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
                  alt="New York"
                  className="w-full h-48 object-cover"
                />
                <p className="text-lg font-semibold p-4 text-gray-800">
                  New York
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://www.shutterstock.com/image-photo/sensojiji-temple-asakusa-tokyos-oldest-600nw-1029873808.jpg"
                  alt="Tokyo"
                  className="w-full h-48 object-cover"
                />
                <p className="text-lg font-semibold p-4 text-gray-800">Tokyo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section with Flight Search */}
        <section className="bg-white-100 text-center py-12">
      <div>
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          Book Your Flight Now
        </h1>
        <p className="text-xl mb-6 text-gray-600">
          Find the best deals and fly with comfort and ease.
        </p>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Search Flights</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Trip Type</label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full p-3 mt-2 border rounded-lg"
              >
                <option value="one-way">One-Way</option>
                <option value="round-trip">Round-Trip</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Departure</label>
              <input
                type="text"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="From"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="To"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Departure Date</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full p-3 mt-2 border rounded-lg"
              />
            </div>
            {tripType === 'round-trip' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Return Date</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-3 mt-2 border rounded-lg"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Passengers</label>
              <input
                type="number"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full p-3 mt-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="w-full p-3 mt-2 border rounded-lg"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First-Class">First-Class</option>
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </section>''
  
        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8 text-blue-800">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Premium Comfort
                </h3>
                <p className="text-gray-700">
                  Enjoy spacious seating, premium meals, and top-tier services
                  during your flight.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Real-time Flight Tracking
                </h3>
                <p className="text-gray-700">
                  Track your flight’s status, delays, and more in real-time
                  directly from our platform.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Fast Check-in
                </h3>
                <p className="text-gray-700">
                  Skip the lines and check-in online to save time before your
                  flight.
                </p>
              </div>
            
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-700">
                  Our customer support team is always available to assist with
                  any queries or issues.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Flexible Booking
                </h3>
                <p className="text-gray-700">
                  We offer flexible booking options so you can modify or cancel
                  your trip with ease.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Exclusive Deals
                </h3>
                <p className="text-gray-700">
                  Get exclusive offers and discounts on flights and holiday
                  packages when you book with us.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-blue-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8 text-blue-800">
              Our Pricing Plans
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Basic
                </h3>
                <p className="text-lg text-gray-700 mb-4">$100 / Month</p>
                <ul className="list-disc text-left text-gray-700 mb-4">
                  <li>Economy seating</li>
                  <li>Standard meal service</li>
                  <li>Access to standard flight routes</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Choose Plan
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Premium
                </h3>
                <p className="text-lg text-gray-700 mb-4">$250 / Month</p>
                <ul className="list-disc text-left text-gray-700 mb-4">
                  <li>Premium seating</li>
                  <li>Gourmet meal service</li>
                  <li>Access to exclusive flight routes</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Choose Plan
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  VIP
                </h3>
                <p className="text-lg text-gray-700 mb-4">$500 / Month</p>
                <ul className="list-disc text-left text-gray-700 mb-4">
                  <li>First-class seating</li>
                  <li>Personalized service</li>
                  <li>Access to all routes and lounges</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Reviews Section */}
        <section id="reviews" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8 text-blue-800">
              What Our Customers Say
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Review 1 */}
              <div className="w-72 p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="John Doe"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">John D (AUS)</h3>
                    <p className="text-sm text-gray-500">Business Traveler</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73-1.64 7.03L12 17.27z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "Amazing service and fast check-in! The flight was smooth, and
                  I loved the extra legroom!"
                </p>
              </div>

              {/* Review 2 */}
              <div className="w-72 p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/76.jpg"
                    alt="Jane Smith"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Jane S  (USA)</h3>
                    <p className="text-sm text-gray-500">Leisure Traveler</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73-1.64 7.03L12 17.27z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "Had an incredible time with FlyWithUs. Their service exceeded
                  my expectations, and the whole process was seamless."
                </p>
              </div>

              {/* Review 3 */}
              <div className="w-72 p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/77.jpg"
                    alt="Michael L."
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Michael L (UK)</h3>
                    <p className="text-sm text-gray-500">Family Traveler</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73-1.64 7.03L12 17.27z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "FlyWithUs made traveling with my family so easy! The service
                  was top-notch, and we had a comfortable flight experience."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */} 
      <section id="footer">

    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">FlyWithUs</h2>
            <p className="mb-4">Leading the way in innovation, creativity, and customer satisfaction.</p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200">
                <i className="fab fa-twitter"></i> X
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul>
              <li>Email: <a href="mailto:support@yourcompany.com" className="hover:text-gray-400">flywithus.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+123 456 7890</a></li>
              <li>Address: 123 iskon empario, Ahmedabad, india</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FlyWithUs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </section>
    </div>
  );
};

export default LandingPage;
