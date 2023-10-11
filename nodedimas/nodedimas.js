const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Rute sederhana
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.json(data);
});

// Menjalankan server pada port tertentu
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
