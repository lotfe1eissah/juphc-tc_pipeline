const express = require('express');
const { calculateTax } = require('./src/taxCalculator');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Tax Calculator App is Live!');
});

app.post('/calculate', (req, res) => {
  const { income } = req.body;
  try {
    const tax = calculateTax(income);
    res.json({ income, tax });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});