const express = require('express');
const fs = require('fs');

const app = express();

app.get('/polls', function (req, res) {
    const contents = fs.readFileSync("test-assignment.json");
    const jsonContent = JSON.parse(contents);
    return res.send(jsonContent);
});

app.listen(process.env.PORT || 3001);