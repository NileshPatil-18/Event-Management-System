const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventById } = require('../controllers/eventController');

router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);

module.exports = router;
