const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controller/booking.js");

router.post("/listings/:id/book", isLoggedIn, bookingController.createBooking);
router.get("/profile", isLoggedIn, bookingController.getUserBookings);
router.put("/bookings/:bookingId/status", isLoggedIn, bookingController.updateBookingStatus);

module.exports = router;
