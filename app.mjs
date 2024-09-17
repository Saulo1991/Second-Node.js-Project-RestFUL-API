import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<h1>Sup world</h1>");
})

app.post('/addTask', bodyParse('addTask'), (req, res) {
    const addTask = req.body.addTask;
    if (addTask) {
        res.status(201).send(`Task ${addTask} has been added`);
    } else {
        res.status(400).send('Bad Request: Request must be done correctly');
    }
}) 

app.listen(port, () => {console.log("Running...")});