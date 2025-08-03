const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

// Serve specific dump files with proper headers
const serveDumpFile = (filename) => {
  return (req, res) => {
    const filePath = path.join(__dirname, filename);

    if (fs.existsSync(filePath)) {
      // Set appropriate headers for dump files
      res.setHeader("Content-Type", "application/octet-stream");
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.sendFile(filePath);
    } else {
      res.status(404).send(`${filename} not found`);
    }
  };
};

// Routes for both file types
app.get("/NEONdumpfile.dump", serveDumpFile("NEONdumpfile.dump"));
app.get("/NEONdumpfile.sql", serveDumpFile("NEONdumpfile.sql"));

// Basic homepage with download links
app.get("/", (req, res) => {
  res.send(`
    <h1>Database File Server</h1>
    <p>Available files:</p>
    <ul>
      <li><a href="/NEONdumpfile.dump">Download NEONdumpfile.dump</a></li>
      <li><a href="/NEONdumpfile.sql">Download NEONdumpfile.sql</a></li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
