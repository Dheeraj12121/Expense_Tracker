const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    amout: {
      type: number,
      required: [true, "amount is required"],
    },
    category: {
      type: String,
      requires: [true, "cat is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
    date: {
      type: String,
      required: [true, "data is required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);
