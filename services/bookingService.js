const bookingRepo = require('../repositories/bookingRepository');
const tourRepo = require('../repositories/tourRepository');

class BookingService {
    getAllBookings() { return bookingRepo.getAll(); }
    createBooking(data) {
        const tour = tourRepo.getById(data.tourId);
        if (!tour) throw new Error("Тур не знайдено");
        if (tour.availableSeats < data.seatsToBook) throw new Error("Недостатньо місць");
        
        // Зменшуємо кількість місць (імітація транзакції)
        tour.availableSeats -= data.seatsToBook;
        
        return bookingRepo.save({
            tourId: data.tourId,
            clientName: data.clientName,
            status: "CONFIRMED"
        });
    }
}
module.exports = new BookingService();