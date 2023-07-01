const { Schema, model } = require('mongoose');
const LinkItem = new Schema({
  image: { type: String },
  title: { type: String },
  links: { type: Array },
  category: { type: String }
});
module.exports = model('LinkItem', LinkItem);