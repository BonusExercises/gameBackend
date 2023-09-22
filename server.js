import express from 'express';
import cors from 'cors';
import { users } from './data/users.js';
import { GameData } from './data/gameData.js';
import { Items } from './data/weapons.js';
import { Skills } from './data/skills.js';
import { ServerPage } from './data/serverPage.js';
import { Enemies } from './data/enemies.js';

const app = express();

app.use(cors());
app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send(ServerPage);
});

// Open API
app.use('/users', (req, res) => {
    res.send(users)
})
app.use('/game', (req, res) => {
    res.send(GameData)
})
app.use('/items', (req, res) => {
    res.send(Items)
})
app.use('/skills', (req, res) => {
    res.send(Skills)
})
app.use('/enemies', (req, res) => {
    res.send(Enemies)
})

console.log(users[0])
console.log(Enemies[6].attack())
console.log(Enemies[6].defence())
console.log(Enemies[6].exp())