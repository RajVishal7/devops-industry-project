const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// API
app.get('/api', (req, res) => {
    res.json({
        message: "Hello from DevOps Backend 🚀",
        time: new Date()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});