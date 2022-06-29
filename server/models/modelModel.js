const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, 'Please provide 3D model'],
  },
  name: {
    type: String,
  },    
}); 

const Model = mongoose.model('Model', modelSchema);
module.exports = Model;
