import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI, {
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Database Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.messsage}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDb;
