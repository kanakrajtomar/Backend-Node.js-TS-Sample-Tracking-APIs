const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.post('/samples', sampleController.addSample);
router.put('/samples/:id/collect', sampleController.markCollected);
router.get('/samples/agent/:agentId', sampleController.getSamplesByAgent);

module.exports = router;
