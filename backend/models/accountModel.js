import mongoose from 'mongoose';

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Accounts = mongoose.model('Accounts', accountSchema);