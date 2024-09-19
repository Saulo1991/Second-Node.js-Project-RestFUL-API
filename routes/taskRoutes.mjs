import express from 'express';

const router = express.Router();

router.post('/addTask', (req, res) => {
    const { title, description, status } = req.body;
    if (title) {
        res.status(201).json({ message: `Task ${title} has been added`});
    } else {
        res.status(400).json({ message: 'Bad Request'});
    }
}) 


router.put('/updateTask/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (id && ( title || description || status !== undefined)) {
        res.status(200).json({ message : `Task ${id} has been altered`});
    } else {
        res.status(404).json({ message: `Missing task ${id} or update data`});
    }
})

router.patch('/task/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (id && ( title || description || status !== undefined)) {
        res.status(200).json({ message: `Task ${id} has been patched`})
    } else {
        res.status(400).json({ message: `Missing task ${id} or update data`});
    }
})

router.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        res.status(200).json({ message: `Task ${id} has been removed`})
    } else {
        res.status(404).json({ message: `Missing ${id}, does not exist`})
    }
})

