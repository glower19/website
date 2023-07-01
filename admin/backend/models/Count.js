const { Schema, model } = require('mongoose');
const Count = new Schema({
    title: { type: String },
    date: { type: Number },
    device: { type: String }
});
module.exports = model('Count', Count);