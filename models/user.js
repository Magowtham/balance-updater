const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  rfid: {
    type: String,
    required: true,
  },
  card_id: {
    type: String,
    required: true,
  },
  hostel_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roll_number: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 100,
  },
});

module.exports = mongoose.model("users", UserSchema);
