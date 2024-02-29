const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/socialnetwork",
    {
     
      }
);

// Use this to log mongodb queries to be executed
mongoose.set("debug", true);

module.exports = mongoose.connection;