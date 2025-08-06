let samples = [];
let currentId = 1;

// Add a new sample
exports.addSample = (req, res) => {
  const sample = {
    id: currentId++,
    hospitalName: req.body.hospitalName,
    patientName: req.body.patientName,
    sampleType: req.body.sampleType,
    scheduledTime: req.body.scheduledTime,
    isCollected: false,
    agentId: req.body.agentId
  };
  samples.push(sample);
  res.status(201).json(sample);
};

// Mark sample as collected
exports.markCollected = (req, res) => {
  const id = parseInt(req.params.id);
  const sample = samples.find(s => s.id === id);
  if (!sample) return res.status(404).json({ message: "Sample not found" });
  sample.isCollected = true;
  res.json(sample);
};

// Get samples for agent
exports.getSamplesByAgent = (req, res) => {
  const agentId = req.params.agentId;
  const agentSamples = samples.filter(s => s.agentId === agentId);
  res.json(agentSamples);
};
