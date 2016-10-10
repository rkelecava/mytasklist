var express = require('express'),
    router = express.Router(),
    Task = require('../models/task');

Task.methods(['get', 'post', 'put', 'delete']);

Task.register(router, '/tasks');

module.exports = router;