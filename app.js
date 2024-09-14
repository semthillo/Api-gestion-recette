import express from 'express';
import bodyParser from 'body-parser';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api', recipeRoutes);

const port = 3005;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
