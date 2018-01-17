const express = require('express');
require('./services/passport');
require('dotenv').config();

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port 5000');
});
