const { Schema, model } = require('mongoose');
const AdItems = new Schema({
    image: { type: String },
    category: { type: String },
    link: { type: String },
    date: { type: String },
    title: {type: String}
});
module.exports = model('AdItems', AdItems);