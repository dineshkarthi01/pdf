// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file here
  const file = req.file;
  console.log('Received file:', file);
  // You can save the file to disk or process it further here

  res.status(200).send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
