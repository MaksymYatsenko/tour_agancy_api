let toursDb = [
    { id: 1, name: "Римські канікули", country: "Italy", price: 500, availableSeats: 12 }
];

class TourRepository {
    getAll() { return toursDb; }
    getById(id) { return toursDb.find(t => t.id === parseInt(id)); }
    save(tour) {
        tour.id = toursDb.length + 1;
        toursDb.push(tour);
        return tour;
    }
}
module.exports = new TourRepository();