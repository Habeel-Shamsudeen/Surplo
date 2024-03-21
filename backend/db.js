require('dotenv').config();
const mongoose = require("mongoose");
const  DB_URL  = process.env.DB_URL;
const bcrypt = require("bcrypt");
mongoose
  .connect(DB_URL)
  .then(() => console.log("mongoDB connected successfully!"));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  phno:{
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  }
});

const expiredFoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

userSchema.methods.createHash = async (plain_password) => {
  const salt = 10;
  return await bcrypt.hash(plain_password, salt);
};

userSchema.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model("User", userSchema);

const ExpiredFood = mongoose.model("ExpiredFood",expiredFoodSchema);

module.exports = {
  User,
  ExpiredFood
};
