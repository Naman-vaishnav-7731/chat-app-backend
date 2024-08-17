import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3002;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Establish connection with MongoDb
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongooDB is connected");
}).catch((er) => {
    console.log(er)
})

