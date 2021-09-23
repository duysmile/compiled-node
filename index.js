const express = require('express');

const app = express();

app.use(express.json());
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(3000, () => {
    console.log("Server start at 3000");
});
