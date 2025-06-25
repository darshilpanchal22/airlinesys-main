const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  departureDate: { type: Date, required: true },
  arrivalDate: { type: Date },
  passengers: { type: Number, required: true },
  travelClass: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  paymentStatus: { type: String, default: 'Pending' },
  totalPrice: { type: Number }
});

// 👇 Correct export
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = { Booking };
