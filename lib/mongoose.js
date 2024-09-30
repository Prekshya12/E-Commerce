import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  const uri = process.env.MONGODB_URL;
  console.log('MONGODB_URL:', uri); // Debugging line

  if (!uri) {
    throw new Error('Missing MONGODB_URL environment variable');
  }

  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}