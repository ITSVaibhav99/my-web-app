const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from my CI/CD Pipeline! 🚀</h1>');
});

// Only start server if run directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log('App running on port 3000');
  });
}

module.exports = app;