const { Schema, model } = require('mongoose');
const Feedback = new Schema({
    contact: { type: String },
    date: { type: String },
    message: { type: String }
});
module.exports = model('Feedback', Feedback);