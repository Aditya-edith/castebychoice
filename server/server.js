import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import casteRoutes from './routes/casteRoutes.js'

import path from 'path'
import { fileURLToPath } from 'url';

//resolving dir name for ES module
const __fileName=fileURLToPath(import.meta.url)
const __dirname =path.dirname(__fileName)
console.log(__dirname);

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//use the client app
app.use(express.static(path.join(__dirname,'/client/')))
app.get('*', (req,res)=>res.sendFile(__dirname,'/client/index.html'))

// MongoDB connection
const uri = 'mongodb+srv://personaladityasanwal:nRfnHjkStiEF0HH0@cluster0.g9bjkqz.mongodb.net';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/castes',casteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
