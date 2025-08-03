const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the dump file
app.get('/NEONdumpfile.dump', (req, res) => {
    const filePath = path.join(__dirname, 'NEONdumpfile.dump');
    
    if (fs.existsSync(filePath)) {
        // Set appropriate headers (optional: 'application/octet-stream' for binary files)
        res.setHeader('Content-Type', 'application/octet-stream');
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
    }
});

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Server is running. Access the file at <a href="/NEONdumpfile.dump">/NEONdumpfile.dump</a>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});