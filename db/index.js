const mongoose = require('mongoose');

mongoose.connect(process.env.DB);

const dependecySchema = new mongoose.Schema({
  name: String,
  version: String,
});

const packageSchema = new mongoose.Schema({
  name: String,
  version: String,
  repository: String,
  homepage: String,
  dependencies: [dependecySchema],
  devDependencies: [dependecySchema],
  date: BigInt,
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
