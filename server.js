const express = require('express');
const app = express();

const { PORT } = require('./src/config');

app.listen(PORT, () => {
    console.log(`🚂...Server started on port ${PORT}!`);
});