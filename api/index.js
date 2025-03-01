const express = require('express');
const cors = require('cors');
const midtransRouter = require('./midtrans');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Use the Midtrans router
app.use('/api/midtrans', midtransRouter);

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 