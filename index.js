const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/analyze', (req, res) => {
  const { text } = req.body;

  // Placeholder analysis logic
  const feedback = {
    tone: text.includes('!') ? 'Energetic' : 'Calm',
    clarity: text.length > 10 ? 'Clear' : 'Too short',
    pace: 'Moderate'
  };

  res.json({ feedback });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
