const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    booker: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bookingDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
    },
    message: {
        type: String,
        required: true,
    },
    contactInfo: {
        email: String,
        phone: String,
    }
}, {
    timestamps: true
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
