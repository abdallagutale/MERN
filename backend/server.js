
import express from 'express';
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import chalk from 'chalk';

const app = express();

const PORT = 8000;

app.get('/api/', (req, res) => {
    res.send("yesss! 😋");
});

connectDB();

app.listen(PORT, () => {
    console.log(`${chalk.green.bold('Server')} listenning on ${PORT}`);
});