import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/racingResults';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    process.exit(1);
  }
};

export { connectDB };
