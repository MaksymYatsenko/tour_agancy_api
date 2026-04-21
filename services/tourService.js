const tourRepo = require('../repositories/tourRepository');

class TourService {
    getAllTours() { return tourRepo.getAll(); }
    getTourById(id) {
        const tour = tourRepo.getById(id);
        if (!tour) throw new Error("Тур не знайдено");
        return tour;
    }
    createTour(data) {
        if (!data.name || !data.price) throw new Error("Неповні дані туру");
        return tourRepo.save(data);
    }
}
module.exports = new TourService();