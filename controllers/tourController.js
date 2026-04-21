const tourService = require('../services/tourService');

class TourController {
    getAll(req, res) { res.json(tourService.getAllTours()); }
    getById(req, res) {
        try { res.json(tourService.getTourById(req.params.id)); }
        catch (e) { res.status(404).json({ error: e.message }); }
    }
    create(req, res) {
        try {
            // Перевірка авторизації (Атрибут: Security)
            if (req.headers.authorization !== "Bearer manager_secret_token") {
                return res.status(403).json({ error: "Доступ заборонено" });
            }
            res.status(201).json(tourService.createTour(req.body));
        } catch (e) { res.status(400).json({ error: e.message }); }
    }
}
module.exports = new TourController();