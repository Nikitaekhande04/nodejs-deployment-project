
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello! Node.js Application Deployed Successfully!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to my Node.js Deployment Project.');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
