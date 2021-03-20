const express = require('express');
const app = express();
const items = require('./routes/items');

app.use("/api/items", items);

app.listen(3001, function() {
    console.log('express server in 3001')
});