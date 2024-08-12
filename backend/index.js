// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const journalRoutes = require('./routes/journalRoutes');
const contactRoutes = require('./routes/contactRoutes');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err.message));

app.get('/', (req, res) => {
    res.status(200).json('Hello World');
});

app.use('/uploads', express.static('uploads'));
app.use('/users', userRoutes);
app.use('/journal', journalRoutes);
app.use('/api', contactRoutes);
