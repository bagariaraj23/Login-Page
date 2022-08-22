const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// const URI = process.env.MONGODB_URL;

// mongoose.connect(
//   URI,
//   {
//     useNewUrlParser: true,

//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) throw err;
//     console.log("Connected to MongoDB!!!");
//   }
// );

// module.exports = URI;
