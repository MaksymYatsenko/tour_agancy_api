const express = require('express');
const tourController = require('./controllers/tourController');
const bookingController = require('./controllers/bookingController');

const app = express();
app.use(express.json()); // Щоб читати JSON з Postman

// Наші 5 маршрутів (Endpoints)
app.get('/api/v1/tours', (req, res) => tourController.getAll(req, res));
app.get('/api/v1/tours/:id', (req, res) => tourController.getById(req, res));
app.post('/api/v1/tours', (req, res) => tourController.create(req, res));

app.get('/api/v1/bookings', (req, res) => bookingController.getAll(req, res));
app.post('/api/v1/bookings', (req, res) => bookingController.create(req, res));

app.listen(8080, () => {
    console.log("Сервер працює на http://localhost:8080");
});