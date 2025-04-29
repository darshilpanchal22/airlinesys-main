const { Booking } = require("../models/bookingModel");

exports.booking = async (req, res) => {
  const {
    departure,
    destination,
    departureDate,
    arrivalDate,
    passengers,
    travelClass,
    bookingDate,
    paymentStatus,
    totalPrice,
  } = req.body;
  if (
    !departure ||
    !destination ||
    !departureDate ||
    !passengers ||
    !travelClass ||
    !bookingDate
  ) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const userId = req.user.id;
  try {
    // Store DB
    const booking = new Booking({
      userId,
      departure,
      destination,
      departureDate,
      arrivalDate,
      passengers,
      travelClass,
      bookingDate,
      paymentStatus,
      totalPrice,
    });
    await booking.save();
    // Send Email
    sendEmail(req.user.email, "Booking Successful", "Your ticket booked successfully", null)

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
