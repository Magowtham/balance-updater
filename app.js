const mongoose = require("mongoose");
const UserModel = require("./models/user");
const rfid = process.argv[2];
const amount = Number(process.argv[3]);
if (rfid && !isNaN(amount))
  mongoose
    .connect(
      "mongodb+srv://AIET_SPP:Aietspp%403330@aietsppv1.cxun0bh.mongodb.net/SPP?retryWrites=true&w=majority"
    )
    .then(async () => {
      console.log("connected to database");
      try {
        await UserModel.updateOne({ rfid }, { $set: { balance: amount } });
        console.log("successfully updated to server..");
      } catch (err) {
        console.log("balance update failed...");
      }
    })
    .catch(() => {
      console.log("failed to connect to DB..");
      console.log("check your internet connection..");
    });
else console.log("usage: node app rfid amount");
