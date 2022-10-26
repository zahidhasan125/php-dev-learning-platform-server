const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courseTopic = require('./course-topic.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from learning platform')
})

app.get('/courses/', (req, res) => {
    res.send(courseTopic);
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})