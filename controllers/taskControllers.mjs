import taskModels from '../models/taskModels.mjs';

const getAllTasks = (req, res) => {
    taskModels.findAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retriving tasks '});
        }

        res.json(results);
    });
}

const addAllTasks = (req, res) => {
    const { title, description, status } = req.body;
    taskModels.addTask({ title, description, status }, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error adding task' });
        }

        res.status(201).json(results);
    });
}

const updateAllTasks = (req, res) => {
    const { title, description, status } = req.body;
    const { id } = req.params;

    taskModels.updateTask(id, { title, description, status }, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error updating task' });
        }

        res.status(200).json(results);
    });
}

const patchAllTasks = (req, res) => {

}
export default { getAllTasks, addAllTasks };