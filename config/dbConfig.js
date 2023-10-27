const mongoose = require("mongoose");

const dbUri = process.env.MONGO_URL;
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(dbUri);
    console.log(`Mongodb connected :${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
