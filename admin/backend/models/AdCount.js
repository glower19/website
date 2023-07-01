const { Schema, model } = require('mongoose');
const AdCount = new Schema({
    link: { type: String },
    date: { type: Number },
});
module.exports = model('AdCount', AdCount);