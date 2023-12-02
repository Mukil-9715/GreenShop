const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const description = new Schema({
  st_description: {
    type: String,
    required: true,
  },
  lg_description: {
    type: String,
    required: true,
  },
});
const review = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});
const cardsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: description,
    image: {
        type: [String],
        default: [],
        required: true,
    },
    price: {
        type: [String],
        default: [],
        required: true,
    },
    categories: {
        type: String,
        default: [],
        required: true,
    },
    size: {
        type: [String],
        default: [],
        required: true,
    },
    tags: {
        type: [String],
        default: [],
        required: true,
    },
    review: review,
  },
  { timestamp: true }
);
module.exports = mongoose.model("cards", cardsSchema);
