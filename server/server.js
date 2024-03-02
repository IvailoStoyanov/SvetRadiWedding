const express = require('express');
const cors = require('cors');

const app = express();
const guestRoutes = require('./routes/guests');

const corsOptions = {
    origin: process.env.NODE_ENV === "production" ? "svatbasveiradi.com" : "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // Parse JSON request bodies

//Routes
app.use('/api/guests', guestRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});