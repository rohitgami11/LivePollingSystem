const mongoose = require('mongoose');

let isConnected = false; // track the connection

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  // console.log("MONGODB URI", process.env.MONGODB_URI);
  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "live_poll_system",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log(' connected')
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDB;