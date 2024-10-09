const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(cors({
  origin: 'http://localhost:3000', // Allow your Next.js app
  credentials: true // Allow credentials (cookies)
}));

app.post('/set-cookie', (req, res) => {
  res.cookie('myHttpOnlyCookie', 'someValue', { httpOnly: true, path: '/' });
  res.send('HTTP-Only cookie set!');
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
