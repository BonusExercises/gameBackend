import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>This is just a test!</h1>');
});

// Open API
app.use('/load/ca',  caLoadController)
app.use('/merchArticles', merchController);

// Management API
app.use('/login', loginController);
app.use('/management/ca', /*authenticateToken,*/ caController)
app.use('/management/item', /*authenticateToken,*/ itemhController)