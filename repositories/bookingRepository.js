let bookingsDb = [];

class BookingRepository {
    getAll() { return bookingsDb; }
    save(booking) {
        booking.id = bookingsDb.length + 1000; // ID бронювань з 1000
        bookingsDb.push(booking);
        return booking;
    }
}
module.exports = new BookingRepository();