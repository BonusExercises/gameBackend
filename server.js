import express from 'express';
import cors from 'cors';
import { users } from './data/users.js';
import { GameData } from './data/gameData.js';
import { Items } from './data/weapons.js';
import { Skills } from './data/skills.js';
import { ServerPage } from './data/serverPage.js';
import { GamePage } from './data/gamePage.js';
import { Enemies } from './data/enemies.js';
import { employees, manager } from './data/bigData.js';

const app = express();

app.use(cors());
app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send(ServerPage)
});

app.get('/employees/', (req, res) => {
    res.send({ manager, employees })
  });

app.get('/game/', (req, res) => {
    res.send(GamePage)
  });

// Open API
app.use('/game/users', (req, res) => {
    res.send(users)
});
app.use('/game/gamedata', (req, res) => {
    res.send(GameData)
});
app.use('/game/items', (req, res) => {
    res.send(Items)
});
app.use('/game/skills', (req, res) => {
    res.send(Skills)
});
app.use('/game/enemies', (req, res) => {
    res.send(Enemies)
});