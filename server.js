const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let jobs = [];

// Read CSV file
fs.createReadStream('jobs.csv')
  .pipe(csv())
  .on('data', (row) => {
    jobs.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

// Serve static files from the CareerFit directory
app.use(express.static(path.join(__dirname))); // 修改這裡

// Serve index.html when accessing the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // 修改這裡
});

// Routes
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



