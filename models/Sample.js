const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  hospitalName: String,
  patientName: String,
  sampleType: String,
  scheduledTime: Date,
  isCollected: { type: Boolean, default: false },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
});

module.exports = mongoose.model('Sample', sampleSchema);
