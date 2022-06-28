const Model = require('../models/modelModel');
const factory = require('./handlerFactory');

exports.createModel = factory.createOne(Model);
exports.getAllModels = factory.getAll(Model);
exports.getModel = factory.getOne(Model);
exports.updateModel = factory.updateOne(Model);
exports.deleteModel = factory.deleteOne(Model);
