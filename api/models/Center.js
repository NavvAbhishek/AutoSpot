const mongoose = require("mongoose");

const CenterSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  address: String,
  photos: [String],
  description: String,
  extraInfo: String,
  openTime: String,
  closeTime: String,
  price: Number,
});

const CenterModel = mongoose.model("Center", CenterSchema);

module.exports = CenterModel;
