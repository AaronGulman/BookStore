import mongoose from 'mongoose';

const uri = process.env.ATLAS_URI || 'mongodb://localhost:5050';

const connectDB = async () => {
  try {
    const connection =  await mongoose.connect(uri);
    console.log('Connected to the DB');
    return connection;
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
