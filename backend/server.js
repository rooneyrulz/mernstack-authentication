import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => res.send('Server is up and running :)'));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));