const express = require('express');
const router = express.Router();
const guestsController = require('../controllers/guests');

// Get routes to a guest group
router.get('/guest', guestsController.getGuestMatch);
router.get('/group', guestsController.getGuestGroup);

// PATCH route to update a guest
router.patch('/update', guestsController.updateGuestGroup);

module.exports = router;