import mysql from 'mysql2';

const db = mysql.createPool({
    host: "localhost",
    password: "1234",
    user: "root",
    database: "todo"
});

db.query(
    "INSERT INTO todo.task (title, description, status, created_at) VALUES (?, ?, ?, NOW())",
    ['awesome', 'Describing now', '1'],
    (err, results) => {
        if (err) {
            console.error('Error now: ', err);
        } else {
            console.log('Result of insertion: ', results);
        }
    }
)

export default db;