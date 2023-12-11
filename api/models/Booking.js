const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  center: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Center'},
  user: {type:mongoose.Schema.Types.ObjectId, required:true},
  date: {type:Date, required:true},
  time: {type:String, required:true},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;