import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<h1>Sup world</h1>");
})

app.post('/addTask', bodyParser.json(), (req, res) => {
    const { title, description, status } = req.body;
    if (title) {
        res.status(201).json({ message: `Task ${title} has been added`});
    } else {
        res.status(400).json({ message: 'Bad Request'});
    }
}) 


app.put('/updateTask/:id', bodyParser.json(), (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (id && ( title || description || status !== undefined)) {
        res.status(200).json({ message : `Task ${id} has been altered`});
    } else {
        res.status(404).json({ message: `Missing task ${id} or update data`});
    }
})

app.patch('/task/:id', bodyParser.json(), (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (id && ( title || description || status !== undefined)) {
        res.status(200).json({ message: `Task ${id} has been patched`})
    } else {
        res.status(400).json({ message: `Missing task ${id} or update data`});
    }
})




app.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        res.status(200).json({ message: `Task ${id} has been removed`})
    } else {
        res.status(404).json({ message: `Missing ${id}, does not exist`})
    }
})

app.listen(port, () => {console.log("Running...")});

