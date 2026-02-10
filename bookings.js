const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.createBooking = async (req, res) => {
    try {
        console.log("Creating booking for listing:", req.params.id);
        console.log("Request body:", req.body);
        
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("owner");
        
        if (!listing) {
            throw new ExpressError(404, "Listing not found");
        }

        if (listing.owner._id.equals(req.user._id)) {
            req.flash("error", "You cannot book your own listing");
            return res.redirect(`/listings/${id}`);
        }

        const { message, email, phone } = req.body;
        
        const booking = new Booking({
            listing: id,
            booker: req.user._id,
            owner: listing.owner._id,
            message,
            contactInfo: {
                email,
                phone
            }
        });

        await booking.save();
        console.log("Booking saved successfully:", booking._id);
        req.flash("success", "Booking request sent successfully!");
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.error("Error creating booking:", error);
        req.flash("error", error.message);
        res.redirect(`/listings/${id}`);
    }
};

module.exports.getUserBookings = async (req, res) => {
    try {
        console.log("Getting bookings for user:", req.user._id);
        const bookings = await Booking.find({ owner: req.user._id })
            .populate("listing")
            .populate("booker", "username email")
            .sort({ createdAt: -1 });
        
        console.log("Found bookings:", bookings.length);
        res.render("users/profile", { bookings });
    } catch (error) {
        console.error("Error loading bookings:", error);
        req.flash("error", "Failed to load bookings");
        res.redirect("/listings");
    }
};

module.exports.updateBookingStatus = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { status } = req.body;
        
        const booking = await Booking.findById(bookingId);
        
        if (!booking) {
            throw new ExpressError(404, "Booking not found");
        }

        if (!booking.owner.equals(req.user._id)) {
            throw new ExpressError(403, "You are not authorized to update this booking");
        }

        booking.status = status;
        await booking.save();
        
        req.flash("success", `Booking ${status} successfully`);
        res.redirect("/profile");
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/profile");
    }
};
