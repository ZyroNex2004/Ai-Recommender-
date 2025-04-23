const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

// const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(cors());
// app.use(bodyParser.json());

// Routes
// app.use('/api/bookings', bookingRoutes);

// Default route for the root path
// app.get('/', (req, res) => {
//     res.send('Welcome to the Booking API');
// });



app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth/login", require("./routes/auth"));

 
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

    