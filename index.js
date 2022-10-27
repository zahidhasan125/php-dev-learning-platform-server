const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courseTopic = require('./course-topic.json');
const coursesDetails = require('./course-details.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from learning platform')
})

app.get('/courses', (req, res) => {
    res.send(courseTopic);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseData = coursesDetails.find(course => course.courseId == parseInt(id));
    res.send(courseData);       
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})