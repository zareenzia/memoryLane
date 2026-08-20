const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve everything in this folder as static files
app.use(express.static(path.join(__dirname)));

// Fallback: always return index.html (single-page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🎂 Birthday surprise running at http://localhost:${PORT}\n`);
});
