import mongoose from 'mongoose';
import { dbURL } from './config.js';
import chalk from 'chalk';

const connectDB = async () => {
    try {
        // success
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`connected to the database ${chalk.green.bold(dbURL)}`);
    }
    catch (error) {
        // error message
        console.log(`Error connecting to the database ${error}`);
        process.exit(1);
    }
};

export default connectDB;