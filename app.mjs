import bodyParser from 'body-parser';
import express from 'express';
import taskRoutes from './routes/taskRoutes.mjs';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Saulo's Web Development</h1>");
})

app.listen(port, () => {console.log("Running...")});

