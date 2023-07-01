const { Schema, model } = require('mongoose');
const LinkItem = new Schema({
  image: { type: String },
  title: { type: String },
  links: { type: Array },
  category: { type: String },
  cities: { type: Array },
  important: { type: Boolean }
});
module.exports = model('LinkItem', LinkItem);