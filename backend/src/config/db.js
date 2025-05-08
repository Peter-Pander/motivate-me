// backend/src/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('Missing MONGODB_URI in environment');
    }
    // Mongoose v6+ uses the new URL parser and unified topology by default
    await mongoose.connect(uri);

    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
