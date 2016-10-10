var restful = require('node-restful'),
    mongoose = restful.mongoose;

var schema = new mongoose.Schema({
    title: String,
    isDone: Boolean
});

module.exports = restful.model('Task', schema);