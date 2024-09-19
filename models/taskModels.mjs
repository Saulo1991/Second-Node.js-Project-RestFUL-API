import db from '../config/db.mjs';

const getTasks = () => {
    db.query("SELECT * FROM todo.task;", (err, results) => {
        if (err) {
            console.error(`Error retrieving: ${err}`);
        } else {
            console.log(`Results: ${results}`);
        }
    }
    );
};

const addTask = (title, description, status, created_at) => {
    db.query(
        "INSERT INTO todo.task (title, description, status, created_at) VALUES (?, ?, ?, ?)",
        [title, description, status, created_at],
        (err, results) => {
            if (err) {
            console.error(`Error adding task ${err}`);
        } else {
            console.log(`Task has been added: ${results}`)
        }
    })
};

const updateTask = (id, title, description, status, created_at) => {
    db.query(
        "UPDATE todo.task SET title = ?, description = ?, status = ?, created_at = ? WHERE id = ?",
        [title, description, status, created_at, id],
        (err, results) => {
            if (err) {
                console.error(`Error updating task: ${err}`);
            } else {
                console.log(`Task has been updated: ${results}`)
            }
        }
    )
}

const patchTask = (id, title, description, status, created_at) => {
    db.query(
        "UPDATE todo.task SET title = ?, description = ?, status = ?, created_at = ? WHERE id = ?",
        [title, description, status, created_at, id],
        (err, results) => {
            if (err) {
                console.error(`Error patching task: ${err}`);
            } else {
                console.log(`Task has been patched: ${results}`);
            }
        }
    );
};


const deleteTask = (id) => {
    db.query(
        "DELETE FROM todo.task WHERE id = ?",
        [id],
        (err, results) => {
            if (err) {
                console.error(`Error deleting task: ${err}`);
            } else {
                console.log(`Task has been deleted: ${results}`);
            }
        }
    )
}

export { getTasks, addTask, updateTask, patchTask, deleteTask };