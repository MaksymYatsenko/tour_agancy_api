const bookingService = require('../services/bookingService');

class BookingController {
    getAll(req, res) { res.json(bookingService.getAllBookings()); }
    create(req, res) {
        try { res.status(201).json(bookingService.createBooking(req.body)); }
        catch (e) { res.status(400).json({ error: e.message }); }
    }
}
module.exports = new BookingController();